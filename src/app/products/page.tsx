// src/app/products/page.tsx

import Link from 'next/link';
import { products } from '@/app/data/product'; // Adjust the path if needed
import Image from 'next/image';

export default function ProductList() {
  return (
    <div className="min-h-screen bg-gray-50"> {/* Soft background color */}
      <div className="container mx-auto p-6">
        <h1 className="text-4xl text-center sm:text-5xl font-extrabold text-pink-600 mb-6">
          Welcome to <span className="text-gray-800">Glam and Glow Blogs</span>
        </h1>
        <br></br>
        <div className="grid md:grid-cols-3 gap-16">
          {products.map((product) => (
            <div
              key={product.id}
              className="border border-gray-300 rounded-lg text-black font-semibold shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:scale-105 hover:border-pink-500"
              style={{ width: '100%', height: 'auto' }}
            >
              <div className="relative mb-6" style={{ height: '200px' }}>
                <Image
                  src={product.image}
                  alt={product.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <div className="px-4 py-3">
                <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
                <p className="text-gray-600 mb-4">{product.category}</p>
                <Link href={`/products/${product.id}`}>
                  <button className="mt-4 px-6 py-2 bg-pink-600 text-white rounded-lg transition-colors duration-300 hover:bg-pink-700">
                    Read More
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
