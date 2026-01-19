"use client";
import Logo from "./logo";
import Menu from "./menu";
import { useState } from "react";

const Navigation = ({ session }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="relative z-10 w-full text-white">
      <div className="min-w-full flex justify-between px-4">
        <Logo />
        <button
          onClick={() => setToggle((toggle) => (toggle = !toggle))}
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center my-4 p-2 w-12 h-12 justify-center text-sm text-body rounded-base md:hidden hover:bg-neutral-secondary-soft hover:text-heading focus:outline-none focus:ring-2 focus:ring-neutral-tertiary"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-10 h-10"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="2"
              d="M5 7h14M5 12h14M5 17h14"
            />
          </svg>
        </button>
        <Menu toggle={toggle} session={session} />
      </div>
    </nav>
  );
};

export default Navigation;
