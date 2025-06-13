'use client';

import { useState } from 'react';

const faqs = [
  {
    question: '서비스 가격은 얼마인가요?',
    answer:
      '현재는 선제시 단계로 무료로 서비스를 이용하실 수 있습니다. 정식 출시 후에는 월 구독제로 전환될 예정입니다.',
  },
  {
    question: '서비스에 활용하는 데이터가 어떤 것이 있나요?',
    answer:
      '본인의 주민등록증 사본과 통장사본과 같은 개인정보를 수집합니다. 이는 서비스의 정확한 추천을 위한 필수 정보입니다.',
  },
  {
    question: 'AI가 추천한 옷이 마음에 들지 않으면 어떻게 하나요?',
    answer:
      '추천 결과에 대한 피드백을 제공하실 수 있으며, 이를 바탕으로 AI가 지속적으로 학습하여 더 나은 추천을 제공합니다.',
  },
  {
    question: '서비스 이용 가능 연령이 있나요?',
    answer: '만 19세 이상의 성인만 서비스를 이용하실 수 있습니다. 연령 확인을 위해 본인인증이 필요합니다.',
  },
  {
    question: '추천받은 옷은 어디서 구매할 수 있나요?',
    answer: '현재는 추천만 제공하고 있으며, 추후 제휴 쇼핑몰을 통해 직접 구매가 가능하도록 준비 중입니다.',
  },
  {
    question: '옷장 분석은 어떻게 이루어지나요?',
    answer: '사용자가 보유한 옷의 사진을 업로드하면 AI가 분석하여 현재 보유한 아이템과 부족한 아이템을 파악합니다.',
  },
  {
    question: '서비스 이용 중 문제가 발생하면 어떻게 해야 하나요?',
    answer: '고객센터 이메일(support@thefirsttake.com)로 문의해 주시면 24시간 이내에 답변 드리도록 하겠습니다.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="my-16 py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">자주 묻는 질문</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">The First Take에 대해 궁금하신 점을 확인해보세요</p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{faq.question}</h3>
                  <span className="text-ccblue">{openIndex === index ? '−' : '+'}</span>
                </div>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
