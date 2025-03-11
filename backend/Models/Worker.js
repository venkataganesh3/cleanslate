const mongoose = require('mongoose');
const schema = mongoose.Schema;

const userSchema = new schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    cpassword: {
        
        type: String,
        required: true
    }
}, {
    collection: 'worker' // This directly sets the collection name
});

const WorkerModel = mongoose.model('Worker', userSchema); // Model name can be anything now
module.exports = WorkerModel;
