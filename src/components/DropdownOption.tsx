import { MouseEventHandler } from 'react';

export default function DropdownOption({
  children,
  value,
  question,
  handleClick,
}: {
  children: any;
  value: number | string;
  question: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <button
      className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
      onClick={handleClick}
      value={value}
      title={question}
    >
      {children}
    </button>
  );
}
