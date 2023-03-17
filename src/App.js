import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Details from "./components/Details";
import YoutubePlayer from "./components/YoutubePlayer";
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
          <Route exact path="/details/:id/yt" element={<YoutubePlayer />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
