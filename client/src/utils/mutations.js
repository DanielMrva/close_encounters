import { gql } from "@apollo/client";

// export const ADD_EVENT = gql`
//     mutation saveEncounter(
//         $encounterUser: String,
//         # $title: String,
//         $category: String,
//         $desc: String,
//         $date: String,
//         $type: String,
//         $lat: Float,
//         $lng: Float,
//         $userId: String,
//         ) {
//         saveEncounter(
//             encounterUser: $encounterUser,
//             category: $category,
//             description: $desc,
//             date: $date,
//             type: $type,
//             lat: $lat,
//             lng: $lng,
//             userId: $userId,
//             ) {
//             _id
//             date
//             category
//             type
//             lat
//             lng
//             description
//             userId
//             createdAt
//         }
//     }
// `;

export const ADD_EVENT = gql`
  mutation saveEncounter(
    $encounterUser: String
    $title: String
    $description: String
    $type: String
    $category: [String]
    $date: String
    $lat: Float
    $lng: Float
    $userId: ID
  ) {
    saveEncounter(
      encounterUser: $encounterUser
      title: $title
      description: $description
      type: $type
      category: $category
      date: $date
      lat: $lat
      lng: $lng
      userId: $userId
    ) {
      _id
      encounterUser
      title
      description
      type
      category
      date
      lat
      lng
      userId {
        _id
      }
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation saveComment(
    $commentText: String
    $title: String
    $commentUser: String
    $encounterId: String
    $userId: ID
  ) {
    saveComment(
      commentText: $commentText
      title: $title
      commentUser: $commentUser
      encounterId: $encounterId
      userId: $userId
    ) {
      _id
      commentText
      title
      commentUser
      encounterId
      userId {
        _id
      }

    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        profilepic
      }
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation saveComment(
    $commentText: String
    $title: String
    $commentUser: String
    encounterId: ID
    userId: ID
  ) {
    saveComment(
      commentText: $commentText
      title: $title
      commentUser: $commentUser
      encounterId: $encounterId
      userId: $userId
    ) {
      _id
      commentText
      createdAt
      title
      commentUser
      userId 
      encounterId
      cooberations
    }
  }
`;

export const COB_ENC = gql`
  cooberateEncounter(
    $encounterId: ID!
    $userId: ID!
  ) {
    cooberateEncounter(
      encounterId: $encounterId
      userId: $userId
    ) {
      _id
      encounterUser
      title
      description
      type
      category
      date
      lat
      lng
      userId {
        _id
      }
      cooberations
    }
  }
`;

export const COB_COM = gql`
   cooberateComment(
    $commentId: ID!
    $userId: ID!
  ) {
    cooberateComment(
      commentId: $commentId
      userId: $userId
    )  {
      _id
      commentText
      createdAt
      title
      commentUser
      userId 
      encounterId
      cooberations
    }
  }
`;
