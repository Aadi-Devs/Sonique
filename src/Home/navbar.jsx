// import Logo from "../assets/logo.svg";
// import Button from "../Components/Button.jsx";


// export default function navbar(){

//     return(
//         <>
//             {/* nav wrapper */}
//             <div className="flex h-[88px] w-full justify-center items-center bg-white fixed z-[10]">

//                 <div className="flex h-[4rem] w-3/4 justify-center items-center ">

//                     {/* logo wrapper */}
//                     <div className="flex h-full w-full items-center">
//                         {/* logo of website */}
//                         <img src={Logo} alt="" width={100}/>
//                     </div>

//                     {/* nav links wrapper */}
//                     <div className="flex h-full w-full justify-center items-center">
//                         <ul className="flex gap-10">
//                             <li className="text-[17px]">About</li>
//                             <li className="text-[17px]">Features</li>
//                             <li className="text-[17px]">Products</li>
//                             <li className="text-[17px]">Contact</li>
//                         </ul>
//                     </div>

//                     {/* button wrapper */}
//                     <div className="flex h-full w-full justify-end">
//                         {/* button component */}
//                         <Button text="Buy Now" />
//                     </div>

//                 </div>

//             </div>
//         </>
//     )
// }





























import { useState } from "react";
import Logo from "../assets/logo.svg";
import Button from "../Components/Button.jsx";
import { Link } from 'react-scroll';
// import SliderToggle from "../Components/SliderToggle.jsx"


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[88px] flex items-center justify-between">

        {/* Logo */}
        <div className="flex-shrink-0"  data-aos="fade-up" data-aos-duration="600">
          <img src={Logo} alt="Logo" className="h-10 w-auto" />
        </div>

        {/* Nav Links (visible only on lg and above) */}
        <ul className="hidden lg:flex items-center gap-10 text-[17px] text-gray-800">
          <li className="cursor-pointer hover:text-black transition"  data-aos="fade-up" data-aos-duration="800">
            <Link to="about" smooth={true} duration={600} offset={-80}>
              About
           </Link>
          </li>
          <li className="cursor-pointer hover:text-black transition"  data-aos="fade-up" data-aos-duration="1000">
            <Link to="features" smooth={true} duration={800} offset={-80}>
              Features
            </Link>
          </li>
          <li className="cursor-pointer hover:text-black transition"  data-aos="fade-up" data-aos-duration="1200">
            <Link to="products" smooth={true} duration={1000} offset={-50}>
              Products
            </Link>
          </li>
          <li className="cursor-pointer hover:text-black transition"  data-aos="fade-up" data-aos-duration="1400">
            <Link to="contacts" smooth={true} duration={1200} offset={-80}>
              Contact
            </Link>
          </li>
        </ul>

        {/* Toggle */}
        {/* <SliderToggle /> */}

        {/* Buy Button (visible only on lg and above) */}
        <div className="hidden lg:flex"  data-aos="fade-up" data-aos-duration="1600">
          <Button text="Buy Now" />
        </div>

        {/* Hamburger Icon (visible below lg) */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-800 focus:outline-none"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile/Tablet Dropdown Menu */}
      <div
        className={`lg:hidden transition-all duration-800 ease-in-out overflow-hidden ${
          isOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white px-6 pt-6 pb-4 flex flex-col gap-4 shadow-md">
          <ul className="flex flex-col gap-4 text-[17px] text-gray-800">
            <li className="hover:text-black transition">
              <Link to="about" smooth={true} duration={600} offset={-80}>
                About
              </Link>
            </li>
            <li className="hover:text-black transition">
              <Link to="feature" smooth={true} duration={800} offset={-80}>
                Feature
              </Link>
            </li>
            <li className="hover:text-black transition">
              <Link to="products" smooth={true} duration={1000} offset={-60}>
                Products
              </Link>
            </li>
            <li className="hover:text-black transition">
              <Link to="contacts" smooth={true} duration={1200} offset={-60}>
                Contact
              </Link>
            </li>
          </ul>
          <div className="pt-4">
            <Button text="Buy Now" />
          </div>
        </div>
      </div>
    </nav>
  );
}
