import { gql } from '@apollo/client';

export const ADD_EVENT = gql`
    mutation addEvent($eventDate: String!, $eventTime: String, $category: String!, $eventType: String!, $lat: Float!, $lng: Float!, $desc: String) {
        addEvent(eventDate: $eventDate, eventTime: $eventTime, category: $category, eventType: $eventType, lat: $lat, lng: $lng, desc: $desc) {
            _id
            eventDate
            eventTime
            category
            eventType
            lat
            lng
            desc
            createdAt
        }
    }
`;

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
        token
        profile {
            _id
            name
        }
        }
    }
`;

