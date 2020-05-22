const PetShelterController = require("../controllers/pshelter.controllers");

module.exports = (app) => {
    app.get("/api/pets", PetShelterController.index);
    app.post("/api/pets", PetShelterController.create);
    app.get("/api/pets/:id", PetShelterController.show);
    app.put("/api/pets/:id", PetShelterController.update);
    app.delete("/api/pets/:id", PetShelterController.delete);
    
}