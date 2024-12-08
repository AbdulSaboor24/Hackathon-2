'use client'

import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
import Header from '@/app/components/Header';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import Newsletter from '@/app/components/Newsletter';

export default function ProductPage() {
  const [selectedSize, setSelectedSize] = useState('Large');
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState('olive');
  const [activeTab, setActiveTab] = useState('reviews'); // 'details', 'reviews', 'faqs'

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Navbar />
      
      <main className="flex-grow">
        {/* Breadcrumb */}
        <div className="max-w-[1440px] mx-auto px-4 md:px-5 lg:px-20 py-4">
          <div className="flex items-center gap-2 text-sm text-[#666]">
            <Link href="/" className="hover:text-black">Home</Link>
            <span>›</span>
            <Link href="/shop" className="hover:text-black">Shop</Link>
            <span>›</span>
            <Link href="/shop/men" className="hover:text-black">Men</Link>
            <span>›</span>
            <span className="text-black">T-shirts</span>
          </div>
        </div>

        {/* Product Details */}
        <div className="max-w-[1440px] mx-auto px-4 md:px-5 lg:px-20">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
            {/* Left - Images */}
            <div className="lg:w-1/2">
              <div className="flex gap-4">
                {/* Thumbnails */}
                <div className="flex flex-col gap-4 w-[100px]">
                  {['/t1.png', '/t1.png', '/t1.png'].map((img, i) => (
                    <div key={i} className="aspect-square bg-[#F2F0F1] rounded-lg p-4">
                      <Image
                        src={img}
                        alt="Product view"
                        width={80}
                        height={80}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  ))}
                </div>
                
                {/* Main Image */}
                <div className="flex-1 aspect-square bg-[#F2F0F1] rounded-lg p-8">
                  <div className="relative w-full h-full">
                    <Image
                      src="/t1.png"
                      alt="ONE LIFE GRAPHIC T-SHIRT"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Details */}
            <div className="lg:w-1/2 space-y-6">
              <h1 className="text-[40px] font-bold">ONE LIFE GRAPHIC T-SHIRT</h1>
              
              {/* Rating */}
              <div className="flex items-center gap-2">
                <div className="flex text-[#FFC633] text-xl">{'★'.repeat(5)}</div>
                <span className="text-[#666]">4.5/5</span>
                <span className="text-[#666]">(463)</span>
              </div>

              {/* Price */}
              <div className="flex items-center gap-4">
                <span className="text-[32px] font-bold">$260</span>
                <span className="text-[#666] text-xl line-through">$300</span>
                <span className="text-[#FF3333] text-xl">-40%</span>
              </div>

              <p className="text-[#666]">
                This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.
              </p>

              {/* Color Selection */}
              <div>
                <h3 className="font-medium mb-4">Select Colors</h3>
                <div className="flex gap-3">
                  {[
                    { name: 'Olive', value: '#4A5043' },
                    { name: 'Forest', value: '#004337' },
                    { name: 'Navy', value: '#28364D' }
                  ].map((color) => (
                    <button
                      key={color.name}
                      className={`w-12 h-12 rounded-full ${
                        selectedColor === color.name.toLowerCase() ? 'ring-2 ring-offset-2 ring-black' : ''
                      }`}
                      style={{ backgroundColor: color.value }}
                      onClick={() => setSelectedColor(color.name.toLowerCase())}
                    />
                  ))}
                </div>
              </div>

              {/* Size Selection */}
              <div>
                <h3 className="font-medium mb-4">Choose Size</h3>
                <div className="flex gap-3">
                  {['Small', 'Medium', 'Large', 'X-Large'].map((size) => (
                    <button
                      key={size}
                      className={`px-6 py-2 rounded-lg border ${
                        selectedSize === size
                          ? 'bg-black text-white border-black'
                          : 'border-[#E8E8E8] hover:border-black'
                      }`}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity and Add to Cart */}
              <div className="flex gap-4">
                <div className="flex items-center border border-[#E8E8E8] rounded-lg">
                  <button
                    className="w-12 h-12 hover:bg-black hover:text-white transition-colors"
                    onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                  >
                    -
                  </button>
                  <span className="w-12 h-12 flex items-center justify-center">{quantity}</span>
                  <button
                    className="w-12 h-12 hover:bg-black hover:text-white transition-colors"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    +
                  </button>
                </div>
                <button className="flex-1 bg-black text-white rounded-full hover:bg-gray-900 transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="mt-20 border-b border-[#E8E8E8]">
            <div className="flex gap-12">
              <button 
                className={`pb-4 relative ${activeTab === 'details' ? 'text-black' : 'text-[#666]'}`}
                onClick={() => setActiveTab('details')}
              >
                Product Details
                {activeTab === 'details' && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-black" />}
              </button>
              <button 
                className={`pb-4 relative ${activeTab === 'reviews' ? 'text-black' : 'text-[#666]'}`}
                onClick={() => setActiveTab('reviews')}
              >
                Rating & Reviews
                {activeTab === 'reviews' && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-black" />}
              </button>
              <button 
                className={`pb-4 relative ${activeTab === 'faqs' ? 'text-black' : 'text-[#666]'}`}
                onClick={() => setActiveTab('faqs')}
              >
                FAQs
                {activeTab === 'faqs' && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-black" />}
              </button>
            </div>
          </div>
        </div>
      </main>

      <Newsletter />
      <Footer />
    </div>
  );
} 