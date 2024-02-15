import Header from "./Header";
import { useState } from "react";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c0b69670-89a3-48ca-877f-45ba7a60c16f/2642e08e-4202-490e-8e93-aff04881ee8a/IN-en-20240212-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt=""
        />
      </div>

      <form className=" w-3/12 absolute p-10 bg-black bg-opacity-80 my-40 mx-auto right-0 left-0 border rounded-md border-transparent  text-white">
        <h1 className="font-bold text-3xl p-2 mb-4 ">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 m-2 w-full bg-gray-700 rounded-sm"
          />
        )}

        <input
          type="text"
          placeholder="Email or phone number"
          className="p-4 m-2 w-full  bg-gray-700 rounded-sm"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 m-2 w-full bg-gray-700 rounded-sm"
        />

        <button className="p-2 m-2 bg-red-600 w-full rounded-sm text-white">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        {isSignInForm && (
          <h1 className=" flex text justify-center cursor-pointer">
            Forgot password?
          </h1>
        )}

        <p className="py-4 px-2 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up now."
            : "Already registered? Sign In now."}
        </p>
      </form>
    </div>
  );
};

export default Login;
