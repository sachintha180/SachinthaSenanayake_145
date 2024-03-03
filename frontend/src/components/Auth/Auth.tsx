import _React from "react";

const Auth = () => {
  return (
    <div className="from-primary to-primaryLight2 mt-7 rounded-xl bg-gradient-to-r shadow-lg max-w-md mx-auto">
      <div className="p-4 sm:p-7">
        <div className="text-center">
          <h1 className="block text-2xl font-bold text-gray-800">Sign in</h1>
          <p className="mt-2 text-sm text-gray-600">
            Don't have an account yet? &nbsp;
            <a
              className="font-medium text-secondary decoration-2 hover:underline"
              href="/">
              Sign up here
            </a>
          </p>
        </div>
        <div className="mt-5">
          {/* Form */}
          <form>
            <div className="grid gap-y-4">
              {/* Form Group */}
              <div>
                <label htmlFor="email" className="mb-2 block text-sm">
                  Email address
                </label>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="focus:border-secondary focus:ring-secondary block w-full rounded-lg border-gray-200 px-4 py-3 text-sm disabled:pointer-events-none disabled:opacity-50"
                    required
                    aria-describedby="email-error"
                  />
                  <div className="pointer-events-none absolute inset-y-0 end-0 hidden pe-3">
                    <svg
                      className="size-5 text-red-500"
                      width={16}
                      height={16}
                      fill="currentColor"
                      viewBox="0 0 16 16"
                      aria-hidden="true">
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                    </svg>
                  </div>
                </div>
                <p
                  className="mt-2 hidden text-xs text-red-600"
                  id="email-error">
                  Please include a valid email address
                </p>
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
                    className="block w-full rounded-lg border-gray-200 px-4 py-3 text-sm focus:border-primary focus:ring-primary disabled:pointer-events-none disabled:opacity-50"
                    required
                    aria-describedby="password-error"
                  />
                  <div className="pointer-events-none absolute inset-y-0 end-0 hidden pe-3">
                    <svg
                      className="size-5 text-red-500"
                      width={16}
                      height={16}
                      fill="currentColor"
                      viewBox="0 0 16 16"
                      aria-hidden="true">
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                    </svg>
                  </div>
                </div>
                <p
                  className="mt-2 hidden text-xs text-red-600"
                  id="password-error">
                  8+ characters required
                </p>
              </div>
              {/* End Form Group */}
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-x-2 rounded-lg border border-transparent bg-primaryLight1 px-4 py-3 text-sm font-semibold text-white hover:bg-primary disabled:pointer-events-none disabled:opacity-50">
                Sign in
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
