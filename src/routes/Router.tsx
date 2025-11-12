// src/routes/Router.tsx

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Events from "../pages/Events";
import CategoryDetail from "../pages/CategoryDetail";
import DefaultLayout from "../layout/DefaultLayout";

// 라우팅 구조 정의
const routes = [
  {
    path: "/",
    element: <Home />,
    headerName: "트레이딩 카드 게임 스토어 카드냥",
    hideHeader: false,
  },
  {
    path: "/events",
    element: <Events />,
    headerName: "카드냥 대회/이벤트 일정",
  },
  {
    path: "/category/:id",
    element: <CategoryDetail />,
    headerName: "게임 카테고리",
  }, // 동적 라우트
];

/**
 * @component
 * @description 애플리케이션의 모든 라우팅 설정을 담당합니다.
 */
const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map(({ path, element, headerName, hideHeader }) => (
          <Route
            key={path}
            path={path}
            element={
              // DefaultLayout을 통해 headerName과 hideHeader 속성 전달
              <DefaultLayout headerName={headerName} hideHeader={hideHeader}>
                {element}
              </DefaultLayout>
            }
          />
        ))}
        {/* 404 페이지는 DefaultLayout에 헤더를 표시하도록 기본값 사용 */}
        <Route
          path="*"
          element={
            <DefaultLayout headerName="404 Not Found">
              <div className="p-8 text-center text-red-500">404 Not Found</div>
            </DefaultLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
