import { MouseEventHandler } from 'react';

export default function ThemeButton({
  text,
  handleClick,
}: {
  text: string;
  handleClick: MouseEventHandler<HTMLButtonElement> | undefined;
}) {
  return (
    <button
      className={`bg-ccblue hover:bg-ccnavy text-ccbeige font-bold py-2 px-4 rounded w-1/4 h-20 text-2xl`}
      onClick={handleClick}
    >
      {text}
    </button>
  );
}
