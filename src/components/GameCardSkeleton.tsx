export default function GameCardSkeleton() {
  return (
    <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700 animate-pulse">
      <div className="h-40 bg-gradient-to-br from-gray-300 to-gray-400 dark:from-gray-700 dark:to-gray-600" />

      <div className="p-3">
        <div className="h-5 bg-gray-300 dark:bg-gray-700 rounded mb-2 w-3/4" />
        <div className="h-3 bg-gray-200 dark:bg-gray-600 rounded mb-2 w-1/2" />
        <div className="flex items-center justify-between">
          <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded-full w-20" />
          <div className="h-3 bg-gray-200 dark:bg-gray-600 rounded w-16" />
        </div>
      </div>
    </div>
  );
}
