import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { createPageUrl } from "@/lib/utils";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50 to-gray-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-gray-900">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 dark:bg-blue-900 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-gray-200 dark:bg-gray-700 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-75"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300 text-sm font-medium mb-8">
            <Sparkles className="w-4 h-4 mr-2" />
            Latest Technology Insights
          </div>

          {/* Main heading */}
          <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            Where Technology{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
              Meets Innovation
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Discover cutting-edge insights, expert analysis, and
            forward-thinking perspectives on the technologies shaping our
            digital future.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href={createPageUrl("Articles")}>
              <Button
                size="lg"
                className="bg-blue-800 hover:bg-blue-700 group px-8"
              >
                Explore Articles
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>

            <Button
              size="lg"
              variant="outline"
              className="px-8 bg-blue-300 dark:bg-gray-900 hover:bg-blue-500 dark:border-gray-700 dark:hover:bg-gray-700 outline-1 outline-gray-300"
            >
              Subscribe to Newsletter
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
            <div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white">
                50k+
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Monthly Readers
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white">
                200+
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Expert Articles
              </div>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <div className="text-3xl font-bold text-gray-900 dark:text-white">
                5★
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Reader Rating
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
