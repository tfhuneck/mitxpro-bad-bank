const express               = require('express');
const router                = express.Router();
const transaction           = require('../controllers/withdrawController');
const bodyParser            = require('body-parser');

// bodyparser 
var jsonParser = bodyParser.json()

router.route('/')
    .post(jsonParser, transaction.makeWithdraw);

module.exports = router;