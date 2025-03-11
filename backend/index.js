const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
require("./Models/db");

const customerRoutes = require("./routes/CustomerRouter");
const AuthRouter = require("./Routes/AuthRouter");
const WauthRouter = require("./Routes/WauthRouter");
const Worker = require("./Routes/WorkerRouter");
const BookingRouter = require("./Routes/BookingRouter");
const workermodel = require("./Models/UpdateJob");

const PORT = process.env.PORT || 5000;

// **CORS Configuration**
app.use(
  cors({
    origin: "https://cleanslate-iota.vercel.app", // Allow frontend domain
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true, // Allow cookies and authorization headers
  })
);

// **Enable Preflight Requests for All Routes**
app.options("*", cors());

// **Ensure CORS Headers are Set in Every Response**
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "https://cleanslate-iota.vercel.app");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});

app.use(bodyParser.json());

// **API Routes**
app.use("/auth", AuthRouter);
app.use("/wauth", WauthRouter);
app.use("/worker", Worker);
app.use("/api", customerRoutes);
app.use("/book", BookingRouter);

// **Backend Route to Fetch WorkerId**
app.post("/getWorker", async (req, res) => {
  console.log("Email Received:", req.body.email);
  try {
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

// **Start the Server**
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
