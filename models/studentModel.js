const mongoose = require('mongoose');

// Define the schema for the student model
const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  admno: { type: Number, required: true },
  rollno:{type:Number,required:true},
  college:{type:String,required:true},
  // Add other properties as needed
});

// Create the model using the schema
const studentModel = mongoose.model('students', studentSchema);

module.exports = {studentModel};
