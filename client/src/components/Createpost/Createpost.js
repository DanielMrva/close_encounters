import "./Createpost.css";
import React, { useState } from "react";
import Auth from '../../utils/auth';
import Login from '../../pages/Login/Login';

// added
import { useMutation } from '@apollo/client';
import { ADD_EVENT } from '../../utils/mutations';

let catArr = []

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
  const [formData, setFormData] = useState({});

  const categoryArr = ['Visual Sighting', 'Audible Sighting', 'Physical contact', 'Environmental change', 'PsychoKinesis'];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCategoryChange = (e) => {

    if (e.target.checked) {
      catArr.push(e.target.name);
    }

    if (!e.target.checked) {
      let index = catArr.indexOf(e.target.name);
      console.log(index);
      catArr.splice(index, 1);
    }

    console.log(catArr)
    setFormData({ ...formData, category: catArr})

  };


  const [addEvent, { error }] = useMutation(ADD_EVENT)
  
  // const { loading, err, data } = useMutation(ADD_EVENT);
  // if (loading) return "loading...";
  // if (err) return err.message;

  // handles the form submit and runs the create mutation
  const submitHandler = async (e) => {

    e.preventDefault();

    console.log(formData)

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
    // setFormData({});
  };


  const handleTypeChange = (e) => {

    setFormData({ ...formData, eventType: e.target.id })

  }

  if (Auth.loggedIn()) {
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
                  // name="paranormal"
                  name="category"
                  onChange={handleTypeChange}
                ></input>
                <label for="paranormal">
                  <i className="fa-solid fa-ghost fa-xl"></i>
                </label>

                <input
                  type="radio"
                  // type="checkbox"
                  value={formData.category}
                  id="crypto-zoological"
                  // name="crypto-zoological"
                  name="category"
                  onChange={handleTypeChange}
                ></input>
                <label for="crypto-zoological">
                  <i className="fa-solid fa-dragon fa-xl"></i>
                </label>

                <input
                  type="radio"
                  // type="checkbox"
                  value={formData.category}
                  id="extraterrestrial"
                  // name="extraterrestrial"
                  name="category"
                  onChange={handleTypeChange}
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
                      key={index}
                      name={item}
                      onChange={handleCategoryChange}
                    ></input>
                    <label>{item}</label>
                  </div>
                )})}
              </span>
            </div>

            <input type="submit" value="Submit!" />

          </form>
        </div>
      </div>
    </div>
  );
  } else {

    return <Login/>

  }
}
