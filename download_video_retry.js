const fs = require('fs');
const https = require('https');
const path = require('path');

// Intento alternativo para Domótica (URL diferente)
const videoUrl = 'https://videos.pexels.com/video-files/4246323/4246323-sd_640_360_25fps.mp4'; // Another smart home / tech interaction video
const destPath = path.join(__dirname, 'src/assets/videos', 'domotica_cover.mp4');

const downloadFile = (url, dest) => {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(dest);
        https.get(url, (response) => {
            if (response.statusCode === 302 || response.statusCode === 301) {
                // Handle basic redirect
                downloadFile(response.headers.location, dest).then(resolve).catch(reject);
                return;
            }
            if (response.statusCode !== 200) {
                reject(new Error(`Status Code: ${response.statusCode}`));
                return;
            }
            response.pipe(file);
            file.on('finish', () => {
                file.close(() => resolve(dest));
            });
        }).on('error', (err) => {
            fs.unlink(dest, () => { });
            reject(err);
        });
    });
};

console.log('🔄 Reintentando descarga de video Domótica...');
downloadFile(videoUrl, destPath)
    .then(() => console.log('✅ ÉXITO: domotica_cover.mp4 descargado con URL alternativa.'))
    .catch((err) => console.error('❌ Fallo de nuevo:', err.message));
