import Link from "next/link";
import Image from "next/image";
import { createPageUrl } from "@/lib/utils";
import { Clock, User } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";

export default function ArticleCard({ post }) {
  return (
    <Link href={createPageUrl(`Post`, post)} className="group block h-full">
      <article className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 h-full flex flex-col">
        {/* Image */}
        <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-blue-900/30 aspect-[16/9]">
          {post.featured_image ? (
            <Image
              src={post.featured_image}
              alt={post.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-4xl text-gray-300 dark:text-gray-600">
                🔧
              </div>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-1">
          <div className="flex items-center gap-3 mb-4">
            <Badge
              variant="secondary"
              className="capitalize text-xs dark:bg-gray-700 dark:text-gray-300"
            >
              {post.category?.replace(/-/g, " ")}
            </Badge>
            <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
              <Clock className="w-3 h-3 mr-1" />
              {post.read_time || 3} min
            </div>
          </div>

          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200 line-clamp-2">
            {post.title}
          </h3>

          <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 flex-1 line-clamp-3">
            {post.excerpt || `${post.content?.substring(0, 120)}...`}
          </p>

          {/* Author */}
          <div className="flex items-center space-x-3 pt-4 border-t border-gray-100 dark:border-gray-700">
            {post.author_avatar ? (
              <Image
                src={post.author_avatar}
                alt={post.author_name}
                width={32}
                height={32}
                className="w-8 h-8 rounded-full object-cover"
              />
            ) : (
              <div className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                <User className="w-4 h-4 text-gray-600 dark:text-gray-400" />
              </div>
            )}
            <div className="flex-1 min-w-0">
              <p className="font-medium text-gray-900 dark:text-white text-sm truncate">
                {post.author_name}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                {format(new Date(post.created_date), "MMM d, yyyy")}
              </p>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}
