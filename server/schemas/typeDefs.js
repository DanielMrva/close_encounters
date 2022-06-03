const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID!
        username: String!
        email: String!
        password: String!
        encounters: String!
    }

    type Encounter {
        _id: ID!
        category: String!
        description: String!
    }
    
    type Query {
        me(_id: String!): User
    }
    
`;

module.exports = typeDefs;

