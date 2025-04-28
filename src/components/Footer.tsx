
import React from 'react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">라이드코리아 AI</h3>
            <p className="mb-4 text-gray-400">
              한국 라이더를 위한 최적의 자전거 라이딩 어시스턴트 앱.
              AI 음성 안내와 정확한 국내 맵 데이터로 더 안전하고 즐거운 라이딩을 경험하세요.
            </p>
            <Button>앱 다운로드</Button>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">서비스</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">기능 소개</a></li>
              <li><a href="#" className="hover:text-white transition-colors">추천 코스</a></li>
              <li><a href="#" className="hover:text-white transition-colors">프리미엄 플랜</a></li>
              <li><a href="#" className="hover:text-white transition-colors">커뮤니티</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">회사</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">소개</a></li>
              <li><a href="#" className="hover:text-white transition-colors">블로그</a></li>
              <li><a href="#" className="hover:text-white transition-colors">채용정보</a></li>
              <li><a href="#" className="hover:text-white transition-colors">문의하기</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500">© 2025 라이드코리아 AI. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">이용약관</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">개인정보처리방침</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">FAQ</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
