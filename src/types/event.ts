// src/types/event.ts
/**
 * @interface
 * @description 이벤트(대회) 일정 정보 타입
 */
export interface Event {
  id: number;
  title: string;
  date: string; // YYYY-MM-DD
  time: string; // HH:MM
  game: string; // 관련 게임
  gameId: string;
}
