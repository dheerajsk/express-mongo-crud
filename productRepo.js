
const { ObjectId } = require('mongodb');
const db = require('./mongodb');

exports.add = (product, callback) => {
    const collection = db.getCollection();
    collection.insertOne({ name: product.name, price: product.price }).then(() => {
        console.log("Product added");
        return callback("OK")
    });
}

exports.get = (callback) => {
    const collection = db.getCollection();
    collection.find().toArray().then((products) => {
        return callback(products);
    })
}

exports.update = (product, callback) => {
    const collection = db.getCollection();
    console.log(product._id);
    collection.findOneAndUpdate({ _id: ObjectId(product._id) }, {
        $set: { name: product.name, price: product.price }
    }, {})
        .then(() => {
            return callback();
        });
}

exports.delete = (id, callback) => {
    const collection = db.getCollection();
    collection.deleteOne({ _id: ObjectId(id) }).then(() => {
        callback();
    });
}