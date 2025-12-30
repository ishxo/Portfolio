"use client";

import { useState, useRef, useEffect } from "react";
import Logo from "./Logo";
import HeaderLink from "./Navigation/HeaderLink";
import MobileHeaderLink from "./Navigation/MobileHeaderLink";
import { Icon } from "@iconify/react";
import { useTheme } from "next-themes";
import LanguageSelector from "../../LanguageSelector/LanguageSelector";
import { NavLinkData } from "@/data"; // ✅ import static nav links

const Header: React.FC = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const { theme, setTheme } = useTheme();

  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => setSticky(window.scrollY >= 80);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      mobileMenuRef.current &&
      !mobileMenuRef.current.contains(event.target as Node) &&
      navbarOpen
    ) {
      setNavbarOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navbarOpen]);

  useEffect(() => {
    document.body.style.overflow = navbarOpen ? "hidden" : "";
  }, [navbarOpen]);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all ${sticky ? "shadow-lg dark:shadow-neutral-50/5 bg-white dark:bg-darklight" : "bg-transparent shadow-none"}`}
    >
      <div
        className={`container flex items-center justify-between gap-10 duration-300 ${sticky ? "py-3" : "py-4"}`}
      >
        <Logo />

        {/* Desktop Nav */}
        <nav>
          <ul className="hidden xl:flex flex-grow items-center justify-start gap-10">
            {NavLinkData.map((item, index) => (
              <HeaderLink key={index} item={item} />
            ))}
          </ul>
        </nav>

        {/* Right Buttons */}
        <div className="flex items-center gap-4">
          <LanguageSelector />
          <button
            aria-label="Toggle theme"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="flex items-center justify-center text-body-color duration-300 hover:cursor-pointer hover:text-primary dark:text-white bg-neutral-50 rounded-full dark:bg-darklight p-2 outline-none"
          >
            <Icon
              icon="solar:sun-2-bold"
              width="24"
              height="24"
              className="hidden dark:block"
            />
            <Icon
              icon="solar:moon-bold"
              width="24"
              height="24"
              className="dark:hidden block"
            />
          </button>

          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            className="block xl:hidden p-2 rounded-lg hover:cursor-pointer"
            aria-label="Toggle mobile menu"
          >
            <span className="block w-6 h-0.5 bg-darkblue dark:bg-white"></span>
            <span className="block w-6 h-0.5 bg-darkblue dark:bg-white mt-1.5"></span>
            <span className="block w-6 h-0.5 bg-darkblue dark:bg-white mt-1.5"></span>
          </button>
        </div>
      </div>

      {/* Mobile Overlay */}
      {navbarOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black/50 z-40" />
      )}

      {/* Mobile Menu */}
      <div
        ref={mobileMenuRef}
        className={`xl:hidden fixed top-0 right-0 h-full w-full bg-white dark:bg-darklight shadow-lg transform transition-transform duration-300 max-w-xs ${navbarOpen ? "translate-x-0" : "translate-x-full"} z-50`}
      >
        <div className="flex items-center justify-between p-4">
          <Logo />
          <button
            onClick={() => setNavbarOpen(false)}
            aria-label="Close mobile menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="dark:text-white dark:hover:text-primary hover:text-primary hover:cursor-pointer"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <nav className="flex flex-col items-start p-4">
          {NavLinkData.map((item, index) => (
            <MobileHeaderLink
              key={index}
              item={item}
              onLinkClick={() => setNavbarOpen(false)}
            />
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
