'use client';

import useAnswerInfo from '@/shared/store/answerInfo';
import { useEffect, useState } from 'react';
import { ArrowRight, Wand2 } from 'lucide-react';
import Options from '@/components/info/Options';
import ProgressBar from '@/components/info/ProgressBar';
import Benefits from '@/components/info/Benefits';
import { useRouter } from 'next/navigation';

export default function ClientInfo() {
  const router = useRouter();

  const [questions, setQuestions] = useState([] as Array<QuestionAPIType>);
  // const [answers, setAnswers] = useState([] as Array<AnswerType>);

  const { addAnswers } = useAnswerInfo();

  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({} as any);

  const testQuestion = [
    {
      question: '상황',
      options: ['아무때나', '면접', '소개팅'],
    },
    {
      question: '가격',
      options: ['5만 원 이하', '5만 원 ~ 10만 원', '10만 원 ~ 15만 원', '15만 원 ~ 20만 원', '20만 원 이상'],
    },
  ];

  const stepTitle = [
    { title: '언제 입을 옷을 사시나요?', subtitle: '상황을 고려해서 옷을 추천해드릴게요~' },
    { title: '얼마 정도 지불할 수 있으신가요?', subtitle: '가격도 고려해야 사용자님의 부담이 없을 것 같아서요.' },
  ];

  useEffect(() => {
    (async () => {
      // const [response, error] = await getClientInfo();
      // if (error) {
      //   console.error(error);
      //   alert('client info error');
      //   return;
      // }
      // setQuestions(response.data);
      setQuestions(testQuestion);
    })();
  }, []);

  // const submit = () => {
  //   answers.forEach((ans) => {
  //     addAnswers(ans);
  //   });

  //   router.push('/additional-info');
  // };

  // const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
  //   setAnswers((oldValues) => [
  //     ...oldValues.filter((v) => v.question != e.currentTarget.title),
  //     { question: e.currentTarget.title, answer: e.currentTarget.value },
  //   ]);
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
                  router.push('additional-info');
                }}
                disabled={!answers[questions[currentStep]?.question]}
                className="w-1/3 h-24 px-8 py-3 inline-flex items-center bg-[#27548A] text-white font-semibold rounded-xl hover:bg-[#1e4068] transition-all shadow-lg disabled:bg-gray-300 disabled:cursor-not-allowed"
              >
                <Wand2 className="mr-2 w-5 h-5" />
                추가 설문으로 넘어가기!
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
