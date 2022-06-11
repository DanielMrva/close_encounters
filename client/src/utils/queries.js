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
        userId
      }
    }
  }
`;

export const QUERY_SINGLE_USER = gql`
  query user($userId: ID!) {
    user(userId: $userId) {
      _id
      username
      email
    }
  }
`;

export const ALL_EVENTS = gql`
  query Allencounters {
    encounters {
      _id
      category
      type
      lat
      lng
      title
      description
      userId
    }
  }
`;

export const VIS_ENCOUNTERS = gql`
  query Visencounters(
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
      userId
    }
  }
`;
