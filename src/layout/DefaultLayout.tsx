// src/layout/DefaultLayout.tsx

import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";
import { useLocation, useParams } from "react-router-dom";
import { CARD_GAME_CATEGORIES } from "../data/tempData";

interface DefaultLayoutProps {
  children: React.ReactNode;
  headerName?: string;
  hideHeader?: boolean;
}

/**
 * @component
 * @description Header, Sidebar, Main Content를 포함하는 기본 페이지 레이아웃 컴포넌트.
 */
const DefaultLayout: React.FC<DefaultLayoutProps> = ({
  children,
  headerName,
  hideHeader = false,
}) => {
  const location = useLocation();
  const { id } = useParams<{ id: string }>();
  let currentPageTitle = headerName;

  if (location.pathname.startsWith("/category/") && id) {
    const category = CARD_GAME_CATEGORIES.find((cat) => cat.id === id);
    if (category) {
      currentPageTitle = category.name;
    } else {
      currentPageTitle = "알 수 없는 카테고리";
    }
  }

  return (
    <div
      className="flex h-screen bg-neutral-100 text-neutral-800 
                    dark:bg-neutral-900 dark:text-neutral-200 
                    transition-colors duration-300 select-none"
    >
      <Sidebar />

      <div className="flex flex-col flex-1 overflow-hidden">
        {!hideHeader && <Header pageTitle={currentPageTitle} />}

        <div className="flex-1 p-8 overflow-y-auto border-1 border-neutral-300 rounded-tl-xl dark:border-neutral-700">
          <MainContent>{children}</MainContent>
        </div>
      </div>
    </div>
  );
};

export default DefaultLayout;
