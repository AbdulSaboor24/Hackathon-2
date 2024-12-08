'use client'

import Image from 'next/image';

const BrowseByStyle = () => {
  return (
    <section className="w-full pb-10 md:pb-20">
      <div className="max-w-[1440px] mx-auto px-4 md:px-5 lg:px-20">
        <div className="bg-[#F2F0F1] rounded-[20px] p-4 md:p-8 lg:p-12">
          <h1 className="text-[32px] md:text-[48px] font-bold text-center mb-6 md:mb-8">
            BROWSE BY DRESS STYLE
          </h1>

          <div className="flex flex-col gap-4">
            {/* First Row */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="w-full md:w-[32%] h-[160px] md:h-[180px] bg-white rounded-lg overflow-hidden relative">
                <div className="absolute inset-0 w-full px-2">
                  <Image
                    src="/casual.png"
                    alt="Casual"
                    fill
                    className="object-contain object-center scale-125"
                  />
                </div>
              </div>
              <div className="w-full md:w-[68%] h-[160px] md:h-[180px] bg-white rounded-lg overflow-hidden relative">
                <div className="absolute inset-0">
                  <Image
                    src="/formal.png"
                    alt="Formal"
                    fill
                    className="object-contain object-center scale-105"
                  />
                </div>
              </div>
            </div>

            {/* Second Row */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="w-full md:w-[60%] h-[160px] md:h-[180px] bg-white rounded-lg overflow-hidden relative">
                <div className="absolute inset-0">
                  <Image
                    src="/party.png"
                    alt="Party"
                    fill
                    className="object-contain object-center"
                  />
                </div>
              </div>
              <div className="w-full md:w-[40%] h-[160px] md:h-[180px] bg-white rounded-lg overflow-hidden relative">
                <div className="absolute inset-0 flex items-center pl-6">
                  <h3 className="text-xl font-medium text-black z-10">Gym</h3>
                </div>
                <div className="absolute inset-0">
                  <Image
                    src="/gym.png"
                    alt="Gym"
                    fill
                    className="object-contain object-right"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrowseByStyle; 