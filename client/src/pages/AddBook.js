import React, { useState } from "react";
import "./AddBook.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddBook = () => {
  const [newBook, setnewBook] = useState({
    title: "",
    cover: "",
    desc: "",
  });
  const history = useNavigate();

  const handelADD = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/books", newBook);
      history("/");
    } catch (error) {
      console.log(error);
    }
  };

  // i will make anther function for add book
  // first one i need to add in every input attribute name
  // example : <input
  //          name ="title"
  //         id="firstname"
  //         class="input"
  //         type="text"
  //         placeholder=" "
  //         onChange={handelChange}
  //       />
  // i will make the function name handelchange ==> for get data from input and save in state
  // const handelChange = (e)=>{
  //   setnewBook (prev => ({...prev, [e.target.name]: e.target.value}))
  // }
  return (
    <div className="centreForm">
      {" "}
      <div className="form">
        <div className="title">Add Book</div>
        <div className="subtitle">Let's add your book!</div>
        <div className="input-container ic1">
          <input
            id="firstname"
            className="input"
            type="text"
            placeholder=" "
            onChange={(e) => setnewBook({ ...newBook, title: e.target.value })}
          />
          <div className="cut"></div>
          <label for="firstname" className="placeholder">
            Title
          </label>
        </div>
        <div className="input-container ic2">
          <input
            id="lastname"
            className="input"
            type="text"
            placeholder=" "
            onChange={(e) => setnewBook({ ...newBook, cover: e.target.value })}
          />
          <div className="cut"></div>
          <label for="lastname" className="placeholder">
            Image
          </label>
        </div>
        <div className="input-container ic2">
          <input
            id="email"
            className="input"
            type="text"
            placeholder=" "
            onChange={(e) => setnewBook({ ...newBook, desc: e.target.value })}
          />
          <div className="cut cut-short"></div>
          <label for="email" className="placeholder">
            Description
          </label>
        </div>
        <button onClick={handelADD} type="text" className="submit">
          ADD
        </button>
      </div>
    </div>
  );
};

export default AddBook;
