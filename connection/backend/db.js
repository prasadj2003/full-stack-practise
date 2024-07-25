const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://ppjoshi2003:MU2a5fRRa1kS1Sde@cluster0.llc93zm.mongodb.net/connection");


const headingSchema = new mongoose.Schema({
    heading: String
});

const heading = mongoose.model("heading", headingSchema);

module.exports = {
    heading
}