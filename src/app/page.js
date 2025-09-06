import Image from "next/image";
import HeroSection from "@/components/home/HeroSection";
import FeaturedArticle from "@/components/home/FeaturedArticle";
import {TrendingUp} from "lucide-react";
import {posts} from "@/data/posts";
import StateSection from "@/components/home/StateSection";
import LatestArticles from "@/components/home/LatestArticles";
import CategoriesSection from "@/components/home/CategoriesSection";
import categories from "@/data/categories";
import NewsletterCTA from "@/components/home/NewsletterCTA";



export default function Home() {
  console.log(posts);

  const featuredPost = posts.find((post) => post.featured) || posts[0];

  return (
    <>
      <main className="bg-gray-100 dark:bg-gray-900 min-h-screen text-black dark:text-white">
        <HeroSection />

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              Featured Article
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Our top pick for this week
            </p>
          </div>
          <div className="flex items-center text-blue-600 dark:text-blue-400">
            <TrendingUp className="w-5 h-5 mr-2" />
            <span className="font-medium">Trending</span>
          </div>
        </div>

        <FeaturedArticle post={featuredPost} />
      </div>
    </section>

    {/* State Section */}
    <StateSection />

    {/* Latest Articles */}
    <LatestArticles posts={posts} />

    {/* Categories Section */}
    <CategoriesSection categories={categories} />

    <NewsletterCTA />

      </main>
    </>
  );
}
