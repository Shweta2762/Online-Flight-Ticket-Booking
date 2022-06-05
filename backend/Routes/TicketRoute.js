const express = require("express");
const router = express.Router();

const TicketController = require("../Controllers/TicketController");


router.post('/', TicketController.addTicket);

module.exports = router;