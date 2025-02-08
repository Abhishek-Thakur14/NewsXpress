import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import NewsBoard from "./components/NewsBoard.jsx";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<NewsBoard category="general" />} />
        <Route path="/features" element={<h2 className="text-center">Features Page Coming Soon</h2>} />
        <Route path="/category/:category" element={<NewsBoard />} />
      </Routes>
    </Router>
  );
};

export default App;
