const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

const express = require("express");
const app = express();

app.use(express.urlencoded({ extended:true}))
// use 'use' method to handle requests for static files in the "public" directory
app.use("/static", express.static("public"));
app.set("View engine", "js")

app.get('/', (req, res) => {
 res.render('AddMovie.js');
});

app.post('/', (req, res) => {
    console.log(req.body)
});

app.listen(3000, () => console.log("Server Up and running"));