// src/pages/CategoryDetail.tsx
import React from "react";
import { useParams } from "react-router-dom";

const CategoryDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-primary-600 dark:text-primary-400">
        {id} 카테고리 상세 페이지
      </h2>
      <p className="text-neutral-600 dark:text-neutral-400">
        여기에 {id} 관련 상품 목록과 필터가 들어갈 예정입니다.
      </p>
    </div>
  );
};

export default CategoryDetail;
