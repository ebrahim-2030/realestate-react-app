import React from "react";
import AuthForm from "./auth-components/AuthForm";

const Auth = () => {
  return (
    <div className=" px-4 xl:px-0  h-[100vh] flex justify-center  pt-24 bg-brand-primary text-white">
      <div className=" max-w-screen-xl mx-auto">

        {/* login form */}
        <AuthForm />
      </div>
    </div>
  );
};

export default Auth;
