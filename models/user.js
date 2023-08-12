
import mongoose from "mongoose";

const {Schema}=mongoose;
const useShema=new Schema({
    name:{
        type: String,
        unique:true,
        require:true
    },
    email:{
        type: String,
        unique:true,
        require:true
    },
    password:{
        type: String,
        require:true
    },
},{ timestamps:true})

export default mongoose.model("user",useShema)