import React from "react";
import "./BookCards.css";
import axios from "axios";
import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
  const handelDelete = async (id) => {
    try {
      await axios.delete("http://localhost:5000/books/" + id);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="card">
        <img src={book.cover} alt="" />
        <div className="descriptions">
          <h1> {book.title} </h1>
          <p>{book.desc}</p>
          <Link to={book.down} target="_blank">
            <button>
              <i className="fab fa-youtube"></i>
              Download
            </button>
          </Link>
        </div>
      </div>
      <div className="styleBtnCard">
        <button className="DelBTN" onClick={() => handelDelete(book.id)}>
          Delete
        </button>
        <Link to={`/update/${book.id}`}>
          <button className="UpdBTN">Update</button>
        </Link>
      </div>
    </div>
  );
};

export default BookCard;
