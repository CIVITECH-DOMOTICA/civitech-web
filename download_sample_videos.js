const fs = require('fs');
const https = require('https');
const path = require('path');

// URLs directas de videos de muestra (Pexels / Coverr - Libres de derechos)
// Ajustados para ser visualmente relevantes
const videos = [
    {
        name: 'domotica_cover.mp4',
        url: 'https://videos.pexels.com/video-files/3196024/3196024-sd_640_360_25fps.mp4', // Smart home / Tablet control
        desc: 'Domotica'
    },
    {
        name: 'projects_cover.mp4',
        // Construction / Planning vibe or modern home
        url: 'https://videos.pexels.com/video-files/3209828/3209828-sd_640_360_25fps.mp4', // Modern architecture / Project
        desc: 'Proyectos'
    }
];

const downloadFile = (url, dest) => {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(dest);
        https.get(url, (response) => {
            if (response.statusCode !== 200) {
                reject(new Error(`Status Code: ${response.statusCode}`));
                return;
            }
            response.pipe(file);
            file.on('finish', () => {
                file.close(() => resolve(dest));
            });
        }).on('error', (err) => {
            fs.unlink(dest, () => { }); // Borrar archivo parcial
            reject(err);
        });
    });
};

const run = async () => {
    const videoDir = path.join(__dirname, 'src/assets/videos');
    if (!fs.existsSync(videoDir)) {
        fs.mkdirSync(videoDir, { recursive: true });
    }

    console.log('🎬 Iniciando descarga de videos de muestra...');

    for (const vid of videos) {
        const destPath = path.join(videoDir, vid.name);
        try {
            console.log(`⬇️ Descargando video para ${vid.desc}...`);
            await downloadFile(vid.url, destPath);
            console.log(`✅ ${vid.name} descargado correctamente.`);
        } catch (error) {
            console.error(`❌ Error descargando ${vid.name}:`, error.message);
            console.log('⚠️  Por favor, sube manualmente un archivo .mp4 con este nombre a src/assets/videos/');
        }
    }
};

run();
