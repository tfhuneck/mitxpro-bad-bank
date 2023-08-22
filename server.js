const express       = require('express');
const app           = express();
const cors          = require('cors');
const path          = require('path');
const auth          = require('./middleware/auth.js');
const mongoose      = require('mongoose');
const connectDB     = require('./config/dbConnect');
const User          = require('./model/user');
const bodyParser    = require('body-parser');


// Connect to MongoDB
connectDB();

// cors
app.use(cors());

// serving the UI front end
app.use(express.static(path.join(__dirname, './build')));
app.get('*', function(req, res) {
    res.sendFile('index.html', {root: path.join(__dirname, './build')});
  });

// bodyparser 
app.use(bodyParser.urlencoded({extended: true}));

// routes
app.use('/register', require('./routes/createUserRouter.js'));
app.use('/user', require('./routes/findUserRoute.js'));
app.use('/deposit', require('./routes/depositRoute.js'));
app.use('/withdraw', require('./routes/withdrawRoute.js'));

// original post route for create user 
    // app.post('/register', jsonParser, async (req, res) => {
    //     const userData = req.body;
    //     // console.log(req.body);
    
    //     // check for duplicate 
    //     const duplicate = await User.findOne({ userid: userData.userid }).exec();
    //     if (duplicate) return res.sendStatus(409);

    //     // create and store new user
    //     try{
    //         const newUser = await User.create({
    //             'userid': userData.userid,
    //             'name': userData.name,
    //             'email': userData.email,
    //             'password': userData.password
    //         });
    //         console.log(newUser);

    //         res.status(201).json({ 'success': `New user ${userData.name} created!` });
    //     } catch (err) {
    //         res.status(500).json({ 'message': err.message });
    //     }
    // });


var port = 8080;
app.listen(port, ()=> {
    console.log('🔥🔥🔥🔥🔥Running on port 8080! - http://localhost:8080🔥🔥🔥🔥🔥');
    mongoose.connection.once('open', () => console.log('🌱🌱🌱🌱🌱MongoDB connected🌱🌱🌱🌱🌱'));
});
console.log('Running on port: ' + port);