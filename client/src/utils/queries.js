import { gql } from '@apollo/client';

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
  query visencounters(
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

// export const USER_EVENT = gql``
