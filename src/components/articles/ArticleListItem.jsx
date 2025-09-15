import React from "react";
import Link from "next/link";
import { Clock, User, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";
import { createPageUrl } from "@/lib/utils";
import Image from "next/image";

export default function ArticleListItem({ post }) {
  return (
    <Link href={createPageUrl(`Post`, post)} className="group block">
      <article className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 dark:border-gray-700">
        <div className="grid md:grid-cols-4 gap-6">
          {/* Image */}
          <div className="md:col-span-1">
            <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-blue-900/30 aspect-[16/9] rounded-lg">
              {post.featured_image ? (
                <Image
                  src={post.featured_image}
                  alt={post.title}
                  fill
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-3xl text-gray-300 dark:text-gray-600">
                    📄
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Content */}
          <div className="md:col-span-3 flex flex-col">
            <div className="flex items-center gap-3 mb-3">
              <Badge
                variant="secondary"
                className="capitalize text-xs dark:bg-gray-700 dark:text-gray-300"
              >
                {post.category?.replace(/-/g, " ")}
              </Badge>
              <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                <Clock className="w-3 h-3 mr-1" />
                {post.read_time || 4} min read
              </div>
            </div>

            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
              {post.title}
            </h3>

            <p className="text-gray-600 dark:text-gray-400 mb-4 flex-1 line-clamp-2">
              {post.excerpt || `${post.content?.substring(0, 150)}...`}
            </p>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                {post.author_avatar ? (
                  <Image
                    src={post.author_avatar}
                    alt={post.author_name}
                    width={32}
                    height={32}
                    className="w-8 h-8 rounded-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                    <User className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                  </div>
                )}
                <div>
                  <p className="font-medium text-gray-900 dark:text-white text-sm">
                    {post.author_name}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {format(new Date(post.created_date), "MMM d, yyyy")}
                  </p>
                </div>
              </div>

              <div className="flex items-center text-blue-600 dark:text-blue-400 group-hover:translate-x-1 transition-transform duration-200">
                <span className="text-sm font-medium mr-2">Read More</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}
