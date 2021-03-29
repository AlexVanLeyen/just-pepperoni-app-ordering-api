/**
 * models/order.model.js
 */
module.exports = class Order {
    constructor(id, { orderedBy, address, phone, productId, extra_pepperoni }) {
        this.id = id;
        this.orderedBy = orderedBy;
        this.address = address;
        this.phone = phone;
        this.productId = productId;
        this.extra_pepperoni = extra_pepperoni;
    }
}