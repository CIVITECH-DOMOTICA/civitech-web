const fs = require('fs');
const https = require('https');
const path = require('path');

const logosToFix = [
    { name: 'schneider.png', url: 'https://raw.githubusercontent.com/home-assistant/brands/master/core_integrations/schneider_electric/logo.png' },
    { name: 'solarman.png', url: 'https://raw.githubusercontent.com/home-assistant/brands/master/core_integrations/solarman/logo.png' },
    { name: 'victron.png', url: 'https://raw.githubusercontent.com/home-assistant/brands/master/core_integrations/victron/logo.png' },
    { name: 'google.png', url: 'https://raw.githubusercontent.com/home-assistant/brands/master/core_integrations/google_assistant/logo.png' },
    { name: 'alexa.png', url: 'https://raw.githubusercontent.com/home-assistant/brands/master/core_integrations/alexa/logo.png' },
    { name: 'homekit.png', url: 'https://raw.githubusercontent.com/home-assistant/brands/master/core_integrations/homekit/logo.png' },
    { name: 'mitsubishi.png', url: 'https://raw.githubusercontent.com/home-assistant/brands/master/core_integrations/melcloud/logo.png' }, // Melcloud es la app de Mitsubishi
    { name: 'home-assistant.png', url: 'https://raw.githubusercontent.com/home-assistant/brands/master/core_integrations/homeassistant/logo.png' },
    // Reintentar airzone por si acaso hay uno en marcas
    { name: 'airzone.png', url: 'https://raw.githubusercontent.com/home-assistant/brands/master/core_integrations/airzone/logo.png' }
];

const download = (url, dest) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
        if (response.statusCode === 200) {
            response.pipe(file);
            file.on('finish', () => {
                file.close();
                console.log(`✅ DOWNLOADED: ${dest}`);
            });
        } else {
            console.log(`❌ FAIL ${response.statusCode}: ${url}`);
            fs.unlink(dest, () => { });
        }
    }).on('error', (err) => {
        console.error(`❌ ERROR: ${err.message}`);
        fs.unlink(dest, () => { });
    });
};

const outputDir = path.join(__dirname, 'src/assets/logos');
logosToFix.forEach(l => download(l.url, path.join(outputDir, l.name)));
