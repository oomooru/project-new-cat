// src/modules/home/EventScheduleModule.tsx
import React from "react";
import { MOCK_EVENTS } from "../../data/tempData";

const EventScheduleModule: React.FC = () => {
  return (
    <div
      className="p-6 bg-white rounded-xl shadow-md border-1 border-neutral-200
                    dark:bg-neutral-800 dark:border-neutral-700"
    >
      <h2 className="text-2xl font-bold mb-4 border-b-1 border-neutral-200 pb-2 dark:border-neutral-700">
        📅 카드냥 이벤트 일정
      </h2>
      <ul className="space-y-3">
        {MOCK_EVENTS.map((event) => (
          <li
            key={event.id}
            className="p-3 bg-neutral-50 dark:bg-neutral-700 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-600 transition-colors duration-200 cursor-pointer"
          >
            <p className="font-semibold text-lg text-primary-700 dark:text-primary-300">
              {event.title}
            </p>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              <span className="font-medium mr-2">{event.date}</span>|{" "}
              {event.game}
            </p>
          </li>
        ))}
      </ul>
      <div className="mt-4 text-right">
        <a
          href="/events"
          className="text-primary-600 dark:text-primary-400 hover:underline text-sm font-medium"
        >
          전체 일정 보러가기 →
        </a>
      </div>
    </div>
  );
};

export default EventScheduleModule;
