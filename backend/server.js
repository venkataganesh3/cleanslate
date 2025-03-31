const express=require('express');
const app=express();
const bodyParser=require('body-parser');
const customerRoutes = require("./Routes/CustomerRouter");
const AuthRouter=require('./Routes/AuthRouter');
const WauthRouter=require('./Routes/WauthRouter');
const Worker=require('./Routes/WorkerRouter')
const BookingRouter = require('./Routes/BookingRouter');
require('dotenv').config();
require('./Models/db');
const workermodel =require('./Models/UpdateJob');
const PORT=process.env.PORT || 1000;



app.use(bodyParser.json());
// cors() is used to ready to take request from anywhere
const cors=require('cors');
const { applyTimestamps } = require('./Models/User');
app.use(cors());
app.use('/auth',AuthRouter);
app.use('/wauth',WauthRouter);
app.use('/worker',Worker);
app.use("/api", customerRoutes);

app.use('/book', BookingRouter);

// Backend Route to Fetch WorkerId
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
  

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})