const mongoose = require('mongoose');

const PetShelter = new mongoose.Schema({
    name:{
        type:String,
        required:[true, "A pet needs a name!"],
        minlength:1
    },
    type:{
        type:String,
        required:[true, "A pet needs a breed type!"],
        minlength:1
    },
    description:{
        type:String,
        required:[true, "A description is required"],
        minlength:[3, "Description must be at least 3 characters"]
    },
    skill1:{
        type:String,
        
    },
    skill2:{
        type:String,
        
    },
    skill3:{
        type:String,
        
    }
},{timestamps:true})

module.exports = PetShelter;