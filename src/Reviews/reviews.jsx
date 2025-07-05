// import Review_Card from "../Components/review_card.jsx";
// import bag_icon from "../assets/bag_icon.png"
// import diamond from "../assets/diamond.png"
// import flag_icon from "../assets/flag_icon.png"
// import star_icon from "../assets/star_icon.png"

// export default function reviews(){
//     return(
//         <>
//             <div className="flex h-full w-full ">
//                 <div className="flex flex-col h-full w-[75rem] m-[10rem] gap-11 justify-between">

//                     {/* top */}
//                     <div className="flex gap-4">

//                         <div className="w-[43rem]">
//                             <div className="w-full">
//                                 <div className="flex w-[7rem] p-2 border-1 border-gray-300  rounded-l-3xl rounded-r-3xl items-center gap-2">
//                                     <img src={diamond} alt="" className="h-[15px] pl-1"/>
//                                     <h1 className="text-center">Why Us?</h1>
//                                 </div>
//                             </div>
//                             <div className="">
//                                 <h1 className="text-5xl">Trusted by  Thousands, Engineered for Excellence</h1>
//                             </div>
//                         </div>

//                         <div className="flex w-[45rem] items-end">
//                             <h1 className="text-right text-[20px]">Our commitment to innovation and quality has earned the trust of  customers worldwide. Sleek design, our products are built to impress.</h1>
//                         </div>
//                     </div>


//                     {/* bottom */}
//                     <div className="flex gap-8">
//                         <Review_Card heading={"60K+ Units Sold"} para={"Our Speakers have reached over 60,000 satisfied customers."} img={bag_icon} />
//                         <Review_Card heading={"4.9/5 Average Rating"} para={"Thousands of reviews praise our unmatched sound quality."} img={star_icon} />
//                         <Review_Card heading={"100+ Countries"} para={"Our Products are loved  and  shipped across more than 100 countries."} img={flag_icon} />
//                     </div>

//                 </div>
//             </div>
//         </>
//     )
// }




























import Review_Card from "../Components/review_card.jsx";
import bag_icon from "../assets/bag_icon.png";
import diamond from "../assets/diamond.png";
import flag_icon from "../assets/flag_icon.png";
import star_icon from "../assets/star_icon.png";

export default function Reviews() {
  return (
    <div id="reviews" className="w-full px-4 py-16 flex justify-center bg-white">
      <div className="w-full max-w-screen-xl flex flex-col gap-12">

        {/* Top Section */}
        <div className="flex flex-col lg:flex-row gap-8">

          {/* Left side */}
          <div className="lg:w-1/2 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-gray-300 rounded-full w-fit" data-aos="fade-up" data-aos-duration="1000">
              <img src={diamond} alt="" className="h-4" />
              <h1 className="text-base font-medium">Why Us?</h1>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900" data-aos="fade-up" data-aos-duration="1400">
              Trusted by Thousands, Engineered for Excellence
            </h1>
          </div>

          {/* Right side */}
          <div className="lg:w-1/2 flex items-end" data-aos="fade-up" data-aos-duration="1400">
            <p className="text-base sm:text-lg text-gray-700 lg:text-right">
              Our commitment to innovation and quality has earned the trust of customers worldwide. Sleek in design, our products are built to impress.
            </p>
          </div>
        </div>

        {/* Bottom Cards Section */}
        <div className="flex flex-col sm:flex-col lg:flex-cols gap-6">
          <div data-aos="fade-up" data-aos-duration="1200">
            <Review_Card
              heading={"60K+ Units Sold"}
              para={"Our Speakers have reached over 60,000 satisfied customers."}
              img={bag_icon}
            />
          </div>
          <div data-aos="fade-up" data-aos-duration="1400">
            <Review_Card
              heading={"4.9/5 Average Rating"}
              para={"Thousands of reviews praise our unmatched sound quality."}
              img={star_icon}
            />
          </div>
          <div data-aos="fade-up" data-aos-duration="1600">
            <Review_Card
              heading={"100+ Countries"}
              para={"Our Products are loved and shipped across more than 100 countries."}
              img={flag_icon}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
