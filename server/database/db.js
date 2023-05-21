const mongoose = require("mongoose");
const dotenv = require('dotenv');

dotenv.config();

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

const Connection = async () => {
    const url = `mongodb+srv://${username}:${password}@cluster0.sqowtyj.mongodb.net/`;
    try {
        await mongoose.connect(url, { useUnifiedTopology: true })
        console.log("database connected Successfully");
    } catch (error) {
        console.log("Error while connecting with databse", error.message);
    }
}

module.exports = Connection;
