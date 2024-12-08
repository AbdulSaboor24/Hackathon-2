import Image from 'next/image';
import { BaseProps } from '@/app/types/common';

interface BrandsBannerProps extends BaseProps {}

const BrandsBanner: React.FC<BrandsBannerProps> = ({ className }) => {
  const brands = [
    {
      name: 'Versace',
      logo: '/versace.svg',
      width: 140,
      height: 32
    },
    {
      name: 'Zara',
      logo: '/zara.svg',
      width: 120,
      height: 28
    },
    {
      name: 'Gucci',
      logo: '/gucci.svg',
      width: 150,
      height: 32
    },
    {
      name: 'Prada',
      logo: '/prada.svg',
      width: 160,
      height: 32
    },
    {
      name: 'Calvin Klein',
      logo: '/klein.svg',
      width: 180,
      height: 32
    }
  ];
  
  return (
    <div className="w-full bg-black transform -translate-y-32 relative z-10">
      <div className="max-w-[1440px] mx-auto px-5 lg:px-[80px] py-[48px]">
        <div className="flex flex-wrap justify-between items-center gap-8 lg:gap-[32px]">
          {brands.map((brand) => (
            <Image
              key={brand.name}
              src={brand.logo}
              alt={brand.name}
              width={brand.width}
              height={brand.height}
              className="opacity-90 hover:opacity-100 transition-opacity mx-auto lg:mx-0 object-contain brightness-0 invert filter-none"
              style={{ filter: 'brightness(0) invert(1)' }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandsBanner;