import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_EVENT } from '../../utils/mutations';


export default function InputForm(props) {


    // option 1 - using react mini project as a guide
    const [formData, setFormData] = useState({})


    // handles the form input changes and sends that along to the formData state variable
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };

    const [addEvent, { error }] = useMutation(ADD_EVENT)

    // handles the form submit and runs the create mutation
    const submitHandler = async (e) => {

        e.preventDefault();

        try {
            const { data } = await addEvent({
                variables: {
                    ...formData,
                    // figure out how to pull the username from the context
                    // user: Auth.getProfile().data.username
                },
            });
            
        } catch (e) {
            console.log(e);
        }

        setFormData({});
    };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Date"
          value={eventDate}
          name="date"
          onChange={handleInputChange}
        ></input>
        <input
          type="text"
          placeholder="Time"
          value={eventTime}
          name="time"
          onChange={handleInputChange}
        ></input>
        <input
          type="text"
          placeholder="Category"
          value={category}
          name="category"
          onChange={handleInputChange}
        ></input>
        <input
          type="text"
          placeholder="Type"
          value={eventType}
          name="type"
          onChange={handleInputChange}
        ></input>
        <input
          type="text"
          placeholder="Latitude"
          value={lat}
          name="lat"
          onChange={handleInputChange}
        ></input>
        <input
          type="text"
          placeholder="Longitude"
          value={lng}
          name="lng"
          onChange={handleInputChange}
        ></input>
        <input
          type="text"
          placeholder="Description"
          value={desc}
          name="desc"
          onChange={handleInputChange}
        ></input>
        <button>Add your event!</button>
      </form>
    </div>
  );
};
