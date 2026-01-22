export default function LoaderSkeleton() {
  return (
    <div className="animate-pulse space-y-3">
      <div className="h-6 bg-gray-200 rounded w-1/2"></div>
      <div className="h-4 bg-gray-200 rounded w-4/5"></div>
      <div className="h-4 bg-gray-200 rounded w-3/5"></div>
      <div className="h-24 bg-gray-200 rounded"></div>
    </div>
  );
}
