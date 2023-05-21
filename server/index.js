const express = require("express");
const Connection = require("./database/db");
const route = require("./routes/route");
const cors = require('cors');
const bodyParser = require("body-parser");

const app = express();

app.use(cors());
app.use(bodyParser.json({ extended: true }));   //handle body...
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', route)
Connection();

const PORT = 8000;

app.listen(PORT, () => console.log(`Server is running PORT ${PORT}`));