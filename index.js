const express = require("express");
const app = express();
const connection = require("./model/connection");
const path = require("path");
const bodyparser = require("body-parser");
const customerRoute = require("./Routes/customer");
const mongoose = require("mongoose");


app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
    extended : true
}));

app.use(customerRoute);

// Handler for 404 - Resource Not Found
app.use((req,res,next) => {
    res.status(404).send("Oops! Page not found");
});

// Handler for 500 
app.use((err,req,res,next) => {
    //console.error(err.stack);
    res.status(500).send("ERROR");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, (req,res) => console.log(`The server is running in the port ${PORT}`));;