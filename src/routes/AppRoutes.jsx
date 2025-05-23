import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import SearchResult from "../pages/SearchResult";
import PropertyDetails from "../pages/PropertyDetails";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Auth from "../pages/Auth";
import Agents from "../pages/Agents";
import AgentDetails from "../pages/AgentDetails";
import Layout from "../layouts/Layout";

const AppRoutes = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/property-details/:propertyId"
            element={<PropertyDetails />}
          />
          <Route path="/agents" element={<Agents />} />
          <Route path="/agent-details/:agentId" element={<AgentDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/search-result" element={<SearchResult />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default AppRoutes;
