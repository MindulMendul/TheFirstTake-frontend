'use client';

import useAnswerInfo from '@/shared/store/answerInfo';
import { useEffect, useState } from 'react';
import { ArrowRight, Wand2 } from 'lucide-react';
import Options from '@/components/info/Options';
import ProgressBar from '@/components/info/ProgressBar';
import Benefits from '@/components/info/Benefits';
import { useRouter } from 'next/navigation';

export default function UserInfo() {
  const router = useRouter();

  const [questions, setQuestions] = useState([] as Array<QuestionAPIType>);
  // const [answers, setAnswers] = useState([] as Array<AnswerType>);

  const { addAnswers } = useAnswerInfo();

  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({} as any);

  const testQuestion = [
    {
      question: '성별',
      options: ['남자', '여자'],
    },
    {
      question: '키',
      options: [
        '150cm 이하',
        '150cm ~ 160cm',
        '165cm ~ 170cm',
        '170cm ~ 175cm',
        '175cm ~ 180cm',
        '180cm ~ 185cm',
        '185cm ~ 190cm',
        '190cm ~ 200cm',
        '200cm 이상',
      ],
    },
    {
      question: '몸무게',
      options: ['50kg 이하', '50kg ~ 60kg', '60kg ~ 70kg', '70kg ~ 80kg', '80kg ~ 90kg', '90kg ~ 100kg', '100kg 이상'],
    },
  ];

  const stepTitle = [
    { title: '사용자님의 성별은 어떻게 되나요?', subtitle: '남녀에 따라 추천되는 패션 아이템이 달라져요.' },
    { title: '사용자님의 키는 어느 정도인가요?', subtitle: '대략적인 키를 알면 더 정확한 결과를 얻을 수 있어요!' },
    {
      title: '사용자님의 몸무게는 어느 정도인가요?',
      subtitle: '대략적인 몸무게를 알면 더 정확한 결과를 얻을 수 있어요!',
    },
    { title: '마지막으로 한 마디!', subtitle: '추가로 하고 싶은 말이 있다면 자유롭게!' },
  ];

  useEffect(() => {
    (async () => {
      // const [response, error] = await getUserInfo();
      // if (error) {
      //   console.error(error);
      //   alert('user info error');
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

  //   router.push('/client-info');
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
                  router.push('client-info');
                }}
                disabled={!answers[questions[currentStep]?.question]}
                className="w-1/3 h-24 px-8 py-3 inline-flex items-center bg-[#27548A] text-white font-semibold rounded-xl hover:bg-[#1e4068] transition-all shadow-lg disabled:bg-gray-300 disabled:cursor-not-allowed"
              >
                <Wand2 className="mr-2 w-5 h-5" />
                상황 설문으로 넘어가기!
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
