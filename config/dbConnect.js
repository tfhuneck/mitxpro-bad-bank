const mongoose = require("mongoose");

const connect = async () => {
	try { 
        const options = {
            useNewUrlParser: true,
        };
        const connection = await mongoose.connect('mongodb://localhost:27017/myapp', options);
        if (connection)
        console.log('🌱🌱🌱MongoDB connected in Controller🌱🌱🌱');
	} catch (err) {
        console.log('Error while connecting database');
        console.log(err);
	}
};

module.exports = connect;
