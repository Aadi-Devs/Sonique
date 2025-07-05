// import arrow from "../assets/down_arrow.png"
// import "../index.css"

// export default function discount(){
//     return(
//         <>
//             <div className="flex h-full w-full p-15 justify-center bg-gray-50">
//                 <div className="flex h-[15.5rem] w-[75rem] gap-40 justify-between">

//                     {/* Left Section */}

//                     <div className="flex flex-col w-[40rem] justify-between gap-5">
//                         <div>
//                             <h1 className="text-6xl font-bold">Get Your Perfect Speaker Now!</h1>
//                         </div>
//                         <div>
//                             <button className="flex bg-[#231d1d] rounded-[3rem] h-[4.5rem] w-[18rem] p-5 items-center justify-between hover:scale-95 transition duration-700 ease-in-out cursor-pointer">
//                                 <h1 className="text-white text-xl">Get Yours - 30% off</h1> 
//                                 <div className="h-12 w-12 bg-white rounded-4xl flex justify-center items-center">
//                                     <img src={arrow} alt="" className="h-5 w-5 rotate-270" />
//                                 </div>
//                             </button>
//                         </div>
//                     </div>

//                     {/* Right Section */}

//                     <div className="flex flex-col gap-5 w-[40rem]">
//                         <div>
//                             <h1 className="text-3xl font-bold">Bring Your Room Together</h1>
//                         </div>
//                         <div>
//                             <p className="text-lg">Experience our latest portable speaker innovation, delivering exceptional sound quality, unbeatable durability, and sleek design.</p>
//                         </div>
//                     </div>

//                 </div>
//             </div>
//         </>
//     )
// }
























import arrow from "../assets/down_arrow.png";
import "../index.css";

export default function Discount() {
  return (
    <div className="w-full bg-gray-50 px-4 sm:py-22 py-12 flex justify-center">
      <div className="max-w-screen-xl w-full flex flex-col lg:flex-row justify-between items-center gap-12">
        
        {/* Left Section */}
        <div className="flex flex-col gap-6 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl font-bold">
            Get Your Perfect Speaker Now!
          </h1>

          <button className="flex items-center justify-between bg-[#231d1d] rounded-full h-16 w-68 px-6 hover:transform hover:scale-95 transition duration-700 ease-in-out mx-auto lg:mx-0 cursor-pointer" data-aos="fade-right" data-aos-duration="1600">
            <span className="text-white text-lg">Get Yours - 30% off</span>
            <div className="h-10 w-10 bg-white rounded-full flex justify-center items-center ml-4">
              <img src={arrow} alt="Arrow icon" className="h-4 w-4 rotate-[270deg]" />
            </div>
          </button>
        </div>

        {/* Right Section */}
        <div className="max-w-lg text-center lg:text-left" data-aos="fade-left" data-aos-duration="1200">
          <h1 className="text-2xl font-bold mb-2">Bring Your Room Together</h1>
          <p className="text-lg">
            Experience our latest portable speaker innovation, delivering exceptional sound quality, unbeatable durability, and sleek design.
          </p>
        </div>
      </div>
    </div>
  );
}
