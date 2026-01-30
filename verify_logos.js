const fs = require('fs');
const https = require('https');
const path = require('path');

// 1. Leer archivos de código donde definimos los logos
const proyectosPath = path.join(__dirname, 'src/app/core/services/proyectos.service.ts');
const ecosystemPath = path.join(__dirname, 'src/app/shared/components/ecosystem-grid/ecosystem-grid.component.ts');

const extractLogos = (filePath) => {
    if (!fs.existsSync(filePath)) return [];
    const content = fs.readFileSync(filePath, 'utf8');
    // Regex para buscar propiedad logo: '...' o logo: "..."
    const regex = /logo:\s*['"]([^'"]+)['"]/g;
    const logos = [];
    let match;
    while ((match = regex.exec(content)) !== null) {
        logos.push(match[1]);
    }
    return logos;
};

const logosProyectos = extractLogos(proyectosPath);
const logosEcosystem = extractLogos(ecosystemPath);
const allLogos = [...new Set([...logosProyectos, ...logosEcosystem])]; // Unicos

console.log(`🔍 Auditando ${allLogos.length} logos únicos encontrados en el código...`);

const checkUrl = (url) => {
    return new Promise((resolve) => {
        if (!url || url === '') {
            resolve({ url, status: 'EMPTY (Icon fallback?)', ok: true });
            return;
        }

        if (url.startsWith('assets/')) {
            const localPath = path.join(__dirname, 'src', url);
            if (fs.existsSync(localPath)) {
                // Verificar tamaño > 0
                const stats = fs.statSync(localPath);
                if (stats.size > 0) {
                    resolve({ url, status: 'LOCAL OK', ok: true });
                } else {
                    resolve({ url, status: 'LOCAL EMPTY (0 bytes)', ok: false });
                }
            } else {
                resolve({ url, status: 'LOCAL MISSING', ok: false });
            }
        } else {
            // Remote check
            https.get(url, (res) => {
                if (res.statusCode === 200) {
                    resolve({ url, status: 'REMOTE OK', ok: true });
                } else {
                    resolve({ url, status: `REMOTE ERROR ${res.statusCode}`, ok: false });
                }
            }).on('error', (e) => {
                resolve({ url, status: `REMOTE FAIL: ${e.message}`, ok: false });
            });
        }
    });
};

(async () => {
    const results = await Promise.all(allLogos.map(checkUrl));

    console.log('\n--- RESULTADOS ---');
    results.forEach(r => {
        const icon = r.ok ? '✅' : '❌';
        console.log(`${icon} ${r.status}: ${r.url}`);
    });

    // Resumen de fallos para arreglar
    const failed = results.filter(r => !r.ok && r.url !== '');
    if (failed.length > 0) {
        console.log('\n⚠️ URGENTE: Reparar estos logos:');
        failed.forEach(f => console.log(f.url));
    } else {
        console.log('\n✨ Todo perfecto. Todos los logos cargan.');
    }
})();
