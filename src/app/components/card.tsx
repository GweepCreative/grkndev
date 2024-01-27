import React from "react";

export default function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`hover:border-white/50 border border-[#202020] p-2 rounded ${className}`}>
      {children}
    </div>
  );
}
