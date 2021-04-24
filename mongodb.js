
const MongoClient = require('mongodb').MongoClient;

const uri = "mongodb://localhost:27017/ProductDB";
var collection;

module.exports = {
    connect: function (callback) {
        MongoClient.connect(uri).then(
            ((cleint) => {
                collection = cleint.db("ProductDB").collection("Products")
                console.log("Connected to MongoDB: ProductDB");
                return callback("OK");
            })
        ).catch(err => { console.log(err) });
    },

    getCollection: function(){
        return collection;
    }
}