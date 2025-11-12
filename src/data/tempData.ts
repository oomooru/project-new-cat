// src/data/tempData.ts
// API 연동 전 사이드바 메뉴 생성을 위한 임시 데이터입니다.

import { type GameCategory } from "../types/game";
import { type Event } from "../types/event";

/**
 * @const
 * @description 취급하는 게임 카테고리 목록
 */
export const CARD_GAME_CATEGORIES: GameCategory[] = [
  { id: "mtg", name: "매직 더 개더링", colorClass: "bg-indigo-500" },
  { id: "pokemon", name: "포켓몬 카드 게임", colorClass: "bg-yellow-500" },
  { id: "digimon", name: "디지몬 카드 게임", colorClass: "bg-blue-500" },
  { id: "yugioh", name: "유희왕", colorClass: "bg-red-500" },
];

/**
 * @const
 * @description 사이트 내에서 이동할 주요 페이지 경로와 이름 정의.
 */
export const SITE_PAGES = [
  { path: "/", name: "Home" },
  { path: "/events", name: "이벤트 일정" },
  // 나중에 /cart, /mypage 등 추가
];

/**
 * @const
 * @description 카드냥 이벤트(대회) 일정 임시 데이터.
 */
export const MOCK_EVENTS: Event[] = [
  {
    id: 101,
    title: "포켓몬 미니리그",
    date: "2025-11-11",
    time: "14:00",
    game: "포켓몬 카드 게임",
    gameId: "pokemon",
  },
  {
    id: 102,
    title: "Magic The Gathering 스토어 챔피언쉽",
    date: "2025-11-11",
    time: "15:00",
    game: "매직 더 개더링",
    gameId: "mtg",
  },
  {
    id: 103,
    title: "디지몬 위클리 이벤트",
    date: "2025-11-14",
    time: "19:00",
    game: "디지몬 카드 게임",
    gameId: "digimon",
  },
  // ... (추가 가능)
];
