import Link from "next/link";
import Image from "next/image";
import { Clock, ArrowRight, User } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";

export default function FeaturedArticle({ post }) {
  const href = `/post/${post.slug || post.id}`;

  return (
    <Link href={href} className="group block">
      <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700">
        <div className="grid lg:grid-cols-2 gap-0">
          {/* Image */}
          <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-gray-100 dark:from-blue-900/30 dark:to-gray-800 aspect-[4/3] lg:aspect-auto">
            {post.featured_image ? (
              <Image
                src={post.featured_image}
                alt={post.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-6xl text-blue-200 dark:text-blue-900">
                  📱
                </div>
              </div>
            )}
            <div className="absolute top-4 left-4">
              <Badge className="bg-blue-600 text-white shadow-lg">
                Featured
              </Badge>
            </div>
          </div>

          {/* Content */}
          <div className="p-8 lg:p-12 flex flex-col justify-center">
            <div className="flex items-center gap-4 mb-6">
              {post.category && (
                <Badge
                  variant="secondary"
                  className="capitalize dark:bg-gray-700 dark:text-gray-300"
                >
                  {post.category.replace(/-/g, " ")}
                </Badge>
              )}
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                <Clock className="w-4 h-4 mr-1" />
                {post.read_time || 5} min read
              </div>
            </div>

            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
              {post.title}
            </h3>

            <p className="text-gray-600 dark:text-gray-300 text-lg mb-6 leading-relaxed">
              {post.excerpt || `${post.content?.substring(0, 150)}...`}
            </p>

            <div className="flex items-center justify-between">
              {/* Author */}
              <div className="flex items-center space-x-3">
                {post.author_avatar ? (
                  <Image
                    src={post.author_avatar}
                    alt={post.author_name}
                    width={40}
                    height={40}
                    className="rounded-full object-cover"
                  />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center">
                    <User className="w-5 h-5 text-blue-600 dark:text-blue-300" />
                  </div>
                )}
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">
                    {post.author_name}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {format(new Date(post.created_date), "MMM d, yyyy")}
                  </p>
                </div>
              </div>

              {/* Read More */}
              <div className="flex items-center text-blue-600 dark:text-blue-400 group-hover:translate-x-2 transition-transform duration-300">
                <span className="font-medium mr-2">Read More</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
