import axios from "axios";
import React, { useState } from "react";

import { useHistory } from "react-router-dom";
import Header from "../components/Header";

import "../styles/create.scss";

const Create = () => {
  let history = useHistory();

  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [image, setImage] = useState("");
  const [review, setReview] = useState("");

  function createBook() {
    if(name.length === 0 || author.length === 0 || image.length === 0 || review.length === 0){
      alert("Fill all the input fields, please!")      
      return
    }

    async function fetchAndCreateBook() {
      await axios({
        method: "POST",
        url: "https://bookies-backend.herokuapp.com/create",
        data: {
          name: name,
          author: author,
          image: image,
          review: review,
        },
      });
    }

    fetchAndCreateBook()

    setTimeout(() => {
      history.push("/");
    }, 2000)
  }

  return (
    <>
      <Header />
      <div className="create">
        <h1>ADD A NEW BOOK</h1>
        <div className="form">
          <div className="input-field">
            <input
              type="text"
              required
              onChange={(e) => setName(e.target.value)}
              autoComplete="off"
              name="name"
              id="name"
              placeholder="Book's Name"
            />
          </div>
          <div className="input-field">
            <input
              type="text"
              required
              onChange={(e) => setAuthor(e.target.value)}
              autoComplete="off"
              name="author"
              id="author"
              placeholder="Book's Author"
            />
          </div>
          <div className="input-field">
            <input
              type="text"
              required
              onChange={(e) => setImage(e.target.value)}
              autoComplete="off"
              name="image"
              id="image"
              placeholder="Book's Image URL"
            />
          </div>
          <div className="review-field">
            <textarea
              placeholder="Book's Review"
              name="review"
              id="review"
              onChange={(e) => setReview(e.target.value)}
            ></textarea>
          </div>
          <div className="submit">
            <button onClick={createBook}>SUBMIT BOOK</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Create;
