import React, { useEffect, useState } from "react";

import axios from "axios";

import "../styles/edit.scss";
import { useHistory, useParams } from "react-router";
import Header from "../components/Header";

const Edit = () => {
  const history = useHistory();
  const { id } = useParams()

  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [image, setImage] = useState("");
  const [review, setReview] = useState("");

  useEffect(() => {
    if(name.length === 0 || author.length === 0 || image.length === 0 || review.length === 0){
      alert("Fill all the input fields, please!")      
      return
    }

    async function fetchAndUpdateStates(){
      await axios({
        url: `https://bookies-backend.herokuapp.com/get/${id}`,
        method: "GET",
      }).then((res) => {
        const bookInfo = res.data
  
        setName(bookInfo.name);
        setAuthor(bookInfo.author);
        setImage(bookInfo.image);
        setReview(bookInfo.review)
      });
    }

    fetchAndUpdateStates()

    /* eslint-disable-next-line */
  }, [])

  function updateBook() {
    axios({
      method: "PATCH",
      url: `https://bookies-backend.herokuapp.com/edit/${id}`,
      data: {
        name: name,
        author: author,
        image: image,
        review: review,
      },
    });

    history.push("/");
  }

  return (
    <>
      <Header />
      <div className="edit">
        <h1>EDIT BOOK</h1>
        <div className="form">
          <div className="input-field">
            <input
              type="text"
              autoComplete="off"
              name="name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Book's Name"
            />
          </div>
          <div className="input-field">
            <input
              type="text"
              autoComplete="off"
              name="author"
              value={author}
              id="author"
              onChange={(e) => setAuthor(e.target.value)}
              placeholder="Book's Author"
            />
          </div>
          <div className="input-field">
            <input
              type="text"
              autoComplete="off"
              name="image"
              id="image"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              placeholder="Book's Image URL"
            />
          </div>
          <div className="review-field">
            <textarea
              placeholder="Book's Review"
              name="review"
              value={review}
              id="review"
              onChange={(e) => setReview(e.target.value)}
            ></textarea>
          </div>
          <div className="submit">
            <button onClick={updateBook}>SUBMIT BOOK</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Edit;
