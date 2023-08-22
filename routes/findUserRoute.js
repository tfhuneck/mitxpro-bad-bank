const express               = require('express');
const router                = express.Router();
const finduserController    = require('../controllers/findUserController');
const bodyParser            = require('body-parser');

// bodyparser 
var jsonParser = bodyParser.json()

router.route('/')
    .post(jsonParser, finduserController.getUser);

module.exports = router;