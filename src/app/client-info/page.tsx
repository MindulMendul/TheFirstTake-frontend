'use client';

import { getUserInfo } from '@/apis/clothAPI';
import Dropdown from '@/components/Dropdown';
import DropdownOption from '@/components/DropdownOption';
import ThemeButton from '@/components/ThemeButton';
import useAnswerInfo from '@/store/answerInfo';
import { useRouter } from 'next/navigation';
import { MouseEventHandler, useEffect, useState } from 'react';

export default function ClientInfo() {
  const router = useRouter();

  const [questions, setQuestion] = useState([] as Array<QuestionAPIType>);
  const [answers, setAnswers] = useState([] as Array<AnswerType>);

  const { addAnswers } = useAnswerInfo();

  useEffect(() => {
    (async () => {
      const [response, error] = await getUserInfo();
      if (error) {
        console.error(error);
        alert('client info error');
        return;
      }

      console.log(response.data);
      setQuestion(response.data);
    })();
  }, []);

  const submit = () => {
    answers.forEach((ans) => {
      addAnswers(ans);
    });

    router.push('/llm');
  };

  const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    setAnswers((oldValues) => [
      ...oldValues.filter((v) => v.question != e.currentTarget.title),
      { question: e.currentTarget.title, answer: e.currentTarget.value },
    ]);
  };

  return (
    <div className="flex flex-col">
      CI 페이지
      {questions.map((question, questionIdx) => (
        <Dropdown title={question.question} key={questionIdx}>
          {question.options.map((option, optionIdx) => (
            <DropdownOption key={optionIdx} value={option} question={question.question} handleClick={handleClick}>
              {option}
            </DropdownOption>
          ))}
        </Dropdown>
      ))}
      <ThemeButton text={'이동하기'} handleClick={submit} />
    </div>
  );
}
