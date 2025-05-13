'use client';

import { getAdditionalInfo } from '@/apis/clothAPI';
import Dropdown from '@/components/Dropdown';
import DropdownOption from '@/components/DropdownOption';
import ThemeButton from '@/components/ThemeButton';
import useAnswerInfo from '@/store/answerInfo';
import { useRouter } from 'next/navigation';
import { MouseEventHandler, useEffect, useState } from 'react';

export default function Home() {
  const router = useRouter();

  const [question, setQuestion] = useState({} as QuestionAPIType);
  const [answer, setAnswer] = useState({} as AnswerType);

  const { addAnswers } = useAnswerInfo();

  useEffect(() => {
    (async () => {
      const [response, error] = await getAdditionalInfo();
      if (error) {
        console.error(error);
        alert('additional info error');
        return;
      }

      setQuestion(response.data);
    })();
  }, []);

  const submit = () => {
    addAnswers(answer);
    router.push('/result');
  };

  const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    setAnswer({ question: e.currentTarget.title, answer: e.currentTarget.value });
  };

  return (
    <div className="flex flex-col">
      LLM 페이지
      <Dropdown title={question.question}>
        ㅎㅇ
        {question.options?.map((option, optionIdx) => (
          <DropdownOption key={optionIdx} value={option} question={question.question} handleClick={handleClick}>
            {option}
          </DropdownOption>
        ))}
      </Dropdown>
      {/* {questions?.map((question, questionIdx) => (
        <Dropdown title={question.question} key={questionIdx}>
          {question.options.map((option, optionIdx) => (
            <DropdownOption key={optionIdx} value={option} question={question.question} handleClick={handleClick}>
              {option}
            </DropdownOption>
          ))}
        </Dropdown>
      ))} */}
      <ThemeButton text={'이동하기'} handleClick={submit} />
    </div>
  );
}
