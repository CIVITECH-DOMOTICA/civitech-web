const fs = require('fs');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

const targetPath = './src/environments/environment.ts';
const envConfigFile = `export const environment = {
    production: ${process.env.NODE_ENV === 'production'},
    // Chatbot usa proxy n8n — la API key de OpenAI se configura en n8n, NUNCA aquí
    chatbotWebhookUrl: '${process.env.CHATBOT_WEBHOOK_URL || ''}',
    // URL webhook n8n para leads del formulario de contacto
    n8nLeadWebhookUrl: '${process.env.N8N_LEAD_WEBHOOK_URL || ''}',
    // EmailJS para notificaciones del chatbot
    emailJsPublicKey: '${process.env.EMAILJS_PUBLIC_KEY || ''}',
    emailJsServiceId: '${process.env.EMAILJS_SERVICE_ID || ''}',
    emailJsTemplateId: '${process.env.EMAILJS_TEMPLATE_ID || ''}'
};
`;

const dirPath = './src/environments';

console.log(`Generating environment.ts file from .env in ${dirPath}...`);

// Ensure directory exists
if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
}

fs.writeFileSync(targetPath, envConfigFile);
console.log(`Environment variables successfully injected into ${targetPath}`);
console.log(`[Security] OpenAI API key is NOT included in the bundle — handled server-side by n8n`);
