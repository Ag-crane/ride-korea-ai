
import React from 'react';
import { Headphones, Volume2 } from 'lucide-react';

const AIAssistant = () => {
  return (
    <section id="ai-assistant" className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              AI 음성 페이스메이킹으로<br />더 안전한 라이딩
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              주행 중 화면을 보지 않아도 AI가 모든 것을 안내해드립니다.
              코스의 고도 정보와 사용자의 주행 데이터를 분석하여
              실시간으로 최적의 페이스를 알려주는 음성 어시스턴트를 만나보세요.
            </p>
            
            <div className="space-y-5">
              <div className="flex items-start">
                <div className="mr-4 bg-primary/20 p-2 rounded-lg">
                  <Volume2 className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">실시간 음성 안내</h3>
                  <p className="text-gray-600">
                    "300m 앞에 급경사가 있습니다. 기어를 미리 조정하세요."
                    "현재 페이스가 목표보다 느립니다. 속도를 약간 올려주세요."
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 bg-primary/20 p-2 rounded-lg">
                  <Headphones className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">개인화된 페이스메이킹</h3>
                  <p className="text-gray-600">
                    목표 페이스, 체력 상태, 코스 난이도에 따른 맞춤형 안내로
                    효율적인 라이딩을 도와드립니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-xl p-5 md:p-8 relative z-10">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-sm text-gray-500">현재 구간</p>
                  <h3 className="text-xl font-semibold">남한강 자전거길</h3>
                </div>
                <div className="bg-blue-100 text-primary font-medium px-3 py-1 rounded-full text-sm">
                  라이딩 중
                </div>
              </div>
              
              <div className="bg-gray-100 rounded-xl p-4 mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-500">AI 음성 메시지</span>
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">방금 전</span>
                </div>
                <p className="text-gray-800">
                  "1km 앞에 경사가 있습니다. 현재 페이스라면 약 3분 후 도착예정입니다. 
                  목표 페이스를 유지하기 위해 미리 기어를 조정하세요."
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">현재 페이스</span>
                  <span className="font-medium">23.2 km/h</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-primary h-2.5 rounded-full" style={{ width: '85%' }}></div>
                </div>
                <div className="flex justify-between text-xs text-gray-500">
                  <span>목표: 25 km/h</span>
                  <span>양호</span>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-gray-500 text-sm">이동 거리</p>
                    <p className="font-semibold text-lg">12.5 km</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">남은 거리</p>
                    <p className="font-semibold text-lg">8.3 km</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">예상 도착</p>
                    <p className="font-semibold text-lg">32분</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-10 blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIAssistant;
