import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ArticleCard from "@/components/home/ArticleCard";

export default function LatestArticles({ posts }) {
  if (!posts || posts.length === 0) return null;

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              Latest Articles
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Stay up to date with the latest technology trends
            </p>
          </div>

          <Link href="/articles">
            <Button
              variant="outline"
              className="group dark:border-gray-700 dark:hover:bg-gray-800"
            >
              View All Articles
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.slice(0, 6).map((post) => (
            <ArticleCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
