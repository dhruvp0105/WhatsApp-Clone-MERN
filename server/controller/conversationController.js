const conversation = require("../model/Conversation");

const newConversation = async (req, res) => {
    try {
        const senderId = req.body.senderId;
        const receiverId = req.body.receiverId;

        const exist = await conversation.findOne({ members: { $all: [receiverId, senderId] } })  //$all check all array...

        if (exist) {
            return res.status(200).json('conversation already exist');
        }
        const newConversation = new conversation({
            members: [senderId, receiverId]
        })
        await newConversation.save();
        return res.status(200).json('conversation saved successfully');

    } catch (error) {
        return res.status(500).json(error.message);
    }
}

const getConversation = async (req, res) => {
    try {
        const senderId = req.body.senderId;
        const receiverId = req.body.receiverId;
        let Conversation = await conversation.findOne({ members: { $all: [receiverId, senderId] } })
        return res.status(200).json(Conversation);

    } catch (error) {
        return res.status(500).json(error.message);
    }
}

module.exports = { newConversation, getConversation }