import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-blue-50 py-20 md:py-32">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 leading-tight flex flex-col gap-8">
              <div className="whitespace-normal md:whitespace-nowrap">한국 <span className="text-primary">최적화</span> 자전거</div>
              <div className="whitespace-normal md:whitespace-nowrap">라이딩 <span className="text-primary">AI</span> 어시스턴트</div>
            </h1>
            <p className="text-lg text-gray-600 flex flex-col gap-2">
              <span className="whitespace-normal md:whitespace-nowrap">한국의 자전거 도로와 추천 코스에 최적화된 지도 데이터로 더 정확하고 안전한 라이딩을 경험하세요.</span>
              <span className="whitespace-normal md:whitespace-nowrap">100% 한국어 지원으로 모든 라이더에게 완벽한 솔루션을 제공합니다.</span>
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="px-8 font-medium">
                앱 다운로드 <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="relative flex justify-center">
            <div className="h-[500px] w-[250px] relative rounded-3xl overflow-hidden border-8 border-gray-900 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600">
                <div className="absolute inset-0 opacity-40 mix-blend-overlay bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
                <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="relative h-full w-full flex flex-col justify-end p-6 text-white">
                  <div className="mb-20">
                    <div className="font-medium text-lg mb-1">현재 속도</div>
                    <div className="font-bold text-4xl">22.5 km/h</div>
                    <div className="font-medium text-sm opacity-75 mb-6">페이스 유지 중</div>
                    
                    <div className="font-medium text-lg mb-1">남은 거리</div>
                    <div className="font-bold text-3xl">3.2 km</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-blue-50 to-transparent"></div>
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl -z-10"></div>
    </section>
  );
};

export default Hero;
