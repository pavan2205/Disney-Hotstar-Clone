import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Details from "./components/Details";
import Login from "./components/Login";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/details/:id" element={<Details />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
