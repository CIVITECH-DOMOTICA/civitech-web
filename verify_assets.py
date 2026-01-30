import os
import re
import glob

# Configuration
PROJECT_ROOT = os.path.dirname(os.path.abspath(__file__))
SRC_DIR = os.path.join(PROJECT_ROOT, 'src')
ASSETS_DIR = os.path.join(SRC_DIR, 'assets')

def find_asset_references(directory):
    """
    Scans .ts, .html, and .scss files for references to 'assets/...'
    Returns a set of found paths.
    """
    asset_refs = set()
    # Regex to find 'assets/...' strings. 
    # Captures: assets/path/to/file.ext
    # Handles: 'assets/...', "assets/...", url(assets/...)
    pattern = re.compile(r'[\"\'](assets/[^\"\']+)[\"\']|url\([\"\']?(assets/[^\"\')]+)[\"\']?\)')

    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith(('.ts', '.html', '.scss')):
                filepath = os.path.join(root, file)
                try:
                    with open(filepath, 'r', encoding='utf-8') as f:
                        content = f.read()
                        matches = pattern.findall(content)
                        for match in matches:
                            # match is a tuple due to multiple groups
                            for m in match:
                                if m:
                                    # Clean up query parameters/hashes (e.g. image.png?v=1)
                                    clean_path = m.split('?')[0].split('#')[0]
                                    asset_refs.add(clean_path)
                except Exception as e:
                    print(f"Error reading {filepath}: {e}")
    return asset_refs

def verify_assets(refs):
    """
    Checks if the referenced assets exist in the src/assets directory.
    """
    missing_assets = []
    found_assets = []

    print(f"Scanning for assets in: {SRC_DIR}")
    
    for ref in refs:
        # ref is equivalent to 'assets/logos/wifi.png'
        # We need to constructing the full absolute path
        # src/assets is the root for 'assets/' references
        
        # Remove 'assets/' prefix for joining because ASSETS_DIR includes 'assets'
        if ref.startswith('assets/'):
            relative_path = ref[len('assets/'):] # e.g. logos/wifi.png
            full_path = os.path.join(ASSETS_DIR, relative_path)
            
            # Use glob to handle mixed slashes or case sensitivity (on Windows it's lenient, but good to check)
            # Actually, os.path.exists is case-insensitive on Windows.
            if os.path.exists(full_path) and os.path.isfile(full_path):
                found_assets.append(ref)
            else:
                missing_assets.append(ref)
        else:
            # Should not happen given the regex, but strictly speaking
            pass

    return found_assets, missing_assets

def main():
    print("----------------------------------------------------------------")
    print(" Asset Verification Script")
    print("----------------------------------------------------------------")
    
    refs = find_asset_references(SRC_DIR)
    print(f"Found {len(refs)} unique asset references in code.")
    
    found, missing = verify_assets(refs)
    
    print(f"\n✅ Verified: {len(found)} assets.")
    
    if missing:
        print(f"\n❌ MISSING ASSETS ({len(missing)}):")
        print("----------------------------------------------------------------")
        for m in missing:
            print(f" - {m}")
        print("----------------------------------------------------------------")
        print("FAIL: Please fix missing assets.")
        exit(1)
    else:
        print("\n✨ SUCCESS: All referenced assets existing.")
        exit(0)

if __name__ == "__main__":
    main()
