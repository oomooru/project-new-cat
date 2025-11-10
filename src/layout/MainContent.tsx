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
    // 둥근 모서리 (rounded-xl)와 외곽선 (border border-neutral-200) 추가
    // 배경색을 흰색으로 지정하여 Header와 Sidebar의 배경색(neutral-100)과 구분되도록 할 수도 있습니다.
    <main
      className="flex-1 p-8 bg-white rounded-xl shadow-lg border border-neutral-200 
                    dark:bg-neutral-800 dark:border-neutral-600 transition-colors duration-300"
    >
      {children}
    </main>
  );
};

export default MainContent;
