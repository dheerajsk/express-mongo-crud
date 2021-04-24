const express = require("express");
const bodyParser = require("body-parser").json();

const productController = require("./productController");
const mongodbConfig = require('./mongodb');


const server = express();

mongodbConfig.connect(() => {
    console.log("Connected to MongoDB in Express");
});

server.use(bodyParser);
server.get("", (req, res) => {
    res.end("Hello from express");
});

server.use("/api/Product", productController);

server.listen(3000 || process.env.PORT);

console.log("Server is listening on port 3000")