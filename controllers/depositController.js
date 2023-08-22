const User = require('../model/user');

const makeDeposit = async (req, res) => {
    const data = req.body;

    try{
        const getUser = await User.findOne({ userid: data.userid});
        const transactions = getUser.transactions;
        const prevBalance = transactions.length !== 0 ? parseInt(transactions[transactions.length -1].balance) : 0;
        console.log(prevBalance)
        const newBalance = prevBalance + parseInt(data.transactionamount);
        transactions.push({
            transactionid: data.transactionid,
            timestamp: data.timestamp,
            transactionamount: data.transactionamount,
            balance: newBalance
        });
        const update = await getUser.save();
        console.log(update);
        res.status(201).json({ 'success': `transaction saved` });
    } catch (err) {
        res.status(500).json({ 'message': err.message });
    }
}

module.exports = {makeDeposit}