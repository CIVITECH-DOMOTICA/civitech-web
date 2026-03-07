const fs = require('fs');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

const targetPath = './src/environments/environment.ts';
const envConfigFile = `export const environment = {
    production: ${process.env.NODE_ENV === 'production'},
    openAiApiKey: '${process.env.OPENAI_API_KEY || ''}'
};
`;

console.log('Generating environment.ts file from .env...');
fs.writeFileSync(targetPath, envConfigFile);
console.log(`Environment variables successfully injected into ${targetPath}`);
