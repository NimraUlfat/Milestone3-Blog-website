import Link from "next/link";


export default function Header() {
  return (
    <div>
     
      <section className="py-2 bg-rose-200 text-white text-center shadow-md">
        <p className="text-sm md:text-base font-medium">Welcome to Glow & Glam! Your beauty journey starts here.</p>
      </section>

      {/* Main Header */}
      <header className="flex items-center justify-between bg-white py-4 px-6 sm:px-12 border-b shadow-lg font-sans min-h-[65px] tracking-wide z-50">
        <div className="flex items-center justify-between max-w-screen-xl mx-auto w-full">
          
          
          {/* Navigation Menu */}
          <div id="collapseMenu" className="hidden lg:flex space-x-10 items-center">
            <Link href={"/"}>
              <span className="text-gray-800 hover:text-rose-500 text-lg font-semibold transition-all duration-300 ease-in-out hover:underline">Home</span>
            </Link>
            <Link href={"/products"}>
              <span className="text-gray-800 hover:text-rose-500 text-lg font-semibold transition-all duration-300 ease-in-out hover:underline">Blog</span>
            </Link>
            <Link href={"/about"}>
              <span className="text-gray-800 hover:text-rose-500 text-lg font-semibold transition-all duration-300 ease-in-out hover:underline">About</span>
            </Link>
            <Link href={"/contact"}>
              <span className="text-gray-800 hover:text-rose-500 text-lg font-semibold transition-all duration-300 ease-in-out hover:underline">Contact</span>
            </Link>
          </div>

       
          <div className="flex items-center space-x-4">
            <div className="flex items-center bg-gray-100 px-4 py-2 rounded-full focus-within:border-blue-500 focus-within:bg-white border border-gray-300 transition-all duration-300 ease-in-out">
              <input
                type="text"
                placeholder="Search something..."
                className="bg-transparent text-sm outline-none w-48 focus:ring-0 placeholder-gray-500"
              />
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.904 192.904" width="16px" className="cursor-pointer fill-gray-500">
                <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"></path>
              </svg>
            </div>

         
            <button id="toggleOpen" className="lg:hidden p-2 rounded-full border border-rose-300 hover:bg-gray-100 transition-all duration-300 ease-in-out">
              <svg className="w-6 h-6" fill="#000" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
              </svg>
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}
