"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Home, BookOpen, Cpu, Mail, Menu, X, Sun, Moon } from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [isDarkMode, setIsDarkMode] = useState(false);

  // Load Dark Mode from localStorage
  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode") === "true";
    setIsDarkMode(savedMode);
    if (savedMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  // Toggle Dark Mode
  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem("darkMode", String(newMode));
    document.documentElement.classList.toggle("dark", newMode);
  };

  // Navigation Links
  const navigation = [
    { name: "Home", href: "/", icon: Home },
    { name: "Articles", href: "/articles", icon: BookOpen },
    { name: "Products", href: "/products", icon: Cpu },
    { name: "Contact", href: "/contact", icon: Mail },
  ];

  const categories = [
    "Artificial Intelligence",
    "Web Development",
    "Mobile",
    "Cybersecurity",
    "Blockchain",
    "Cloud Computing",
  ];

  return (
    <header className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700/50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-xl">T</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900 dark:text-white">
                TechPulse
              </h1>
              <p className="text-sm text-gray-500 dark:text-gray-400 hidden sm:block">
                The future of technology, today.
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-all duration-200 ${
                  pathname === item.href
                    ? "text-blue-600 bg-blue-50 dark:text-blue-300 dark:bg-blue-900/50"
                    : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-300 hover:bg-gray-50 dark:hover:bg-gray-800"
                }`}
              >
                <item.icon className="w-4 h-4" />
                <span className="font-medium">{item.name}</span>
              </Link>
            ))}
            <button
              className="bg-blue-300 dark:bg-blue-900 p-2 rounded-full flex items-center justify-center"
              variant="ghost"
              size="icon"
              onClick={toggleDarkMode}
            >
              <Sun className=" h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className=" h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              variant="ghost"
              size="icon"
              onClick={toggleDarkMode}
              className="flex items-center justify-center "
            >
              <Sun className=" h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </button>
            <button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
          <div className="px-4 py-4 space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                  pathname === item.href
                    ? "text-blue-600 bg-blue-50 dark:text-blue-300 dark:bg-blue-900/50"
                    : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.name}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
