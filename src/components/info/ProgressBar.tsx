export default function ProgressBar({ progress }: { progress: number }) {
  return (
    <div className="mb-12">
      <div className="flex items-center justify-between mb-4">
        <span className="text-md text-gray-500">진행률</span>
        <span className="text-md font-medium text-[#27548A]">{Math.round(progress)}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className="bg-[#27548A] h-2 rounded-full transition-all duration-500"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
}
