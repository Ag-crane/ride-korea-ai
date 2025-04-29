import React from 'react';
import { Button } from '@/components/ui/button';

const MapSection = () => {
  return (
    <section id="map" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {/* 모바일 뷰 (두 줄) */}
            <div className="flex flex-col md:hidden">
              <span>국내 자전거 경로</span>
              <span>데이터 기반</span>
            </div>
            {/* 데스크톱 뷰 (한 줄) */}
            <div className="hidden md:block">
              <span>국내 자전거 경로 데이터 기반</span>
            </div>
          </h2>
          <p className="text-lg text-gray-600">
            <span className="whitespace-normal md:whitespace-nowrap">한국의 자전거 도로와 추천 코스에 최적화된 지도 데이터로 더 정확하고 안전한 라이딩을 경험하세요.</span>
          </p>
        </div>
        
        {/* 지도 섹션 컨테이너 - 모바일에서는 숨김 */}
        <div className="relative rounded-2xl overflow-hidden shadow-xl mb-10 hidden md:block">
          <div className="aspect-[16/9] bg-gradient-to-br from-blue-400 to-blue-600 relative">
            {/* Map placeholder, in a real app this would be a real map */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2400&q=80')] bg-cover bg-center opacity-60"></div>
            
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl max-w-xl text-center">
                <h3 className="text-xl font-semibold mb-3 whitespace-normal md:whitespace-nowrap">정확한 국내 자전거 경로</h3>
                <p className="mb-4">
                  <span className="whitespace-normal">한국의 최신 자전거도로 정보와 라이더들의 실제 데이터를 반영한 경로 안내</span>
                </p>
                <Button className="cursor-default">경로 살펴보기</Button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow">
            <h3 className="text-lg font-semibold mb-3 whitespace-normal md:whitespace-nowrap">정확한 고도 정보</h3>
            <p className="text-gray-600 mb-4">
              <span className="whitespace-normal">국내 지형 데이터를 활용한 정밀한 고도 정보로 언덕과 경사를 미리 예측하세요.</span>
            </p>
          </div>
          <div className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow">
            <h3 className="text-lg font-semibold mb-3 whitespace-normal md:whitespace-nowrap">자전거 도로 최적화</h3>
            <p className="text-gray-600 mb-4">
              <span className="whitespace-normal">전국 자전거 도로와 추천 코스를 쉽게 탐색하고 내비게이션 할 수 있습니다.</span>
            </p>
          </div>
          <div className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow">
            <h3 className="text-lg font-semibold mb-3 whitespace-normal md:whitespace-nowrap">실시간 경로 업데이트</h3>
            <p className="text-gray-600 mb-4">
              <span className="whitespace-normal">공사, 폐쇄 등의 정보를 실시간으로 반영하여 항상 최적의 경로를 안내합니다.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
