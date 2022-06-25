const { gql } = require("apollo-server-express");
// import { gql } from '@apollo/client';

const typeDefs = gql`
    type User {
        _id: ID!
        username: String!
        email: String!
        password: String!
        profilepic: String
        encounters: [Encounter]
        comments: [Comment]
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
        userId: User
        commentId: [Comment]
        corroborations : [ID]
    }

    type Comment {
        _id: ID!
        commentText: String
        createdAt: String
        title: String
        commentUser: String
        userId: User
        encounterId: Encounter
        corroborations : [ID]
    }
    
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
        encounterComments(encounterId: ID!): [Comment]
        userComments(userId: ID!): [Comment]
        allcomments: [Comment]
        oncComment(commentId: ID!): Comment
    }
    type Mutation {
        addUser(username: String!, email: String!, password: String!, profilepic: String): Auth
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
            userId: ID
            ): Encounter
        removeEncounter(encounterId: ID!): Encounter
        saveComment(
            commentText: String!
            commentUser: String
            encounterId: ID
            userId: ID
            ): Comment 
        corroborateEncounter(
            encounterId: ID!
            userId: ID!
        ): Encounter
        corroborateComment(
            commentId: ID!
            userId: ID!
        ): Comment

    }
`;

module.exports = typeDefs;

// input saveEncounterInput {
//     encounterId: String!
//     category: String!
//     location: String!
//     description: String!
// }
