const mongoose = require("mongoose");

const connect = async () => {
	try { 
        const options = {
            useNewUrlParser: true,
        };
        const connection = await mongoose.connect(process.env.DATABASE_URI, {
                useUnifiedTopology: true,
                useNewUrlParser: true
            });
        if (connection)
        console.log('🌱🌱🌱MongoDB Config connected🌱🌱🌱');
	} catch (err) {
        console.log('Error while connecting database');
        console.log(err);
	}
};

module.exports = connect;
