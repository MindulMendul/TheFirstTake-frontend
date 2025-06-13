'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Camera, Mic, Type, Wand2, Heart, User, HelpCircle } from 'lucide-react';

export default function Home() {
  const [inputMode, setInputMode] = useState('text');
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-5xl mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-white/80 text-[#27548A] rounded-full text-lg font-medium mb-8 shadow-sm">
            <HelpCircle className="w-5 h-5 mr-2" />
            패션을 잘 모르겠다면?
          </div>

          <h2 className="text-6xl font-bold text-gray-900 mb-8 leading-tight">
            고민 없이
            <br />
            <span className="text-[#27548A]">딱 한 벌</span>만 추천
          </h2>

          <p className="text-2xl text-gray-700 max-w-3xl mx-auto mb-4">"뭘 입어야 할지 모르겠어요..." 걱정 끝!</p>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            간단한 설명만으로 AI가 당신에게 완벽한 옷 한 벌을 골라드립니다.
          </p>
        </div>

        {/* Main Interface */}
        <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
          {/* Step Indicator */}
          <div className="bg-gray-50 px-8 py-6 border-b border-gray-100">
            <div className="flex items-center justify-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-[#27548A] text-white rounded-full flex items-center justify-center text-sm font-bold">
                  1
                </div>
                <span className="text-gray-900 font-medium">상황 설명</span>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-400" />
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gray-200 text-gray-500 rounded-full flex items-center justify-center text-sm font-bold">
                  2
                </div>
                <span className="text-gray-500">AI 분석</span>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-400" />
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gray-200 text-gray-500 rounded-full flex items-center justify-center text-sm font-bold">
                  3
                </div>
                <span className="text-gray-500">완벽한 한 벌</span>
              </div>
            </div>
          </div>

          {/* Input Mode Selector */}
          {/* <div className="p-8 border-b border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-6">어떤 방법이 편하세요?</h3>
            <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
              <button
                onClick={() => setInputMode('text')}
                className={`p-6 rounded-2xl border-2 transition-all ${
                  inputMode === 'text' ? 'border-[#27548A] bg-[#27548A]/5' : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <Type className={`w-8 h-8 mx-auto mb-3 ${inputMode === 'text' ? 'text-[#27548A]' : 'text-gray-400'}`} />
                <div className={`font-medium ${inputMode === 'text' ? 'text-[#27548A]' : 'text-gray-600'}`}>
                  글로 설명
                </div>
                <div className="text-sm text-gray-500 mt-1">가장 쉬워요</div>
              </button>

              <button
                onClick={() => setInputMode('image')}
                className={`p-6 rounded-2xl border-2 transition-all ${
                  inputMode === 'image' ? 'border-[#27548A] bg-[#27548A]/5' : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <Camera
                  className={`w-8 h-8 mx-auto mb-3 ${inputMode === 'image' ? 'text-[#27548A]' : 'text-gray-400'}`}
                />
                <div className={`font-medium ${inputMode === 'image' ? 'text-[#27548A]' : 'text-gray-600'}`}>
                  사진으로
                </div>
                <div className="text-sm text-gray-500 mt-1">예시 사진을 올려주세요</div>
              </button>
            </div>
          </div>

          Input Area 
          <div className="p-8">
            {inputMode === 'text' && (
              <div className="space-y-6">
                <div className="text-center">
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">어떤 상황인지 편하게 말해주세요!</h4>
                  <p className="text-gray-600">예시: "20대 남자인데 첫 데이트 갈 때 입을 옷이 필요해요"</p>
                </div>
                <textarea
                  placeholder="언제, 어디서, 누구와 함께할 건지... 자유롭게 써주세요! 패션을 잘 몰라도 괜찮아요 😊"
                  className="w-full h-32 p-6 border-2 border-gray-200 rounded-2xl resize-none focus:outline-none focus:ring-2 focus:ring-[#27548A] focus:border-transparent text-gray-900 text-lg"
                />
              </div>
            )}

            {inputMode === 'voice' && (
              <div className="text-center py-16">
                <div className="w-32 h-32 bg-[#27548A]/10 rounded-full flex items-center justify-center mx-auto mb-8">
                  <Mic className="w-16 h-16 text-[#27548A]" />
                </div>
                <h4 className="text-2xl font-semibold text-gray-900 mb-4">편하게 말씀해주세요</h4>
                <p className="text-gray-600 mb-8 max-w-md mx-auto">
                  "언제 어디서 입을 건지" 자연스럽게 말하면 AI가 알아서 분석해드려요
                </p>
                <button className="px-8 py-4 bg-[#27548A] text-white rounded-xl hover:bg-[#1e4068] transition-colors text-lg font-medium">
                  🎤 녹음 시작
                </button>
              </div>
            )}

            {inputMode === 'image' && (
              <div className="text-center py-16 border-2 border-dashed border-gray-300 rounded-2xl">
                <Camera className="w-20 h-20 text-gray-400 mx-auto mb-6" />
                <h4 className="text-2xl font-semibold text-gray-900 mb-4">비슷한 스타일 사진이 있나요?</h4>
                <p className="text-gray-600 mb-8 max-w-md mx-auto">
                  인스타그램, 핀터레스트에서 본 스타일이나 연예인 사진도 OK!
                </p>
                <input type="file" accept="image/*" className="hidden" id="image-upload" />
                <label
                  htmlFor="image-upload"
                  className="inline-block px-8 py-4 bg-[#27548A] text-white rounded-xl hover:bg-[#1e4068] transition-colors cursor-pointer text-lg font-medium"
                >
                  📸 사진 선택하기
                </label>
              </div>
            )}
          </div> */}

          {/* Generate Button */}
          <div className="bg-gray-50 p-8">
            <div className="text-center">
              <Link
                href="/user-info"
                className="inline-flex items-center px-12 py-5 bg-[#27548A] text-white font-bold rounded-2xl hover:bg-[#1e4068] transition-all transform hover:scale-105 shadow-lg text-xl"
              >
                <Wand2 className="mr-4 w-6 h-6" />
                AI가 딱 한 벌 골라주기
                <ArrowRight className="ml-4 w-6 h-6" />
              </Link>
              <p className="text-gray-500 mt-4 text-lg">⏱️ 30초면 완성! 복잡한 설문 없어요</p>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <div className="bg-white/80 p-6 rounded-2xl border border-gray-200">
            <div className="flex items-center mb-4">
              <User className="w-8 h-8 text-[#27548A] mr-3" />
              <div>
                <div className="font-semibold text-gray-900">김○○ (25세)</div>
                <div className="text-sm text-gray-500">패션 완전 초보</div>
              </div>
            </div>
            <p className="text-gray-700">"정말 옷에 대해 아무것도 몰랐는데, 딱 하나만 추천해줘서 너무 편해요!"</p>
          </div>
          <div className="bg-white/80 p-6 rounded-2xl border border-gray-200">
            <div className="flex items-center mb-4">
              <User className="w-8 h-8 text-[#27548A] mr-3" />
              <div>
                <div className="font-semibold text-gray-900">이○○ (30세)</div>
                <div className="text-sm text-gray-500">직장인</div>
              </div>
            </div>
            <p className="text-gray-700">"고민할 시간도 없는데 첫 추천이 완벽했어요. 바로 주문했습니다."</p>
          </div>
          <div className="bg-white/80 p-6 rounded-2xl border border-gray-200">
            <div className="flex items-center mb-4">
              <User className="w-8 h-8 text-[#27548A] mr-3" />
              <div>
                <div className="font-semibold text-gray-900">박○○ (22세)</div>
                <div className="text-sm text-gray-500">대학생</div>
              </div>
            </div>
            <p className="text-gray-700">"여러 옵션 중에 고르는 스트레스가 없어서 좋아요. 정말 간단!"</p>
          </div>
        </div>
      </div>
    </div>
  );
}
