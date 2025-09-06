"use client";

import React, { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export function Select({ value, onChange, children, className }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={cn("relative inline-block text-left", className)} ref={ref}>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, { open, setOpen, value, onChange })
      )}
    </div>
  );
}

export function SelectTrigger({ children, open, setOpen }) {
  return (
    <button
      type="button"
      onClick={() => setOpen(!open)}
      className="flex w-48 items-center justify-between rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2 text-sm text-gray-900 dark:text-white shadow-sm hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      {children}
      <ChevronDown
        className={`w-4 h-4 ml-2 transition-transform ${
          open ? "rotate-180" : ""
        }`}
      />
    </button>
  );
}

export function SelectValue({ value, placeholder }) {
  return (
    <span className="truncate">
      {value != "all" && value ? (
        value
      ) : (
        <span className="text-gray-400">{placeholder}</span>
      )}
    </span>
  );
}

export function SelectContent({ open, setOpen, onChange, children }) {
  if (!open) return null;
  return (
    <div className="absolute mt-2 w-48 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg z-50">
      <ul className="py-1 max-h-60 overflow-auto">
        {React.Children.map(children, (child) =>
          React.cloneElement(child, { setOpen, onChange })
        )}
      </ul>
    </div>
  );
}

export function SelectItem({ children, value, onChange, setOpen }) {
  return (
    <li>
      <button
        type="button"
        onClick={() => {
          onChange(value);
          setOpen(false);
        }}
        className="w-full text-left px-3 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-blue-100 dark:hover:bg-blue-900/40"
      >
        {children}
      </button>
    </li>
  );
}
