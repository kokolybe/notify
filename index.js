const express = require('express');
const app = express();

// Middleware pour parser les requêtes JSON
app.use(express.json());

// Stockage temporaire des notifications (dans un tableau en mémoire)
const notifications = [];

// Endpoint POST pour recevoir les notifications d'Uptime Kuma
app.post('/notify', (req, res) => {
    const { message } = req.body;

    if (!message) {
        return res.status(400).send({ success: false, error: 'Message manquant dans la requête.' });
    }

    // Ajouter la notification au tableau
    notifications.push({
        message,
        timestamp: new Date().toISOString(),
    });

    console.log(`Notification reçue : ${message}`);
    res.status(200).send({ success: true, message: 'Notification reçue avec succès.' });
});

// Endpoint GET pour afficher les notifications
app.get('/notify', (req, res) => {
    res.status(200).json({
        success: true,
        notifications,
    });
});

// Lancer le serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Serveur démarré sur le port ${PORT}`);
});
