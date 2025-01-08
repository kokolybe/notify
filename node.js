const express = require('express');
const app = express();

app.use(express.json());

app.post('/notify', (req, res) => {
    const { message } = req.body;

    // Logique pour traiter la notification (par exemple, envoyer à un service tiers)
    console.log(`Notification reçue : ${message}`);
    res.status(200).send({ success: true });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Serveur démarré sur le port ${PORT}`);
});
