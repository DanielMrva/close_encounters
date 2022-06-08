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

export const VIS_ENCOUNTERS = gql`
  query encounter(
    $lowlat: Float!
    $hilat: Float!
    $lowlng: Float!
    $hilng: Float!
  ) {
    encounter(
      query: {
        lat_gte: $lowlat
        lat_lte: $hilat
        lng_gte: $lowlng
        lng_lte: $hilng
      }
    ) {
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
