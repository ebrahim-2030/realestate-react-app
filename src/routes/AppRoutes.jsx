import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Properties from "../pages/Properties";
import PropertyDetails from "../pages/PropertyDetails";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Auth from "../pages/Auth";
import SearchResult from "../pages/SearchResult";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AppRoutes = () => {
  return (
    <Router>
      <div>
        {/* navbar */}
        <Navbar />
        <main>
            {/* pages routes  */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/properties/:type" element={<Properties />} />
            <Route path="/properties/:id" element={<PropertyDetails />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/search-result" element={<SearchResult />} />
          </Routes>
        </main>

        {/* footer */}
        <Footer />
      </div>
    </Router>
  );
};

export default AppRoutes;
