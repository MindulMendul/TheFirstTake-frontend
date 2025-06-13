'use client';

import { getUserInfo } from '@/apis/clothAPI';
import Dropdown from '@/components/Dropdown';
import DropdownOption from '@/components/DropdownOption';
import ThemeButton from '@/components/ThemeButton';
import useAnswerInfo from '@/store/answerInfo';
import { useRouter } from 'next/navigation';
import { MouseEventHandler, useEffect, useState } from 'react';
import { ArrowRight, Camera, Type, Wand2, CheckCircle, User, Clock, Target } from 'lucide-react';
import Link from 'next/link';
import StepPage from '@/components/info/StepPage';
import ProgressBar from '@/components/info/ProgressBar';

export default function UserInfo() {
  // const router = useRouter();

  const [questions, setQuestions] = useState([] as Array<QuestionAPIType>);
  // const [answers, setAnswers] = useState([] as Array<AnswerType>);

  const { addAnswers } = useAnswerInfo();

  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({} as any);

  const testQuestion = [
    { question: 'asdf', options: ['asdf'] },
    { question: 'qwer', options: ['qwer'] },
  ];

  const stepTitle = [
    { title: '어떤 상황인가요?', subtitle: '패션을 잘 몰라도 괜찮아요. 상황만 알려주세요!' },
    { title: '어떤 느낌을 원하세요?', subtitle: '대충 이런 느낌이면 AI가 알아서 찾아드려요' },
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
      <ProgressBar progress={(currentStep / questions.length) * 100} />

      {/* Step Content */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
        {/* Step Header */}
        <div className="bg-gradient-to-r from-[#27548A]/10 to-blue-50 p-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#27548A] rounded-full text-white font-bold text-xl mb-4">
            {currentStep}
          </div>
          <h2 className="text-6xl font-bold text-gray-900 mt-6 mb-10">{stepTitle[currentStep].title}</h2>
          <p className="text-gray-600 text-xl">{stepTitle[currentStep + 1].subtitle}</p>
        </div>

        {/* Step 1: Occasion */}
        {questions[currentStep] && (
          <StepPage
            optionName={questions[currentStep].question}
            options={questions[currentStep].options}
            answers={answers}
            setAnswers={setAnswers}
          />
        )}
        {/* {currentStep === 1 && (
          <StepPage optionName={'occasion'} options={occasions} answers={answers} setAnswers={setAnswers} />
        )}

        {currentStep === 2 && (
          <StepPage optionName={'style'} options={styles} answers={answers} setAnswers={setAnswers} />
        )}

        {currentStep === 3 && (
          <div className="p-8">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
                더 자세히 설명해주세요 (선택사항)
              </h3>
              <textarea
                value={answers.description}
                onChange={(e) => setAnswers({ ...answers, description: e.target.value })}
                placeholder="예: 키가 작아서 다리가 길어보이는 옷이 좋겠어요. 색깔은 검정 말고 밝은 색으로..."
                className="w-full h-32 p-4 border-2 border-gray-200 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-[#27548A] focus:border-transparent text-gray-900"
              />
              <p className="text-gray-500 text-md mt-3 text-center">
                안 써도 괜찮아요! 위에서 선택한 것만으로도 충분해요 😊
              </p>
            </div>
          </div>
        )} */}

        {/* Navigation */}
        <div className="border-t border-gray-100 p-6">
          <div className="flex justify-between items-center">
            {currentStep > 1 ? (
              <button
                onClick={() => setCurrentStep(currentStep - 1)}
                className="w-1/3 h-24 px-6 py-3 text-gray-600 hover:text-gray-800 transition-colors"
              >
                ← 이전
              </button>
            ) : (
              <div></div>
            )}

            {currentStep < 3 ? (
              <button
                onClick={() => setCurrentStep(currentStep + 1)}
                disabled={!answers[questions[currentStep]?.question]}
                className="w-1/3 h-24 px-8 py-3 bg-[#27548A] text-white rounded-xl hover:bg-[#1e4068] transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
              >
                다음 →
              </button>
            ) : (
              <Link
                href="/signin"
                className="inline-flex items-center px-8 py-3 bg-[#27548A] text-white font-semibold rounded-xl hover:bg-[#1e4068] transition-all shadow-lg"
              >
                <Wand2 className="mr-2 w-5 h-5" />
                AI 추천 받기
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Benefits */}
      <div className="mt-12 grid md:grid-cols-3 gap-6">
        <div className="text-center p-6 bg-white rounded-xl border border-gray-200">
          <Clock className="w-8 h-8 text-[#27548A] mx-auto mb-4" />
          <h3 className="font-semibold text-gray-900 mb-2">1분이면 끝</h3>
          <p className="text-md text-gray-600">복잡한 설문이 아니에요</p>
        </div>
        <div className="text-center p-6 bg-white rounded-xl border border-gray-200">
          <Target className="w-8 h-8 text-[#27548A] mx-auto mb-4" />
          <h3 className="font-semibold text-gray-900 mb-2">딱 한 개만</h3>
          <p className="text-md text-gray-600">고민할 필요 없어요</p>
        </div>
        <div className="text-center p-6 bg-white rounded-xl border border-gray-200">
          <CheckCircle className="w-8 h-8 text-[#27548A] mx-auto mb-4" />
          <h3 className="font-semibold text-gray-900 mb-2">패션 초보 OK</h3>
          <p className="text-md text-gray-600">전문 지식 필요 없어요</p>
        </div>
      </div>
    </div>
    // <div className="flex flex-col">
    //   UI 페이지
    //   {questions?.map((question, questionIdx) => (
    //     <Dropdown title={question.question} key={questionIdx}>
    //       {question.options.map((option, optionIdx) => (
    //         <DropdownOption key={optionIdx} value={option} question={question.question} handleClick={handleClick}>
    //           {option}
    //         </DropdownOption>
    //       ))}
    //     </Dropdown>
    //   ))}
    //   <ThemeButton text={'이동하기'} handleClick={submit} />
    // </div>
  );
}
