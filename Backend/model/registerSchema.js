const mongoose = require('mongoose');

const registerSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    phone_no: {
        type: String,
        required: true
    },
    company_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
},{ collection: 'registerSchema' });

const Register = mongoose.model('Register', registerSchema);

module.exports = Register;