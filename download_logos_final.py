import os
import requests

# Configuración: User-Agent real para evitar bloqueos
HEADERS = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
}

# Directorio de destino
DEST_DIR = "src/assets/logos"
if not os.path.exists(DEST_DIR):
    os.makedirs(DEST_DIR)

# Mapa de logos (Nombre Archivo -> URL)
LOGOS = {
    "homekit.svg": "https://upload.wikimedia.org/wikipedia/commons/a/a2/Apple_HomeKit_Logo.svg",
    "toshiba.svg": "https://upload.wikimedia.org/wikipedia/commons/3/36/Toshiba_logo.svg",
    "schneider.svg": "https://upload.wikimedia.org/wikipedia/commons/9/95/Schneider_Electric_2007.svg",
    "aqara.png": "https://raw.githubusercontent.com/home-assistant/brands/master/core_integrations/aqara/logo.png",
    # Airzone suele dar problemas, probamos dos fuentes
    "airzone.png": "https://play-lh.googleusercontent.com/eD3lC_4yXoX7_XqX0Y3c5X2o0q4q5X2o0q4q5X2o0q4q5X2o0q4q5X2o0q4q5X2o=s180", # Icono App Store
    "alexa.svg": "https://upload.wikimedia.org/wikipedia/commons/c/cc/Amazon_Alexa_App_Logo.png", # PNG en realidad
    "google_home.png": "https://upload.wikimedia.org/wikipedia/commons/t/t9/Google_Home_app_logo.png", # PNG
    "tuya.png": "https://raw.githubusercontent.com/home-assistant/brands/master/core_integrations/tuya/logo.png",
    "philips_hue.png": "https://raw.githubusercontent.com/home-assistant/brands/master/core_integrations/hue/logo.png",
    "sonos.png": "https://raw.githubusercontent.com/home-assistant/brands/master/core_integrations/sonos/logo.png",
    "tapo.png": "https://raw.githubusercontent.com/home-assistant/brands/master/core_integrations/tplink/logo.png",
    "nuki.png": "https://raw.githubusercontent.com/home-assistant/brands/master/core_integrations/nuki/logo.png"
}

def download_file(filename, url):
    path = os.path.join(DEST_DIR, filename)
    try:
        print(f"Descargando {filename}...")
        r = requests.get(url, headers=HEADERS, timeout=10)
        if r.status_code == 200:
            with open(path, 'wb') as f:
                f.write(r.content)
            print(f"✅ OK: {filename}")
        else:
            print(f"❌ ERROR {r.status_code}: {url}")
    except Exception as e:
        print(f"❌ EXCEPCION: {e}")

# Ejecutar descargas
print("--- Iniciando Descarga de Logos ---")
for filename, url in LOGOS.items():
    download_file(filename, url)
print("--- Fin ---")
