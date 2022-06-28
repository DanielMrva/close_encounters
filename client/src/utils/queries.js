import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  query users {
    users {
      encounters {
        _id
        type
        category
        lat
        lng
        title
        description
        userId {
          username
          profilepic
        }
      }
    }
  }
`;

export const QUERY_SINGLEUSER = gql`
  query user {
    user {
      username
      email
      password
      profilepic
      _id
    }
  }
`;

// this needs to be fixed
export const ALL_EVENTS = gql`
  query allencounters {
    encounters {
      _id
      encounterUser
      date
      category
      type
      lat
      lng
      title
      description
      userId {
        username
        profilepic
      }
      commentId {
        commentText
        commentUser
      }
    }
  }
`;

export const USER_EVENTS = gql`
  query encounters($username: String!) {
    encounters(username: $username) {
      _id
      date
      type
      category
      lat
      long
      description
      userId {
        username
        profilepic
      }
      commentId {
        commentText
        commentUser
      }
    }
  }
`;

export const VIS_ENCOUNTERS = gql`
  query visencounters(
    $lowlat: Float!
    $hilat: Float!
    $lowlng: Float!
    $hilng: Float!
  ) {
    visencounters(
      lowlat: $lowlat
      hilat: $hilat
      lowlng: $lowlng
      hilng: $hilng
    ) {
      _id
      encounterUser
      date
      category
      type
      lat
      lng
      title
      description
      createdAt
      userId {
        _id
        username
        profilepic
      }
      commentId {
        commentText
        commentUser
      }
    }
  }
`;

export const ENC_COMMENTS = gql`
  query encounterComments( $encounterId: String! ) {
    encounterComments( encounterId: $encounterId){
      commentText
      createdAt
      commentUser
      userId {
        _id
        username
      }
      encounterId {
        _id
      }
    }
  }
`;

export const USER_COMMENTS = gql`
  query userComments( $userId: ID! ) {
    userComments{
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

export const ALL_COMMENTS = gql`
  query allcomments {
    allcomments {
      commentText
      createdAt
      commentUser
      userId {
        _id
      }
      encounterId
    }
  }
`;

export const ONE_COMMENT = gql`
  query oneComment( $commentId: ID!) {
    oneComment {
      commentText
      createdAt
      commentUser
      userId {
        _id
      }
      encounterId
    }
  }
`;


