import os
from PIL import Image
import sys

# Configuración
TARGET_DIR = r"src/assets/images"
MAX_WIDTH = 1920
QUALITY = 85

def optimize_images():
    print(f"🚀 Iniciando optimización de imágenes en: {TARGET_DIR}")
    
    if not os.path.exists(TARGET_DIR):
        print(f"❌ Error: No se encuentra el directorio {TARGET_DIR}")
        return

    total_saved = 0
    count = 0

    for filename in os.listdir(TARGET_DIR):
        if filename.lower().endswith(('.png', '.jpg', '.jpeg')):
            filepath = os.path.join(TARGET_DIR, filename)
            
            try:
                # Obtener tamaño original
                original_size = os.path.getsize(filepath)
                
                with Image.open(filepath) as img:
                    # Convertir a RGB si es necesario (para JPGs)
                    if img.mode in ('RGBA', 'P') and filename.lower().endswith(('.jpg', '.jpeg')):
                        img = img.convert('RGB')
                    
                    # Calcular nuevas dimensiones manteniendo aspecto
                    width, height = img.size
                    if width > MAX_WIDTH:
                        ratio = MAX_WIDTH / width
                        new_height = int(height * ratio)
                        img = img.resize((MAX_WIDTH, new_height), Image.Resampling.LANCZOS)
                        print(f"   📏 Redimensionando {filename}: {width}x{height} -> {MAX_WIDTH}x{new_height}")
                    
                    # Guardar optimizada (sobreescribiendo)
                    # Para PNGs mantenemos formato, para JPGs usamos calidad
                    if filename.lower().endswith('.png'):
                        # PNG optimizado (compress_level=9 es máximo)
                        img.save(filepath, optimize=True, compress_level=9)
                    else:
                        # JPG/JPEG
                        img.save(filepath, optimize=True, quality=QUALITY)
                
                # Calcular ahorro
                new_size = os.path.getsize(filepath)
                saved = original_size - new_size
                total_saved += saved
                count += 1
                
                # Mostrar progreso solo si hubo ahorro significativo (>10KB)
                if saved > 10240:
                    print(f"   ✅ Optimizado {filename}: {original_size/1024:.1f}KB -> {new_size/1024:.1f}KB (Ahorro: {saved/1024:.1f}KB)")
                
            except Exception as e:
                print(f"   ⚠️ Error con {filename}: {str(e)}")

    print(f"\n✨ Optimización completada!")
    print(f"   🖼️ Imágenes procesadas: {count}")
    print(f"   💾 Espacio ahorrado total: {total_saved / (1024*1024):.2f} MB")

if __name__ == "__main__":
    # Verificar si Pillow está instalado
    try:
        import PIL
        optimize_images()
    except ImportError:
        print("❌ Error: La librería Pillow no está instalada.")
        print("   Ejecuta: pip install Pillow")
