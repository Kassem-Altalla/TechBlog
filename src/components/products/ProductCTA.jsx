import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

export default function ProductCTA({ productName, purchaseLink }) {
  return (
    <section className="mt-24 text-center">
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-12 text-white">
        <h2 className="text-3xl font-bold mb-4">Ready to upgrade?</h2>
        <p className="text-lg text-blue-200 mb-8 max-w-2xl mx-auto">
          Experience the power and elegance of the {productName}. Click below to
          find the best price from our trusted retail partners.
        </p>

        <Button
          asChild
          size="lg"
          className=" bg-white text-blue-700 hover:bg-gray-100 px-8 py-6 text-lg dark:text-white dark:bg-gray-900 dark:hover:bg-gray-800  "
        >
          <a
            href={purchaseLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center"
          >
            <ShoppingCart className="w-5 h-5 mr-3" />
            Buy Now
          </a>
        </Button>
      </div>
    </section>
  );
}
