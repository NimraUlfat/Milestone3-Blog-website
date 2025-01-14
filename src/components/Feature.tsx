import Head from "next/head";
import React from "react";

export default function Feature() {
  return (
    <>
      <Head>
        <title>Exploring Our Categories</title>
        <meta
          name="description"
          content="Explore our categories section example in Next.js using Tailwind CSS"
        />
      </Head>


      <div className="relative bg-rose-100 p-4">
        <div className="text-center mb-6">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">Exploring Our Categories</h1>
          <p className="text-base sm:text-lg text-gray-600 mt-2">
            Discover a variety of categories for your interests.
          </p>
        </div>

        <div className="flex overflow-x-auto space-x-4 pb-4">
          {/* Category 1 */}
          <div
            className="bg-cover bg-center rounded-lg p-6 w-60 sm:w-72 text-center flex-shrink-0 hover:shadow-xl transition-shadow"
            style={{
              backgroundImage: "url('/images/makeup2.jpg')", 
            }}
          >
            <div className="bg-black bg-opacity-40 rounded-lg p-4">
              <h3 className="text-lg sm:text-xl font-semibold text-white">Skincare</h3>
            </div>
          </div>

          {/* Category 2 */}
          <div
            className="bg-cover bg-center rounded-lg p-6 w-60 sm:w-72 text-center flex-shrink-0 hover:shadow-xl transition-shadow"
            style={{
              backgroundImage: "url('/images/makeup1.jpg')", 
            }}
          >
            <div className="bg-black bg-opacity-40 rounded-lg p-4">
              <h3 className="text-lg sm:text-xl font-semibold text-white">Makeup</h3>
            </div>
          </div>

          {/* Category 3 */}
          <div
            className="bg-cover bg-center rounded-lg p-6 w-60 sm:w-72 text-center flex-shrink-0 hover:shadow-xl transition-shadow"
            style={{
              backgroundImage: "url('/images/makeup3.jpg')", 
            }}
          >
            <div className="bg-black bg-opacity-40 rounded-lg p-4">
              <h3 className="text-lg sm:text-xl font-semibold text-white">Haircare</h3>
            </div>
          </div>

          {/* Category 4 */}
          <div
            className="bg-cover bg-center rounded-lg p-6 w-60 sm:w-72 text-center flex-shrink-0 hover:shadow-xl transition-shadow"
            style={{
              backgroundImage: "url('/images/makeup4.jpg')", 
            }}
          >
            <div className="bg-black bg-opacity-40 rounded-lg p-4">
              <h3 className="text-lg sm:text-xl font-semibold text-white">Wellness & Self-care</h3>
            </div>
          </div>

          {/* Category 5 */}
          <div
            className="bg-cover bg-center rounded-lg p-6 w-60 sm:w-72 text-center flex-shrink-0 hover:shadow-xl transition-shadow"
            style={{
              backgroundImage: "url('/images/makeup5.jpg')", 
            }}
          >
            <div className="bg-black bg-opacity-40 rounded-lg p-4">
              <h3 className="text-lg sm:text-xl font-semibold text-white">Beauty Trends</h3>
            </div>
          </div>

          {/* Category 6 */}
          <div
            className="bg-cover bg-center rounded-lg p-6 w-60 sm:w-72 text-center flex-shrink-0 hover:shadow-xl transition-shadow"
            style={{
              backgroundImage: "url('/images/makeup6.jpg')", 
            }}
          >
            <div className="bg-black bg-opacity-40 rounded-lg p-4">
              <h3 className="text-lg sm:text-xl font-semibold text-white">Product Reviews</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
