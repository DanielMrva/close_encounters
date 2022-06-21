const { gql } = require('apollo-server-express');
// import { gql } from '@apollo/client';

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
        encounterUser: String
        date: String
        category: [String!]
        type: String!
        lat: Float!
        lng: Float!
        title: String!
        description: String!
        createdAt: String
        userId: String
        # commentId: [String] Array of comment ID's for the comments
        # cooberations: [String] Array of UserID's for users that have cooberated this
    }

    # type Comment {
    #     _id: ID!
    #     commentText: String!
    #     createdAt: String
    #     title: String
    #     commentUser: String
    #     userId: String
    #     encounterId: String
    #     cooberations: [String] same as L26
    # }
    
    type Auth {
        token: ID!
        user: User!
    }

    type Query {
        me(_id: String!): User
        users: [User]
        user(userId: ID!): User
        singleuser(email: String!): User
        allencounters: [Encounter]
        encounters(username: String): [Encounter]
        encounter(encounterId: ID!): Encounter
        visencounters(lowlat: Float!, hilat: Float!, lowlng: Float!, hilng: Float!): [Encounter]
        # encounterComments(encounterId: ID!): [Comment] Query for all comments associated with Encounter
        # userComments(userId: ID!): [Comment] User Comment's query
        # allcomments: [Comment] Just in case?...All comments from all encounters
    }

    # type Mutation {
    #     addUser(username: String!, email: String!, password: String!): Auth
    #     login(email: String!, password: String!): Auth
    #     saveEncounter(
    #         encounterUser: String!,
    #         date: String!, 
    #         category: String!, 
    #         type: String!, 
    #         lat: Float!, 
    #         lng: Float!, 
    #         # title: String!, 
    #         description: String!)
    #         : Encounter
    #     removeEncounter(encounterId: ID!): Encounter
    # }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        saveEncounter(
            encounterUser: String
            title: String
            description: String
            type: String
            category: [String]
            date: String
            lat: Float
            lng: Float
            ): Encounter
        removeEncounter(encounterId: ID!): Encounter
        # saveComment(
        #     commentText: String!
        #     title: String
        #     commentUser: String
        #     encounterId: String
        #     ): Comment 
        # cooberateEncounter(
        #     encounterId: String!
        #     userId: String!
        # ): Encounter
        # cooberateComment(
        #     commentId: String!
        #     userId: String!
        # ): Comment

    }
`;

module.exports = typeDefs;

// input saveEncounterInput {
//     encounterId: String!
//     category: String!
//     location: String!
//     description: String!
// }