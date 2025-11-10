// src/components/SidebarItem.tsx
// 사이드바의 단일 메뉴 항목을 나타내는 컴포넌트

import React from "react";

interface SidebarItemProps {
  href: string;
  label: string;
  isActive?: boolean; // 현재 페이지인지 여부
}

/**
 * @component
 * @description 하나의 사이드바 메뉴 항목. 복잡한 스타일은 components.css에서 관리합니다.
 */
const SidebarItem: React.FC<SidebarItemProps> = ({
  href,
  label,
  isActive = false,
}) => {
  // CSS 파일에 정의된 깨끗한 클래스를 사용합니다.
  const linkClasses = `
    sidebar-link 
    ${isActive ? "sidebar-link-active" : "sidebar-link-inactive"}
  `.trim();

  return (
    <a href={href} className={linkClasses}>
      {label}
    </a>
  );
};

export default SidebarItem;
