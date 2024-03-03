import _React from "react";

const Header = () => {
  return (
    <header className="bg-primary z-50 flex w-full flex-wrap py-3 text-sm sm:flex-nowrap sm:justify-start sm:py-0 flex-1">
      <nav
        className="relative mx-auto w-full max-w-[85rem] px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"
        aria-label="Global">
        <div className="flex items-center justify-between">
          <img className="mr-3 h-6 w-6" src="/logo.svg"></img>
          <a
            className="flex-none text-xl font-semibold text-white"
            href="#"
            aria-label="Brand">
            Cookbook
          </a>
          <div className="sm:hidden">
            <button
              type="button"
              className="hs-collapse-toggle flex size-9 items-center justify-center gap-x-2 rounded-lg border border-white/20 text-sm font-semibold text-white hover:border-white/40 disabled:pointer-events-none disabled:opacity-50"
              data-hs-collapse="#navbar-collapse-with-animation"
              aria-controls="navbar-collapse-with-animation"
              aria-label="Toggle navigation">
              <svg
                className="hs-collapse-open:hidden size-4 flex-shrink-0"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round">
                <line x1={3} x2={21} y1={6} y2={6} />
                <line x1={3} x2={21} y1={12} y2={12} />
                <line x1={3} x2={21} y1={18} y2={18} />
              </svg>
              <svg
                className="hs-collapse-open:block hidden size-4 flex-shrink-0"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round">
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </div>
        </div>
        <div
          id="navbar-collapse-with-animation"
          className="hs-collapse hidden grow basis-full overflow-hidden transition-all duration-300 sm:block">
          <div className="mt-5 flex flex-col gap-x-0 gap-y-4 sm:mt-0 sm:flex-row sm:items-center sm:justify-end sm:gap-x-7 sm:gap-y-0 sm:ps-7">
            <a
              className="text-secondary font-medium sm:py-6"
              href="#"
              aria-current="page">
              Recipes
            </a>
            <a
              className="font-medium text-white/[.8] hover:text-white sm:py-6"
              href="#">
              Account
            </a>
            <a
              className="font-medium text-white/[.8] hover:text-white sm:py-6"
              href="#">
              Work
            </a>
            <a
              className="font-medium text-white/[.8] hover:text-white sm:py-6"
              href="#">
              Blog
            </a>
            <a
              className="flex items-center gap-x-2 font-medium text-white/[.8] hover:text-white sm:my-6 sm:border-s sm:border-white/[.3] sm:ps-6"
              href="#">
              <svg
                className="size-4 flex-shrink-0"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round">
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                <circle cx={12} cy={7} r={4} />
              </svg>
              Log in
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
