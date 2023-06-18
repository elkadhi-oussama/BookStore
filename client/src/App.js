import { Route, Routes } from "react-router-dom";
import "./App.css";
import Hello from "./pages/Hello";
import ReactJS from "./pages/ReactJS";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Hello />} />
        <Route path="react" element={<ReactJS />} />
      </Routes>
    </div>
  );
}

export default App;
