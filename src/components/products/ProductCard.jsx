import Image from "next/image";
import Link from "next/link";
import { Star, ArrowRight } from "lucide-react";

export default function ProductCard({ product, priority = false }) {
  return (
    <Link
      href={`/product/${product.slug}`}
      className="group block"
      prefetch={false} // يقلل preload للروابط الثانوية
    >
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700 h-full flex flex-col">
        {/* Product Image */}
        <div className="relative p-8 bg-gray-100 dark:bg-gray-700/50 flex justify-center items-center h-64">
          {product.cover_image && (
            <Image
              src={product.cover_image}
              alt={product.name}
              className="max-h-56 object-fill group-hover:scale-105 transition-transform duration-300"
              width={400}
              height={224}
              priority={priority} // فقط الصور المهمة فوق الصفحة
              loading={priority ? "eager" : "lazy"} // lazy-load تلقائي للصور غير مهمة
            />
          )}
          {product.brand_logo && (
            <Image
              src={product.brand_logo}
              alt={`${product.name} brand logo`}
              className="absolute top-4 right-4 w-12 h-12 object-contain"
              width={48}
              height={48}
              priority={priority}
              loading={priority ? "eager" : "lazy"}
            />
          )}
        </div>

        {/* Product Info */}
        <div className="p-6 flex-grow flex flex-col">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
            {product.name}
          </h3>
          <p className="text-gray-500 dark:text-gray-400 mb-4 flex-grow">
            {product.tagline}
          </p>

          {/* Rating & Price */}
          <div className="flex justify-between items-center mt-auto">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i < Math.round(product.rating)
                      ? "text-yellow-400 fill-current"
                      : "text-gray-300 dark:text-gray-600"
                  }`}
                />
              ))}
            </div>
            <div className="text-lg font-semibold text-gray-800 dark:text-gray-200">
              {product.price_range}
            </div>
          </div>

          {/* View Details */}
          <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
            <div className="flex items-center text-blue-600 dark:text-blue-400 font-semibold group-hover:translate-x-1 transition-transform duration-200">
              <span>View Details</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
