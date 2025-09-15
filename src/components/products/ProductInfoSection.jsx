import ReactMarkdown from "react-markdown";
import { BarChart } from "lucide-react";

export default function ProductInfoSection({ icon: Icon, title, content }) {
  const IconComponent = Icon || BarChart;

  return (
    <section>
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-300 flex items-center justify-center flex-shrink-0">
          <IconComponent className="w-6 h-6" />
        </div>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
          {title}
        </h2>
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-300">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </section>
  );
}
