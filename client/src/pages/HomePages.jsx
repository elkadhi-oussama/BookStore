import React, { useEffect, useState } from "react";
import axios from "axios";
import BookCard from "../components/BookCard";
import "./HomePage.css";
import { Link } from "react-router-dom";

const HomePages = ({ getDataFun }) => {
  const [allBooks, setAllBooks] = useState([]);
  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const result = await axios.get("http://localhost:5000/");
        setAllBooks(result.data);
        getDataFun(result.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllData();
  }, []);

  return (
    <div className="fixCss">
      <h1 className="titleStore">Book Store</h1>
      <Link to={"/add"} className="addLink">
        <button className="AddBook"> Add Book </button>
      </Link>
      <div className="wrapper">
        {allBooks.map((el) => (
          <BookCard key={el.id} book={el} />
        ))}
      </div>
    </div>
  );
};

export default HomePages;
