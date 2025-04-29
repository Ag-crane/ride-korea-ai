
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Bike, Navigation } from 'lucide-react';

const MapSection = () => {
  const [activeRoute, setActiveRoute] = useState<string>('hanriver');

  // Routes data
  const routes = {
    hanriver: {
      name: '한강 자전거길',
      description: '서울을 가로지르는 한강 자전거 도로는 도심 속 자연을 만끽할 수 있는 인기 코스입니다.',
      distance: '약 40km',
      difficulty: '초급-중급',
      image: 'https://images.unsplash.com/photo-1602486165697-1c821691b0d5?auto=format&fit=crop&q=80&w=1000'
    },
    eastcoast: {
      name: '동해안 자전거길',
      description: '푸른 동해와 함께하는 해안 코스로, 아름다운 경치를 즐기며 라이딩할 수 있습니다.',
      distance: '약 110km',
      difficulty: '중급-상급',
      image: 'https://images.unsplash.com/photo-1614977655016-9628745fc695?auto=format&fit=crop&q=80&w=1000'
    },
    geumgang: {
      name: '금강 자전거길',
      description: '금강을 따라 펼쳐지는 평화로운 풍경과 함께 여유롭게 달릴 수 있는 코스입니다.',
      distance: '약 60km',
      difficulty: '초급',
      image: 'https://images.unsplash.com/photo-1598991656856-95ab398e0737?auto=format&fit=crop&q=80&w=1000'
    }
  };

  return (
    <section id="map" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            국내 자전거 경로 데이터 기반
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            한국의 자전거 도로와 추천 코스에 최적화된 지도 데이터로 
            더 정확하고 안전한 라이딩을 경험하세요.
          </p>
        </div>
        
        <div className="mb-6 flex flex-wrap justify-center gap-3">
          {Object.entries(routes).map(([key, route]) => (
            <Button 
              key={key}
              variant={activeRoute === key ? "default" : "outline"}
              onClick={() => setActiveRoute(key)}
              className="flex gap-2 items-center"
            >
              <Bike className="h-4 w-4" />
              {route.name}
            </Button>
          ))}
        </div>
        
        <div className="relative rounded-2xl overflow-hidden shadow-xl mb-10 aspect-[16/9]" style={{minHeight: '500px'}}>
          <img 
            src={routes[activeRoute as keyof typeof routes].image} 
            alt={routes[activeRoute as keyof typeof routes].name}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 text-white">
            <h3 className="text-2xl font-bold mb-2">{routes[activeRoute as keyof typeof routes].name}</h3>
            <p className="mb-2">{routes[activeRoute as keyof typeof routes].description}</p>
            <div className="flex gap-6">
              <div>
                <span className="font-semibold">거리:</span> {routes[activeRoute as keyof typeof routes].distance}
              </div>
              <div>
                <span className="font-semibold">난이도:</span> {routes[activeRoute as keyof typeof routes].difficulty}
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center mb-3">
              <Navigation className="h-5 w-5 text-primary mr-2" />
              <h3 className="text-lg font-semibold">정확한 고도 정보</h3>
            </div>
            <p className="text-gray-600">국내 지형 데이터를 활용한 정밀한 고도 정보로 언덕과 경사를 미리 예측하세요.</p>
          </div>
          <div className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center mb-3">
              <Bike className="h-5 w-5 text-primary mr-2" />
              <h3 className="text-lg font-semibold">자전거 도로 최적화</h3>
            </div>
            <p className="text-gray-600">전국 자전거 도로와 추천 코스를 쉽게 탐색하고 내비게이션 할 수 있습니다.</p>
          </div>
          <div className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center mb-3">
              <Navigation className="h-5 w-5 text-primary mr-2" />
              <h3 className="text-lg font-semibold">실시간 경로 업데이트</h3>
            </div>
            <p className="text-gray-600">공사, 폐쇄 등의 정보를 실시간으로 반영하여 항상 최적의 경로를 안내합니다.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
