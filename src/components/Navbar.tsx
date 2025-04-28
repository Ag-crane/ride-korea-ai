
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4 py-4 md:flex md:justify-between md:items-center">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center">
            <span className="text-2xl font-bold text-primary">라이드코리아</span>
            <span className="ml-2 text-sm text-muted-foreground font-medium">AI</span>
          </a>
          
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-500 hover:text-primary"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
        
        <div className={`md:flex items-center ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
          <div className="flex flex-col mt-4 md:flex-row md:mt-0 md:space-x-8">
            <a href="#features" className="py-2 text-gray-700 hover:text-primary">기능</a>
            <a href="#ai-assistant" className="py-2 text-gray-700 hover:text-primary">AI 음성 안내</a>
            <a href="#map" className="py-2 text-gray-700 hover:text-primary">지도</a>
            <a href="#testimonials" className="py-2 text-gray-700 hover:text-primary">사용후기</a>
          </div>
          <Button className="mt-4 md:mt-0 md:ml-8">앱 다운로드</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
