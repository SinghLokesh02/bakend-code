const mongoose = require('mongoose');

// Connect to MongoDB Atlas
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("MongoDB Connected"))
  .catch(err => console.error("MongoDB Connection Error:", err));

// Define Schema for your collection
const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    address: String
});

// Define Model
const User = mongoose.model('family', userSchema,"family");
module.exports = User;