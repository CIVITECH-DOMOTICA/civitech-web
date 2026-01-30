const fs = require('fs');
const path = require('path');

// 1. Regenerar Netatmo con más margen
const netatmoSvg = `
<svg xmlns="http://www.w3.org/2000/svg" width="200" height="50" viewBox="0 0 200 50">
  <g transform="translate(10, 10) scale(0.6)">
    <path d="M25 0 L50 12 V37 L25 50 L0 37 V12 Z" fill="#FF8D24" />
    <path d="M25 0 L50 12 L25 25 L0 12 Z" fill="#FFAD5C" />
    <path d="M25 50 V25 L50 12 V37 Z" fill="#E07000" />
    <path d="M25 50 V25 L0 12 V37 Z" fill="#FF8D24" />
  </g>
  <text x="55" y="34" font-family="Arial, sans-serif" font-weight="bold" font-size="28" fill="#3D405B">
    netatmo
  </text>
</svg>`.trim();

fs.writeFileSync(path.join(__dirname, 'src/assets/logos', 'netatmo_vector.svg'), netatmoSvg);
console.log(`✅ Fixed: netatmo_vector.svg`);

// 2. Regenerar Solarman con más ancho
const solarmanSvg = `
<svg xmlns="http://www.w3.org/2000/svg" width="160" height="40" viewBox="0 0 160 40">
  <text x="50%" y="55%" dominant-baseline="middle" text-anchor="middle" font-family="Arial, sans-serif" font-weight="bold" font-size="24" fill="#0096D6">
    SOLARMAN
  </text>
</svg>`.trim();

fs.writeFileSync(path.join(__dirname, 'src/assets/logos', 'solarman.svg'), solarmanSvg);
console.log(`✅ Fixed: solarman.svg`);
