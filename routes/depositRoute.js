const express               = require('express');
const router                = express.Router();
const transaction           = require('../controllers/depositController');
const bodyParser            = require('body-parser');

// bodyparser 
var jsonParser = bodyParser.json()

router.route('/')
    .post(jsonParser, transaction.makeDeposit);

module.exports = router;