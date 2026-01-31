const User = require("./users")
const Bus = require("./bus")
const Booking = require("./booking")


User.hasMany(Booking,{
    foreignKey: "userId",
    as: "bookings"
})
Booking.belongsTo(User,{
    foreignKey: "userId",
    as: "user"
})


Bus.hasMany(Booking,{
    foreignKey:"busId",
    as: "bookings"
})
Booking.belongsTo(Bus,{
    foreignKey: "busId",
    as: "bus"
})

module.exports={
    User,
    Booking,
    Bus
}