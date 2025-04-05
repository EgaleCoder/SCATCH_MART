import React from "react";
import Footer from "../Components/Home/Footer";
import { NavLink } from "react-router-dom";

const Signin = () => {
  return (
    <>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg text-center">
          <h1 className="text-2xl font-bold sm:text-3xl">
            Welcome To <span className="text-blue-400">SACTCH!</span>
          </h1>
          <h4 className="mt-4 text-blue-400">Create your account</h4>
          <p className="mt-4 text-gray-600">
            Your go-to e-commerce platform for premium bags! Explore our
            collection and shop with ease. Happy shopping! 🎉🛍️
          </p>
        </div>
        <form className="mx-auto mb-0 mt-8 max-w-md space-y-4" action="#">
          <div>
            <label className="sr-only" htmlFor="name">
              Full Name
            </label>
            <div className="relative">
              <input
                placeholder="Enter your fullname"
                className="w-full rounded-lg border-gray-300 p-4 pe-12 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                id="name"
                type="text"
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
              Email
            </label>
            <div className="relative">
              <input
                placeholder="Enter your email"
                className="w-full rounded-lg border-gray-300 p-4 pe-12 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                id="email"
                type="email"
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
                type="password"
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
              </span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="inline-block rounded-lg bg-blue-400 px-5 py-3 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
              type="submit"
            >
              Sign In
            </button>
            <NavLink to={"/login"}>
              <button
                className="inline-block rounded-lg bg-blue-400 px-5 py-3 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
                type="submit"
              >
                Login
              </button>
            </NavLink>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Signin;
