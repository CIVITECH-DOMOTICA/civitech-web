const fs = require('fs');
const https = require('https');
const path = require('path');

const logos = [
    { name: 'home-assistant.svg', url: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Home_Assistant_Logo.svg' },
    { name: 'reolink.png', url: 'https://companieslogo.com/img/orig/Reolink-f77e6fc3.png' },
    { name: 'shelly.png', url: 'https://companieslogo.com/img/orig/Shelly_Group-44d41355.png' }, // Intento shelly mejor
    { name: 'aqara.png', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Aqara_logo.png/640px-Aqara_logo.png' }, // Link posible
    { name: 'daikin.svg', url: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Daikin_logo.svg' },
    { name: 'toshiba.svg', url: 'https://upload.wikimedia.org/wikipedia/commons/3/36/Toshiba_logo.svg' },
    { name: 'tuya.svg', url: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Tuya_Smart_Logo.svg' },
    { name: 'ariston.png', url: 'https://logos-world.net/wp-content/uploads/2020/11/Ariston-Logo.png' },
    { name: 'v2c.png', url: 'https://v2charge.com/wp-content/uploads/2021/06/Logo-V2C-Negativo.png' }, // Si falla, tengo fallback
    { name: 'frigate.png', url: 'https://github.com/blakeblackshear/frigate/raw/master/images/frigate-logo.png' },
    { name: 'airzone.svg', url: 'https://www.airzonecontrol.com/assets/img/common/airzone-logo.svg' }
];

const download = (url, dest) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
        response.pipe(file);
        file.on('finish', () => {
            file.close();
            console.log(`Downloaded: ${dest}`);
        });
    }).on('error', (err) => {
        console.error(`Error downloading ${url}: ${err.message}`);
        fs.unlink(dest, () => { }); // Delete failed file
    });
};

const outputDir = path.join(__dirname, 'src/assets/logos');
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

logos.forEach(logo => {
    download(logo.url, path.join(outputDir, logo.name));
});
