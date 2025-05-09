
import React from 'react';
import { Button } from '@/components/ui/button';
import { useSurveyModal } from '@/contexts/SurveyModalContext';

const Footer = () => {
  const { openSurvey } = useSurveyModal();
  
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">

          <p className="text-gray-400 text-center md:text-left max-w-xl">
            한국 라이더를 위한 최적의 자전거 라이딩 어시스턴트 앱. AI 음성 안내와 정확한 국내 맵 데이터로 더 안전하고 즐거운 라이딩을 경험하세요.
          </p>
		  <div className="flex items-center gap-4">
            <h3 className="text-2xl font-bold text-white">라이딩 메이트 AI</h3>
            <Button onClick={openSurvey}>앱 다운로드</Button>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500">© 2025 라이딩 메이트 AI. All rights reserved.</p>
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
