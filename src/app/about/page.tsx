import React from 'react';
import Link from 'next/link';

export default function About() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          {/* Animated background elements */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-[#27548A] rounded-full animate-pulse"></div>
            <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
            <div className="absolute bottom-1/4 left-1/2 w-3 h-3 bg-purple-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
            <div className="absolute top-2/3 right-1/4 w-1 h-1 bg-white rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-[#27548A]/10 via-transparent to-purple-900/10"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 py-64">
          <div className="text-center">
            <div className="inline-block mb-8">
              <div className="px-6 py-3 border border-[#27548A] rounded-full text-[#27548A] font-medium">
                POWERED BY ARTIFICIAL INTELLIGENCE
              </div>
            </div>
            
            <h1 className="text-7xl md:text-9xl font-black mb-8 leading-none">
              <span className="block text-white">THE</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#27548A] via-blue-400 to-purple-400">
                ONLY
              </span>
              <span className="block text-white">ONE</span>
            </h1>
            
            <p className="text-2xl text-gray-300 max-w-3xl mx-auto mb-16 leading-relaxed">
              수천 개의 선택지 중에서 고민하느라 지치셨나요?<br />
              AI가 당신만을 위한 <span className="text-[#27548A] font-bold">단 하나</span>의 완벽한 답을 찾아드립니다.
            </p>
            
            <div className="flex flex-col items-center gap-8">
              <Link 
                href="/login" 
                className="group relative px-12 py-6 bg-[#27548A] text-white font-bold text-xl rounded-lg overflow-hidden transition-all duration-300 hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative flex items-center">
                  START YOUR JOURNEY
                </span>
              </Link>
              
              <div className="flex items-center gap-8 text-gray-400">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">97.6%</div>
                  <div className="text-sm">SUCCESS RATE</div>
                </div>
                <div className="w-px h-12 bg-gray-700"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">27.4초</div>
                  <div className="text-sm">ANALYSIS TIME</div>
                </div>
                <div className="w-px h-12 bg-gray-700"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">16만 개</div>
                  <div className="text-sm">PERFECT MATCH</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-64 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#27548A] to-blue-400">
                REVOLUTIONARY
              </span>{" "}
              EXPERIENCE
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              AI 기술의 힘으로 패션 선택의 새로운 패러다임을 제시합니다
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#27548A]/20 to-blue-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative p-8 bg-black border border-gray-800 rounded-2xl group-hover:border-[#27548A]/50 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-4">PRECISION TARGETING</h3>
                <p className="text-gray-400 leading-relaxed">
                  개인의 모든 특성을 정밀 분석하여 99% 정확도로 최적의 아이템을 매칭합니다.
                </p>
              </div>
            </div>
            
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative p-8 bg-black border border-gray-800 rounded-2xl group-hover:border-blue-500/50 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-4">INSTANT RESULTS</h3>
                <p className="text-gray-400 leading-relaxed">
                  복잡한 알고리즘이 단 3분 만에 당신만을 위한 완벽한 선택을 제시합니다.
                </p>
              </div>
            </div>
            
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative p-8 bg-black border border-gray-800 rounded-2xl group-hover:border-purple-500/50 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-4">STYLE EVOLUTION</h3>
                <p className="text-gray-400 leading-relaxed">
                  단순한 추천을 넘어 당신의 스타일 진화를 이끌어내는 개인 맞춤 솔루션입니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-64 bg-gradient-to-r from-[#27548A] via-blue-700 to-purple-700">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-6xl font-bold mb-8 leading-tight">
            READY TO FIND<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-300">
              YOUR PERFECT ONE?
            </span>
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            지금 시작하여 AI가 제안하는 당신만의 완벽한 스타일을 경험해보세요
          </p>
          
          <p className="text-sm text-white/60 mt-8">
            No commitment required • Complete in minutes • Start for free
          </p>
        </div>
      </div>
    </div>
  );
};
