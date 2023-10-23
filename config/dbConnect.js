const mongoose = require("mongoose");

const connect = async () => {
	try { 
        const options = {
            useNewUrlParser: true,
        };
        const connection = await mongoose.connect('mongodb://localhost:27017', {
                useUnifiedTopology: true,
                useNewUrlParser: true
            });
        if (connection)
        console.log('🚀🚀🚀🚀MongoDB Config connected🚀🚀🚀🚀');
	} catch (err) {
        console.log('Error while connecting database');
        console.log(err);
	}
};

module.exports = connect;
