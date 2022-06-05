const express = require('express');
const app = express();
const cors = require("cors");
const dotenv = require('dotenv');

const db = require("./database/db");
const TicketRoute = require("./Routes/TicketRoute.js");

dotenv.config();

app.use(cors());
app.use(express.json());

app.use('/Ticket', TicketRoute);

app.listen(8000, () => {
    console.log("Listening at http://localhost:8000")
});