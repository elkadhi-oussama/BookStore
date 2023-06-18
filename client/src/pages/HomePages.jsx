import React, { useEffect, useState } from "react";
import axios from "axios";

const HomePages = () => {
  const [allBooks, setAllBooks] = useState([]);
  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const result = await axios.get("http://localhost:5000/");
        setAllBooks(result.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllData();
  }, []);

  return (
    <div>
      {allBooks.map((el) => (
        <h1 key={el.id}> {el.title} </h1>
      ))}
    </div>
  );
};

export default HomePages;
