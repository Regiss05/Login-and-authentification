const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { Console } = require("console");

const app = express();

var corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);

app.get("/", (req, res) => {
    res.json({message: "Welcome to my app"});
});


const PORT = process.env.PORT || 8000;
app.listen(PORT, () =>{
    console.log(`Server Listening on port ${PORT}.`);
});
