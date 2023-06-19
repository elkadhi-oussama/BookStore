import React from "react";
import "./BookCards.css";

const BookCard = ({ book }) => {
  return (
    <div className="card">
      <img src={book.cover} alt="" />
      <div className="descriptions">
        <h1> {book.title} </h1>
        <p>{book.desc}</p>
        <button>
          <i className="fab fa-youtube"></i>
          Play trailer on YouTube
        </button>
      </div>
    </div>
  );
};

export default BookCard;
