const express = require('express');
const { signOut, signin } = require('../controllers/auth.controller');

const router = express.Router();

router.post('/signin', signin);
router.get('/signout', signOut);

// Export du router
module.exports = router; // Utilisation de module.exports
