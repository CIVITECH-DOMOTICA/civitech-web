const fs = require('fs');
const https = require('https');
const path = require('path');

// Lista ampliada de protocolos con URLs directas a logos PNG/SVG
const protocols = [
    // Ya tenemos zigbee, bluetooth, mqtt.
    // Faltan o fallaron:
    { name: 'wifi.png', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/WiFi_Logo.svg/1200px-WiFi_Logo.svg.png' },
    { name: 'zwave.png', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Z-Wave_logo.svg/1200px-Z-Wave_logo.svg.png' },
    { name: 'knx.png', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/KNX_logo.svg/1200px-KNX_logo.svg.png' },
    { name: 'modbus.png', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Modbus_Organization_logo.svg/1200px-Modbus_Organization_logo.svg.png' },
    { name: 'thread.png', url: 'https://www.threadgroup.org/Portals/0/images/Thread-Logo-Horiz-1.png' },
    { name: 'matter.png', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Matter_logo.svg/1200px-Matter_logo.svg.png' },
    { name: 'opcua.png', url: 'https://opcfoundation.org/wp-content/themes/opc-foundation/assets/images/logo_opcfoundation.png' },
    { name: 'lorawan.png', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/LoRaWAN_logo.svg/1200px-LoRaWAN_logo.svg.png' },
    { name: 'esphome.png', url: 'https://esphome.io/_static/logo-text.png' },
    { name: 'onvif.png', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/ONVIF_logo.svg/1200px-ONVIF_logo.svg.png' },
    { name: 'homekit_proto.png', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Apple_HomeKit_Logo.svg/1024px-Apple_HomeKit_Logo.svg.png' } // Como protocolo
];

const download = (name, url) => {
    const dest = path.join(__dirname, 'src/assets/logos', name);
    const file = fs.createWriteStream(dest);
    const options = { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } };

    https.get(url, options, (res) => {
        if (res.statusCode === 200) {
            res.pipe(file);
            file.on('finish', () => { file.close(); console.log(`✅ OK: ${name}`); });
        } else {
            console.log(`❌ FAIL ${res.statusCode}: ${name}`);
            file.close();
            fs.unlink(dest, () => { });
        }
    }).on('error', (e) => {
        console.log(`❌ ERROR ${e.message}: ${name}`);
    });
};

console.log("Iniciando descarga de protocolos...");
protocols.forEach(p => download(p.name, p.url));
