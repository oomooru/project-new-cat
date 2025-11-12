// src/components/Calendar.tsx
import React from "react";
import { type Event } from "../types/event";
import { CARD_GAME_CATEGORIES } from "../data/tempData";

interface CalendarProps {
  events: Event[];
}

const Calendar: React.FC<CalendarProps> = ({ events }) => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  const today = currentDate.getDate();

  const gameColorMap = new Map(
    CARD_GAME_CATEGORIES.map((c) => [c.id, c.colorClass])
  );

  // 달력 생성 로직
  const getDaysInMonth = (year: number, month: number) =>
    new Date(year, month + 1, 0).getDate();
  const daysInMonth = getDaysInMonth(currentYear, currentMonth);
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay(); // 0: 일요일, 6: 토요일

  const dates: (number | null)[] = [];
  for (let i = 0; i < firstDayOfMonth; i++) {
    dates.push(null); // 앞부분 공백 채우기
  }
  for (let i = 1; i <= daysInMonth; i++) {
    dates.push(i); // 날짜 채우기
  }

  // 이벤트 맵 생성: 날짜(DD)를 키로 이벤트 목록을 저장하여 O(1) 검색 가능하게 함
  const eventMap = events.reduce((acc, event) => {
    const eventDate = new Date(event.date);
    if (
      eventDate.getFullYear() === currentYear &&
      eventDate.getMonth() === currentMonth
    ) {
      const day = eventDate.getDate();
      const color = gameColorMap.get(event.gameId) || "bg-gray-500"; // 해당 게임의 컬러를 찾습니다.
      if (!acc[day]) acc[day] = [];
      acc[day].push({ ...event, color }); // 이벤트와 컬러 정보를 함께 저장
    }
    return acc;
  }, {} as Record<number, (Event & { color: string })[]>);

  const monthName = new Date(currentYear, currentMonth).toLocaleDateString(
    "ko-KR",
    { month: "long", year: "numeric" }
  );

  return (
    <div className="bg-white dark:bg-neutral-800 p-6 rounded-xl shadow-lg">
      <div className="flex justify-between items-center mb-4 border-b pb-2 dark:border-neutral-700">
        <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-200">
          {monthName}
        </h3>
        {/* 월 이동 기능은 추후 구현 */}
      </div>

      <div className="grid grid-cols-7 gap-1 text-center font-medium text-sm">
        {["일", "월", "화", "수", "목", "금", "토"].map((day) => (
          <div
            key={day}
            className={`pb-2 ${
              day === "일"
                ? "text-red-500"
                : "text-neutral-500 dark:text-neutral-400"
            }`}
          >
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1">
        {dates.map((day, index) => {
          const isToday =
            day === today &&
            currentYear === currentDate.getFullYear() &&
            currentMonth === currentDate.getMonth();
          const dayEvents = day ? eventMap[day] : [];

          return (
            <div
              key={index}
              className={`h-24 p-1 border rounded-lg overflow-hidden transition-colors duration-200 
                          ${
                            day
                              ? "bg-neutral-50 dark:bg-neutral-700 hover:bg-neutral-200 dark:hover:bg-neutral-600"
                              : "bg-transparent border-transparent"
                          }
                          ${
                            isToday
                              ? "border-primary-500 bg-primary-100 dark:bg-primary-900/50 dark:border-primary-400"
                              : "border-neutral-200 dark:border-neutral-600"
                          }`}
            >
              {day && (
                <div
                  className={`text-right font-bold text-sm ${
                    isToday
                      ? "text-primary-800 dark:text-primary-300"
                      : "text-neutral-800 dark:text-neutral-200"
                  }`}
                >
                  {day}
                </div>
              )}
              {/* 이벤트 제목 표시 */}
              {dayEvents &&
                dayEvents.map((event, i) => (
                  <div
                    key={i}
                    title={`${event.time} ${event.title}`}
                    className={`flex items-center space-x-1 text-xs text-neutral-700 truncate px-1 rounded-sm mt-0.5`}
                    style={{
                      backgroundColor:
                        event.color.replace("bg-", "var(--") + ")",
                    }} // 컬러 클래스를 직접 사용하지 않고 스타일로 처리 (Tailwind JIT 문제 회피)
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${event.color}`}
                    ></span>{" "}
                    {/* 컬러 원형 마커 */}
                    <span className="truncate">
                      {event.time + " | " + event.title.split(" ")[0]}
                    </span>
                  </div>
                ))}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;
