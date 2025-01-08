const express = require('express');
const app = express();

app.use(express.json());

// Endpoint pour vérifier si l'API fonctionne (GET)
app.get('/', (req, res) => {
    res.status(200).send('Bienvenue sur l\'API Uptime Kuma Webhook !');
});

// Endpoint pour recevoir les notifications (POST)
app.post('/notify', (req, res) => {
    const { message } = req.body;

    if (!message) {
        return res.status(400).send({ success: false, error: 'Message manquant dans le corps de la requête.' });
    }

    console.log(`Notification reçue : ${message}`);
    res.status(200).send({ success: true, message: 'Notification traitée avec succès.' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Serveur démarré sur le port ${PORT}`);
});
