import React, { useState } from 'react';
import InputForm from './InputForm';
// include an event input to see all of your events (or the events of a searched profile)

export default function InputPage() {

    const [events, setEvents] = useState([]);

    const addEvent = (item) => {

        console.log('Adding the following event:', item);

        // insert a validator to check if anything is being added here

        const newEvent = [item, ...events];
        console.log(`newEvent: ${newEvent}`);

        return setEvents[newEvent];
    };


    return (
        <div>
            <h1>Input Your Encounter</h1>
            <InputForm onSubmit={addEvent} />
        </div>
    )

}