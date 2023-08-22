const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userid: { type: String, default: null },
  name: { type: String, default: null },
  email: { type: String, unique: true },
  password: { type: String },
  transactions: [{
    transactionid: { type: String, unique: true, default: null },
    timestamp: { type: String, default: null }, 
    transactionamount: { type: String, default: 0 },
    balance: { type: Number, default: null }
  }]
});

const User = mongoose.model("user", userSchema);

User.createCollection()
    .then((collection) => {
    console.log('Collection is created!');
    });

module.exports = User;