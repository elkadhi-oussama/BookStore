import React from "react";
import "./AddBook.css";

const AddBook = () => {
  return (
    <div className="centreForm">
      {" "}
      <div class="form">
        <div class="title">Add Book</div>
        <div class="subtitle">Let's add your book!</div>
        <div class="input-container ic1">
          <input id="firstname" class="input" type="text" placeholder=" " />
          <div class="cut"></div>
          <label for="firstname" class="placeholder">
            First name
          </label>
        </div>
        <div class="input-container ic2">
          <input id="lastname" class="input" type="text" placeholder=" " />
          <div class="cut"></div>
          <label for="lastname" class="placeholder">
            Last name
          </label>
        </div>
        <div class="input-container ic2">
          <input id="email" class="input" type="text" placeholder=" " />
          <div class="cut cut-short"></div>
          <label for="email" class="placeholder">
            Email
          </label>
        </div>
        <button type="text" class="submit">
          submit
        </button>
      </div>
    </div>
  );
};

export default AddBook;
