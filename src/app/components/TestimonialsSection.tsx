'use client'

import { useState } from 'react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah M.',
      rating: 5,
      text: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
      verified: true
    },
    {
      id: 2,
      name: 'Alex K.',
      rating: 5,
      text: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
      verified: true
    },
    {
      id: 3,
      name: 'James L.',
      rating: 5,
      text: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
      verified: true
    }
  ];

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1.5">
        {[...Array(5)].map((_, index) => (
          <span key={index} className="text-[#FFC633] text-2xl">
            ★
          </span>
        ))}
      </div>
    );
  };

  return (
    <section className="w-full py-10 md:py-20">
      <div className="max-w-[1440px] mx-auto px-4 md:px-5 lg:px-20">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0 mb-8 md:mb-12">
          <h2 className="text-[32px] md:text-[40px] font-bold text-center md:text-left">
            OUR HAPPY CUSTOMERS
          </h2>
          <div className="flex gap-4">
            <button className="w-[45px] h-[45px] md:w-[60px] md:h-[60px] rounded-full border border-[#E8E8E8] flex items-center justify-center hover:bg-black hover:text-white transition-colors">
              ←
            </button>
            <button className="w-[45px] h-[45px] md:w-[60px] md:h-[60px] rounded-full border border-[#E8E8E8] flex items-center justify-center hover:bg-black hover:text-white transition-colors">
              →
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4 md:gap-8 overflow-x-auto pb-4 md:pb-0 scrollbar-hide">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="flex-none md:flex-1 w-[85vw] md:w-auto bg-white p-6 md:p-8 rounded-[20px] border border-[#E8E8E8] flex flex-col gap-4 md:gap-6"
            >
              {renderStars(testimonial.rating)}
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <span className="font-medium text-lg">{testimonial.name}</span>
                  {testimonial.verified && (
                    <span className="flex items-center gap-1 text-[#01AB31] text-sm">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M7 13.5C3.416 13.5 0.5 10.584 0.5 7C0.5 3.416 3.416 0.5 7 0.5C10.584 0.5 13.5 3.416 13.5 7C13.5 10.584 10.584 13.5 7 13.5ZM6.35 10L11.05 5.3L9.989 4.239L6.35 7.878L4.531 6.059L3.47 7.12L6.35 10Z" fill="#01AB31"/>
                      </svg>
                      Verified Customer
                    </span>
                  )}
                </div>
                <p className="text-[#666] text-base leading-relaxed">{testimonial.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection; 