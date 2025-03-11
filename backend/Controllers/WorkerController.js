// controllers/workerCardController.js
const  UpdateJob= require('../models/UpdateJob');
const WorkerModel=require('./../Models/Worker');
const updateJobDetails = async (req, res) => {
  const { email,phoneNumber, employmentType, selectedTasks, location } = req.body;
  try {
    const updatedWorker = await UpdateJob.findOneAndUpdate(
      { email }, // Searching by phone number
      { employmentType, selectedTasks, location,phoneNumber,email }, // Updating fields
      { new: true, upsert: true } // Create if not found
    );
    res.status(200).json(updatedWorker);
  } catch (error) {
    console.error('Error updating worker details:', error);
    res.status(400).json({ message: 'Failed to update worker details', error });
  }
};
const getJobDetails= async (req,res)=>{
  const { email } = req.body;
  try {
    const result = await UpdateJob.findOne({ email });
    const result1 = await WorkerModel.findOne({ email });
    if (!result && !result1) {
      return res.status(404).json({ message: 'Worker not found' });
    }
    
    const response = {
      name: result1 ? result1.name : undefined,
      email: result1 ? result1.email : undefined,
      ...result ? result.toObject() : {}
    };
    console.log(result);
    res.status(200).json(response);
  } catch (error) {
    console.error('Error fetching worker details:', error);
    res.status(400).json({ message: 'Failed to fetch worker details', error });
  }

};
module.exports = { updateJobDetails,getJobDetails };