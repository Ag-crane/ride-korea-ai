import React from 'react';
import { Check, MapPin, Navigation, Mic } from 'lucide-react';

const features = [
  {
    icon: <MapPin className="h-8 w-8 text-primary" />,
    title: '정확한 한국 맞춤형 데이터',
    description: [
      '국내 지도 데이터를 기반으로 정확한 위치 추적 ',
      '및 자전거 경로를 안내합니다.'
    ]
  },
  {
    icon: <Navigation className="h-8 w-8 text-primary" />,
    title: '완벽한 현지화',
    description: [
      '한국 라이더를 위한 UI 디자인과 100% 한국어 지원',
      '으로 언어 장벽 없이 라이딩에 집중할 수 있습니다.',
    ]
  },
  {
    icon: <Mic className="h-8 w-8 text-primary" />,
    title: 'AI 음성 페이스메이킹',
    description: [
      '화면을 보지 않아도 AI가 코스의 고도를 분석하여',
      '목표에 따른 최적의 페이스를 음성으로 안내합니다.',
    ]
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            <span className="whitespace-normal md:whitespace-nowrap">한국 라이더를 위한 맞춤 기능</span>
          </h2>
          <p className="text-lg text-gray-600">
            <span className="whitespace-normal md:whitespace-nowrap">해외 앱의 단점을 모두 해소하고, 한국 라이더를 위한 특별한 기능을 제공합니다.</span>
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <div key={i} className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 whitespace-normal md:whitespace-nowrap">{feature.title}</h3>
              <p className="text-gray-600">
                <span className="whitespace-normal">{feature.description}</span>
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl font-semibold mb-6 text-center">해외 앱과의 차별점</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h4 className="font-medium text-lg mb-4">해외 라이딩 앱</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>위치 추적 부정확</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>국내 자전거 경로 정보 부족</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>한글 미지원 또는 번역 품질 낮음</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>한국 유저들의 감성에 안맞는 UI</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>주행 중 화면 확인 필요</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h4 className="font-medium text-lg mb-4">라이딩 메이트 AI</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                  <span>국내 지도 데이터로 정확한 위치 추적</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                  <span>국내 자전거 도로 최신 정보 적용</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                  <span>100% 한국어 네이티브 인터페이스</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                  <span>한국인의 라이딩 스타일에 맞춘 UI/UX</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                  <span>AI 음성 안내로 화면 확인 불필요</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
