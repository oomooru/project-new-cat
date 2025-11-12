// src/modules/events/EventList.tsx
import React, { useState, useMemo } from "react";
import { type Event } from "../../types/event";
import { CARD_GAME_CATEGORIES } from "../../data/tempData";

interface EventListProps {
  events: Event[];
}

/**
 * @interface
 * @description 날짜별로 그룹화된 이벤트 데이터 타입
 */
interface GroupedEvents {
  date: string;
  isPast: boolean;
  events: Event[];
}

/**
 * @function
 * @description 이벤트를 날짜별로 그룹화하고, 과거/미래 여부를 판단합니다.
 * @param events - 원본 이벤트 목록
 * @returns 날짜를 기준으로 정렬된 이벤트 그룹 목록
 */
const groupEventsByDate = (events: Event[]): GroupedEvents[] => {
  const today = new Date();
  today.setHours(0, 0, 0, 0); // 시간 초기화

  const groupsMap = new Map<string, Event[]>();
  events.forEach((event) => {
    if (!groupsMap.has(event.date)) {
      groupsMap.set(event.date, []);
    }
    groupsMap.get(event.date)!.push(event);
  });

  const groupedList: GroupedEvents[] = Array.from(groupsMap.entries())
    .map(([dateString, eventList]) => {
      const eventDate = new Date(dateString);
      eventDate.setHours(0, 0, 0, 0);
      return {
        date: dateString,
        isPast: eventDate < today,
        events: eventList,
      };
    })
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()); // 날짜 순으로 정렬

  return groupedList;
};

const EventList: React.FC<EventListProps> = ({ events }) => {
  const [showPast, setShowPast] = useState(false);
  const groupedEvents = useMemo(() => groupEventsByDate(events), [events]);

  const pastEvents = groupedEvents.filter((group) => group.isPast);
  const futureEvents = groupedEvents.filter((group) => !group.isPast);

  const todayDateString = useMemo(() => {
    const d = new Date();
    const pad = (n: number) => (n < 10 ? "0" + n : n.toString());
    return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
  }, []);

  // 지나간 이벤트 리스트 컴포넌트
  const PastEventItems: React.FC<{ list: GroupedEvents[] }> = ({ list }) => (
    <div
      className={`transition-all duration-500 ease-in-out overflow-hidden`}
      style={{ maxHeight: showPast ? `${list.length * 100}px` : "0px" }} // 3. 부드러운 애니메이션
    >
      {list.map((group) => renderEventGroup(group))}
    </div>
  );

  const gameInfoMap = useMemo(() => {
    return new Map(
      CARD_GAME_CATEGORIES.map((c) => [
        c.id,
        { name: c.name, color: c.colorClass },
      ])
    );
  }, []);

  // 이벤트 그룹 렌더링 함수
  const renderEventGroup = (group: GroupedEvents) => {
    const isToday = group.date === todayDateString; // 4. 현재 날짜 강조
    const dateLabel = new Date(group.date).toLocaleDateString("ko-KR", {
      month: "long",
      day: "numeric",
      weekday: "short",
    });

    return (
      <div
        key={group.date}
        className={`flex border-b py-4 transition-colors duration-300 ${
          group.isPast ? "opacity-50" : ""
        } ${
          isToday
            ? "bg-primary-50/50 dark:bg-primary-900/20 border-primary-300 dark:border-primary-700"
            : "border-neutral-200 dark:border-neutral-700"
        }`}
      >
        {/* 날짜 표시 영역 */}
        <div
          className={`w-32 flex-shrink-0 font-bold pr-4 ${
            isToday
              ? "text-primary-600 dark:text-primary-400"
              : "text-neutral-700 dark:text-neutral-300"
          }`}
        >
          {dateLabel}
        </div>

        {/* 이벤트 아이템 리스트 */}
        <div className="flex-1 space-y-2">
          {group.events.length > 0 ? (
            group.events.map((event, index) => {
              const gameInfo = gameInfoMap.get(event.gameId);

              return (
                <div key={index} className="flex items-center space-x-4">
                  {/* 시간 표시 (HH:MM) */}
                  <span className="text-sm font-semibold text-neutral-500 dark:text-neutral-400 w-12 flex-shrink-0">
                    {event.time}
                  </span>

                  {/* 게임 카테고리 컬러 및 이름 */}
                  <span
                    className={`text-sm font-medium text-white px-2 py-0.5 rounded-full flex-shrink-0 ${
                      gameInfo?.color || "bg-gray-500"
                    }`}
                  >
                    {gameInfo?.name || "게임 정보 없음"}
                  </span>

                  {/* 이벤트 타이틀 */}
                  <span
                    className={`text-base font-medium ${
                      group.isPast ? "line-through" : ""
                    }`}
                  >
                    {event.title}
                  </span>
                </div>
              );
            })
          ) : (
            // 이벤트가 없을 경우 플레이스 홀더
            <div className="text-neutral-400 italic dark:text-neutral-500">
              해당 날짜에는 예정된 이벤트가 없습니다.
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="mt-8">
      {/* 지나간 이벤트 섹션 */}
      {pastEvents.length > 0 && (
        <>
          <button
            onClick={() => setShowPast(!showPast)}
            className="flex items-center text-primary-600 dark:text-primary-400 font-semibold mb-3 hover:underline"
          >
            [지나간 이벤트]{" "}
            {showPast ? "접기 ▲" : `총 ${pastEvents.length}일 분 표시 ▼`}
          </button>
          <PastEventItems list={pastEvents} />
        </>
      )}

      {/* 현재 이후 이벤트 섹션 */}
      <h3 className="text-xl font-bold mb-4 pt-4 border-t dark:border-neutral-700">
        📌 다가오는 이벤트
      </h3>
      {futureEvents.map((group) => renderEventGroup(group))}
    </div>
  );
};

export default EventList;
