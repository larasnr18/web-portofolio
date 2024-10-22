// app/components/ThemeToggle.tsx
'use client'; // Required for client-side interactions

import { useState, useEffect } from 'react';

export default function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  // Load user's preferred theme from localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  // Toggle dark mode and save user preference
  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
        <button
          onClick={toggleTheme}
          className="p-2 text-white bg-blue-900 dark:bg-primary rounded-full"
        >
          <div className="relative flex justify-center items-center p-2">
            {/* Dark mode icon */}
            <svg
              className={`transform transition-transform duration-150 ease-in-out absolute ${
                isDarkMode ? "scale-0" : "scale-100"
              }`}
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              width={20}
              height={20}
            >
              <path d="M21.752 15.002A9.718 9.718 0 0112 22a9.75 9.75 0 110-19.5c.39 0 .78.025 1.17.074a7.5 7.5 0 108.583 12.428z" />
            </svg>

            {/* Light mode icon */}
            <svg
              className={`transform transition-transform duration-150 ease-in-out absolute ${
                isDarkMode ? "scale-100" : "scale-0"
              }`}
              fill="none"
              height="20"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="12" cy="12" r="5" />
              <line x1="12" x2="12" y1="1" y2="3" />
              <line x1="12" x2="12" y1="21" y2="23" />
              <line x1="4.22" x2="5.64" y1="4.22" y2="5.64" />
              <line x1="18.36" x2="19.78" y1="18.36" y2="19.78" />
              <line x1="1" x2="3" y1="12" y2="12" />
              <line x1="21" x2="23" y1="12" y2="12" />
              <line x1="4.22" x2="5.64" y1="19.78" y2="18.36" />
              <line x1="18.36" x2="19.78" y1="5.64" y2="4.22" />
            </svg>
          </div>
        </button>

  );
}
