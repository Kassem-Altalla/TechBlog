// import { BlogPost } from "@/entities/BlogPost";
import {
  ArrowLeft,
  Clock,
  User,
  Share2,
  Bookmark,
  Calendar,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { format } from "date-fns";
import ReactMarkdown from "react-markdown";
import { posts } from "@/data/posts";
import Image from "next/image";

export default async function PostPage({ params }) {
  const { slug } = await params;

  // 📌 جلب المقال الأساسي
  //   const posts = await BlogPost.list();
  const post = posts.find((p) => p.slug === slug || p.id === slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600 dark:text-gray-300 text-lg">
          Post not found.
        </p>
      </div>
    );
  }

  // 📌 جلب مقالات مرتبطة من نفس التصنيف
  const relatedPosts = posts
    .filter(
      (p) => p.category === post.category && p.published && p.id !== post.id
    )
    .sort((a, b) => new Date(b.created_date) - new Date(a.created_date))
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Navigation */}
      <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            href="/articles"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Articles
          </Link>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <Badge
              variant="secondary"
              className="capitalize dark:bg-gray-700 dark:text-gray-300"
            >
              {post.category?.replace(/-/g, " ")}
            </Badge>
            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
              <Clock className="w-4 h-4 mr-1" />
              {post.read_time || 5} min read
            </div>
            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
              <Calendar className="w-4 h-4 mr-1" />
              {format(new Date(post.created_date), "MMM d, yyyy")}
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            {post.title}
          </h1>

          {post.excerpt && (
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              {post.excerpt}
            </p>
          )}

          {/* Author and Actions */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 py-6 border-y border-gray-200 dark:border-gray-700">
            <div className="flex items-center space-x-4">
              {post.author_avatar ? (
                <Image
                  src={post.author_avatar}
                  alt={post.author_name}
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full object-cover"
                  loading="lazy"
                />
              ) : (
                <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center">
                  <User className="w-6 h-6 text-blue-600 dark:text-blue-300" />
                </div>
              )}
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">
                  {post.author_name}
                </p>
                {post.author_bio && (
                  <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-1">
                    {post.author_bio}
                  </p>
                )}
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                size="sm"
                className="dark:border-gray-600 dark:hover:bg-gray-800"
              >
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="dark:border-gray-600 dark:hover:bg-gray-800"
              >
                <Bookmark className="w-4 h-4 mr-2" />
                Save
              </Button>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        {post.featured_image && (
          <div className="mb-12">
            <Image
              src={post.featured_image}
              alt={post.title}
              width={800}
              height={450}
              className="w-full h-96 object-cover rounded-2xl shadow-lg"
              loading="lazy"
            />
          </div>
        )}

        {/* Content */}
        <div className="prose prose-lg prose-gray dark:prose-invert max-w-none mb-12">
          <ReactMarkdown className="leading-relaxed">
            {post.content}
          </ReactMarkdown>
        </div>

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="mb-12">
            <h3 className="text-sm font-medium text-gray-700 mb-3">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="text-xs dark:border-gray-600"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        )}

        {/* Author Bio */}
        {post.author_bio && (
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700 mb-12">
            <div className="flex items-start space-x-4">
              {post.author_avatar ? (
                <Image
                  src={post.author_avatar}
                  alt={post.author_name}
                  width={64}
                  height={64}
                  className="w-16 h-16 rounded-full object-cover flex-shrink-0"
                  loading="lazy"
                />
              ) : (
                <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center flex-shrink-0">
                  <User className="w-8 h-8 text-blue-600 dark:text-blue-300" />
                </div>
              )}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  About {post.author_name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {post.author_bio}
                </p>
              </div>
            </div>
          </div>
        )}
      </article>

      {/* Related Articles */}
      {relatedPosts.length > 0 && (
        <section className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              Related Articles
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  href={`/articles/${relatedPost.slug || relatedPost.id}`}
                  className="group block"
                >
                  <article className="bg-gray-50 dark:bg-gray-700/50 rounded-xl overflow-hidden hover:shadow-md transition-all duration-300">
                    <div className="relative overflow-hidden bg-gradient-to-br from-gray-100 to-blue-50 dark:from-gray-700 dark:to-gray-800 aspect-[16/9]">
                      {relatedPost.featured_image ? (
                        <Image
                          src={relatedPost.featured_image}
                          alt={relatedPost.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          loading="lazy"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <div className="text-3xl text-gray-400">📖</div>
                        </div>
                      )}
                    </div>
                    <div className="p-6">
                      <h3 className="font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                        {relatedPost.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                        {relatedPost.excerpt ||
                          `${relatedPost.content?.substring(0, 100)}...`}
                      </p>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
