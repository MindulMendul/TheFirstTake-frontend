export default function SigninSNSForm() {
  return (
    <div className="grid grid-cols-3 gap-3">
      <button className="flex justify-center items-center p-2 border border-gray-300 rounded-md hover:bg-gray-50 hover:border-gray-400 transition-all">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
          alt="Google"
          className="w-5 h-5"
        />
      </button>

      <button className="flex justify-center items-center p-2 border border-gray-300 rounded-md bg-[#03C75A] hover:bg-[#02b350] transition-all">
        <span className="text-white font-bold text-lg w-5 h-5 flex items-center justify-center">N</span>
      </button>

      <button className="flex justify-center items-center p-2 border border-gray-300 rounded-md hover:bg-gray-50 hover:border-gray-400 bg-[#FEE500] transition-all">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M10 3.125C5.5375 3.125 2 5.73125 2 8.9375C2 11.0937 3.4 13.0062 5.5 14.0812C5.3 14.6375 4.775 16.3625 4.725 16.5937C4.65 16.9062 4.9125 16.9062 5.0625 16.8125C5.1875 16.7312 7.25 15.4 8.025 14.9C8.675 15.0125 9.3375 15.0687 10 15.0687C14.4625 15.0687 18 12.4625 18 9.25625C18 6.05 14.4625 3.125 10 3.125Z"
            fill="#391B1B"
          />
        </svg>
      </button>
    </div>
  );
}
