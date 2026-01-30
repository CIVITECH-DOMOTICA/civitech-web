const fs = require('fs');
const https = require('https');
const path = require('path');

const logos = [
    { name: 'wifi.svg', url: 'https://cdn.simpleicons.org/wifi/default' },
    { name: 'zigbee.svg', url: 'https://cdn.simpleicons.org/zigbee/default' },
    { name: 'matter.svg', url: 'https://cdn.simpleicons.org/matter/default' },
    { name: 'bluetooth.svg', url: 'https://cdn.simpleicons.org/bluetooth/default' },
    { name: 'mqtt.svg', url: 'https://cdn.simpleicons.org/mqtt/default' },
    { name: 'zwave.svg', url: 'https://cdn.simpleicons.org/zwave/default' },
    { name: 'knx.svg', url: 'https://upload.wikimedia.org/wikipedia/commons/9/90/KNX_logo.svg' },
    { name: 'modbus.png', url: 'https://upload.wikimedia.org/wikipedia/commons/4/42/Modbus_logo.png' }, // Usando PNG para Modbus que es mas safe
    { name: 'opcua.png', url: 'https://opcfoundation.org/wp-content/themes/opc-foundation/assets/images/logo_opcfoundation.png' },
    { name: 'thread.png', url: 'https://www.threadgroup.org/Portals/0/images/Thread-Logo-Horiz-1.png' }
];

const download = (name, url) => {
    const dest = path.join(__dirname, 'src/assets/logos', name);
    const file = fs.createWriteStream(dest);
    // User agent basic
    const options = { headers: { 'User-Agent': 'Mozilla/5.0' } };

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

logos.forEach(l => download(l.name, l.url));
