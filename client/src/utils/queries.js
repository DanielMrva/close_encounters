import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  query users {
    users {
      username
      email
      password
    }
  }
`;

// this needs to be fixed
export const ALL_EVENTS = gql`
  query allEvents {
    event {
      _id
      date
      category
      type
      lat
      lng
      desc
      user {
        username
      }
    }
  }
`;

export const USER_EVENTS = gql`
  query encounters( $username: String!) {
    encounters(username: $username) {
      _id
      date
      type
      category
      lat
      long
      description
    }
  }`

export const VIS_ENCOUNTERS = gql`
    query Visencounters($lowlat: Float!, $hilat: Float!, $lowlng: Float!, $hilng: Float!) {
    visencounters(lowlat: $lowlat, hilat: $hilat, lowlng: $lowlng, hilng: $hilng) {
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
