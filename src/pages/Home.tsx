// src/pages/Home.tsx

import React from "react";
import BannerModule from "../modules/home/BannerModule";
import EventScheduleModule from "../modules/home/EventScheduleModule";
import GameCategoryModule from "../modules/home/GameCategoryModule";

/**
 * @component
 * @description 웹사이트의 메인 페이지. (요건 3의 배너, 이벤트, 카테고리 표시)
 */
const Home: React.FC = () => {
  // Home 페이지는 Header가 숨겨지도록 Router에서 hideHeader={true}로 설정되어 전달됩니다.
  return (
    <>
      {/* Home Page 콘텐츠 영역. 실무처럼 space-y-10으로 섹션 간격을 관리 */}
      <div className="space-y-10">
        {/* 1. 배너 모듈 */}
        <BannerModule />

        {/* 2. 게임 카테고리 모듈 */}
        <GameCategoryModule />

        {/* 3. 이벤트 일정 모듈 */}
        <EventScheduleModule />

        {/* 4. 나중에 상품 목록이 들어갈 영역 */}
        <div className="p-8 bg-white rounded-xl shadow-md border border-neutral-200 dark:bg-neutral-800 dark:border-neutral-700">
          <h2 className="text-2xl font-bold mb-2">
            ✨ 인기 상품 미리보기 (API 예정)
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400">
            여기에 API를 연결하여 **실시간 인기 상품 목록 모듈**을 배치할
            예정입니다.
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
