/**
 * order.service.js
 * 
 * This is an example of a frontend helper for sending requests to the
 * GraphQL Server.
 */

const { request, gql } = require('graphql-request');

// @todo: use environment variables to define endpoint.
const endpoint = 'http://localhost:4000/graphql';

module.exports = {
    /**
     * Retrieves an order by its unique identifier from the server
     * @param {ID} id 
     * @returns Order
     */
    get: async (id) => {
        const query = gql`
            query GetOrder($id: ID!) {
                getOrder(id: $id) {
                    id, orderedBy, address, phone, productId, extra_pepperoni
                }
            }
        `;
        const variables = {id};
        return request(endpoint, query, variables).then(data => data.getOrder);
    },
    /**
     * Retrieves all available orders from the server
     * @returns [Order]
     */
    list: async () => {
        const query = gql`
            {
                orders {
                    id, orderedBy, address, phone, productId, extra_pepperoni
                }
            }
        `;
        return request(endpoint, query).then(data => data.orders);
    },
    /**
     * Creates a new order on the server.
     * @param {OrderInput} param0 
     * @returns Order
     */
    post: async ({orderedBy, address, phone, productId, extra_pepperoni}) => {
        const query = gql`
            mutation CreateOrder($input: OrderInput!) {
                createOrder(input: $input) {
                    id
                }
            }
        `;
        const variables = {
            input: { orderedBy, address, phone, productId, extra_pepperoni }
        };
        
        return request(endpoint, query, variables).then(data => data.createOrder);

    },
    /**
     * Removes an order from the server.
     * @param {ID} id 
     * @returns Boolean
     */
    delete: async (id) => {
        const query = gql`
            mutation RemoveOrder($id: ID!) {
                removeOrder(id: $id) {}
            }
        `;
        const variables = {id};
        return request(endpoint, query, variables).then(data => data.removeOrder);
    },
}