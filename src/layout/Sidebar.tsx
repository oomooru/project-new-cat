// src/layout/Sidebar.tsx

import React from "react";
import SidebarItem from "../components/SidebarItem"; // 👈 새로 만든 컴포넌트 임포트

/**
 * @component
 * @description 페이지의 왼쪽 내비게이션 사이드바 영역.
 */
const Sidebar: React.FC = () => {
  return (
    <aside
      className="w-64 flex-shrink-0 bg-neutral-100 text-neutral-800 overflow-y-auto
                    dark:bg-neutral-900 dark:text-neutral-200 transition-colors duration-300"
    >
      {/* 로고 영역 */}
      <div className="p-4 text-xl font-bold h-16 flex items-center">
        <span className="text-primary-600 dark:text-primary-400">
          Project Logo
        </span>
      </div>

      {/* 메뉴 리스트 영역 (클래스 대신 깨끗한 컴포넌트 사용) */}
      <nav className="p-3 space-y-1">
        {/* ✨ 리팩터링 완료: 복잡한 스타일은 모두 CSS 파일로 이동 */}
        <SidebarItem href="#" label="Dashboard" isActive={true} />
        <SidebarItem href="#" label="Settings" />
        <SidebarItem href="#" label="Users" />
      </nav>
    </aside>
  );
};

export default Sidebar;
