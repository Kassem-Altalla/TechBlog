import { Twitter, Github, Linkedin } from "lucide-react";
import Link from "next/link";
import { createPageUrl } from "@/lib/utils";

const categories = [
  "Artificial Intelligence",
  "Web Development",
  "Mobile",
  "Cybersecurity",
  "Blockchain",
  "Cloud Computing",
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">T</span>
              </div>
              <div>
                <h2 className="text-xl font-bold">TechPulse</h2>
                <p className="text-gray-400 text-sm">
                  Modern Technology Insights
                </p>
              </div>
            </div>
            <p className="text-gray-400 max-w-md">
              Stay ahead of the curve with the latest insights in technology,
              from AI and blockchain to cybersecurity and cloud computing.
            </p>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              {categories.slice(0, 6).map((category) => (
                <li key={category}>
                  <Link
                    href={createPageUrl("Articles", { category })}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 TechPulse. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
