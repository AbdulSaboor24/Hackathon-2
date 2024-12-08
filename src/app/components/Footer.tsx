'use client'

import Image from 'next/image';
import { BaseProps } from '@/app/types/common';

interface FooterProps extends BaseProps {}

const Footer: React.FC<FooterProps> = ({ className }) => {
  const companyLinks = ['About', 'Features', 'Works', 'Career'];
  const helpLinks = ['Customer Support', 'Delivery Details', 'Terms & Conditions', 'Privacy Policy'];
  const faqLinks = ['Account', 'Manage Deliveries', 'Orders', 'Payments'];
  const resourcesLinks = ['Free eBooks', 'Development Tutorial', 'How to - Blog', 'Youtube Playlist'];

  const paymentMethods = [
    { id: 'visa', name: 'Visa' },
    { id: 'mastercard', name: 'Mastercard' },
    { id: 'paypal', name: 'PayPal' },
    { id: 'apple-pay', name: 'Apple Pay' },
    { id: 'gpay', name: 'Google Pay' },
  ];

  return (
    <footer className="bg-[#F0F0F0] pt-20 lg:pt-32">
      <div className="max-w-[1440px] mx-auto px-4 md:px-5 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 md:gap-x-6 gap-y-8 pb-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <div className="text-xl font-bold font-integralCF text-black mb-4">
              SHOP.CO
            </div>
            <p className="text-[#666] text-sm mb-6 max-w-[280px]">
              We have clothes that suits your style and which you&apos;re proud to wear. From women to men.
            </p>
            <div className="flex gap-4 md:gap-6">
              {/* Facebook */}
              <a href="#" className="text-[#666] hover:text-black transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </a>
              
              {/* Twitter/X */}
              <a href="#" className="text-[#666] hover:text-black transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>

              {/* Instagram */}
              <a href="#" className="text-[#666] hover:text-black transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              {/* GitHub */}
              <a href="#" className="text-[#666] hover:text-black transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-black">COMPANY</h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link}>
                  <button className="text-[#666] hover:text-black transition-colors text-sm">
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-black">HELP</h3>
            <ul className="space-y-3">
              {helpLinks.map((link) => (
                <li key={link}>
                  <button className="text-[#666] hover:text-black transition-colors text-sm">
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* FAQ Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-black">FAQ</h3>
            <ul className="space-y-3">
              {faqLinks.map((link) => (
                <li key={link}>
                  <button className="text-[#666] hover:text-black transition-colors text-sm">
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-black">RESOURCES</h3>
            <ul className="space-y-3">
              {resourcesLinks.map((link) => (
                <li key={link}>
                  <button className="text-[#666] hover:text-black transition-colors text-sm">
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="py-4 md:py-6 border-t border-[#E6E6E6] flex flex-col-reverse md:flex-row justify-between items-center gap-4">
          <p className="text-[#666] text-sm text-center md:text-left">
            Shop.co © 2000-2024, All Rights Reserved
          </p>
          <div className="flex flex-wrap justify-center items-center gap-3 md:gap-4">
            {paymentMethods.map((method) => (
              <div 
                key={method.id}
                className="relative h-10 w-16 md:h-11 md:w-20 bg-white rounded-[4px] flex items-center justify-center"
              >
                <Image
                  src={`/images/payments/${method.id}.png`}
                  alt={method.name}
                  fill
                  className="object-contain p-2"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;  