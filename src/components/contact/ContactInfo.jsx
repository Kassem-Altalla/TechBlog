export default function ContactInfo({
  icon: Icon,
  title,
  description,
  link,
  linkLabel,
}) {
  return (
    <div className="flex items-start space-x-4">
      <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-300 rounded-lg flex items-center justify-center">
        <Icon className="w-6 h-6" />
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          {title}
        </h3>
        <div className="text-gray-600 dark:text-gray-400">{description}</div>
        {link && (
          <a
            href={link}
            className="text-blue-600 dark:text-blue-400 hover:underline block mt-1"
          >
            {linkLabel}
          </a>
        )}
      </div>
    </div>
  );
}
