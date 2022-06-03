const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID!
        username: String!
        email: String!
        password: String!
    }

    type Encounter {
        _id: ID!
        category: String!
        description: String!
    }
    
    type Query {
        users: [User]
        encounters(_id: String): [Encounter]
      }
    
`;

module.exports = typeDefs;

