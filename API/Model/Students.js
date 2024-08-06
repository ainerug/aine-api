const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    studentName: {
        type: String,
        required: true
    },

    studentAge: {
        type: Number,
        required: true
    },

    rollNum: {
        type: String,
        required: true
    },

    grade: {
        type: String,
        required: true
    },

    scholarship: {
        type: Boolean,
        required: true
    }

})

const Student = new mongoose.model("students", studentSchema);

module.exports = Student;