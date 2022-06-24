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
