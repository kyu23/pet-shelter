const express = require("express"),
    app = express(),
    cors = require("cors"),
    port = 8000,
    db = "pet-shelter",
    server = app.listen(port, () => console.log(`Listening on port ${port}`));

app.use(cors());
app.use(express.json());

require("./server/config/database.config.js")(db); 
require("./server/routes/pshelter.routes")(app);