const mongoose = require("mongoose");
const dotenv = require('dotenv');

dotenv.config();

module.exports = async () => {
    try {
        const connectionParams = {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
        };
        const uri = process.env.MONGODB_HOST ? `mongodb://${process.env.MONGODB_HOST}:27017`: process.env.MONGODB_URI

        await mongoose.connect(uri, connectionParams);
        console.log("Connected to database.");
    } catch (error) {
        console.log("Could not connect to database.", error);
    }
};
