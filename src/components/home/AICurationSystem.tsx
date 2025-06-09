export default function AICurationSystem() {
  const features = [
    {
      title: '개인화된 추천',
      description: '사용자의 취향과 선호도를 분석하여 맞춤형 추천을 제공합니다.',
      icon: '🎯',
    },
    {
      title: '빅데이터 기반',
      description: '수많은 사용자 데이터를 분석하여 최적의 추천을 제공합니다.',
      icon: '📊',
    },
    {
      title: '실시간 업데이트',
      description: '최신 트렌드와 사용자 피드백을 반영하여 지속적으로 개선됩니다.',
      icon: '🔄',
    },
  ];

  const criteria = [
    {
      category: '음악적 요소',
      items: ['멜로디', '리듬', '하모니', '음색'],
      weight: '40%',
    },
    {
      category: '감정적 요소',
      items: ['분위기', '감정 전달', '공감도'],
      weight: '30%',
    },
    {
      category: '사용자 맞춤',
      items: ['취향 분석', '이력 기반', '상황별 추천'],
      weight: '30%',
    },
  ];

  return (
    <div className="my-16 py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">AI 큐레이션 시스템</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            정보의 바다에서 당신의 결정을 도와드립니다. 우리의 AI는 당신의 취향을 이해하고, 최적의 선택을 제안합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 text-center transform transition-all duration-300 hover:scale-105"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">추천 기준</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {criteria.map((criterion) => (
              <div key={criterion.category} className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-sm">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{criterion.category}</h4>
                  <span className="text-ccblue font-bold">{criterion.weight}</span>
                </div>
                <ul className="space-y-2">
                  {criterion.items.map((item) => (
                    <li key={item} className="text-gray-600 dark:text-gray-300 flex items-center">
                      <span className="w-2 h-2 bg-ccblue rounded-full mr-2"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
