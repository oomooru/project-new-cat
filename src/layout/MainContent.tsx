// src/layout/MainContent.tsx

import React from "react";

interface MainContentProps {
  children: React.ReactNode;
}

/**
 * @component
 * @description 실제 페이지 내용이 렌더링되는 메인 영역.
 */
const MainContent: React.FC<MainContentProps> = ({ children }) => {
  return (
    <main
      className="flex-1 p-8 bg-white rounded-xl shadow-lg border border-neutral-200 
                 dark:bg-neutral-800 dark:border-neutral-700 transition-colors duration-300"
    >
      {children}
    </main>
  );
};

export default MainContent;
