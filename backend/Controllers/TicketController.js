const TicketModel = require("../Models/TicketModel");

const addTicket = async (req, res) => {

    const {
        trip,
        fcity,
        tcity,
      depdate,
      retdate,
        nop,
        fclass,
        fare
    } = req.body;

    

    const _Ticket = new TicketModel({
        trip,
        fcity,
        tcity,
      depdate,
     retdate,
        nop,
        fclass,
        fare,
        
    })

    _Ticket.save((error, Ticket) => {
        if (Ticket) {
            res.status(201).json({
                success: true,
                data:Ticket,
                message: "Data Added Successfully"
            })
        }
        
        
        if (error) {
            console.log(error)
            return res.status(500).json({
                error: error,
        
                success: false,
                
                message: "DB Error occurred. Contact your administrator"

            })
        }

       
    })
}

module.exports = { addTicket };