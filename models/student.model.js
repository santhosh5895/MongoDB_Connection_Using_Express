const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let StudentSchema = new Schema({
    fName: {
        type: String, required: true, max: 100
    },
    lName: {
        type: String, required: true, max: 100
    },
    DOB: {
        type: Date, required: true
    },
    rollNo: {
        type: String, max: 6
    }
});

module.exports = mongoose.model('Student',StudentSchema);