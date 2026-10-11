const mineflayer = require('mineflayer');

function createBot() {
    const bot = mineflayer.createBot({
        host: 'bendisko.aternos.me', // Buraya kendi Aternos IP'ni yaz
        port: 25565,
        username: 'RenderAFK_Bot',
        version: '26.2' // Sunucunun sürümü neyse onu yazabilirsin
    });

    bot.on('spawn', () => console.log('Bot oyuna girdi!'));
    bot.on('end', () => setTimeout(createBot, 5000));
    bot.on('error', (err) => console.log(err));
}

createBot();

// Render platformunda sunucunun kapanmaması için gereken web servis kodu
const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('Bot Aktif!'));
app.listen(process.env.PORT || 3000);
