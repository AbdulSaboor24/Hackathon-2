'use client'

import Image from 'next/image';
import Link from 'next/link';
import { BaseProps } from '@/app/types/common';

interface TopSellingProps extends BaseProps {}

const TopSelling: React.FC<TopSellingProps> = ({ className }) => {
  const products = [
    {
      id: 1,
      name: 'Vertical Striped Shirt',
      price: 212,
      originalPrice: 232,
      discount: '-20%',
      rating: 4.5,
      image: '/s1.png'
    },
    {
      id: 2,
      name: 'Courage Graphic T-shirt',
      price: 145,
      rating: 4.5,
      image: '/t4.png'
    },
    {
      id: 3,
      name: 'Loose Fit Bermuda Shorts',
      price: 80,
      rating: 4.5,
      image: '/sh1.png'
    },
    {
      id: 4,
      name: 'Faded Skinny Jeans',
      price: 210,
      rating: 4.5,
      image: '/j4.png'
    }
  ];

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    return (
      <div className="flex items-center gap-0.5">
        {[...Array(fullStars)].map((_, i) => (
          <span key={i} className="text-[#FFC633]">★</span>
        ))}
        {hasHalfStar && <span className="text-[#FFC633]">★</span>}
        {[...Array(5 - Math.ceil(rating))].map((_, i) => (
          <span key={i} className="text-[#D3D3D3]">★</span>
        ))}
        <span className="text-[#666] ml-1">{rating}/5</span>
      </div>
    );
  };

  return (
    <section className="w-full pb-10 md:pb-20">
      <div className="max-w-[1440px] mx-auto px-4 md:px-5 lg:px-20">
        <h1 className="text-[28px] md:text-[32px] font-bold text-center mb-8 md:mb-12">
          TOP SELLING
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 mb-8">
          {products.map((product) => (
            <Link 
              href={`/product/${product.id}`} 
              key={product.id}
              className="group cursor-pointer"
            >
              <div className="relative aspect-square mb-4 bg-[#F2F2F2] rounded-lg overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-4"
                />
              </div>
              
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-0.5">
                  {renderStars(product.rating)}
                </div>
                
                <h3 className="font-medium text-sm md:text-base">{product.name}</h3>
                
                <div className="flex flex-wrap items-center gap-2 md:gap-3">
                  <span className="font-bold text-base md:text-lg">${product.price}</span>
                  {product.originalPrice && (
                    <>
                      <span className="text-[#666] text-sm md:text-base line-through">${product.originalPrice}</span>
                      <span className="text-[#FF3333] text-sm md:text-base">{product.discount}</span>
                    </>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <button className="text-[#666] hover:text-black transition-colors border border-[#666] rounded-full px-8 md:px-12 py-2.5 md:py-3 text-sm md:text-base">
            View All
          </button>
        </div>
      </div>
    </section>
  );
};

export default TopSelling; 