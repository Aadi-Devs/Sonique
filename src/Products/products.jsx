// import Carousel from "../Components/Carousel.jsx";

// export default function products() {
//   return (
//     <>
//       <div className="flex h-full w-full ">
//         <div className="flex flex-col h-full w-[75rem] mx-[10rem] gap-11 justify-between">
//           {/* top */}
//           <div className="flex gap-4">
//             <div className="w-[43rem]">
//               <div className="w-full">
//                 <div className="flex w-[7rem] p-2 border-1 border-gray-300  rounded-l-3xl rounded-r-3xl items-center gap-2">
//                   <img src="" alt="" className="h-[15px] pl-1" />
//                   <h1 className="text-center">In Reality</h1>
//                 </div>
//               </div>
//               <div className="">
//                 <h1 className="text-5xl">Timeless Elegance</h1>
//               </div>
//             </div>

//             <div className="flex w-[45rem] items-end">
//               <h1 className="text-right text-[20px]">
//                 Enhance your space with a perfect blend of modern design and
//                 warm ambiance. Our speaker bring style and sophistication
//               </h1>
//             </div>
//           </div>

//           {/* bottom */}
//           <div className="rounded-3xl">
//             <Carousel autoSlide={true}>
//               <img src="https://i.ibb.co/ncrXc2V/1.png" className="w-[90rem] object-cover h-[40rem] rounded-3xl" />
//               <img src="https://i.ibb.co/B3s7v4h/2.png" className="w-[90rem] object-cover h-[40rem] rounded-3xl" />
//               <img src="https://i.ibb.co/XXR8kzF/3.png" className="w-[90rem] object-cover h-[40rem] rounded-3xl" />
//               <img src="https://i.ibb.co/yg7BSdM/4.png" className="w-[90rem] object-cover h-[40rem] rounded-3xl" />
//             </Carousel>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }





























import { useState, useEffect } from "react";

const images = [
  "https://i.ibb.co/ncrXc2V/1.png",
  "https://i.ibb.co/B3s7v4h/2.png",
  "https://i.ibb.co/XXR8kzF/3.png",
  "https://i.ibb.co/yg7BSdM/4.png",
];

export default function products() {
  const [activeIndex, setActiveIndex] = useState(0);


  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval); 
  }, []);

  return (
    <div id="products" className="w-full flex justify-center px-4 py-12 bg-white">
      <div className="max-w-screen-xl w-full flex flex-col lg:flex-row gap-8 rounded-3xl overflow-hidden">
        


        
        {/* Thumbnail Images */}

        <div className="flex lg:flex-col gap-4 justify-center items-center lg:w-28" data-aos="fade-right" data-aos-duration="1000">
          {images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              onClick={() => setActiveIndex(idx)}
              className={`w-20 h-14 object-cover cursor-pointer rounded-xl border transition ${
                idx === activeIndex
                  ? "border-black scale-105"
                  : "border-gray-300 opacity-70 hover:opacity-100"
              }`}
              alt={`Thumbnail ${idx + 1}`}
            />
          ))}
        </div>





        {/* Main Image */}

        <div className="flex-1" data-aos="fade-left" data-aos-duration="1000">
          <img
            src={images[activeIndex]}
            alt={`Slide ${activeIndex + 1}`}
            className="w-full h-[20rem] sm:h-[30rem] lg:h-[40rem] object-cover rounded-3xl transition duration-500"
          />
        </div>
      </div>
    </div>
  );
}
