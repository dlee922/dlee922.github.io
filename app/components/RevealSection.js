"use client";

import { useScrollReveal } from "../hooks/useScrollReveal";

export default function RevealSection({ children, className = "", delay = 0 }) {
  const [ref, isVisible] = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`reveal-section ${isVisible ? "revealed" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
