// src/layout/Sidebar.tsx

import React from "react";
import SidebarItem from "../components/SidebarItem";
import { CARD_GAME_CATEGORIES, SITE_PAGES } from "../data/tempData"; // 임시 데이터
import { useLocation } from "react-router-dom";

/**
 * @component
 * @description 페이지의 왼쪽 내비게이션 사이드바 영역.
 */
const Sidebar: React.FC = () => {
  const { pathname } = useLocation(); // 현재 경로

  // 로그인 상태는 나중에 Context로 관리할 예정, 임시로 false로 설정.
  const isLoggedIn = false;

  return (
    <aside
      className="w-64 flex-shrink-0 bg-neutral-100 text-neutral-800 overflow-y-auto 
                    dark:bg-neutral-800 dark:text-neutral-200 transition-colors duration-300 flex flex-col"
    >
      {/* 1. 상단: 로고 및 동적 메뉴 영역 (스크롤 가능) */}
      <div className="flex-1 overflow-y-auto">
        {/* 로고 영역 */}
        <div className="p-5 text-xl font-bold h-16 flex items-center">
          <span className="text-primary-600 dark:text-primary-400">
            Cardnyang
          </span>
        </div>

        <nav className="p-3 space-y-0.5">
          <h3 className="px-2 pt-2 pb-1 text-sm font-semibold text-neutral-400 dark:text-neutral-500 uppercase">
            메인 페이지
          </h3>
          {/* 주요 페이지 메뉴 (Home, 이벤트 일정) */}
          {SITE_PAGES.map((page) => (
            <SidebarItem
              key={page.path}
              href={page.path}
              label={page.name}
              // 현재 경로와 메뉴 경로가 일치하면 활성화
              isActive={pathname === page.path}
            />
          ))}

          <h3 className="px-2 pt-4 pb-1 text-sm font-semibold text-neutral-400 dark:text-neutral-500 uppercase">
            게임 카테고리
          </h3>
          {/* 게임 카테고리 메뉴 (요건 5) */}
          {CARD_GAME_CATEGORIES.map((category) => (
            <SidebarItem
              key={category.id}
              href={`/category/${category.id}`}
              label={category.name}
              // 나중에 카테고리 페이지 경로가 일치하면 활성화됩니다.
              isActive={pathname === `/category/${category.id}`}
            />
          ))}
        </nav>
      </div>

      {/* 2. 하단: 고정된 로그인/회원 정보 영역 (요건 6) */}
      <div className="p-3 border-t border-neutral-300 dark:border-neutral-700 flex-shrink-0">
        <a
          href={isLoggedIn ? "/mypage" : "/login"}
          className="sidebar-link sidebar-link-active w-full text-center" // w-full로 너비를 꽉 채웁니다.
        >
          {isLoggedIn ? "내 정보" : "로그인"}
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
