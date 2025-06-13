export default function Dropdown({ title, children }: { title: string; children: any }) {
  return (
    <div className="relative inline-flex w-80 group">
      <input type="checkbox" id="dropdown-toggle" className="peer hidden" />
      <label
        htmlFor="dropdown-toggle"
        className="w-full py-6 px-8 inline-flex items-center justify-between text-3xl font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 cursor-pointer m-3"
      >
        {title}
        <svg
          className="size-6 transition-transform duration-200 peer-checked:rotate-180"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap={'round'}
          strokeLinejoin={'round'}
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </label>

      <div className="absolute z-10 invisible opacity-0 peer-checked:visible peer-checked:opacity-100 group-hover:visible group-hover:opacity-100 transition-all duration-200 w-full bg-white shadow-md rounded-lg mt-3 dark:bg-neutral-800 dark:border dark:border-neutral-700 dark:divide-neutral-700">
        <div className="p-6 space-y-4">{children}</div>
      </div>
    </div>
  );
}
