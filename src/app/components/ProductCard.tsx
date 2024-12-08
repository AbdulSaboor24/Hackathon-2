import Link from 'next/link';
import Image from 'next/image';
import { BaseProps } from '@/app/types/common';

interface ProductCardProps extends BaseProps {
  product: {
    id: number;
    name: string;
    price: number;
    originalPrice?: number;
    discount?: string;
    rating: number;
    image: string;
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
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
    <Link 
      href={`/product/${product.id}`}
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
  );
};

export default ProductCard; 