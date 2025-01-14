'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';  
import { products } from '@/app/data/product';
import Image from 'next/image';


interface Product {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
}

export default function ProductPage() {
  const { id } = useParams();  
  
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (id) {
      const foundProduct = products.find((product) => product.id === Number(id));
      setProduct(foundProduct || null);
    }
  }, [id]);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="container mx-auto p-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <Image
            src={product.image}
            alt={product.title}
            width={600}
            height={400}
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold">{product.title}</h1>
          <h2 className="text-xl text-gray-500">{product.category}</h2>
          <p className="text-lg mt-4">{product.description}</p>
        </div>
      </div>
    </div>
  );
}
