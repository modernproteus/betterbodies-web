import React from "react";

/**
 * Better Bodies TX — inline SVG brand mark.
 * Matches the uploaded logo direction: shield shape, bold BB initials, red accent, white on black.
 * size: "sm" | "md" | "lg"
 */
export default function BrandLogo({ size = "md", showText = true, className = "" }) {
  const markSize = size === "sm" ? 28 : size === "lg" ? 52 : 36;
  const textClass =
    size === "sm"
      ? "text-sm"
      : size === "lg"
      ? "text-2xl"
      : "text-base";

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* Shield mark */}
      <svg
        width={markSize}
        height={markSize}
        viewBox="0 0 40 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Shield body */}
        <path
          d="M20 2L4 8V22C4 31.5 11.5 40.2 20 42C28.5 40.2 36 31.5 36 22V8L20 2Z"
          fill="#C11B17"
        />
        {/* Shield outline */}
        <path
          d="M20 2L4 8V22C4 31.5 11.5 40.2 20 42C28.5 40.2 36 31.5 36 22V8L20 2Z"
          stroke="white"
          strokeWidth="1.5"
          strokeLinejoin="round"
          fill="none"
        />
        {/* BB mark */}
        <text
          x="50%"
          y="60%"
          dominantBaseline="middle"
          textAnchor="middle"
          fill="white"
          fontFamily="'Space Grotesk', sans-serif"
          fontWeight="800"
          fontSize="13"
          letterSpacing="-0.5"
        >
          BB
        </text>
      </svg>

      {showText && (
        <span className={`font-heading font-extrabold tracking-tight text-white leading-none ${textClass}`}>
          Better Bodies <span className="text-primary">TX</span>
        </span>
      )}
    </div>
  );
}