const express               = require('express');
const router                = express.Router();
const registerController    = require('../controllers/createUserController');
const bodyParser            = require('body-parser');

// bodyparser 
var jsonParser = bodyParser.json()

router.route('/')
    .post(jsonParser, registerController.createNewUser);

module.exports = router;