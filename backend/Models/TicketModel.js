const mongoose = require("mongoose");

const TicketSchema = mongoose.Schema({

    trip: {
        type: String},

    fcity: {type: String},

    tcity: {type: String},

    depdate: {type: String},

    retdate: {type: String},

    nop: {type: String,},

    fclass: {type: String},

    fare: {type: String},

    
}, {
    timestamps: true
});

module.exports = mongoose.model('Ticket', TicketSchema);