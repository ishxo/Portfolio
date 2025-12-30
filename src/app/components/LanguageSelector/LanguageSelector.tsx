"use client";
import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { FLAGS } from "./constants";

export default function LanguageSelector() {
  const { i18n } = useTranslation();
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState(i18n.language || "en");
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleChange = (lang: string) => {
    i18n.changeLanguage(lang);
    setCurrentLang(lang);
    setOpen(false);
  };
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const currentFlag = FLAGS.find((f) => f.code === currentLang);

  if (!mounted) {
    return <div className="w-6 h-6 bg-gray-700 rounded-full animate-pulse" />;
  }

  return (
    <div ref={containerRef} className="relative inline-block">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-center text-body-color duration-300 hover:cursor-pointer hover:text-primary dark:text-white bg-neutral-50 rounded-full dark:bg-darklight p-2 outline-none"
      >
        {currentFlag && (
          <img
            src={currentFlag.src}
            alt={currentFlag.alt}
            className="w-6 h-6 rounded-full"
          />
        )}
      </button>

      {open && (
        <ul className="absolute left-1/2 transform -translate-x-1/2 mt-2 flex flex-col gap-2 bg-neutral-50 dark:bg-darklight border border-gray-700 rounded-lg shadow-lg p-2 z-50">
          {FLAGS.filter((f) => f.code !== currentLang).map((flag) => (
            <li key={flag.code}>
              <button
                onClick={() => handleChange(flag.code)}
                className="w-10 h-10 flex items-center justify-center rounded-full transition-all duration-200 hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                <img
                  src={flag.src}
                  alt={flag.alt}
                  className="w-6 h-6 rounded-full"
                />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
