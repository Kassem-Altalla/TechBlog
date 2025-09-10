import ProductList from "@/components/products/ProductList";
import { Cpu, Smartphone } from "lucide-react";
import { products as allProducts } from "@/data/products";

export default function ProductsPage() {
  // جميع المنتجات من data
  const computers = allProducts.filter((p) => p.category === "computer");
  const smartphones = allProducts.filter((p) => p.category === "smartphone");

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Product Reviews
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            In-depth analysis and hands-on reviews of the latest tech hardware.
          </p>
        </div>

        {/* Client Component للبحث */}
        <ProductList computers={computers} smartphones={smartphones} />
      </div>
    </div>
  );
}
