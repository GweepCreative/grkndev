"use client";
import { memo } from "react";
import { ArrowUpRightIcon, AtSignIcon } from "lucide-react";

export const NavigationLink = ({ href, label, icon }) => {
  return (
    <a
      key={href}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-between gap-2 rounded-lg p-2 hover:bg-gray-200"
    >
      <span className="inline-flex items-center gap-2 font-medium">
        {iconCmp} {label}
      </span>
      <ArrowUpRightIcon size={16} />
    </a>
  );
};
