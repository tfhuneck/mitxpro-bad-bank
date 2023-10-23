const User = require('../model/user');

const createNewUser = async (req, res) => {

    const userData = req.body;
    // console.log(userData);
   
    // Firebase auth service checks for duplicates
    // check for duplicate 
    // const duplicate = await User.findOne({ email: userData.email }).exec();
    // if (duplicate) return res.sendStatus(409);

    // create and store new user
    try{
        const newUser = await User.create({
            'userid': userData.userid,
            'name': userData.name,
            'email': userData.email,
            'password': userData.password
    
        });
        console.log(newUser + ' record created in DB');

        res.status(201).json({ 'success': `New user ${userData.name} created!` });
    } catch (err) {
        res.status(500).json({ 'message': err.message });
    }
}

module.exports = {createNewUser};