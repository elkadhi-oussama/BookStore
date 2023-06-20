import React from "react";
import "./BookCards.css";

const BookCard = ({ book }) => {
  return (
    <div>
      <div className="card">
        <img src={book.cover} alt="" />
        <div className="descriptions">
          <h1> {book.title} </h1>
          <p>{book.desc}</p>
          <button>
            <i className="fab fa-youtube"></i>
            Download
          </button>
        </div>
      </div>
      <div className="styleBtnCard">
        <button className="DelBTN">Delete</button>
        <button className="UpdBTN">Update</button>
      </div>
    </div>
  );
};

export default BookCard;
