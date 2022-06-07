import "./Createpost.css";
import React, { useState } from "react";

export default function Createpost() {
  const [category, setCategory] = useState("");
  const [desc, setDesc] = useState("");

  const handleDescChange = (e) => {
    setDesc(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    let data = {
      //   date: eventDate,
      //   time: eventTime,
      category: category,
      //   type: eventType,
      //   latitude: lat,
      //   longitude: lng,
      description: desc,
    };

    console.log(data);

    return data;
  };

  return (
    <div className="create-post">
      <h6>you are currently in</h6>
      <h2>DENVER, COLORADO</h2>
      <div className="input-flex-container">
        <div className="main-box">
          <form onSubmit={submitHandler}>
            <input
              className="text-box"
              type="textarea"
              placeholder="Have a recent encounter?"
              value={desc}
              name="desc"
              onChange={handleDescChange}
            ></input>

            <div className="button-box">
              <span id="checkbox">
                <input
                  type="checkbox"
                  placeholder="Category"
                  value={category}
                  id="paranormal"
                  name="paranormal"
                  onChange={handleCategoryChange}
                ></input>
                <label for="paranormal">
                  <i className="fa-solid fa-ghost fa-xl"></i>
                </label>

                <input
                  type="checkbox"
                  value={category}
                  id="crypto-zoological"
                  name="crypto-zoological"
                  onChange={handleCategoryChange}
                ></input>
                <label for="crypto-zoological">
                  <i className="fa-solid fa-dragon fa-xl"></i>
                </label>

                <input
                  type="checkbox"
                  value={category}
                  id="extraterrestrial"
                  name="extraterrestrial"
                  onChange={handleCategoryChange}
                ></input>
                <label for="extraterrestrial">
                  <i className="fa-solid fa-rocket fa-xl"></i>
                </label>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
