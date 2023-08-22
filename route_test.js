const axios         = require('axios');
const serverUrl     = 'http://localhost:8080'
const uid           = 'Ox5d3HD5SKT7d2fvqKP6nTuGyTm2'
var uniqid          = require('uniqid'); 


const newUser = async () => {
    const email         = 'testuser@mail.com';
    const password      = 'secrect';
    const name          = 'testuser';
    const userid        = '4574894820193erdf123';

    await axios.post(serverUrl + `/register`, {
        'userid': userid,
        'name': name,
        'email': email,
        'password': password
    })
    .then(async res => {
        console.log(res.data);
    })
    .catch(err => console.log(err));
}

const findUser = async () => {
    await axios.get(serverUrl + '/user',{
        params: {userid: uid}
      })
        .then((res) => {
          console.log(res.data);
        })
        .catch(err => console.log(err));
}

const handleDeposit = async () => {
    var userid  = 'PDVkaAeMBPZLgc1x0YsTtciP7Lg2'
    let newId   = uniqid();
    var date    = new Date();
    var year    = date.getFullYear();
    var month   = date.getMonth();
    var day     = date.getDate();
    var hour    = date.getHours();
    var min     = date.getMinutes();
    var sec     = date.getSeconds();
    var newTimestamp = year + '.' + month + '.' + day + '-' + hour + ':' + min + ':' + sec;
    let newAmount = Math.floor(Math.random() * 1000)
    await axios.post(serverUrl + '/transaction', {
        'userid': userid,
        'transactionid': newId,
        'timestamp': newTimestamp,
        'transactionamount': newAmount
    })
}

const handleWithdraw = async () => {
    // var amount = document.getElementById('deposit').value
    var userid = '54ZeFxApGqSiudEC7yb1sZkoraG2';
    let newId   = uniqid();
    var date    = new Date();
    var year    = date.getFullYear();
    var month   = date.getMonth();
    var day     = date.getDate();
    var hour    = date.getHours();
    var min     = date.getMinutes();
    var sec     = date.getSeconds();
    var newTimestamp = year + '.' + month + '.' + day + '--' + hour + 'h:' + min + 'm:' + sec + 's';
    let amount = 50;
    await axios.post(serverUrl + '/withdraw', {
        'userid': userid,
        'transactionid': newId,
        'timestamp': newTimestamp,
        'transactionamount': amount
    })
}


// handleWithdraw();
// handleDeposit();
// findUser();
// newUser();


