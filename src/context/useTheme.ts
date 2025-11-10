// src/context/useTheme.ts
// Theme Context를 사용하는 커스텀 훅 (린트 경고 해결 2)

import { useContext } from "react";
import { ThemeContext, type ThemeContextType } from "./ThemeContext";

/**
 * @hook
 * @description ThemeContext를 사용하기 위한 커스텀 훅.
 * @returns {ThemeContextType} 현재 테마 상태와 토글 함수.
 * @throws {Error} ThemeProvider 외부에서 호출 시 에러 발생.
 */
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    // Context가 제공되지 않은 경우 에러를 발생시킵니다.
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
