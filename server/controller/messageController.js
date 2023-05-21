const conversation = require("../model/Conversation");
const message = require("../model/Message");

const newMessage = async (req, res) => {
    try {
        const newMessages = new message(req.body);
        await newMessages.save();
        await conversation.findByIdAndUpdate(req.body.conversationId, { message: req.body.text });

        return res.status(200).json('Message has been sent successfully');

    } catch (error) {
        return res.status(500).json(error.message);
    }
}

const getMessage = async (req, res) => {
    try {
        const messages = await message.find({ conversationId: req.params.id });
        return res.status(200).json(messages);

    } catch (error) {
        return res.status(500).json(error.message);
    }
}

module.exports = { newMessage, getMessage }