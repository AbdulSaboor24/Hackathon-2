import { NextResponse } from 'next/server';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  // In a real app, you would fetch this from a database
  const product = {
    id: params.id,
    name: 'ONE LIFE GRAPHIC T-SHIRT',
    // ... rest of the product data
  };

  return NextResponse.json(product);
} 