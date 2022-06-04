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
    }


    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        saveEncounter(encounterId: String!, category: String!, location: String!, description: String!): User
        removeEncounter(encounterId: String!): User
    }
`;

module.exports = typeDefs;

// input saveEncounterInput {
//     encounterId: String!
//     category: String!
//     location: String!
//     description: String!
// }