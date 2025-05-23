import React from "react";

const AuthFooter = () => {
  return (
    <footer className="h-[10vh] sm:h-[8vh] w-full mx-auto  px-4 absolute bottom-0 left-0  text-white z-50 transition-all duration-300">
      <div className="max-w-screen-2xl  h-full mx-auto ">
        {/* copyright section */}
        <div className="border-t h-full border-white/30 text-sm  flex flex-col sm:flex-row sm:justify-between sm:items-center justify-center gap-1  opacity-60">
          <p>
            Design By{" "}
            <span className="text-brand-secandary opacity-100">
              Ebrahim Asil
            </span>
          </p>
          <p>&copy; 2025 Real Estate. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default AuthFooter;
