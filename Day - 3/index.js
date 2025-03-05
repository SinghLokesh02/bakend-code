import express from "express";
const app = express();
const port = 3000;


app.use(express.static("public"));

app.get("/", (req, res) => {
  // File upload
  res.sendFile("index.html",{root: "./public"});
});

// Middleware for About page

const handleAuth = (req, res, next) => {
  console.log("Authenticating user");
  res.json({ message: "User authenticated" });
  next();
};

const handleAuthorization = (req, res, next) => {
  console.log("Authorizing user");
  next();
}

const printTime = (req, res, next) => {
  console.log("Time: ", new Date());
  next();
}

app.get("/about", handleAuth,handleAuthorization,printTime,(req, res) => {
  // File upload
  res.sendFile("about.html",{root: "./public"});
});
app.get("/contact", (req, res) => {
  // File upload
  res.sendFile("contact.html",{root: "./public"});
});
app.get("/service", (req, res) => {
    // File upload
    res.sendFile("service.html",{root: "./public"});
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
