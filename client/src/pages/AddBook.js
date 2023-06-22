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
      <div class="form">
        <div class="title">Add Book</div>
        <div class="subtitle">Let's add your book!</div>
        <div class="input-container ic1">
          <input
            id="firstname"
            class="input"
            type="text"
            placeholder=" "
            onChange={(e) => setnewBook({ ...newBook, title: e.target.value })}
          />
          <div class="cut"></div>
          <label for="firstname" class="placeholder">
            Title
          </label>
        </div>
        <div class="input-container ic2">
          <input
            id="lastname"
            class="input"
            type="text"
            placeholder=" "
            onChange={(e) => setnewBook({ ...newBook, cover: e.target.value })}
          />
          <div class="cut"></div>
          <label for="lastname" class="placeholder">
            Image
          </label>
        </div>
        <div class="input-container ic2">
          <input
            id="email"
            class="input"
            type="text"
            placeholder=" "
            onChange={(e) => setnewBook({ ...newBook, desc: e.target.value })}
          />
          <div class="cut cut-short"></div>
          <label for="email" class="placeholder">
            Description
          </label>
        </div>
        <button onClick={handelADD} type="text" class="submit">
          ADD
        </button>
      </div>
    </div>
  );
};

export default AddBook;
