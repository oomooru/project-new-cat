// src/layout/Header.tsx

import React from "react";
import { useTheme } from "../context/useTheme";

interface HeaderProps {
  pageTitle?: string;
}

/**
 * @component
 * @description 페이지의 얇은 상단 헤더 영역.
 */
const Header: React.FC<HeaderProps> = ({ pageTitle = "Dashboard" }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header
      className="flex items-center justify-between h-16 px-8 bg-neutral-100 sticky top-0 z-10
                       dark:bg-neutral-800 dark:text-neutral-200 transition-colors duration-300"
    >
      <h1 className="text-xl font-semibold text-neutral-700 dark:text-neutral-200">
        {pageTitle || "카드냥"}
      </h1>

      <div className="flex items-center space-x-4">
        {/* Dark Mode 토글 버튼 */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full text-neutral-600 hover:bg-neutral-200 
                     dark:text-neutral-300 dark:hover:bg-neutral-700 transition-colors duration-300"
          aria-label="Toggle Dark Mode"
        >
          {theme === "light" ? "☀️" : "🌙"}
        </button>
      </div>
    </header>
  );
};

export default Header;
