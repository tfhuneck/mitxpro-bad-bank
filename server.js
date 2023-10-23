const express       = require('express');
const app           = express();
const cors          = require('cors');
const path          = require('path');
const auth          = require('./middleware/auth.js');
const mongoose      = require('mongoose');
const connectDB     = require('./config/dbConnect');
const User          = require('./model/user');
const bodyParser    = require('body-parser');
const port          = process.env.PORT || 8080;

// Connect to MongoDB
connectDB();

// cors
app.use(cors());

// serving the UI front end
// app.use(express.static(path.join(__dirname, './build')));
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


app.listen(port, ()=> {
    console.log('🔥🔥🔥🔥🔥Running on port 8080! - http://localhost:8080🔥🔥🔥🔥🔥');
    mongoose.connection.once('open', () => console.log('🌱🌱🌱🌱🌱MongoDB connected🌱🌱🌱🌱🌱'));
});
console.log('Running on port: ' + port);