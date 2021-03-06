import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router";
import axios from "axios";
import Header from "../components/Header";

import "../styles/book-page.scss";

const BookPage = () => {
  const [bookName, setBookName] = useState("");
  const [bookAuthor, setBookAuthor] = useState("");
  const [bookImage, setBookImage] = useState("");
  const [bookReview, setBookReview] = useState("");

  const [isLoading, setIsLoading] = useState(true)

  const history = useHistory();

  const { id } = useParams();

  useEffect(() => {
    async function fetchAndUpdatePageStates() {
      await axios({
        url: `https://bookies-backend.herokuapp.com/get/${id}`,
        method: "GET",
      }).then((res) => {
        setIsLoading(false)
        
        const bookInfo = res.data;

        setBookName(bookInfo.name);
        setBookAuthor(bookInfo.author);
        setBookImage(bookInfo.image);
        setBookReview(bookInfo.review);
      });
    }


    fetchAndUpdatePageStates();

    /* eslint-disable-next-line */
  }, []);

  function handleEdit() {
    history.push(`/edit/${id}`);
  }

  function handleDelete() {
    axios({
      method: "DELETE",
      url: `https://bookies-backend.herokuapp.com/delete/${id}`,
    }).then((res) => {
      console.log(res.data);
    });

    history.push("/");
  }

  return (
    <>
      <Header />
      {isLoading ? (
        <div className="loading">
          <h1>Loading...</h1>
        </div>
      ) : (
        <div className="book-page">
          <h1>{bookName}</h1>
          <p>{bookAuthor}</p>
          <img src={bookImage} alt={bookName} />
          <h2>Review</h2>
          <p className="review">{bookReview}</p>
          <div className="buttons">
            <button className="edit" onClick={handleEdit}>
              Edit
            </button>
            <button className="delete" onClick={handleDelete}>
              Delete
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default BookPage;
