export default function Options({
  optionName,
  options,
  answers,
  setAnswers,
}: {
  optionName: string;
  options: Array<any>; //Array<{ id: any; label: any; emoji: any }>;
  answers: any;
  setAnswers: any;
}) {
  return (
    <>
      {options.map((option: any, ind: number) => (
        <button
          key={ind}
          onClick={() => setAnswers({ ...answers, [optionName]: option })}
          className={`w-full p-16 rounded-xl border-2 text-center transition-all hover:scale-105 ${
            answers[optionName] === option
              ? 'border-[#27548A] bg-[#27548A]/5 shadow-lg'
              : 'border-gray-200 hover:border-gray-300'
          }`}
        >
          <div className={`font-medium text-xl ${answers.option === option ? 'text-[#27548A]' : 'text-gray-700'}`}>
            {option}
          </div>
        </button>
      ))}
    </>
  );
}
