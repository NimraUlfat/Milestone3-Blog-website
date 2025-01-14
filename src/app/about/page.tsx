import Head from "next/head";
import Image from "next/image";
import React from "react";
import beauty5 from "../../../public/images/beauty5.jpeg"
import beauty6 from "../../../public/images/beauty6.jpeg"
import beauty7 from "../../../public/images/beauty7.jpg"

export default function AboutUs() {
  return (
    <>
      <Head>
        <title>About Us | Glam and Glow</title>
        <meta
          name="description"
          content="Learn more about Glam and Glow, a beauty blog focused on makeup, skincare, wellness, and trends."
        />
      </Head>

      <div className="bg-gray-50 min-h-screen pb-16">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-rose-400 via-rose-400 to-rose-400 py-20 text-center text-white">
          <h1 className="text-5xl font-bold">Welcome to Glam and Glow</h1>
          <p className="text-lg mt-4">
            Your go-to place for the latest in beauty, skincare, makeup, and self-care.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="max-w-4xl mx-auto px-6 py-12 text-center">
          <h2 className="text-3xl font-semibold text-gray-800">Our Mission</h2>
          <p className="mt-4 text-lg text-gray-600">
            At <strong>Glam and Glow</strong>, we believe beauty is more than just skin deep.
            Our mission is to provide you with insightful articles, tutorials, and product recommendations to help you look and feel your best. We are dedicated to bringing you the latest trends in makeup, skincare, wellness, and self-care, with a focus on inclusivity and empowering everyone to embrace their unique beauty.
          </p>
        </div>

        {/* Beauty Tips & Trends Section */}
        <div className="bg-white py-12">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-semibold text-gray-800">Beauty Tips & Trends</h2>
            <p className="text-lg text-gray-600 mt-4">
              Discover the latest beauty trends, skincare tips, makeup tutorials, and much more.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center mt-10 gap-10">
            {/* Beauty Tip 1 */}
            <div className="w-80 text-center">
              <Image
                src={beauty5}
                alt="Beauty Tip 1"
                width={320}
                height={320}
                className="rounded-lg shadow-lg mx-auto"
              />
              <h3 className="mt-4 text-xl font-semibold text-gray-800">Flawless Skin Routine</h3>
              <p className="text-sm text-gray-600 mt-2">
                Learn the best skincare routine for glowing, youthful skin. Our experts share their secrets for healthy and radiant skin.
              </p>
              <button className="mt-4 px-6 py-2 bg-rose-400 text-white rounded-full hover:bg-rose-300 transition duration-300">
                Explore Tips
              </button>
            </div>

            {/* Beauty Tip 2 */}
            <div className="w-80 text-center">
              <Image
                src={beauty6}
                alt="Beauty Tip 2"
                width={320}
                height={320}
                className="rounded-lg shadow-lg mx-auto"
              />
              <h3 className="mt-4 text-xl font-semibold text-gray-800">Makeup Tutorials</h3>
              <p className="text-sm text-gray-600 mt-2">
                Master the art of makeup with our step-by-step tutorials for every occasion, from everyday looks to glamorous evening styles.
              </p>
              <button className="mt-4 px-6 py-2 bg-rose-400 text-white rounded-full hover:bg-rose-300 transition duration-300">
                Watch Tutorials
              </button>
            </div>

            {/* Beauty Tip 3 */}
            <div className="w-80 text-center">
              <Image
                src={beauty7}
                alt="Beauty Tip 3"
                width={320}
                height={320}
                className="rounded-lg shadow-lg mx-auto"
              />
              <h3 className="mt-4 text-xl font-semibold text-gray-800">Hair Care Tips</h3>
              <p className="text-sm text-gray-600 mt-2">
                From shiny curls to sleek straight hair, discover the best hair care products and routines for every hair type.
              </p>
              <button className="mt-4 px-6 py-2 bg-rose-400 text-white rounded-full hover:bg-rose-300 transition duration-300">
                Get Hair Tips
              </button>
            </div>
          </div>
        </div>

        {/* Our Story Section */}
        <div className="bg-gray-50 py-12">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-semibold text-gray-800">Our Story</h2>
            <p className="text-lg text-gray-600 mt-4">
              Glam and Glow was founded by a group of passionate beauty lovers who wanted to share their experiences with makeup, skincare, and self-care. Our goal is to create a space where everyone can discover new beauty products, learn tips and tricks, and find inspiration to help them look and feel amazing. Whether you are just starting your beauty journey or you are a seasoned pro, there something for everyone here at Glam and Glow.
            </p>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white py-12">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-semibold text-gray-800">Contact Us</h2>
            <p className="text-lg text-gray-600 mt-4">
              Have any questions, feedback, or collaborations in mind? We would love to hear from you! Reach out to us at:
            </p>
            <p className="mt-4 text-lg text-gray-800">
              Email: <a href="mailto:contact@glamandglow.com" className="text-pink-600">contact@glamandglow.com</a>
            </p>
            <p className="text-lg text-gray-800 mt-2">
              Follow us on social media:
            </p>
            <div className="flex justify-center gap-6 mt-4">
              <a href="#" className="text-pink-600 text-2xl">Instagram</a>
              <a href="#" className="text-pink-600 text-2xl">Facebook</a>
              <a href="#" className="text-pink-600 text-2xl">Twitter</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
