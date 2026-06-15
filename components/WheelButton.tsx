"use client";

import { useRef } from "react";

export default function WheelButton() {
  const turnsRef = useRef(0);
  const btnRef = useRef<HTMLButtonElement>(null);

  const onClick = () => {
    turnsRef.current += 4 + Math.floor(Math.random() * 4);
    const extra = Math.floor(Math.random() * 360);
    if (btnRef.current) {
      btnRef.current.style.transform = `rotate(${
        turnsRef.current * 360 + extra
      }deg)`;
    }
  };

  return (
    <button
      ref={btnRef}
      className="mini-wheel"
      onClick={onClick}
      aria-label="Spin the demo wheel"
      style={{
        background:
          "conic-gradient(var(--primary) 0 25%, var(--yellow) 25% 50%, var(--blue) 50% 75%, var(--green) 75% 100%)",
      }}
    />
  );
}
