import { notFound, redirect } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CheckCircle, Users, Shield } from "lucide-react";

import { products } from "@/data/products";
import ProductHero from "@/components/products/ProductHero";
import ProductFeatures from "@/components/products/ProductFeatures";
import ProductInfoSection from "@/components/products/ProductInfoSection";
import ProductCTA from "@/components/products/ProductCTA";

// توليد الـ metadata ديناميكياً
export async function generateMetadata({ params }) {
  const product = products.find((p) => p.slug === params.slug);

  if (!product) {
    return {
      title: "Product not found - TechPulse",
      description: "This product could not be found.",
    };
  }

  return {
    title: `${product.name} - TechPulse Reviews`,
    description: `Learn more about ${product.name} on TechPulse.`,
  };
}

export default async function ProductDetail({ params }) {
  const { slug } = params;

  // جلب المنتج من السيرفر مباشرة
  console.log(products);

  const allProducts = await products.filter((p) => p.slug === slug);
  if (!allProducts || allProducts.length === 0) {
    notFound(); // يعرض صفحة 404
  }

  const product = allProducts[0];

  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link
          href="/products"
          className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to all products
        </Link>

        <ProductHero product={product} />

        <div className="mt-16 space-y-16">
          <ProductFeatures features={product.features} />

          <ProductInfoSection
            icon={CheckCircle}
            title="Key Benefits"
            content={product.benefits_overview}
          />

          <ProductInfoSection
            icon={Shield}
            title="Manufacturing Quality"
            content={product.manufacturing_quality}
          />

          <ProductInfoSection
            icon={Users}
            title="Who is this for?"
            content={product.user_suitability}
          />
        </div>

        <ProductCTA
          productName={product.name}
          purchaseLink={product.purchase_link}
        />
      </div>
    </div>
  );
}
