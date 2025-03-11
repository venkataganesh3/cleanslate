const UpdateJob = require("../Models/UpdateJob");
const Worker = require("../Models/Worker"); // Import Worker Model

// Fetch All Workers with Name
const getWorkers = async (req, res) => {
  try {
    const workers = await UpdateJob.find();
    
    // Fetch Name from Worker DB using email
    const updatedWorkers = await Promise.all(
      workers.map(async (worker) => {
        const workerInfo = await Worker.findOne({ email: worker.email });
        return {
          ...worker._doc, // Spread WorkerCard data
          name: workerInfo ? workerInfo.name : "No Name Found", // Add Name
        };
      })
    );

    res.status(200).json(updatedWorkers);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to fetch workers" });
  }
};

module.exports = { getWorkers };
