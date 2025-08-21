import { BrowserRouter as Router, Routes, Route, Link, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <nav>
        {/* Link example */}
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>

        {/* NavLink example (adds styling when active) */}
        <NavLink to="/" style={({ isActive }) => ({ fontWeight: isActive ? "bold" : "normal" })}>
          Home
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>
          About
        </NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
