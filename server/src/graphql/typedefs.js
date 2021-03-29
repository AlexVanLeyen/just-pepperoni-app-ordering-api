/**
 * graphql/typedefs
 * 
 * This script defines the types used within the graphql schema
 */

module.exports = `
    input OrderInput {
        orderedBy: String
        address: String
        phone: String
        productId: Int
        extra_pepperoni: Boolean
    }

    type Order {
        id: ID!
        orderedBy: String!
        address: String!
        phone: String!
        productId: Int!,
        extra_pepperoni: Boolean!
    }

    type Query {
        orders: [Order]!
        getOrder(id: ID!): Order
    }

    type Mutation {
        createOrder(input: OrderInput!): Order
        updateOrder(id: ID!, input: OrderInput!): Order
        removeOrder(id: ID!): Boolean
    }
`