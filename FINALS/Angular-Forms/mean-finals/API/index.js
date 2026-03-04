const express = require("express");
const { MongoClient } = require("mongodb");
const cors = require("cors");
const multer = require("multer");

const app = express();
app.use(cors());

const CONNECTION_STRING = "mongodb://127.0.0.1:27017";
const DATABASENAME = "MyDb";

let database;

// Connect MongoDB
async function start() {

    const client = new MongoClient(CONNECTION_STRING);
    await client.connect();

    database = client.db(DATABASENAME);

    console.log("MongoDB Connected");

    app.listen(5038, () => {
        console.log("Server running on http://localhost:5038");
    });

}

start();

// ROOT ROUTE
app.get("/", (req,res)=>{
    res.send("Plant Care API Running");
});

// GET ALL PLANTS
app.get("/api/plants/GetPlants", async (req,res)=>{

    const result = await database.collection("Plants").find({}).toArray();
    res.json(result);

});

// ADD PLANT
app.post("/api/plants/AddPlant", multer().none(), async (req,res)=>{

    const num = await database.collection("Plants").countDocuments();

    await database.collection("Plants").insertOne({

        id:String(num+1),
        plantName:req.body.plantName,
        sunlight:req.body.sunlight,
        water:req.body.water,
        type:req.body.type,
        lastWatered:req.body.lastWatered

    });

    res.json("Plant Added");

});

// DELETE PLANT
app.delete("/api/plants/DeletePlant", async (req,res)=>{

    await database.collection("Plants").deleteOne({id:req.query.id});
    res.json("Plant Deleted");

});