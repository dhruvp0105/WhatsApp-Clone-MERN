const express = require('express');
const { addUser, getUser } = require('../controller/userController');
const { newConversation, getConversation } = require('../controller/conversationController');
const { newMessage, getMessage } = require('../controller/messageController');
const { uploadFile, getImage } = require('../controller/imageController');
const upload = require('../utils/upload');

const route = express.Router();

route.post('/add', addUser)  //end point  localhost:8000/add...
route.get('/users', getUser);

route.post('/conversation/add', newConversation);
route.post('/conversation/get', getConversation);

route.post('/message/add', newMessage);
route.get('/message/get/:id', getMessage);

route.post('/file/upload', upload.single("file"), uploadFile);
route.get('/file/:filename', getImage);

module.exports = route;