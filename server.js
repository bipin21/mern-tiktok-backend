const express = require("express");
const mongoose = require("mongoose");
const Data = require("./data.js");

// app config
const app = express();
const port = 9000;

// middlewares

// DB Config

// api endpoints

app.get("/", (req, res) => res.status(200).send("Hello world"));
app.get("/v1/posts", (req, res) => res.status(200).send(Data));

// listen
app.listen(port, () => console.log(`listening in localhost ${port}`));
