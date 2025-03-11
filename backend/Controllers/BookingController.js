const Booking = require('../Models/Booking');
const History = require('../Models/History')
const createBooking = async (req, res) => {
  try {
    const newBooking = new Booking(req.body);
    await newBooking.save();
    res.status(200).json({ message: 'Booking Successful' });
  } catch (err) {
    res.status(500).json({ message: 'Booking Failed' });
  }
};


// Get All Bookings
const getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.status(200).json(bookings);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch Bookings ❌" });
  }
};

// Delete Booking
const deleteBooking = async (req, res) => {
  console.log("Arrived");
  try {
    console.log("ID is:", req.params.id); // ✅ Check this in terminal

    const booking = await Booking.findById(req.params.id);
    if (!booking) {
      return res.status(404).json({ message: 'Booking not found ❌' });
    }

    const history = new History({
      name: booking.name,
      address: booking.address,
      city: booking.city,
      phone: booking.phone,
      email: booking.email,
      workerEmail: booking.workerEmail,
      date: new Date()
    });

    await history.save();
    await Booking.findByIdAndDelete(req.params.id);

    res.json({ message: 'Booking Completed and moved to History ✅' });
  } catch (err) {
    console.error("Backend Error:", err); // Check Error Here
    res.status(500).json({ message: 'Failed to delete booking ❌' });
  }
};

module.exports = {createBooking , getBookings, deleteBooking };

