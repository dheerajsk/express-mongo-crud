
const express = require("express");

const router = express.Router();
const repo = require('./productRepo');

const Product = require('./product');

products: Product[10] = [];

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
    var productIndex = this.products.indexOf(p => p.name == req.body.name);
    this.products.splice(productIndex, 1);
    res.status(200).send(this.products);
});

module.exports = router;