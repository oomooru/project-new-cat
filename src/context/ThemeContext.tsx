// src/context/ThemeContext.tsx
// Theme Context 객체 정의 (린트 경고 해결 1)

import { createContext } from "react";

type Theme = "light" | "dark";

export interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

// Context 객체만 내보냅니다. 초기값은 null.
export const ThemeContext = createContext<ThemeContextType | null>(null);
