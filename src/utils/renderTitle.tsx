import React from "react";

/**
 * **텍스트**를 굵게, 나머지는 얇게 렌더링
 * 예: "나에게 맞는 **과정**을 선택하세요"
 */
export function renderTitle(text: string): React.ReactNode {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <span key={i} className="font-extrabold">
          {part.slice(2, -2)}
        </span>
      );
    }
    return (
      <span key={i} className="font-extralight">
        {part}
      </span>
    );
  });
}
