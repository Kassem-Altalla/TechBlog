"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

const Textarea = React.forwardRef(
  ({ label, helperText, error, className, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={props.id}
            className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            {label}
          </label>
        )}

        <textarea
          ref={ref}
          className={cn(
            "w-full rounded-xl border bg-transparent px-4 py-3 text-sm text-gray-900 dark:text-white shadow-sm",
            "focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200",
            "placeholder-gray-400 dark:placeholder-gray-500 resize-none",
            error
              ? "border-red-500 focus:ring-red-500 focus:border-red-500"
              : "border-gray-300 dark:border-gray-700",
            className
          )}
          {...props}
        />

        {helperText && !error && (
          <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
            {helperText}
          </p>
        )}

        {error && <p className="mt-2 text-xs text-red-500">{error}</p>}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";

export { Textarea };
