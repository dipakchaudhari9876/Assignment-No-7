const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    currentClass:{
        type:Number,
        required:true
    },
    division:{
        type:String,
        required:true
    }
})

const Student = mongoose.model('STUDENT',studentSchema)

module.exports = Student