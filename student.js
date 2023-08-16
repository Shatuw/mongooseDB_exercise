import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    name : String,
    lastName : String,
    email: String
})

export default mongoose.model("student", studentSchema )

