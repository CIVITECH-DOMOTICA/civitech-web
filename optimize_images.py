import os
from PIL import Image

# Configuración
TARGET_DIR = r"c:\Users\User\OneDrive\Documentos\Civitec\pagina web\civitech-web\src\assets\images"
MAX_WIDTH = 1920
QUALITY = 80 # WebP quality

def optimize_images():
    total_saved = 0
    count = 0
    
    print(f"Iniciando optimización y conversión a WebP en: {TARGET_DIR}")

    if not os.path.exists(TARGET_DIR):
        print("Error: El directorio no existe.")
        return

    for filename in os.listdir(TARGET_DIR):
        if filename.lower().endswith(('.png', '.jpg', '.jpeg')):
            filepath = os.path.join(TARGET_DIR, filename)
            
            try:
                # Abrir imagen
                with Image.open(filepath) as img:
                    original_size = os.path.getsize(filepath)
                    
                    # Convertir a RGB si es necesario (para guardar como WebP/JPG)
                    if img.mode in ('RGBA', 'P') and not filename.lower().endswith('.png'):
                         img = img.convert('RGB')
                    
                    # Resize si es muy grande
                    if img.width > MAX_WIDTH:
                        ratio = MAX_WIDTH / img.width
                        new_height = int(img.height * ratio)
                        img = img.resize((MAX_WIDTH, new_height), Image.Resampling.LANCZOS)
                        print(f"Redimensionada: {filename}")

                    # Generar nombre WebP
                    webp_filename = os.path.splitext(filename)[0] + '.webp'
                    webp_filepath = os.path.join(TARGET_DIR, webp_filename)

                    # Guardar como WebP
                    img.save(webp_filepath, 'webp', quality=QUALITY, optimize=True)
                    
                    # Calcular ahorro (comparado con el original)
                    if os.path.exists(webp_filepath):
                        new_size = os.path.getsize(webp_filepath)
                        saved = original_size - new_size
                        
                        if saved > 0:
                            total_saved += saved
                            print(f"✅ Generado WebP: {filename} -> {webp_filename} (Ahorro: {saved/1024:.2f} KB)")
                        else:
                            print(f"⚠️ WebP generado ({webp_filename}) pero es mayor que original.")
                        
                        count += 1
                    
            except Exception as e:
                print(f"Error procesando {filename}: {e}")

    print(f"\nResumen: {count} imágenes procesadas.")
    print(f"Espacio total ahorrado (vs original): {total_saved / (1024*1024):.2f} MB")

if __name__ == "__main__":
    optimize_images()
