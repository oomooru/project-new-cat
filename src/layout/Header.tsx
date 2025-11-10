// src/layout/Header.tsx

import React from "react";
import { useTheme } from "../context/useTheme";

/**
 * @component
 * @description 페이지의 얇은 상단 헤더 영역.
 */
const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme(); // 👈 Context 사용

  return (
    // 배경색: light일 때 neutral-100, dark일 때 neutral-800
    <header
      className="flex items-center justify-between h-16 px-8 bg-neutral-100 sticky top-0 z-10 
                       dark:bg-neutral-900 dark:text-neutral-200 transition-colors duration-300"
    >
      {/* 로고 또는 제목 */}
      <h1 className="text-xl font-semibold text-primary-600 dark:text-primary-400">
        App Dashboard
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
