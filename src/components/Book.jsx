import React from "react";

import '../styles/book.scss'

const Book = ({ bookImage, bookName, bookAuthor }) => {
  return (
    <div className="book-wrapper">
      <div className="book-image">
        <img src={bookImage} alt={bookName} />
      </div>
      <div className="book-info">
        <h2>{bookName}</h2>
        <p>{bookAuthor}</p>
      </div>
    </div>
  );
};

export default Book;
