import React from "react";
import AuthForm from "./auth-components/AuthForm";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Auth = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <mdiv className=" px-4 xl:px-0  h-[100vh] flex justify-center  pt-24 bg-brand-primary text-white">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: -50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{
          duration: 0.8,
          delay: 0.3,
          ease: "easeOut",
        }}
        className=" max-w-screen-xl mx-auto"
      >
        <AuthForm />
      </motion.div>
    </mdiv>
  );
};

export default Auth;
