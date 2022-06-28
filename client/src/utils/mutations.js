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
    $commentUser: String
    $encounterId: ID
    $userId: ID
  ) {
    saveComment(
      commentText: $commentText
      commentUser: $commentUser
      encounterId: $encounterId
      userId: $userId
    ) {
      _id
      commentText
      createdAt
      commentUser
      userId {
        _id
      }
      encounterId {
        _id
      }
    }
  }
`;

// export const COB_ENC = gql`
//   corroborateEncounter(
//     $encounterId: ID!
//     $userId: ID!
//   ) {
//     corroborateEncounter(
//       encounterId: $encounterId
//       userId: $userId
//     ) {
//       _id
//       encounterUser
//       title
//       description
//       type
//       category
//       date
//       lat
//       lng
//       userId {
//         _id
//       }
//       corroborations
//     }
//   }
// `;

// export const COB_ENC = gql`
//   corroborateEncounter(
//     $encounterId: ID!
//     $userId: ID!
//   ) { 
//     corroborateEncounter(
//       encounterId: $encounterId
//       userId: $userId
//     ) {
//       _id
//       encounterUser
//       title
//       description
//       type
//       category
//       date
//       lat
//       lng
//       userId {
//         _id
//       } 
//       corroborations 
//     }
//   }
// `;

// export const COB_COM = gql`
//    corroborateComment(
//     $commentId: ID!
//     $userId: ID!
//   ) {
//     corroborateComment(
//       commentId: $commentId
//       userId: $userId
//     )  {
//       _id
//       commentText
//       createdAt
//       title
//       commentUser
//       userId 
//       encounterId
//     }
//   }
// `;
