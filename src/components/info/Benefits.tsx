import { CheckCircle, Clock, Target } from 'lucide-react';

export default function Benefits() {
  return (
    <div className="mt-16 grid md:grid-cols-3 gap-6">
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
  );
}
