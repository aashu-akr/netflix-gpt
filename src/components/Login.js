import Header from "./Header";

const Login = () => {
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c0b69670-89a3-48ca-877f-45ba7a60c16f/2642e08e-4202-490e-8e93-aff04881ee8a/IN-en-20240212-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt=""
        />
      </div>

      <form className=" w-3/12 absolute p-12 bg-black my-40 mx-auto right-0 left-0 text-white">
        <h1 className="font-bold text-3xl p-4">Sign In </h1>
        <input
          type="text"
          placeholder="Email or phone number"
          className="p-2 m-2"
        />
        <input type="password" placeholder="Password" className="p-2 m-2" />
        <button className="border border-red p-2 m-3 bg-red-700 left-0">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Login;
