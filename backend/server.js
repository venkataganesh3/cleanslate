const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
require("./Models/db");

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ CORS Setup with Multiple Allowed Origins
const allowedOrigins = [
  "https://cleanslate-gamma.vercel.app",
  "https://cleanhome.onrender.com"
];

// ✅ CORS Middleware Configuration
app.use(
  cors({
    origin: allowedOrigins, // Allow only listed origins
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

// ✅ Middleware to Handle JSON Body Parsing
app.use(express.json());
app.use(bodyParser.json());

// ✅ Import Routes (Ensure case sensitivity is correct)
const CustomerRouter = require("./routes/CustomerRouter");
const AuthRouter = require("./routes/AuthRouter");
const WauthRouter = require("./routes/WauthRouter");
const Worker = require("./routes/WorkerRouter");
const BookingRouter = require("./routes/BookingRouter");
const WorkerModel = require("./Models/UpdateJob");

// ✅ Define Routes
app.use("/auth", AuthRouter);
app.use("/wauth", WauthRouter);
app.use("/worker", Worker);
app.use("/api", CustomerRouter);
app.use("/book", BookingRouter);

// ✅ Health Check Route
app.get("/", (req, res) => {
  res.send("Server is running.");
});

// ✅ Worker ID Fetch Route
app.post("/getWorker", async (req, res) => {
  try {
    console.log("Email Received:", req.body.email);
    const worker = await WorkerModel.findOne({ email: req.body.email });
    if (worker) {
      res.json(worker._id);
    } else {
      res.status(404).json({ message: "Worker Not Found" });
    }
  } catch (err) {
    console.error("Error:", err);
    res.status(500).json({ message: "Server Error" });
  }
});

// ✅ Start Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
