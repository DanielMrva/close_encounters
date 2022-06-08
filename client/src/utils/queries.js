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

export const SINGLE_EVENT = gql`
    query singleEvent($id: STRING!) {
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

export const USER_EVENT = gql``

export const VIS_ENCOUNTERS = gql``