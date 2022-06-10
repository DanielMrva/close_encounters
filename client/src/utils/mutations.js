import { gql } from '@apollo/client';

export const ADD_EVENT = gql`
    mutation saveEncounter(  
        # $encounterUser: String,
        # $title: String,
        $category: String!, 
        $desc: String,
        $eventDate: String!, 
        $eventType: String!, 
        $lat: Float!, 
        $lng: Float!, 
        ) {
        saveEncounter(            
            category: $category,             
            description: $desc,
            date: $eventDate, 
            type: $eventType, 
            lat: $lat, 
            lng: $lng, 
            ) {
            _id
            date
            category
            type
            lat
            lng
            description
            createdAt
        }
    }
`;