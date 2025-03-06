const express = require('express');
const app = express();
const userModel = require('./users');
const cors = require('cors');

app.use(cors());

app.get('/', async (req, res) => {
    res.send('Hello World');
});
app.get('/api/user', async (req, res) => {
    const user = await userModel.find();        
    res.send(user);
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));