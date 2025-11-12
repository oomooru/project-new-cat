// src/modules/home/GameCategoryModule.tsx
import React from "react";
import { CARD_GAME_CATEGORIES } from "../../data/tempData";

const GameCategoryModule: React.FC = () => {
  return (
    <div
      className="p-6 bg-white rounded-xl shadow-md border-1 border-neutral-200
                    dark:bg-neutral-800 dark:border-neutral-700"
    >
      <h2 className="text-2xl font-bold mb-4 border-b-1 border-neutral-200 pb-2 dark:border-neutral-700">
        🎲 게임 카테고리
      </h2>
      {/* Tailwind CSS Grid를 사용하여 카테고리를 유연하게 표시 */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {CARD_GAME_CATEGORIES.map((category) => (
          <a
            key={category.id}
            href={`/category/${category.id}`}
            className="block text-center p-4 rounded-lg bg-secondary-100 dark:bg-secondary-900 hover:bg-secondary-200 dark:hover:bg-secondary-800 
                       transition-colors duration-200 transform hover:scale-105 shadow-md"
          >
            <p className="text-xl font-bold text-secondary-800 dark:text-secondary-200">
              {category.name}
            </p>
            <p className="text-sm text-secondary-600 dark:text-secondary-400">
              {category.id.toUpperCase()}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default GameCategoryModule;
