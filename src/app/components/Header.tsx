'use client'

import { useState } from 'react';
import { CloseIcon } from './icons';

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-black w-full">
      <div className="max-w-[1440px] mx-auto relative">
        <div className="px-4 py-2 flex flex-col sm:flex-row items-center justify-between text-white text-sm">
          {/* Centered Message */}
          <div className="text-center flex-grow sm:flex sm:justify-center sm:items-center">
            <span className="whitespace-normal sm:whitespace-nowrap text-center block">
              Sign up and get 20% off to your first order.{' '}
              <a href="/signup" className="underline hover:text-gray-200">
                Sign Up Now
              </a>
            </span>
          </div>

          {/* Close Button - Hidden on Mobile */}
          <div className="hidden sm:block">
            <button 
              onClick={() => setIsVisible(false)}
              className="text-white hover:text-gray-300 transition-colors p-1"
              aria-label="Close announcement"
            >
              <CloseIcon className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;