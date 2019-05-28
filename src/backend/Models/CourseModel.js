const mongoose =  require("mongoose")
const Schema = mongoose.Schema;
const courseSchema = new Schema({
   
    courseName:{
        type:String,
        required: [true , "courseName is required"]
    }
   
})
const Course = mongoose.model("course" , courseSchema)
module.exports= Course