const express = require("express")
const router = express.Router()
const bookingController = require("../controller/bookingController")

router.post("/booking",bookingController.addBooking)
router.get("/booking",bookingController.getBookings)
router.get("/booking/:id",bookingController.getBooking)
router.put("/booking/:id",bookingController.updateBooking)
router.delete("/booking/:id",bookingController.deleteBooking)

module.exports = router