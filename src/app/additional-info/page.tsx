'use client';

import useAnswerInfo from '@/store/answerInfo';
import { useEffect, useState } from 'react';
import { ArrowRight, Wand2 } from 'lucide-react';
import Options from '@/components/info/Options';
import ProgressBar from '@/components/info/ProgressBar';
import Benefits from '@/components/info/Benefits';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const [questions, setQuestions] = useState([] as Array<QuestionAPIType>);
  // const [answers, setAnswers] = useState([] as Array<AnswerType>);

  const { addAnswers } = useAnswerInfo();

  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({} as any);

  const testQuestion = [
    {
      question: '취향',
      options: [
        '특별한 무언가가 있었으면 좋겠어요',
        '그냥 무난한 게 짱이에요',
        '난 후리(?)한 게 좋더라고요',
        '요즘 유행하는 걸로 사고 싶어요',
      ],
    },
    {
      question: '색상',
      options: [
        '모노톤으로 깔끔하게 해주세요',
        '포인트 컬러는 제게 빼놓을 수 없죠',
        '무조건 화려하게! TPO따위는 신경쓰지 않아요',
      ],
    },
  ];

  const stepTitle = [
    { title: '취향이 어떻게 되시나요?', subtitle: '취향을 맞춰 골라드리려고 해요!' },
    { title: '어떤 느낌으로 색깔을 활용하시나요?', subtitle: '이런 부분도 당연히 고려해야한다고 생각해요!' },
  ];

  useEffect(() => {
    (async () => {
      // const [response, error] = await getAdditionalInfo();
      // if (error) {
      //   console.error(error);
      //   alert('additional info error');
      //   return;
      // }

      // setQuestion(response.data);
      setQuestions(testQuestion);
    })();
  }, []);

  // const submit = () => {
  //   addAnswers(answer);
  //   router.push('/result');
  // };

  // const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
  //   setAnswer({ question: e.currentTarget.title, answer: e.currentTarget.value });
  // };

  return (
    <div className="min-h-screen mx-auto px-4 py-12">
      {/* Progress Bar */}
      <ProgressBar progress={(currentStep / (questions.length - 1)) * 100} />

      {/* Step Content */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
        {/* Step Header */}
        <div className="bg-gradient-to-r from-[#27548A]/10 to-blue-50 p-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#27548A] rounded-full text-white font-bold text-xl mb-4">
            {currentStep + 1}
          </div>
          <h2 className="text-6xl font-bold text-gray-900 mt-6 mb-10">{stepTitle[currentStep].title}</h2>
          <p className="text-gray-600 text-xl">{stepTitle[currentStep].subtitle}</p>
        </div>

        {/* Step Options */}
        <div className="px-8 py-32">
          {questions[currentStep] && (
            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <Options
                optionName={questions[currentStep].question}
                options={questions[currentStep].options}
                answers={answers}
                setAnswers={setAnswers}
              />
            </div>
          )}
        </div>

        {/* Navigation */}
        <div className="border-t border-gray-100 p-6">
          <div className="flex justify-between items-center">
            {currentStep > 0 ? (
              <button
                onClick={() => setCurrentStep(currentStep - 1)}
                className="w-1/3 h-24 px-6 py-3 text-gray-600 hover:text-gray-800 transition-colors"
              >
                ← 이전
              </button>
            ) : (
              <div></div>
            )}

            {currentStep < questions.length - 1 ? (
              <button
                onClick={() => setCurrentStep(currentStep + 1)}
                disabled={!answers[questions[currentStep]?.question]}
                className="w-1/3 h-24 px-8 py-3 bg-[#27548A] text-white rounded-xl hover:bg-[#1e4068] transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
              >
                다음 →
              </button>
            ) : (
              <button
                onClick={() => {
                  router.push('result');
                }}
                disabled={!answers[questions[currentStep]?.question]}
                className="w-1/3 h-24 px-8 py-3 inline-flex items-center bg-[#27548A] text-white font-semibold rounded-xl hover:bg-[#1e4068] transition-all shadow-lg disabled:bg-gray-300 disabled:cursor-not-allowed"
              >
                <Wand2 className="mr-2 w-5 h-5" />
                제출하고 결과를 확인하러 가기!
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Benefits */}
      <Benefits />
    </div>
  );
}
