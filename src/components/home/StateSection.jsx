"use client";

import { Users, BookOpen, Award, LineChart } from "lucide-react"; 

export default function StatsSection() {
  const stats = [
    {
      icon: Users,
      value: "50k+",
      label: "Active Readers",
      color: "text-blue-600",
    },
    {
      icon: BookOpen,
      value: "200+",
      label: "Published Articles",
      color: "text-green-600",
    },
    {
      icon: Award,
      value: "15+",
      label: "Expert Authors",
      color: "text-purple-600",
    },
    {
      // استخدمت LineChart بدلاً من TrendingUp لأن بعض نسخ lucide-react لا تحتويه
      icon: LineChart,
      value: "95%",
      label: "Reader Satisfaction",
      color: "text-orange-600",
    },
  ];

  return (
    <section className="bg-white dark:bg-gray-800 border-y border-gray-100 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div
                className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-50 dark:bg-gray-700 mb-4 ${stat.color}`}
              >
                <stat.icon className="w-6 h-6" />
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
