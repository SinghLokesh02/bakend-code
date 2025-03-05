var express = require("express");
var router = express.Router();
const userModel = require("./users");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});
router.get("/contact", function (req, res, next) {
  res.render("contact");
});

router.post("/form",async (req,res)=>{
  let {name,email,age} = req.body;
  let data = await userModel.insertOne({name,email,age});
  res.send("Data has been created")
})


router.get("/read",async (req,res)=>{
  let data = await userModel.find()
  res.send(data)
})


/*

Rough Work before Actual Form Submission

// Create a new user
router.get("/create",async (req,res)=>{
  let data = await userModel.insertMany([
    {name: "John", age: 25, email: "john@example.com"},
    {name: "Jane", age: 22, email: "jane@example.com"},
    {name: "Doe", age: 26, email: "doe@example.com"},
  ])
  res.send("Data has been created")
})

// Read all users
router.get("/read",async (req,res)=>{
  let data = await userModel.find()
  res.send(data)
})

// Delete a user
router.get("/delete",async (req,res)=>{
  let data = await userModel.deleteMany({})
  res.send("Data has been deleted")
})
*/

module.exports = router;
