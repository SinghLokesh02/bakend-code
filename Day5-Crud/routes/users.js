const mongoose = require('mongoose');


// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/newDatabase");

// Create a schema
const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email : String,
})

// Create a model from the schema
const model = mongoose.model("user", userSchema)

module.exports = model;