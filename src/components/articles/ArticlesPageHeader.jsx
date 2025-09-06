"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { Search, Grid, List } from "lucide-react";

export default function ArticlesPageHeader() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sortBy, setSortBy] = useState("-created_date");
  const [viewMode, setViewMode] = useState("grid");

  const categories = [
    { value: "all", label: "All Categories" },
    { value: "artificial-intelligence", label: "Artificial Intelligence" },
    { value: "web-development", label: "Web Development" },
    { value: "mobile", label: "Mobile" },
    { value: "cybersecurity", label: "Cybersecurity" },
    { value: "blockchain", label: "Blockchain" },
    { value: "cloud-computing", label: "Cloud Computing" },
    { value: "data-science", label: "Data Science" },
    { value: "iot", label: "IoT" },
    { value: "emerging-tech", label: "Emerging Tech" },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* 🟢 العنوان + الوصف */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            All Articles
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore our comprehensive collection of technology articles,
            insights, and expert analysis.
          </p>
        </div>

        {/* 🟢 الفلاتر والبحث */}
        <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
          <div className="flex flex-col sm:flex-row gap-4 flex-1">
            {/* 🔍 البحث */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* 🏷️ الفئة */}
            <Select
              value={selectedCategory}
              onValueChange={setSelectedCategory}
            >
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category.value} value={category.value}>
                    {category.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* ↕️ الترتيب */}
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="-created_date">Latest First</SelectItem>
                <SelectItem value="created_date">Oldest First</SelectItem>
                <SelectItem value="title">A-Z</SelectItem>
                <SelectItem value="-title">Z-A</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* 🖼️ عرض Grid / List */}
          <div className="flex items-center gap-2 dark:bg-blue-400 bg-gray-100 rounded-lg p-1">
            <Button
              size="sm"
              variant={viewMode === "grid" ? "default" : "ghost"}
              onClick={() => setViewMode("grid")}
            >
              <Grid className="w-4 h-4 text-gray-700 dark:text-white" />
            </Button>
            <Button
              size="sm"
              variant={viewMode === "list" ? "default" : "ghost"}
              onClick={() => setViewMode("list")}
            >
              <List className="w-4 h-4 text-gray-700 dark:text-white" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
