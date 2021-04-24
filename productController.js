
const express = require("express");

const router = express.Router();
const repo = require('./productRepo');

const Product = require('./product');

router.post("", (req, res) => {
    const newProduct = new Product(req.body.name, req.body.price);
    repo.add(newProduct, () => {
        res.status(200).send();
    })
});

router.get("", (req, res) => {
    repo.get((products) => {
        res.status(200).send(products);
    })
});

router.put("", (req, res) => {
    const productToUpdate = new Product(req.body.name, req.body.price, req.body._id);
    repo.update(productToUpdate, () => {
        res.status(200).send();
    })
});

router.delete("", (req, res) => {
    const id = req.body._id;
    repo.delete(id, () => {
        res.status(200).send();
    })
});

module.exports = router;