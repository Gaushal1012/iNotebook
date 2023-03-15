const connectToMongo = require('./db');
const express = require('express');
var cors = require("cors");
connectToMongo();
const app = express()
const port = 5000

// For parsing application/json
app.use(express.json());
app.use(cors());

//Available Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));

app.get('/' , (req,res) => {
    res.send("Hello Users!!");
})

app.listen(port, () => {
    console.log(`iNotebook backend app listening at http://localhost:${port}`)
})