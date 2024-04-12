
interface ProgressBarProps {
    label: string;
    progress: number;
  }

export default function ProgressBar({label, progress}: ProgressBarProps) {
  return (
    <>
    <div className="mb-1 text-left font-medium text-gray-700 dark:text-green-500">{label}</div>
    <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
        <div className="bg-green-600 h-2.5 rounded-full dark:bg-green-500" style={{ width: `${progress}%` }}></div>
    </div>
    </>
  )
}
