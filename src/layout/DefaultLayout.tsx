// src/layout/DefaultLayout.tsx

import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";

interface DefaultLayoutProps {
  children: React.ReactNode;
}

/**
 * @component
 * @description Header, Sidebar, Main Content를 포함하는 기본 페이지 레이아웃 컴포넌트.
 */
const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  return (
    // 전체 뷰포트를 채우며, 배경색은 가장 바깥쪽에만 적용합니다.
    // 1. h-screen: Full Height, bg-neutral-100: 전체 배경색
    <div
      className="flex h-screen bg-neutral-100 text-neutral-800 
                    dark:bg-neutral-900 dark:text-neutral-200 
                    transition-colors duration-300 select-none"
    >
      {/* 1. 사이드바 (좌측에 딱 붙음) */}
      <Sidebar />

      {/* 2. 메인 영역 (사이드바 옆의 나머지 공간) */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* 2-1. 상단 헤더 (상단에 딱 붙음) */}
        <Header />

        {/* 2-2. 컨텐츠 영역을 감싸는 Wrapper */}
        <div className="flex-1 overflow-y-auto">
          {/* MainContent 영역에 둥근 모서리와 외곽선을 적용합니다. */}
          <MainContent>{children}</MainContent>
        </div>
      </div>
    </div>
  );
};

export default DefaultLayout;
