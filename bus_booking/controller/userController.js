// const User = require("../models/users")
const {User, Booking, Bus} = require("../models")

const addUser = async (req,res)=>{
    try {
        const {name,email} = req.body;

        const user = await User.create({
            name: name,
            email: email
        });
        console.log("User added")
        res.status(200).send("User added successfully!")
    } catch (error) {
            res.status(500).send("Unable to add user")
    }
}



const getUsers = async (req,res) => {
    try {
        const user = await User.findAll()
        console.log("All users fetched")
        res.status(200).json(user)
    } catch (error) {
        res.status(500).send("Unable to get users")
    }
}




const getUser = async (req,res) =>{
    try {
        const {id} = req.params

        const user = await User.findByPk(id)
        if (!user){
            res.status(404).send("user not found")
            return
        }
        console.log("User fetched")
        res.status(200).json(user)
    } catch (error) {
        res.status(500).send("Unable to fetch user")
    }
}




const updateUser = async (req,res)=>{
    try {
        const {id} = req.params
        const {name,email}= req.body
        const [updatedRows] = await User.update(
            {name,email},
            {where: {id}}
        )

        if (updatedRows === 0){
            res.status(404).send("User not found")
            return
        }


        console.log("User updated")
        res.status(200).send("User updated")
    } catch (error) {
        res.status(500).send("Unable to update user")
    }
}



const deleteUser = async (req,res)=>{
    try {
        const {id} = req.params
        const user = await User.destroy({
            where:{
                id:id
            }
        })

        if(!user){
            res.status(404).send("User not found")
            return
        }
        console.log("User deleted")
        res.status(200).send("User is deleted")
    } catch (error) {
        res.status(500).send("User not deleted")
    }
}




const getBookingByUser = async(req,res)=>{
    try {
        const {userId} =req.params
        const bookings = await Booking.findAll({
            where: {userId},
            attributes: ["id", 'seatNumber'],
            include: [
                {
                    model: Bus,
                    as: "bus",
                    attributes:["busNumber"]
                }
            ]
        })

        res.status(200).json(bookings)
    } catch (error) {
        res.status(500).json({
            message: "Unable to fetch bookings by user",
            error: error.message
        })
    }
}






module.exports = {
    addUser,
    getUsers,
    getUser,
    updateUser,
    deleteUser,
    getBookingByUser
}