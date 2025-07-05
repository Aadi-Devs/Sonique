// import Feature_Speaker_1 from "../assets/feature_speaker_1.jpeg"
// import Feature_Speaker_2 from "../assets/feature_speaker_2.png"
// import Button from "../Components/Button.jsx"
// import icon_1 from "../assets/icon_feature_1.png"
// import icon_2 from "../assets/icon_feature_2.png"



// export default function features(){
//     return(
//         <>
//             <div className="flex flex-col h-full w-full items-center justify-center gap-[10rem]">

//                 {/* Feature - 1 */}

//                 <div className="flex h-[37.5rem] w-[75rem] items-center justify-between overflow-hidden">

//                 {/* left Side */}
//                     <div className="flex flex-col w-[35.5rem] justify-center gap-10">
//                         <div className="flex gap-4 items-center">
//                             <img src={icon_1} alt="" className="w-5 pt-1 h-7" />
//                             <h1 className="text-2xl">The Perfect Sound, Anywhere</h1>
//                         </div>
//                         <div className="">
//                             <h2 className="text-3xl font-medium">Experience crystal-clear audio with deep bass and immersive sound.</h2>
//                         </div>
//                         <div className="flex flex-col gap-5">
//                             <div>
//                                 <h1 className="text-2xl">Our smart speaker is designed to fill your space with rich, high-fidelity sound—whether you're at home or on the go.</h1>
//                             </div>                            
//                             <div>
//                                 <Button text={"Buy Now"} />
//                             </div>                            
//                         </div>
//                     </div>



//                     {/* Right Side */}
//                     <div className="h-[37.5rem] w-[35.5rem] overflow-hidden rounded-3xl">
//                         <img src={Feature_Speaker_1} alt="" className="h-[47.3rem] object-cover " />
//                     </div>
//                 </div>







//                 {/* Feature - 2 */}


//                 <div className="flex h-[37.5rem] w-[75rem] items-center justify-between overflow-hidden">

            
//                     {/* Left Side */}
//                     <div className="h-[37.5rem] w-[35.5rem] overflow-hidden rounded-3xl">
//                         <img src={Feature_Speaker_2} alt="" className="h-[47.3rem] object-cover " />
//                     </div>


//                     {/* Right side */}
//                     <div className="flex flex-col w-[35.5rem] justify-center gap-10">
//                         <div className="flex gap-4">
//                             <img src={icon_2} alt=""  className="w-5 mt-2 h-5"/>
//                             <h1 className="text-2xl">Smart.  Sleek.   Powerful.</h1>
//                         </div>
//                         <div className="">
//                             <h2 className="text-4xl font-medium">Seamless connectivity, voice control, and a sleek, modern design make this speaker the perfect addition to any room.</h2>
//                         </div>
//                         <div className="flex flex-col gap-5">
//                             <div>
//                                 <h1 className="text-2xl">Designed for modern living, this speaker blends premium sound with intuitive controls. </h1>
//                             </div>                            
//                             <div>
//                                 <Button text={"Buy Now"} />
//                             </div>                            
//                         </div>
//                     </div>

//                 </div>



                

//             </div>
//         </>
//     )
// }


























import Feature_Speaker_1 from "../assets/feature_speaker_1.jpeg";
import Feature_Speaker_2 from "../assets/feature_speaker_2.png";
import Button from "../Components/Button.jsx";
import icon_1 from "../assets/icon_feature_1.png";
import icon_2 from "../assets/icon_feature_2.png";

export default function Features() {
  return (
    <div id="features" className="w-full px-4 py-20 flex flex-col gap-32 items-center bg-white">
      
      {/* Feature Block 1 */}
      <div className="flex flex-col-reverse lg:flex-row items-center max-w-6xl w-full gap-12">
        
        {/* Left Text Block */}
        <div className="flex flex-col gap-6 lg:w-1/2">
          <div className="flex items-center gap-3"  data-aos="fade-right" data-aos-duration="1000">
            <img src={icon_1} alt="" className="h-6 w-6" />
            <h1 className="text-xl sm:text-2xl font-medium">The Perfect Sound, Anywhere</h1>
          </div>
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900"  data-aos="fade-right" data-aos-duration="1400">
            Experience crystal-clear audio with deep bass and immersive sound.
          </h2>
          <p className="text-lg text-gray-700"  data-aos="fade-right" data-aos-duration="1800">
            Our smart speaker is designed to fill your space with rich, high-fidelity sound—whether you're at home or on the go.
          </p>
          <div  data-aos="fade-right" data-aos-duration="2200">
            <Button text={"Buy Now"} />
          </div>
        </div>

        {/* Right Image */}
        <div className="lg:w-1/2 w-full rounded-3xl overflow-hidden" data-aos="fade-left" data-aos-duration="1200">
          <img
            src={Feature_Speaker_1}
            alt="Speaker 1"
            className="w-full h-full max-h-[30rem] object-cover"
          />
        </div>
      </div>

      {/* Feature Block 2 */}
      <div className="flex flex-col lg:flex-row items-center max-w-6xl w-full gap-12">
        
        {/* Left Image */}
        <div className="lg:w-1/2 w-full rounded-3xl overflow-hidden" data-aos="fade-right" data-aos-duration="1600">
          <img
            src={Feature_Speaker_2}
            alt="Speaker 2"
            className="w-full h-full max-h-[30rem] object-cover"
          />
        </div>

        {/* Right Text Block */}
        <div className="flex flex-col gap-6 lg:w-1/2">
          <div className="flex items-center gap-3" data-aos="fade-left" data-aos-duration="1000">
            <img src={icon_2} alt="" className="h-6 w-6" />
            <h1 className="text-xl sm:text-2xl font-medium">Smart. Sleek. Powerful.</h1>
          </div>
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900" data-aos="fade-left" data-aos-duration="1400">
            Seamless connectivity, voice control, and a sleek, modern design make this speaker the perfect addition to any room.
          </h2>
          <p className="text-lg text-gray-700" data-aos="fade-left" data-aos-duration="1800">
            Designed for modern living, this speaker blends premium sound with intuitive controls.
          </p>
          <div data-aos="fade-left" data-aos-duration="2200">
            <Button text={"Buy Now"} />
          </div>
        </div>
      </div>
    </div>
  );
}
