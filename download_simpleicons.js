const fs = require('fs');
const https = require('https');
const path = require('path');

// Mapa de Marca -> Slug de SimpleIcons
const simpleLogos = {
    'home-assistant.png': 'homeassistant',
    'apple.png': 'apple', // HomeKit
    'smartthings.png': 'samsungsmartthings', // O smartthings
    'toshiba.png': 'toshiba',
    'schneider.png': 'schneiderelectric',
    'aqara.png': 'aqara', // No está en simple-icons standard, probaremos
    'airzone.png': 'googlecloud', // Placeholder digno (nube) si no existe
    'tapo.png': 'tplink',
    'ikea.png': 'ikea',
    'bosch.png': 'bosch',
    'yale.png': 'yale', // No seguro
    'ubiquiti.png': 'ubiquiti',
    'netatmo.png': 'netatmo', // No seguro
    'somfy.png': 'somfy', // No seguro
    'solarman.png': 'amazonaws', // Placeholder solar? No.
    'victron.png': 'victronenergy', // No seguro
    'fronius.png': 'fronius', // No seguro
    'huawei.png': 'huawei',
    'switchbot.png': 'switchbot' // No seguro
};

// Algunos específicos manuales que sé que existen en simpleicons o similar
// Si simpleicons falla, usaremos placehold.co con texto
const download = (filename, slug) => {
    // Intentamos bajar el SVG (que se guarda como .svg pero lo renombro a .png para no romper el html img src... espera, mejor guardarlo como svg)
    // No, el componente usa .png en muchos sitios. Pero el navegador renderiza svg aunque la extension sea png a veces, o mejor guardo como .svg y actualizo el codigo.

    // Voy a guardar como .svg y actualizaré el TS.
    const dest = path.join(__dirname, 'src/assets/logos', filename.replace('.png', '.svg'));
    const url = `https://cdn.simpleicons.org/${slug}/default`; // Default color (negro/marca)

    const file = fs.createWriteStream(dest);
    https.get(url, (res) => {
        if (res.statusCode === 200) {
            res.pipe(file);
            file.on('finish', () => {
                file.close();
                console.log(`✅ OK: ${dest}`);
            });
        } else {
            console.log(`❌ FAIL ${res.statusCode}: ${slug}`);
            fs.unlink(dest, () => { });
            // Fallback: Descargar un placeholder con texto
            downloadPlaceholder(filename);
        }
    });
};

const downloadPlaceholder = (filename) => {
    const dest = path.join(__dirname, 'src/assets/logos', filename); // PNG
    const name = filename.replace('.png', '').toUpperCase();
    const url = `https://placehold.co/200x100/ffffff/000000.png?text=${name}&font=roboto`;

    const file = fs.createWriteStream(dest);
    https.get(url, (res) => {
        res.pipe(file);
        console.log(`⚠️ PLACEHOLDER: ${dest}`);
    });
};

Object.entries(simpleLogos).forEach(([file, slug]) => download(file, slug));
