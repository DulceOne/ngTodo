const express = require('express');
const card = require('../controllers/card');
const auth = require('../middleware/auth')
const Router = express.Router();

Router.post('/create', auth, card.create);
Router.post('/get/all', auth, card.getAll);
Router.post('/delete', auth,  card.delete);

module.exports = Router;