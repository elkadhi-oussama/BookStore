import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./UpdateBook.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UpdateBook = ({ book }) => {
  const param = useParams();
  const bookUpd = book.filter((el) => el.id === parseInt(param.id))[0];
  const [UpdateBook, setUpdateBook] = useState(bookUpd);
  const history = useNavigate();
  const handelChange = (e) => {
    setUpdateBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handelUpdate = async (id) => {
    try {
      await axios.put("http://localhost:5000/books/" + id, UpdateBook);
      history("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="centreForm">
      {" "}
      <div className="form">
        <div className="title">Update Book</div>
        <div className="subtitle">Let's update your book!</div>
        <div className="input-container ic1">
          <input
            name="title"
            id="firstname"
            className="input"
            type="text"
            placeholder={bookUpd && bookUpd.title}
            onChange={handelChange}
          />
          <div className="cut"></div>
          <label for="firstname" className="placeholder2">
            Title
          </label>
        </div>
        <div className="input-container ic2">
          <input
            name="cover"
            id="lastname"
            className="input"
            type="text"
            placeholder=" "
            onChange={handelChange}
          />
          <div className="cut"></div>
          <label for="lastname" className="placeholder">
            Image
          </label>
        </div>
        <div className="input-container ic2">
          <input
            name="desc"
            id="email"
            className="input"
            type="text"
            placeholder={bookUpd && bookUpd.desc}
            onChange={handelChange}
          />
          <div className="cut cut-short"></div>
          <label for="email" className="placeholder2">
            Description
          </label>
        </div>
        <button
          onClick={() => handelUpdate(bookUpd.id)}
          type="text"
          className="submit"
        >
          UPDATE
        </button>
      </div>
    </div>
  );
};

export default UpdateBook;
