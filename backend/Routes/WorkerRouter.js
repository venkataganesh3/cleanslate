const { updateJobDetails, getJobDetails} = require('../Controllers/WorkerController');
const router = require('express').Router();


router.put('/updatejob',updateJobDetails);
router.post('/getjob',getJobDetails);
module.exports = router;