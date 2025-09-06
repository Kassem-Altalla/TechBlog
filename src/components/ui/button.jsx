import { cn } from "@/lib/utils";

export function Button({ children, className, ...props }) {
  return (
    <button
      {...props}
      className={`px-6 py-3 rounded-2xl font-semibold
         text-white flex flex-col sm:flex-row justify-center items-center 
         transition-colors duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.6)] active:scale-95
 ${className}`}
    >
      {children}
    </button>
  );
}
