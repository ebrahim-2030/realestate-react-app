import React from "react";
import AppRoutes from "./routes/AppRoutes";
import { motion, useScroll } from "framer-motion";

const App = () => {
  const { scrollYProgress } = useScroll();
  const scrollStyle = {
    scaleX: scrollYProgress,
    transformOrigin: "left",
    height: "4px",
    backgroundColor: "#ffb606",
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
  };

  return (
    <motion.div>
      <motion.div style={scrollStyle} />
      
      {/* Main App Routes */}
      <AppRoutes />
    </motion.div>
  );
};

export default App;
