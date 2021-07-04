import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Book from "../components/Book";
import Header from "../components/Header";

import "../styles/home.scss";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function fetchAndUpdateBooks() {
      await axios({
        url: "http://localhost:5000/get",
        method: "GET",
      }).then((res) => {
        setBooks(res.data);
      });
    }

    fetchAndUpdateBooks();
  }, []);

  return (
    <>
      <Header />
      {books.length > 0 ? (
        <div className="home">
          <div className="searchbar">
            <input
              autoComplete="off"
              type="text"
              name="search"
              id="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search for a book..."
            />
          </div>
          <div className="book-section">
            {books
              /* eslint-disable-next-line */
              .filter((book) => {
                if (search === "") {
                  return book;
                } else if (
                  book.name.toLowerCase().includes(search.toLowerCase())
                ) {
                  return book;
                }
              })
              .map((book, key) => (
                <Link className="book-link" key={key} to={`/book/${book._id}`}>
                  <Book
                    bookName={book.name}
                    bookAuthor={book.author}
                    bookImage={book.image}
                    className="book"
                  />
                </Link>
              ))}
          </div>
        </div>
      ) : (
        <div className="no-books-found">
          <h1>No books were found in the database, try to add a new book!</h1>
        </div>
      )}
    </>
  );
};

export default Home;
