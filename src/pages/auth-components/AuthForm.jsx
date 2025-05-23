const AuthForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className=" opacity-90">
      {/* title */}
      <h2 className="text-3xl sm:text-4xl font-semibold ">Log in</h2>
      <p className="mt-2 sm:mt-4 opacity-70  text-sm font-medium border-b-2 pb-2 inline-block pr-5">
        More than 50k clients have joined us already
      </p>

      {/* login form */}
      <form
        onSubmit={handleSubmit}
        className="w-full sm:w-[450px]   flex flex-col gap-4 mt-8 "
      >
        {/* email */}
        <div className="flex flex-col items-start">
          <label htmlFor="email">Email address</label>
          <input
            className="w-full outline-none bg-transparent border-b-2 py-1 border-brand-secandary"
            type="email"
            name="email"
            id="email"
          />
        </div>

        {/* password */}
        <div className="flex flex-col items-start">
          <label htmlFor="password">Password</label>
          <input
            className="w-full outline-none bg-transparent border-b-2 py-1 border-brand-secandary"
            type="password"
            name="password"
            id="password"
          />
        </div>

        {/* login button */}
        <button className="mt-4 bg-brand-secandary text-custom_black px-4 py-2 font-medium rounded-sm ">
          Log In
        </button>

        {/* sign up */}
        <div className="flex items-center justify-between mt-4">
          <p>Don't have an account?</p>
          <button className="hover:text-brand-secandary font-medium">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default AuthForm;
