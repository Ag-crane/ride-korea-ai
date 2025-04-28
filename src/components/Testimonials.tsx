
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';

const testimonials = [
  {
    name: '김민수',
    role: '주말 라이더',
    image: '/placeholder.svg',
    testimonial: '외국 앱을 쓸 때는 항상 화면을 보느라 위험했는데, AI 음성 안내 덕분에 이제 도로에만 집중할 수 있어요. 한국어로 안내해주니 얼마나 편한지 몰라요!'
  },
  {
    name: '이지영',
    role: '동호회 회장',
    image: '/placeholder.svg',
    testimonial: '우리 동호회 회원들 모두 라이드코리아로 바꿨어요. 한국 자전거 도로에 최적화된 경로 안내가 정말 정확해요. 특히 국내 산악 코스의 고도 정보가 상세해서 좋아요.'
  },
  {
    name: '박준호',
    role: '자전거 통근러',
    image: '/placeholder.svg',
    testimonial: '매일 자전거로 출퇴근하는데, 라이드코리아의 실시간 경로 업데이트 덕분에 공사 중인 구간을 피해 다닐 수 있어요. 한국 앱이라 업데이트도 빠르고 좋네요.'
  },
  {
    name: '최서연',
    role: '자전거 여행가',
    image: '/placeholder.svg',
    testimonial: 'AI 페이스메이킹이 정말 놀라워요. 긴 여행에서도 체력 안배를 도와줘서 덜 지치고 더 멀리 갈 수 있게 되었어요. 한국의 아름다운 자전거길을 더 즐겁게 탐험하고 있습니다.'
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            라이더들의 생생한 경험
          </h2>
          <p className="text-lg text-gray-600">
            라이드코리아 AI를 사용하는 라이더들의 실제 후기를 확인하세요.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((item, i) => (
            <Card key={i} className="overflow-hidden border-none shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Avatar className="h-12 w-12 mr-4">
                    <AvatarImage src={item.image} alt={item.name} />
                    <AvatarFallback>{item.name.slice(0, 2)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-sm text-gray-500">{item.role}</p>
                  </div>
                </div>
                <p className="text-gray-700">{item.testimonial}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
