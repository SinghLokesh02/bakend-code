const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
// app.get("/", (req, res) => {
//   console.log(req.body);
//   res.sendFile("index.html", { root: __dirname });
// });
// app.get("/about", (req, res) => {
//   res.send("Hello Welcome my About Page!");
// });
// app.get("/service", (req, res) => {
//   res.send("Hello Welcome my Service Page!");
// });
// app.get("/contact", (req, res) => {
//   res.send("Hello Welcome my");
// });

// app.post("/post", (req, res) => {
//   res.send("Hello Welcome my Post Page!");
// });

// app.put("/put", (req, res) => {
//   res.send("Hello Welcome my Put Page!");
// });

// app.delete("/delete", (req, res) => {
//   res.send("Hello Welcome my Delete Page!");
// });


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/about.html'));
});

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/contact.html'));
});

app.get('/service', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/service.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port localhost:${port}`);
});
