const fs = require('fs');
const https = require('https');
const path = require('path');

// URL directa de un video de Mixkit (Smart Home / Tablet Control)
// Mixkit suele ser más amigable con descargas directas
const videoUrl = 'https://assets.mixkit.co/videos/preview/mixkit-man-holding-a-smartphone-in-a-living-room-40898-large.mp4';
const destPath = path.join(__dirname, 'src/assets/videos', 'domotica_cover.mp4');

const downloadFile = (url, dest) => {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(dest);
        const request = https.get(url, (response) => {
            if (response.statusCode === 302 || response.statusCode === 301) {
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
        });

        request.on('error', (err) => {
            fs.unlink(dest, () => { });
            reject(err);
        });
    });
};

console.log('🎬 Intentando descarga desde Mixkit (Smart Home)...');
downloadFile(videoUrl, destPath)
    .then(() => console.log('✅ ÉXITO: domotica_cover.mp4 actualizado con video de Mixkit.'))
    .catch((err) => console.error('❌ Fallo Mixkit:', err.message));
