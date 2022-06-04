const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID!
        username: String!
        email: String!
        password: String!
        encounters: [Encounter]
    }

    type Encounter {
        _id: ID!
        encounterId: String!
        category: String!
        location: String!
        description: String!
    }
    
    type Query {
        me(_id: String!): User
    }

    input saveEncounterInput {
        encounterId: String!
        category: String!
        location: String!
        description: String!
    }

    
`;

module.exports = typeDefs;

