import { Monitor, Cpu, Battery, Zap } from "lucide-react";

export default function ProductFeatures({ features }) {
  const icons = {
    Monitor,
    Cpu,
    Battery,
    Zap,
  };

  const getIcon = (iconName) => {
    const IconComponent = icons[iconName] || Monitor;
    return <IconComponent className="w-8 h-8 text-blue-500" />;
  };

  return (
    <section>
      <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
        Core Features
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-xl border border-gray-200 dark:border-gray-700"
          >
            <div className="mb-4">{getIcon(feature.icon)}</div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
