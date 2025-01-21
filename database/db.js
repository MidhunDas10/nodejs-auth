const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(
            "mongodb+srv://midhundazz1010:Kg7g1d2M75rzTNwp@cluster0.93dve.mongodb.net/"
        )
        console.log("MongoDB connection SUCCESS");
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
}

module.exports = connectDB;