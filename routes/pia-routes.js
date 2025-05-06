const express = require('express');
const router = express.Router();

// POST /register
router.post('/register', (req, res) => {
    const { username, password } = req.body;
    res.json({ message: `Usuário ${username} registrado com sucesso.` });
});

// POST /token com client_id e client_secret fixos
router.post('/token', (req, res) => {
    const { username, password } = req.body;

    const client_id = 'sIiB299a7Jv6WyDPfqUvu6ZdbJshtkj5Ax1cioyQ';
    const client_secret = 't82J0uzLByoXqT2bTL4MEck0O38mWF5uzJJl1yD0vPvofZzIYdnugp2zN46MA4mXFX1iZQRk376V7dUFZX59aZTYqfN9sYEjhCp9gXTM4en6N812jLQLP0teN7yJGicC';

    // Simula resposta com os dados fixos
    res.json({
        token: 'fake-token-123456',
        username,
        client_id,
        client_secret
    });
});

module.exports = router;
