import "./Createpost.css";
import React, { useState } from "react";

// added
import { useMutation } from '@apollo/client';
import { ADD_EVENT } from '../../utils/mutations';

export default function Createpost() {

  // commented out
  // const [category, setCategory] = useState("");
  // const [desc, setDesc] = useState("");

  // const handleDescChange = (e) => {
  //   setDesc(e.target.value);
  // };

  // const handleCategoryChange = (e) => {
  //   setCategory(e.target.value);
  // };

  // const submitHandler = (e) => {
  //   e.preventDefault();

  //   let data = {
  //     //   date: eventDate,
  //     //   time: eventTime,
  //     category: category,
  //     //   type: eventType,
  //     //   latitude: lat,
  //     //   longitude: lng,
  //     description: desc,
  //   };

  //   console.log(data);

  //   return data;



  // AG Code
  // uses one state variable for all the form data
  const [formData, setFormData] = useState({})
  const categoryArr = ['Visual Sighting', 'Audible Sighting', 'Physical contact', 'Environmental change', 'PsychoKinesis'];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCategoryChange = (e) => {
    // setCategory(e.target.value);
    console.log(e);
  };

  const [addEvent, { error }] = useMutation(ADD_EVENT)
  
  // const { loading, err, data } = useMutation(ADD_EVENT);
  // if (loading) return "loading...";
  // if (err) return err.message;

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

        console.log(data);
        
    } catch (err) {
        console.log(err);
    }

    // resets formData to empty
    setFormData({});
  };

  return (
    <div className="create-post">
      <h6>you are currently in</h6>
      {/* make this a generated location */}
      <h2>DENVER, COLORADO</h2>
      <div className="input-flex-container">
        <div className="main-box">
          <form onSubmit={submitHandler}>

            {/* <input
              className="text-box"
              type="textarea"
              placeholder="Have a recent encounter?"
              value={desc}
              name="desc"
              onChange={handleDescChange}
            ></input> */}

            <label>Date:</label>
            <input
              type="text"
              placeholder="Date"
              value={formData.eventDate}
              name="eventDate"
              onChange={handleInputChange}
            ></input>

            {/* <label>Time: </label>
            <input
              type="text"
              placeholder="Time"
              value={eventTime}
              name="eventTime"
              onChange={handleInputChange}
            ></input> */}

            {/* makle this a mapped checkbox */}
            <input
              type="text"
              placeholder="Category"
              value={formData.category}
              name="category"
              onChange={handleCategoryChange}
            ></input>

            {/* <input
              type="text"
              placeholder="Type"
              value={eventType}
              name="type"
              onChange={handleTypeChange}
            ></input> */}
            
            <input
              type="text"
              placeholder="Latitude"
              value={formData.lat}
              name="lat"
              onChange={handleInputChange}
            ></input>
            <input
              type="text"
              placeholder="Longitude"
              value={formData.lng}
              name="lng"
              onChange={handleInputChange}
            ></input>
            <label>Describe your encounter:</label>
            <input
              className="text-box"
              type="textarea"
              placeholder="Description"
              value={formData.desc}
              name="desc"
              onChange={handleInputChange}
            ></input>

            {/* category checkboxes - changed to radio buttons */}
            <div className="button-box">
              <span id="radio-buttons">
              {/* <span id="checkbox"> */}
                <input
                  type="radio"
                  // type="checkbox"
                  placeholder="Category"
                  value={formData.category}
                  id="paranormal"
                  className="checkbox-element"
                  name="paranormal"
                  onChange={handleCategoryChange}
                ></input>
                <label for="paranormal">
                  <i className="fa-solid fa-ghost fa-xl"></i>
                </label>

                <input
                  type="radio"
                  // type="checkbox"
                  value={formData.category}
                  id="crypto-zoological"
                  name="crypto-zoological"
                  onChange={handleCategoryChange}
                ></input>
                <label for="crypto-zoological">
                  <i className="fa-solid fa-dragon fa-xl"></i>
                </label>

                <input
                  type="radio"
                  // type="checkbox"
                  value={formData.category}
                  id="extraterrestrial"
                  name="extraterrestrial"
                  onChange={handleCategoryChange}
                ></input>
                <label for="extraterrestrial">
                  <i className="fa-solid fa-rocket fa-xl"></i>
                </label>
              </span>
            </div>

            <div className="button-box">
              <span id="checkbox">
                {categoryArr.map((item, index) => {
                  return (
                  <div>
                    <input
                      type="checkbox"
                      value={item}
                      id={index}
                      name={item}
                      // onChange={}
                    ></input>
                    <label>{item}</label>
                  </div>
                )})}
              </span>

            </div>

          </form>
        </div>
      </div>
    </div>
  );
}
