const fs = require('fs');
const path = require('path');

const brands = [
    { name: 'netatmo.svg', text: 'netatmo', color: '#000000', font: 'Arial, sans-serif' }, // Netatmo moderno es negro o azul
    { name: 'somfy.svg', text: 'somfy', color: '#000000', bg: '#FFEB00' }, // Somfy suele ser negro sobre amarillo o amarillo
    { name: 'solarman.svg', text: 'SOLARMAN', color: '#0096D6' },
    { name: 'fronius.svg', text: 'Fronius', color: '#000000' }, // Fronius es texto negro o gris
    { name: 'switchbot.svg', text: 'SwitchBot', color: '#E60012' },
    { name: 'nuki.svg', text: 'NUKI', color: '#000000', weight: '900' },
    { name: 'aqara.svg', text: 'Aqara', color: '#1096F6' },
    // Asegurar Frigate y V2C por si acaso
    { name: 'frigate.svg', text: 'Frigate', color: '#EF4444' },
    { name: 'v2c.svg', text: 'V2C', color: '#000000' }
];

const generateSvg = (b) => {
    let svgContent = '';

    // Si tiene fondo (caso Somfy)
    if (b.bg) {
        svgContent = `
<svg xmlns="http://www.w3.org/2000/svg" width="120" height="50" viewBox="0 0 120 50">
  <rect width="100%" height="100%" fill="${b.bg}" />
  <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="${b.font || 'Arial, sans-serif'}" font-weight="${b.weight || 'bold'}" font-size="24" fill="${b.color}">
    ${b.text}
  </text>
</svg>`.trim();
    } else {
        svgContent = `
<svg xmlns="http://www.w3.org/2000/svg" width="120" height="50" viewBox="0 0 120 50">
  <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="${b.font || 'Arial, sans-serif'}" font-weight="${b.weight || 'bold'}" font-size="24" fill="${b.color}">
    ${b.text}
  </text>
</svg>`.trim();
    }

    const dest = path.join(__dirname, 'src/assets/logos', b.name);
    fs.writeFileSync(dest, svgContent);
    console.log(`✅ Generated: ${b.name}`);
};

console.log("Generando logos de marcas faltantes (SVG)...");
brands.forEach(generateSvg);
