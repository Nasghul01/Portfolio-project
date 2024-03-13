const express = require("express");
const mongoose = require("mongoose");
const Enqueries = require("./models/enqueriesModel")
const app = express()

app.use(express.json())
mongoose.connect("mongodb+srv://Nasghul01:4OfCl8j3awpGUEVl@cluster1.h9sarn6.mongodb.net/Portfolio")

//get enqueries
app.get("/api/getEnqueries", async (req, res) => {
    try {
        const enqueries = await Enqueries.find({});
        res.status(200).json(enqueries)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

//get enquries by id
app.get("/api/getEnqueries/:id", async (req, res) => {
    try {
        const {id} = req.params;
        const enqueries = await Enqueries.findById(id);
        res.status(200).json(enqueries)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

//send enqueries 
app.post("/api/AddEnqueries", async (req,res) => {
    try {
        const enqueries = await Enqueries.create(req.body)
        res.status(200).json(enqueries)
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message: error.message})
    }
})

//update enqueries
app.put("/api/AddEnqueries/:id", async (req, res) => {
    try {
        const {id} = req.params;
        const enqueries = await Enqueries.findByIdAndUpdate(id,req.body)
        
        //we cannot find any enqueries in database
        if(!enqueries){
            return res.status(404).json({message: `cannot find any enqueries with id ${id}`})
        }
        const updatedenqueries = await Enqueries.findById(id);
        res.status(200).json(updatedenqueries);
    } catch (error) {
        res.status(500).json({message: error.message})

    }
})

//delete enqueries 

app.delete("/api/DeleteEnqueries/:id", async (req, res) => {
    try {
        const {id} = req.params;
        const enqueries = await Enqueries.findByIdAndDelete(id)
        
        //we cannot find any enqueries in database
        if(!enqueries){
            return res.status(404).json({message: `cannot find any enqueries with id ${id}`})
        }
        res.status(200).json(enqueries);
    } catch (error) {
        res.status(500).json({message: error.message})

    }
})

app.listen(3001, () => {
    console.log("Server is Running")
})