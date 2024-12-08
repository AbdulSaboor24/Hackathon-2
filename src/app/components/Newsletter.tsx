'use client'

import { useState } from 'react';
import { MailIcon } from './icons';
import { BaseProps } from '@/app/types/common';

interface NewsletterProps extends BaseProps {}

const Newsletter: React.FC<NewsletterProps> = ({ className }) => {
  const [email, setEmail] = useState('');

  return (
    <div className="relative -mb-24 z-10 mx-4">
      <div className="max-w-[1440px] mx-auto">
        <div className="bg-black rounded-[20px] px-5 md:px-8 py-8 md:py-12">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
            <h2 className="text-4xl md:text-[48px] leading-[1.1] font-extrabold font-integralCF text-white max-w-[600px] tracking-tight">
              STAY UP TO DATE ABOUT OUR LATEST OFFERS
            </h2>
            <div className="w-full lg:w-auto space-y-3">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full lg:w-[360px] pl-12 pr-4 py-3 bg-white text-black rounded-full focus:outline-none text-base placeholder:text-[#6B6B6B]"
                />
                <MailIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6B6B6B]" />
              </div>
              <button className="w-full lg:w-[360px] bg-white text-black py-3 rounded-full hover:bg-gray-100 transition-colors font-medium text-base">
                Subscribe to Newsletter
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter; 