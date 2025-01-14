import Image from 'next/image'
import Link from 'next/link'
import makeup from "../../public/images/makeup.jpg"
import beauty1 from "../../public/images/beauty1.jpg"
import beauty2 from "../../public/images/beauty2.jpg"
import beauty3 from "../../public/images/beauty3.jpg"
import beauty4 from "../../public/images/beauty4.jpg"

import Head from 'next/head'

export default function Main() {
  return (
    <>
      <Head>
        <title>Glow & Glam</title>
        <meta name="description" content="Beauty blog for glowing skin, makeup tips, and wellness." />
      </Head>

      <div className="relative min-h-screen bg-gray-100">
        
        {/* Large Image Section */}
        <div className="relative w-full h-[40rem]"> {/* Set custom height to 40rem */}
          <Image
            src={makeup} // Your image path
            alt="Beauty Image"
            className="object-cover w-full h-full"
          />
          
          {/* Overlay Text and Button */}
          <div className="absolute top-1/2 left-6 transform -translate-y-1/2 text-white z-10">
            <h1 className="text-4xl font-semibold mb-4">Welcome to Glow & Glam</h1>
            <p className="text-lg mb-6">
              Discover the latest beauty tips, skincare routines,
              <br></br>
              makeup tutorials, and wellness advice.
              <br></br> 
              Unlock your true beauty potential with
              <br></br>
              expert insights and recommendations.
            </p>
            <Link href={"/products"} className="inline-block text-white bg-pink-600 px-6 py-3 rounded-full hover:bg-pink-700 transition duration-300">
              Explore More
            </Link>
          </div>
        </div>

        {/* Row of 5 Images */}
        <div className="flex justify-center space-x-4 py-10">
          <div className="w-1/5">
            <Image
              src={beauty1}
              alt="Beauty Image 1"
              className="object-cover w-full h-full rounded-lg shadow-lg"
              height={250}
              width={250}
            />
          </div>
          <div className="w-1/5">
            <Image
              src={beauty2}
              alt="Beauty Image 2"
              className="object-cover w-full h-full rounded-lg shadow-lg"
              height={250}
              width={250}
            />
          </div>
          <div className="w-1/5">
            <Image
              src={beauty3}
              alt="Beauty Image 3"
              className="object-cover w-full h-full rounded-lg shadow-lg"
              height={250}
              width={250}
            />
          </div>
          <div className="w-1/5">
            <Image
              src={beauty4}
              alt="Beauty Image 4"
              className="object-cover w-full h-full rounded-lg shadow-lg"
              height={250}
              width={250}
            />
          </div>
          
        </div>

      </div>
    </>
  )
}
