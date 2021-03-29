/**
 * database.service.unit.test.js
 * 
 * This script is a little unit test to verify that
 * the list method is working on the database
 * 
 */

const { expect, describe, beforeEach } = require("@jest/globals");
const database = require('../../server/src/services/database.service');

describe('database.service', () => {

    beforeEach(() => {
        database.clear();
    });

    test('get', async () => {
        const id = database.generateId();
        const sampleOrder = {
            orderedBy: "Sarah Smith",
            address: "6 Hamilton Ave. North",
            phone: "613-555-5513",
            productId: 1,
            extra_pepperoni: true,
            id
        };
        database.store(id, sampleOrder);
        const order = database.get(id);
        expect(order).toStrictEqual(sampleOrder);
    });

    test('list', async () => {
        const id = database.generateId();
        const sampleOrder = {
            orderedBy: "Sarah Smith",
            address: "6 Hamilton Ave. North",
            phone: "613-555-5513",
            productId: 1,
            extra_pepperoni: true,
            id
        };
        database.store(id, sampleOrder);
        const orders = database.list();
        expect(orders).toStrictEqual([sampleOrder]);
    });

    test('remove', async () => {
        const id = database.generateId();
        const sampleOrder = {
            orderedBy: "Sarah Smith",
            address: "6 Hamilton Ave. North",
            phone: "613-555-5513",
            productId: 1,
            extra_pepperoni: true,
            id
        };
        database.store(id, sampleOrder);
        database.remove(id);
        const order = database.get(id);
        expect(order).toBeUndefined();
    });

    
});

