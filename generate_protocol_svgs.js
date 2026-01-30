const fs = require('fs');
const path = require('path');

const protocols = [
    { name: 'knx.svg', text: 'KNX', color: '#89C748' },
    { name: 'zwave.svg', text: 'Z-Wave', color: '#183E68' },
    { name: 'matter.svg', text: 'matter', color: '#000000' }, // Minuscula oficial
    { name: 'modbus.svg', text: 'Modbus', color: '#E30613' },
    { name: 'opcua.svg', text: 'OPC UA', color: '#002D64' },
    { name: 'thread.svg', text: 'THREAD', color: '#333333' },
    { name: 'lorawan.svg', text: 'LoRaWAN', color: '#0097D8' },
    { name: 'esphome.svg', text: 'ESPHome', color: '#000000' },
    { name: 'onvif.svg', text: 'ONVIF', color: '#004F9F' }
];

const generateSvg = (p) => {
    // SVG simple con texto centrado y negrita
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

console.log("Generando SVGs de texto para protocolos...");
protocols.forEach(generateSvg);
