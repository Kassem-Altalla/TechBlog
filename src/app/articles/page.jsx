"use client";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect } from "react";
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
import { posts } from "@/data/posts";
import ArticleCard from "@/components/home/ArticleCard";
import ArticleListItem from "@/components/articles/ArticleListItem";

export default function ArticlesPage() {
  const [postsData, setPostsData] = useState(posts);

  const [postsView, setPostsView] = useState([]);
  const [loading, setLoading] = useState(false);
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

  useEffect(() => {
    loadPosts();
  }, [selectedCategory, sortBy]);

  function filterAndSortPosts(posts, filters = {}, sortBy = "-created_date") {
    let result = [...posts];

    // 🔍 التصفية
    if (filters.category && filters.category !== "all") {
      result = result.filter((post) => post.category === filters.category);
    }

    if (filters.published !== undefined) {
      result = result.filter((post) => post.published === filters.published);
    }

    // 📌 الترتيب
    switch (sortBy) {
      case "-created_date":
        result.sort(
          (a, b) => new Date(b.created_date) - new Date(a.created_date)
        );
        break;
      case "created_date":
        result.sort(
          (a, b) => new Date(a.created_date) - new Date(b.created_date)
        );
        break;
      case "title":
        result.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "-title":
        result.sort((a, b) => b.title.localeCompare(a.title));
        break;
      default:
        break;
    }

    return result;
  }

  const loadPosts = async () => {
    setLoading(true);
    try {
      const filters = {
        published: true,
        category: selectedCategory,
      };

      const fetchedPosts = filterAndSortPosts(postsData, filters, sortBy);

      setPostsView(fetchedPosts);
    } catch (error) {
      console.error("Error loading posts:", error);
    } finally {
      setLoading(false);
    }
  };

  const filteredPosts = postsView.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.author_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-black dark:text-white">
      <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* title */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              All Articles
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Explore our comprehensive collection of technology articles,
              insights, and expert analysis.
            </p>
          </div>

          {/* filter & sort */}
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

              {/* select Category*/}
              <Select
                value={selectedCategory}
                onValueChange={setSelectedCategory}
                onChange={(value) => setSelectedCategory(value)}
              >
                <SelectTrigger className="w-48">
                  <SelectValue
                    value={selectedCategory}
                    placeholder="Select category"
                  />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem
                      key={category.value}
                      value={category.value}
                      onChange={() => {
                        setSelectedCategory(category.value);
                      }}
                    >
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* sort*/}
              <Select
                value={sortBy}
                onValueChange={setSortBy}
                onChange={(value) => setSortBy(value)}
              >
                <SelectTrigger className="w-40">
                  <SelectValue placeholder={"Sort by"} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem
                    value="-created_date"
                    onChange={() => {
                      setSortBy("-created_date");
                    }}
                  >
                    Latest First
                  </SelectItem>
                  <SelectItem
                    value="created_date"
                    onChange={() => {
                      setSortBy("created_date");
                    }}
                  >
                    Oldest First
                  </SelectItem>
                  <SelectItem
                    value="title"
                    onChange={() => {
                      setSortBy("title");
                    }}
                  >
                    A-Z
                  </SelectItem>
                  <SelectItem
                    value="-title"
                    onChange={() => {
                      setSortBy("-title");
                    }}
                  >
                    Z-A
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Grid / List */}
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

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Results Count */}
        <div className="flex items-center justify-between mb-8">
          <p className="text-gray-600 dark:text-gray-400">
            {loading
              ? "Loading..."
              : `${filteredPosts.length} article${
                  filteredPosts.length !== 1 ? "s" : ""
                } found`}
          </p>
          {selectedCategory !== "all" && (
            <Badge
              variant="secondary"
              className="capitalize dark:bg-gray-700 dark:text-gray-300"
            >
              {selectedCategory.replace(/-/g, " ")}
            </Badge>
          )}
        </div>
      </div>

      {/* Articles Grid/List */}
      {loading ? (
        <div
          className={
            viewMode === "grid"
              ? "grid md:grid-cols-2 lg:grid-cols-3 gap-8 m-4"
              : "space-y-6"
          }
        >
          {[...Array(6)].map((_, i) => (
            <div key={i} className="animate-pulse">
              <div
                className={`bg-gray-200 dark:bg-gray-700 rounded-xl ${
                  viewMode === "grid" ? "aspect-[16/9] mb-4" : "h-32 mb-4"
                }`}
              ></div>
              <div className="space-y-2">
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
                <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <>
          {viewMode === "grid" ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 m-6">
              {filteredPosts.map((post) => (
                <ArticleCard key={post.slug} post={post} />
              ))}
            </div>
          ) : (
            <div className="space-y-6 m-6">
              {filteredPosts.map((post) => (
                <ArticleListItem key={post.slug} post={post} />
              ))}
            </div>
          )}
        </>
      )}

      {!loading && filteredPosts.length === 0 && (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">📝</div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            No articles found
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Try adjusting your search terms or filters
          </p>
          <Button
            variant="outline"
            onClick={() => {
              setSearchTerm("");
              setSelectedCategory("all");
            }}
            className="dark:border-gray-600 dark:hover:bg-gray-800"
          >
            Clear Filters
          </Button>
        </div>
      )}
    </div>
  );
}
