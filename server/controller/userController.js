const user = require("../model/User");


const addUser = async (req, res) => {                //res is used when backend respond to frontend..
    // console.log(req.body);
    try {
        let exist = await user.findOne({ sub: req.body.sub })  //Check user exist or not...
        if (exist) {
            res.status(200).json({ msg: "user already exist" });
            return;
        }
        const newUser = new user(req.body);
        await newUser.save();
        return res.status(200).json(newUser);
    } catch (error) {
        return res.status(500).json(error.message);
    }
}

const getUser = async (req, res) => {
    try {
        const users = await user.find({});  //get all users...
        return res.status(200).json(users);
    } catch (error) {
        return res.status(500).json(error.message);
    }
}

module.exports = { addUser, getUser }