
const db = require('./mongodb');

exports.add = (product, callback) => {
    const collection = db.getCollection();
    collection.insertOne({ name: product.name, price: product.price }).then(() => {
        console.log("Product added");
        return callback("OK")
    });
}