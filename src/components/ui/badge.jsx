import clsx from "clsx";

export function Badge({ children, variant = "default", className }) {
  return (
    <span
      className={clsx(
        "inline-flex items-center px-3 py-1 rounded-full text-sm font-medium transition-colors",
        variant === "default" &&
          "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200",
        variant === "secondary" &&
          "bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300",
        variant === "success" &&
          "bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300",
        variant === "warning" &&
          "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-300",
        variant === "danger" &&
          "bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300",
        variant === "info" &&
          "bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300",
        className
      )}
    >
      {children}
    </span>
  );
}
