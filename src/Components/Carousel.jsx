//! Don't need anymore




// // import product1 from "../assets/product1.png"
// import { useState, useEffect } from "react";
// import { ChevronLeft, ChevronRight } from "react-feather";

// export default function Carousel({
//   children: slides,
//   autoSlide = false,
//   autoSlideInterval = 6000,
// }) {
//   const [curr, setCurr] = useState(0);

//   const prev = () =>
//     setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
//   const next = () =>
//     setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

//   useEffect(() => {
//     if (!autoSlide) return;
//     const slideInterval = setInterval(() => {
//       setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));
//     }, autoSlideInterval);
//     return () => clearInterval(slideInterval);
//   }, [autoSlide, autoSlideInterval, slides.length]);

//   return (
//     <>
//       <div className="overflow-hidden relative m-10">
//         <div
//           className="flex transition-transform ease-out duration-500"
//           style={{ transform: `translateX(-${curr * 100}%)` }}
//         >
//           {slides}
//         </div>
//         <div className="absolute inset-0 flex items-center justify-between">
//           <button
//             onClick={prev}
//             className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white z-[2]"
//           >
//             <ChevronLeft size={40} />
//           </button>
//           <button
//             onClick={next}
//             className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white z-[2]"
//           >
//             <ChevronRight size={40} />
//           </button>
//         </div>

//         <div className="absolute bottom-0 right-0 left-0">
//           <div
//             className="flex w-[70rem] transition-transform ease-out duration-500"
//             style={{ transform: `translateX(-${curr * 100}%)` }}
//           >
//             {slides.map((slide, index) => (
//               <div key={index} className="w-full flex-shrink-0 rounded-2xl">
//                 {slide}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }