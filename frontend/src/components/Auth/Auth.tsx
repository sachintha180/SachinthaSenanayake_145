import _React from "react";
import { AuthProps } from "../../@types/auth";

const Auth = ({
  handleSubmit,
  handleChange,
  switchAuthMode,
  isLoading,
  isSignIn,
}: AuthProps) => {
  return (
    <div className="bg-white border-purple-300 mx-auto mt-7 w-full max-w-md rounded-xl border-4 bg-gradient-to-r shadow-xl">
      <div className="p-4 sm:p-7">
        <div className="text-center">
          <h1 className="text-gray-800 block text-2xl font-bold">
            {isSignIn ? "Login" : "Sign up"}
          </h1>
          <p className="text-gray-600 mt-2 text-sm">
            {isSignIn
              ? "Don't have an account yet?"
              : "Already have an account?"}
            &nbsp;
            <a
              className="text-violet-600 font-medium decoration-2 hover:underline hover:cursor-pointer"
              onClick={switchAuthMode}>
              {isSignIn ? "Sign up here" : "Login here"}
            </a>
          </p>
        </div>
        <div className="mt-5">
          {/* Form */}
          <form>
            <div className="grid gap-y-4">
              {/* Form Group */}
              {!isSignIn && (
                <>
                  <div>
                    <div className="flex items-center justify-between">
                      <label htmlFor="firstName" className="mb-2 block text-sm">
                        First Name
                      </label>
                    </div>
                    <div className="relative">
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        className="border-gray-500 focus:border-violet-600 focus:ring-violet-600 block w-full rounded-lg px-4 py-3 text-sm disabled:pointer-events-none disabled:opacity-50"
                        required
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between">
                      <label htmlFor="lastName" className="mb-2 block text-sm">
                        Last Name
                      </label>
                    </div>
                    <div className="relative">
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        className="border-gray-500 focus:border-violet-600 focus:ring-violet-600 block w-full rounded-lg px-4 py-3 text-sm disabled:pointer-events-none disabled:opacity-50"
                        required
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </>
              )}
              {/* End Form Group */}
              {/* Form Group */}
              <div>
                <label htmlFor="username" className="mb-2 block text-sm">
                  Username
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="username"
                    name="username"
                    className="border-gray-500 focus:border-violet-600 focus:ring-violet-600 block w-full rounded-lg px-4 py-3 text-sm disabled:pointer-events-none disabled:opacity-50"
                    required
                    onChange={handleChange}
                  />
                </div>
              </div>
              {/* End Form Group */}
              {/* Form Group */}
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="mb-2 block text-sm">
                    Password
                  </label>
                </div>
                <div className="relative">
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="border-gray-500 focus:border-violet-600 focus:ring-violet-600 block w-full rounded-lg px-4 py-3 text-sm disabled:pointer-events-none disabled:opacity-50"
                    required
                    onChange={handleChange}
                  />
                </div>
              </div>
              {/* End Form Group */}
              {/* Form Group */}
              {!isSignIn && (
                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="confirmPassword"
                      className="mb-2 block text-sm">
                      Confirm Password
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      type="password"
                      id="confirmPassword"
                      name="confirmPassword"
                      className="border-gray-500 focus:border-violet-600 focus:ring-violet-600 block w-full rounded-lg px-4 py-3 text-sm disabled:pointer-events-none disabled:opacity-50"
                      required
                      onChange={handleChange}
                    />
                  </div>
                </div>
              )}
              {/* End Form Group */}
              <button
                type="submit"
                className="border-transparent text-white bg-violet-700 hover:bg-violet-600 inline-flex w-full items-center justify-center gap-x-2 rounded-lg px-4 py-3 text-sm font-semibold disabled:pointer-events-none disabled:opacity-50"
                disabled={isLoading}
                onClick={handleSubmit}>
                {isLoading && (
                  <span
                    className="border-current border-t-transparent text-white inline-block size-4 animate-spin rounded-full border-[3px]"
                    role="status"
                    aria-label="loading"></span>
                )}
                {isSignIn ? "Sign in" : "Register"}
              </button>
            </div>
          </form>
          {/* End Form */}
        </div>
      </div>
    </div>
  );
};

export default Auth;
