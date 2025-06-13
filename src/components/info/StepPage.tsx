export default function StepPage({
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
    <div className="px-8 py-24">
      <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">어떤 스타일이 좋으세요?</h3>
      <div className="grid md:grid-cols-4 gap-12 max-w-6xl mx-auto">
        {options.map((option, ind) => (
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
      </div>
    </div>
  );
}
