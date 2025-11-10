// src/context/ThemeProvider.tsx
// Dark Mode 상태 관리 및 HTML 클래스 적용 로직

import React, { useEffect, useState, useMemo } from "react";
import { ThemeContext, type ThemeContextType } from "./ThemeContext"; // ThemeContext 임포트

type Theme = "light" | "dark";

interface ThemeProviderProps {
  children: React.ReactNode;
}

/**
 * @component
 * @description Dark Mode 상태 관리 및 토글 기능을 제공하는 프로바이더 컴포넌트.
 */
export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  // 초기 상태는 로컬 저장소에서 가져오거나 시스템 설정을 따릅니다.
  const [theme, setTheme] = useState<Theme>(() => {
    // 1. 로컬 저장소 확인
    const savedTheme = localStorage.getItem("theme") as Theme;
    if (savedTheme) {
      return savedTheme;
    }
    // 2. 시스템 설정 확인 (Dark 모드 미작동 버그 수정)
    // window.matchMedia를 사용하여 사용자의 시스템 설정을 초기값으로 사용합니다.
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
    return "light";
  });

  // theme 상태가 변경될 때마다 HTML 태그에 클래스를 적용하고 로컬 저장소를 업데이트합니다.
  useEffect(() => {
    const root = window.document.documentElement;

    if (theme === "dark") {
      root.classList.add("dark");
      root.classList.remove("light");
    } else {
      root.classList.add("light");
      root.classList.remove("dark");
    }

    // 3. 로컬 저장소 업데이트 (버그 수정)
    localStorage.setItem("theme", theme);
  }, [theme]);

  // 모드를 토글하는 함수
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const contextValue: ThemeContextType = useMemo(
    () => ({ theme, toggleTheme }),
    [theme]
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};
