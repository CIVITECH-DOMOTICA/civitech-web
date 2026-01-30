const fs = require('fs');
const https = require('https');
const path = require('path');

// Mapeo de URLs "Indestructibles" (PNGs de alta calidad)
const logos = [
    // Home Assistant: GitHub Raw (Infalible)
    { name: 'home-assistant.png', url: 'https://raw.githubusercontent.com/home-assistant/assets/master/logo/logo.png' },

    // Daikin: Wikimedia PNG Thumb
    { name: 'daikin.png', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Daikin_logo.svg/1024px-Daikin_logo.svg.png' },

    // Toshiba: Wikimedia PNG Thumb
    { name: 'toshiba.png', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Toshiba_logo.svg/1024px-Toshiba_logo.svg.png' },

    // Tuya: Wikimedia PNG Thumb
    { name: 'tuya.png', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Tuya_Smart_Logo.svg/1024px-Tuya_Smart_Logo.svg.png' },

    // Aqara: Wikimedia PNG Thumb (ojo al nombre del archivo original)
    { name: 'aqara.png', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Aqara_Logo.png/800px-Aqara_Logo.png' },

    // Shelly: Allterco/Shelly Cloud oficial
    { name: 'shelly.png', url: 'https://shelly-api-docs.shelly.cloud/gen2/img/logo.png' },

    // Airzone: App Store Icon (Siempre accesible)
    { name: 'airzone.png', url: 'https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/6b/5d/4f/6b5d4f29-2826-621f-9a48-84223019842a/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/512x512bb.jpg' },

    // Reolink
    { name: 'reolink.png', url: 'https://companieslogo.com/img/orig/Reolink-f77e6fc3.png' },
];

const download = (url, dest) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
        if (response.statusCode !== 200) {
            console.error(`ERROR ${response.statusCode}: ${url}`);
            response.resume();
            return;
        }
        response.pipe(file);
        file.on('finish', () => {
            file.close();
            console.log(`✅ OK: ${dest}`);
        });
    }).on('error', (err) => {
        console.error(`❌ FAIL: ${url} -> ${err.message}`);
        fs.unlink(dest, () => { });
    });
};

const outputDir = path.join(__dirname, 'src/assets/logos');

console.log("Iniciando reparación de logos...");
logos.forEach(logo => {
    download(logo.url, path.join(outputDir, logo.name));
});
