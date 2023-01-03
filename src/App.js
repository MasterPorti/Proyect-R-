import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import ProfileCourse from "./modules/profileCourse/profileCourse";
import Home from "./pages/home/home";
import Video from "./pages/videos/video";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/videos" element={<Video />}></Route>
        <Route
          path="/profileCourse/:Paramsuuid"
          element={<ProfileCourse />}></Route>
      </Routes>
      {/* <Link to='/'>Home</Link>
      <Link to='/videos'>Video</Link> */}
    </div>
  );
}

export default App;
