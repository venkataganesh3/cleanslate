const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
require("./Models/db");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: "https://cleanslate-gamma.vercel.app",
 
}));
// ✅ Import Routes (Ensure case sensitivity is correct)
const CustomerRouter = require("./routes/CustomerRouter");
const AuthRouter = require("./routes/AuthRouter");
const WauthRouter = require("./routes/WauthRouter");
const Worker = require("./routes/WorkerRouter");
const BookingRouter = require("./routes/BookingRouter");
const workermodel = require("./Models/UpdateJob");

// ✅ Apply CORS Middleware First


// ✅ Middleware to Handle JSON (Must come after CORS)
app.use(express.json());
app.use(bodyParser.json());

// ✅ Global Middleware to Handle Preflight Requests
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "https://cleanslate-gamma.vercel.app");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.header("Access-Control-Allow-Credentials", "true");
  
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }

  next();
});

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
    const worker = await workermodel.findOne({ email: req.body.email });
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
