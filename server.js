const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/bloodbank")
.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err));

// Donor Schema
const donorSchema = new mongoose.Schema({
    name: String,
    age: Number,
    bloodGroup: String,
    phone: String
});

const Donor = mongoose.model("Donor", donorSchema);

// Blood Stock Schema
const bloodStockSchema = new mongoose.Schema({
    bloodGroup: String,
    units: Number
});

const BloodStock = mongoose.model("BloodStock", bloodStockSchema);

// Register Donor API
app.post("/donor", async (req, res) => {
    const donor = new Donor(req.body);
    await donor.save();
    res.send({ message: "Donor Registered Successfully" });
});

// Get All Donors
app.get("/donors", async (req, res) => {
    const donors = await Donor.find();
    res.send(donors);
});

// Add Blood Stock
app.post("/stock", async (req, res) => {
    const stock = new BloodStock(req.body);
    await stock.save();
    res.send({ message: "Stock Updated Successfully" });
});

// Get Blood Stock
app.get("/stock", async (req, res) => {
    const stock = await BloodStock.find();
    res.send(stock);
});

// Blood Request API + Matching Logic
app.post("/request", async (req, res) => {
    const { bloodGroup, units } = req.body;

    const stock = await BloodStock.findOne({ bloodGroup });

    if (!stock || stock.units < units) {
        return res.send({ message: "Blood Not Available" });
    }

    stock.units -= units;
    await stock.save();

    res.send({ message: "Blood Request Approved!" });
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});