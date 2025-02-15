import "tailwindcss/tailwind.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Coffee from "./Coffeepage/Coffee";
import Graphics from "./Graphicspage/Graphics";

function App() {
  return (
    // <div>
    //   <Graphics />
    //   <Coffee />
    // </div>

    <Router>
      <nav className="absolute text-white z-50">
        <Link to="/">Coffee</Link>
        <br />
        <Link to="/Graphics">Graphics</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Coffee />} />
        <Route path="/Graphics" element={<Graphics />} />
      </Routes>
    </Router>
  );
}

export default App;
