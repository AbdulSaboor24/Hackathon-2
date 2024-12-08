'use client'

import Image from 'next/image';
import Link from 'next/link';
import { BaseProps } from '@/app/types/common';
import ProductCard from './ProductCard';

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

  return (
    <section className="w-full pb-10 md:pb-20">
      <div className="max-w-[1440px] mx-auto px-4 md:px-5 lg:px-20">
        <h1 className="text-[28px] md:text-[32px] font-bold text-center mb-8 md:mb-12">
          TOP SELLING
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 mb-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
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