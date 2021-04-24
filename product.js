

module.exports = class Product {
    constructor(name, price, id) {
        this._id = id;
        this.name = name;
        this.price = price;
    }
}