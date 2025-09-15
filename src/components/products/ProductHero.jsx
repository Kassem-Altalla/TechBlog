import Image from "next/image";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ProductHero({ product }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
      <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-8 flex items-center justify-center h-96">
        <Image
          src={product.cover_image}
          alt={product.name}
          width={500}
          height={400}
          className="max-h-full object-contain"
        />
      </div>

      <div className="text-center md:text-left">
        {product.brand_logo && (
          <Image
            src={product.brand_logo}
            alt={`${product.name} brand logo`}
            width={80}
            height={80}
            className="w-20 h-20 object-contain mb-4 mx-auto md:mx-0"
          />
        )}

        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
          {product.name}
        </h1>

        <p className="text-xl text-gray-500 dark:text-gray-400 mt-2 mb-6">
          {product.tagline}
        </p>

        <div className="flex justify-center md:justify-start items-center gap-4 mb-6">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-6 h-6 ${
                  i < Math.round(product.rating)
                    ? "text-yellow-400 fill-current"
                    : "text-gray-300 dark:text-gray-600"
                }`}
              />
            ))}
          </div>
          <span className="text-gray-600 dark:text-gray-300 font-medium">
            {product.rating.toFixed(1)} / 5.0
          </span>
        </div>

        <div className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-6">
          {product.price_range}
        </div>

        <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
          <a
            href={product.purchase_link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Check Price
          </a>
        </Button>
      </div>
    </div>
  );
}
