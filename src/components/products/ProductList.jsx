"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Search, Cpu, Smartphone } from "lucide-react";
import ProductCard from "@/components/products/ProductCard";

export default function ProductList({ computers, smartphones }) {
  const [searchTerm, setSearchTerm] = useState("");

  const filterProducts = (products) =>
    products.filter(
      (p) =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.tagline.toLowerCase().includes(searchTerm.toLowerCase())
    );

  const filteredComputers = filterProducts(computers);
  const filteredSmartphones = filterProducts(smartphones);

  return (
    <>
      {/* Search Input */}
      <div className="mb-12 max-w-lg mx-auto">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          <Input
            placeholder="Search for a product..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-12 py-6 text-lg"
          />
        </div>
      </div>

      {/* Computers */}
      {filteredComputers.length > 0 && (
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
            <Cpu className="w-8 h-8 text-blue-500" />
            Computers & Laptops
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredComputers.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </section>
      )}

      {/* Smartphones */}
      {filteredSmartphones.length > 0 && (
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
            <Smartphone className="w-8 h-8 text-green-500" />
            Smartphones
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSmartphones.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </section>
      )}

      {/* No Products */}
      {filteredComputers.length === 0 && filteredSmartphones.length === 0 && (
        <div className="text-center py-16">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
            No Products Found
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mt-2">
            Try adjusting your search.
          </p>
        </div>
      )}
    </>
  );
}
