// const Booking = require("../models/booking")
const {User, Booking, Bus} = require("../models")


const addBooking = async (req,res)=>{
    try {
        const {userId,busId, seatNumber} = req.body;

        const booking = await Booking.create({
            userId: userId,
            busId: busId,
            seatNumber: seatNumber 
        });
        console.log("Booking added")
        res.status(200).send("Booking added successfully!")
    } catch (error) {
            res.status(500).send("Unable to add booking")
    }
}



const getBookings = async (req,res) => {
    try {
        const booking = await Booking.findAll()
        console.log("All booking fetched")
        res.status(200).json(booking)
    } catch (error) {
        res.status(500).send("Unable to get booking")
    }
}




const getBooking = async (req,res) =>{
    try {
        const {id} = req.params

        const booking = await Booking.findByPk(id)
        if (!booking){
            res.status(404).send("booking not found")
            return
        }
        console.log("booking fetched")
        res.status(200).json(booking)
    } catch (error) {
        res.status(500).send("Unable to fetch booking")
    }
}




const updateBooking = async (req,res)=>{
    try {
        const {id} = req.params
        const {userId,busId,seatNumber}= req.body
        const [updatedRows] = await Booking.update(
            {userId,busId,seatNumber},
            {where: {id}}
        )

        if (updatedRows === 0){
            res.status(404).send("Booking not found")
            return
        }


        console.log("Booking updated")
        res.status(200).send("Booking updated")
    } catch (error) {
        res.status(500).send("Unable to update booking")
    }
}



const deleteBooking = async (req,res)=>{
    try {
        const {id} = req.params
        const booking = await Booking.destroy({
            where:{
                id:id
            }
        })

        if(!booking){
            res.status(404).send("Booking not found")
            return
        }
        console.log("Booking deleted")
        res.status(200).send("Booking is deleted")
    } catch (error) {
        res.status(500).send("Booking not deleted")
    }
}




module.exports = {
    addBooking,
    getBookings,
    getBooking,
    updateBooking,
    deleteBooking
}