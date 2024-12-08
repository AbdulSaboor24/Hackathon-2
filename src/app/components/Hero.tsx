'use client'

import Image from 'next/image';

const Hero = () => {
  const stats = [
    { number: '200+', label: 'International Brands' },
    { number: '2,000+', label: 'High-Quality Products' },
    { number: '30,000+', label: 'Happy Customers' },
  ];

  return (
    <section className="w-full bg-[#F2F0F1] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-5 lg:px-20">
        <div className="flex flex-col lg:flex-row items-center justify-between py-12 lg:py-16">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 lg:pr-8 space-y-6 mb-8 lg:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-[64px] font-bold font-integralCF leading-tight">
              FIND CLOTHES THAT MATCHES YOUR STYLE
            </h1>
            <p className="text-[#666] text-base md:text-lg max-w-[600px]">
              Browse through our diverse range of meticulously crafted garments, designed 
              to bring out your individuality and cater to your sense of style.
            </p>
            <button className="bg-black text-white px-8 py-4 rounded-full font-medium hover:bg-gray-900 transition-colors">
              Shop Now
            </button>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-8">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl md:text-3xl font-bold font-integralCF">
                    {stat.number}
                  </div>
                  <div className="text-[#666] text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative aspect-[4/5] w-full">
              <Image
                src="/hero-image.jpeg"
                alt="Fashion Models"
                fill
                className="object-cover rounded-2xl"
                priority
              />
              {/* Decorative Stars */}
              <div className="absolute -top-4 -right-4 w-8 h-8">
                <Image
                  src="/star.svg"
                  alt="Decorative Star"
                  width={100}
                  height={100}
                />
              </div>
              <div className="absolute top-1/4 -left-4 w-6 h-6">
                <Image
                  src="/star.svg"
                  alt="Decorative Star"
                  width={24}
                  height={24}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 