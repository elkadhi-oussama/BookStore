import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePages from "./pages/HomePages";
import AddBook from "./pages/AddBook";
import UpdateBook from "./pages/UpdateBook";
import { useState } from "react";

function App() {
  const [booksGetted, setbooksGetted] = useState([]);
  const getDataFun = (data) => {
    setbooksGetted(data);
  };

  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePages getDataFun={getDataFun} />} />
        <Route path="/add" element={<AddBook />} />
        <Route path="/update/:id" element={<UpdateBook book={booksGetted} />} />
      </Routes>
    </div>
  );
}

export default App;
