const { expect } = require("@jest/globals");
const orderApi = require('../client/services/order.service');

test('Post an order', async () => {
    const order = {
        orderedBy: "Sarah Smith",
        address: "6 Hamilton Ave. North",
        phone: "613-555-5513",
        productId: 1,
        extra_pepperoni: true
    }
    const {id} = await orderApi.post(order);
    const storedOrder = await orderApi.get(id);
    expect(storedOrder).toMatchObject(order);
});