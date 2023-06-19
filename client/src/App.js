import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePages from "./pages/HomePages";
import AddBook from "./pages/AddBook";
import UpdateBook from "./pages/UpdateBook";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="/add" element={<AddBook />} />
        <Route path="/update" element={<UpdateBook />} />
      </Routes>
    </div>
  );
}

export default App;
