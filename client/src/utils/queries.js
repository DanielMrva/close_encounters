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

export const ALL_EVENTS = gql`
  query allEvents {
    event {
      _id
      eventDate
      eventTime
      category
      eventType
      lat
      lng
      desc
      user {
        username
      }
    }
  }
`;

export const VIS_ENCOUNTERS = gql`
    query Visencounters($lowlat: Float!, $hilat: Float!, $lowlng: Float!, $hilng: Float!) {
    visencounters(lowlat: $lowlat, hilat: $hilat, lowlng: $lowlng, hilng: $hilng) {
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

// export const USER_EVENT = gql``
