import React from "react";
import { useLocation } from "react-router-dom";
import AuthNavbar from "../pages/auth-components/AuthNavbar";
import Navbar from "../components/Navbar";
import AuthFooter from "../pages/auth-components/AuthFooter";
import Footer from "../components/Footer";

const Layout = ({ children }) => {
  const location = useLocation();

  // check if the current page is an auth page
  const isAuthPage = location.pathname.startsWith("/auth");
  return (
    <div>

      {/* show minimal header/footer for auth pages */}
      {isAuthPage ? <AuthNavbar /> : <Navbar />}

      {/* main children */}

      {/* footer based on page type */}
      <main>{children}</main>
      {isAuthPage ? <AuthFooter /> : <Footer />}
    </div>
  );
};

export default Layout;
