import React, { useContext, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Header from "../../Components/Header/Header";
import { AuthContext } from "../../Authprovider/Authprovider";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showPassword, setShowPassword] = useState(false);
  const { login, setUser, googleLogin } = useContext(AuthContext);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

   const handleLogin = (event) => {
     event.preventDefault();

     const email = event.target.email.value;
     const password = event.target.password.value;

     login(email, password)
       .then((userCredential) => {
         const user = userCredential.user;
         setUser(user);
         event.target.reset();
         navigate(location.state || "/");
         return toast.success("Login Successfull");
       })
       .catch((error) => {
         const errorCode = error.code;
         const errorMessage =
           error.message || "Something went wrong. Please try again.";
         return toast.error(errorMessage);
       });
   };

    const handlesignin = () => {
      googleLogin()
        .then((result) => {
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          const user = result.user;
          setUser(user);
          navigate("/");
          return toast.success("Login with Google Successfull");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          const email = error.customData.email;

          const credential = GoogleAuthProvider.credentialFromError(error);
          return toast.error(errorMessage);
        });
    };

  return (
    <div>
      <Header></Header>
      <div className="min-h-screen flex justify-center items-center">
        <div className="card bg-base-100 w-full max-w-xl shrink-0 shadow-2xl">
          <h1 className="font-semibold text-2xl text-center">
            Login Your Account
          </h1>
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email"
                className="input input-bordered"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter Your Password"
                  className="input input-bordered w-full"
                  required
                />
                <span
                  className="absolute right-3 top-3 text-gray-500 cursor-pointer"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? (
                    <AiOutlineEyeInvisible className="w-6 h-6" />
                  ) : (
                    <AiOutlineEye className="w-6 h-6" />
                  )}
                </span>
              </div>
              {/* <label className="label">
               <Link
                 to={"/forget"}
                 state={{ email }} 
                 className="label-text-alt link link-hover"
               >
                 Forgot password?
               </Link>
             </label> */}
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-warning">Login</button>
            </div>
            <div className="divider">OR</div>
            <div className="form-control mt-6 mb-4">
              <button onClick={handlesignin} className="btn btn-neutral">
                {" "}
                <img
                  className="h-8"
                  src="https://img.icons8.com/?size=48&id=V5cGWnc9R4xj&format=png"
                  alt=""
                />
                Login With Google
              </button>
            </div>
            <h1 className="font-semibold text-center">
              Don’t Have An Account?
              <Link to={"/signup"} className="text-red-500">
                {" "}
                Register
              </Link>
            </h1>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
