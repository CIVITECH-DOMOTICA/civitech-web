const fs = require('fs');
const https = require('https');
const path = require('path');

const logos = [
    { name: 'home-assistant.png', url: 'https://raw.githubusercontent.com/home-assistant/assets/master/logo/logo.png' }, // Raw oficial
    { name: 'toshiba.png', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Toshiba_logo.svg/320px-Toshiba_logo.svg.png' }, // Wikimedia Thumb (más compatible que la web directa)
    { name: 'schneider.png', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Schneider_Electric_2007.svg/320px-Schneider_Electric_2007.svg.png' },
    { name: 'aqara.png', url: 'https://raw.githubusercontent.com/home-assistant/brands/master/core_integrations/aqara/logo.png' },
    // Airzone es complicado, probamos una URL que parece funcionar en navegadores
    { name: 'airzone.png', url: 'https://www.airzonecontrol.com/assets/img/common/logo-airzone.png' }
];

const download = (url, dest) => {
    const file = fs.createWriteStream(dest);
    // Añadimos User-Agent para evitar bloqueos
    const options = {
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        }
    };

    https.get(url, options, (response) => {
        if (response.statusCode === 200) {
            response.pipe(file);
            file.on('finish', () => {
                file.close();
                console.log(`✅ OK: ${dest}`);
            });
        } else {
            console.log(`❌ FAIL ${response.statusCode}: ${url}`);
            fs.unlink(dest, () => { }); // Borrar fichero vacío
        }
    }).on('error', (err) => {
        console.error(`❌ ERROR: ${err.message}`);
        fs.unlink(dest, () => { });
    });
};

const outputDir = path.join(__dirname, 'src/assets/logos');
logos.forEach(l => download(l.url, path.join(outputDir, l.name)));
