const mongoose = require("mongoose"),
    PetShelterSchema = require("../models/pshelter.model"),
    PetShelter = mongoose.model("Pets", PetShelterSchema)

class PetController{
    index(req, res){
        PetShelter.find()
            .then(allPets => res.json(allPets))
            .catch(err => res.json(err))
    }
    create(req, res) {
        PetShelter.create(req.body)
            .then(newPet => res.json(newPet))
            .catch(err => res.json(err) )
    }
    show(req, res){
        PetShelter.findById({_id:req.params.id})
            .then(onePet => res.json(onePet))
            .catch(err => res.json(err))
    }
    update(req, res){
        PetShelter.findByIdAndUpdate({_id:req.params.id},req.body,{runValidators:true})
            .then( editPet => res.json({msg:"Success"}))
            .catch(err => res.json(err));
    }
    delete(req, res){
        PetShelter.deleteOne({_id:req.params.id})
            .then( message => res.json(message) )
            .catch( err => res.json(err) )
    }
    
}

module.exports = new PetController();