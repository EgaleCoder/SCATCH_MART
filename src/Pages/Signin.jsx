import { React, useState } from "react";
import Footer from "../Components/Home/Footer";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/authContext";
import Loader from "../Components/Home/ShowProduct/CardLoader";

const Signin = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { checkUser, createUser, loading } = useAuthContext();
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
    contact: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCreateUser = async (e) => {
    e.preventDefault();
    const result = await createUser(formData);
    setFormData({
      fullname: "",
      email: "",
      password: "",
      contact: "",
    });
    if (result.success) {
      checkUser();
      navigate("/");
    } else {
      setErrorMsg(result.error);
      setShowAlert(true);
    }
  };

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <>
      {loading ? (
        <div className="h-screen flex items-center justify-center">
          <Loader />
        </div>
      ) : (
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 bg-blue-100">
          <div className="mx-auto max-w-lg text-center ">
            <h1 className="text-2xl font-bold sm:text-3xl">
              Welcome To <span className="text-blue-400">SACTCH MART!</span>
            </h1>
            <h4 className="mt-4 text-blue-400">Create your new account</h4>
            <p className="mt-4 text-gray-600">
              Your go-to e-commerce platform for premium bags! Explore our
              collection and shop with ease. Happy shopping! 🎉🛍️
            </p>
            {showAlert && <p className="text-red-800 text-xl">{errorMsg}</p>}
          </div>
          <form
            className="mx-auto mb-0 mt-5 max-w-md space-y-4"
            action="#"
            onSubmit={handleCreateUser}
          >
            <div>
              <label className="sr-only" htmlFor="name">
                Full Name
              </label>
              <div className="relative">
                <input
                  placeholder="Enter your fullname"
                  className="w-full rounded-lg border-gray-300 p-4 pe-12 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                  id="fullname"
                  type="text"
                  name="fullname"
                  required
                  onChange={handleChange}
                  value={formData.fullname}
                />
                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="h-6 w-6 text-gray-400"
                  >
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4Zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4Z" />
                  </svg>
                </span>
              </div>
            </div>
            <div>
              <label className="sr-only" htmlFor="email">
                Contact
              </label>
              <div className="relative">
                <input
                  placeholder="Enter your contact"
                  className="w-full rounded-lg border-gray-300 p-4 pe-12 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                  id="contact"
                  type="number"
                  name="contact"
                  required
                  onChange={handleChange}
                  value={formData.contact}
                />
                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                  <svg
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-6 w-6 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 4.5C2 3.67157 2.67157 3 3.5 3H6.15823C6.62758 3 7.06095 3.25044 7.27639 3.65823L8.72361 6.34177C8.93905 6.74956 8.93905 7.25044 8.72361 7.65823L7.72361 9.65823C9.44572 12.5176 11.4824 14.5543 14.3418 16.2764L16.3418 15.2764C16.7496 15.0609 17.2504 15.0609 17.6582 15.2764L20.3418 16.7236C20.7496 16.939 21 17.3724 21 17.8418V20.5C21 21.3284 20.3284 22 19.5 22H18C9.71573 22 2.99999 15.2843 2.99999 7V5.5C2.99999 4.67157 2.32842 4 1.5 4H1.5"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
            </div>
            <div>
              <label className="sr-only" htmlFor="email">
                Email
              </label>
              <div className="relative">
                <input
                  placeholder="Enter your email"
                  className="w-full rounded-lg border-gray-300 p-4 pe-12 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                  id="email"
                  type="email"
                  name="email"
                  required
                  onChange={handleChange}
                  value={formData.email}
                />
                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                  <svg
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-6 w-6 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                      strokeWidth={2}
                      strokeLinejoin="round"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </div>
            </div>
            <div>
              <label className="sr-only" htmlFor="password">
                Password
              </label>
              <div className="relative">
                <input
                  placeholder="Enter your password"
                  className="w-full rounded-lg border-gray-300 p-4 pe-12 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                  id="password"
                  type={showPassword ? "password" : "text"}
                  name="password"
                  required
                  onChange={handleChange}
                  value={formData.password}
                />
                <button
                  type="button"
                  onClick={togglePassword}
                  className="absolute inset-y-0 end-0 grid place-content-center px-4"
                >
                  {showPassword ? (
                    //Eye Off Icon (Hide Password)
                    <svg
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="h-6 w-6 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.542-7a10.05 10.05 0 012.294-3.95m2.546-1.76A9.963 9.963 0 0112 5c4.477 0 8.268 2.943 9.542 7a9.969 9.969 0 01-4.121 5.225M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M3 3l18 18"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ) : (
                    // Eye Icon (Show Password)
                    <svg
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="h-6 w-6 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        strokeWidth={2}
                        strokeLinejoin="round"
                        strokeLinecap="round"
                      />
                      <path
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        strokeWidth={2}
                        strokeLinejoin="round"
                        strokeLinecap="round"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <NavLink to={"/login"}>
                <button
                  className="inline-block rounded-lg bg-blue-400 px-5 py-3 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
                  type="submit"
                >
                  Login
                </button>
              </NavLink>
              <button
                className="inline-block rounded-lg bg-blue-400 px-5 py-3 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
                type="submit"
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
      )}
      <Footer />
    </>
  );
};

export default Signin;
