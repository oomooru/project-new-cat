// src/modules/home/BannerModule.tsx
import React from "react";

const BannerModule: React.FC = () => {
  return (
    <div
      className="bg-primary-600 dark:bg-primary-800 text-neutral-700 p-12 rounded-xl shadow-lg 
                    text-center transition-all duration-500 hover:shadow-2xl hover:bg-primary-700"
    >
      <h1 className="text-4xl font-extrabold mb-2">
        트레이딩 카드 게임 스토어 카드냥 (배너 자리)
      </h1>
      <p className="text-lg font-light opacity-80">
        Banner Space - Sample Text
      </p>
    </div>
  );
};

export default BannerModule;
