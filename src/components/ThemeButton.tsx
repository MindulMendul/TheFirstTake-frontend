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
      className={`bg-[#27548A] hover:bg-[#183B4E] text-[#DDA853] font-bold py-2 px-4 rounded`}
      onClick={handleClick}
    >
      {text}
    </button>
  );
}
