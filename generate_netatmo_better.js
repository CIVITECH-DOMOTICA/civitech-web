const fs = require('fs');
const path = require('path');

const svgContent = `
<svg xmlns="http://www.w3.org/2000/svg" width="150" height="50" viewBox="0 0 150 50">
  <!-- Icono (Cubo simplificado) -->
  <g transform="translate(10, 10) scale(0.6)">
    <path d="M25 0 L50 12 V37 L25 50 L0 37 V12 Z" fill="#FF8D24" />
    <path d="M25 0 L50 12 L25 25 L0 12 Z" fill="#FFAD5C" />
    <path d="M25 50 V25 L50 12 V37 Z" fill="#E07000" />
    <path d="M25 50 V25 L0 12 V37 Z" fill="#FF8D24" />
  </g>
  
  <!-- Texto -->
  <text x="50" y="32" font-family="Arial, sans-serif" font-weight="bold" font-size="28" fill="#3D405B">
    netatmo
  </text>
</svg>`.trim();

const dest = path.join(__dirname, 'src/assets/logos', 'netatmo_vector.svg');
fs.writeFileSync(dest, svgContent);
console.log(`✅ Generated: netatmo_vector.svg`);
