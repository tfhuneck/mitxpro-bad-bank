const User = require('../model/user');

const getUser = async (req, res) => {

    try {
        const userId = req.body.userid;
        // console.log(userId);
        const result = await User.findOne({ userid: userId});
        // console.log(result);
        res.send(result);
    } catch (err) {
        res.status(500).json({ 'message': err.message });
    }
    
}


module.exports = {getUser};





// const result = await User.findOne({ userid: userId }).exec()
// .then(() =>{
//     console.log(result)
// })
// .catch((err) => console.log(err))