const fs = require('fs');
const path = require('path');

const protocols = [
    { name: 'frigate.svg', text: 'Frigate', color: '#EF4444' },
    { name: 'v2c.svg', text: 'V2C', color: '#000000' }
];

const generateSvg = (p) => {
    const svgContent = `
<svg xmlns="http://www.w3.org/2000/svg" width="100" height="40" viewBox="0 0 100 40">
  <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="Arial, sans-serif" font-weight="bold" font-size="20" fill="${p.color}">
    ${p.text}
  </text>
</svg>`.trim();

    const dest = path.join(__dirname, 'src/assets/logos', p.name);
    fs.writeFileSync(dest, svgContent);
    console.log(`✅ Generated: ${p.name}`);
};

console.log("Generando SVGs faltantes...");
protocols.forEach(generateSvg);
