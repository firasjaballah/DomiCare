/********************* Requires *********************/

const express = require("express");
const mongoose = require("mongoose");
const app = express();
const Equipements = require("./routers/Equipements.js")
const serviceProvidersList = require("./routers/serviceProvidersList.js")
const ServiceSeeker = require("./routers/ServiceSeeker.js")
require("dotenv").config();
var cors = require("cors");
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/********************* Database *********************/

const uri = process.env.ATLAS_URI;
mongoose.connect(uri);
const connection = mongoose.connection;
connection.once("open", () => {
    console.log("Connected Database Successfully");
});

/********************** Routes **********************/
app.use("/", Equipements);
app.use("/serviceProvidersList",serviceProvidersList)
app.use("/ServiceSeeker", ServiceSeeker);
/**************** Listening Requests ****************/
const Port = process.env.PORT||3000;
app.listen(Port, function (req, res) {
    console.log(`Server is started on port ${Port}`);
});
