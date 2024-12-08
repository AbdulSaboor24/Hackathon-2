'use client'

import Image from 'next/image';
import Link from 'next/link';

const NewArrivals = () => {
  const products = [
    {
      id: 1,
      name: 'T-shirt with Tape Details',
      price: 120,
      rating: 4.5,
      image: '/t1.png'
    },
    {
      id: 2,
      name: 'Skinny Fit Jeans',
      price: 240,
      originalPrice: 260,
      discount: '-20%',
      rating: 3.5,
      image: '/j1.png'
    },
    {
      id: 3,
      name: 'Checkered Shirt',
      price: 180,
      rating: 4.5,
      image: '/j2.png'
    },
    {
      id: 4,
      name: 'Sleeve Striped T-shirt',
      price: 130,
      originalPrice: 160,
      discount: '-30%',
      rating: 4.5,
      image: '/j3.png'
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
    <section className="w-full pt-8 pb-20">
      <div className="max-w-[1440px] mx-auto px-5 lg:px-20">
        <h1 className="text-[32px] font-bold text-center mb-12">
          NEW ARRIVALS
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-8">
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
                
                <h3 className="font-medium text-base">{product.name}</h3>
                
                <div className="flex items-center gap-3">
                  <span className="font-bold text-lg">${product.price}</span>
                  {product.originalPrice && (
                    <>
                      <span className="text-[#666] line-through">${product.originalPrice}</span>
                      <span className="text-[#FF3333]">{product.discount}</span>
                    </>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <button className="text-[#666] hover:text-black transition-colors border border-[#666] rounded-full px-12 py-3">
            View All
          </button>
        </div>
      </div>
      <hr className='bg-slate-200 my-10 w-[1300px] mx-auto'/>
    </section>
  );
};

export default NewArrivals; 