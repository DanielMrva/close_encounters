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
    
    type Auth {
        token: ID!
        user: User
    }

    type Query {
        me(_id: String!): User
        users: [User]
        encounters(username: String): [Encounter]
        encounter(encounterId: ID!): Encounter
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        saveEncounter(encounterId: String!, category: String!, lat: Float!, lng: Float!, description: Float!): User
        removeEncounter(encounterId: String!): Encounter
    }
`;

module.exports = typeDefs;

// input saveEncounterInput {
//     encounterId: String!
//     category: String!
//     location: String!
//     description: String!
// }