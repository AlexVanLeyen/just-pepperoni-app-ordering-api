/**
 * graphql/resolvers.js
 * 
 * This file defines all of the resolvers for the project.
 */

const Order = require('../models/order.model');
const database = require('../services/database.service');

module.exports = {
    Query: {
        orders: () => database.list(),
        getOrder: (_, {id}) => {
            const order = database.get(id);
            if (! order) {
                throw new Error('No order exists with id ' + id);
            }
            return order;
        },
    },
    Mutation: {
        createOrder: (_, {input}) => {
            const id = database.generateId();
            input.id = id;
            database.store(id, input);
            return new Order(id, input);
        },
        updateOrder: (_, {id, input}) => {
            if (! database.get(id)) {
                throw new Error('No order exists with id ' + id);
            }
            database.store(id, input);
            return new Order(id, input);
        },
        removeOrder: (_, {id}) => {
            database.remove(id);
            return true;
        }
    }
};