const express = require('express')
const app = express()
const port = 3000


// Middleware to parse JSON request bodies
app.use(express.json())

// Middleware to handle form submission
app.use(express.urlencoded({ extended: true }))

// middleware to serve static files
app.use(express.static('public'))

// middleware to set the view engine
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.get('/:user', (req, res) => {
    const user = req.params.user;
    let arr = ["Lokesh","Akhilesh","Ramesh","Bhawani","Piyush","Surendra","Prakash","Shubham","Hitesh","Om Prakash"]
    res.render("index",{user: arr})
    
    // res.send(`Hello ${req.params.user}`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})