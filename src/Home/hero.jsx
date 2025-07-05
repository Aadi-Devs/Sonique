// import Button from "../Components/Button";
// import Speaker_hero from "../assets/Speaker_hero.png"

// export default function hero(){
//     return(
//         <>
//             <div className="flex h-full w-full justify-center items-center">
//                 <div className="flex flex-col h-full w-3/4 pt-[10.5rem] items-center justify-center gap-15">
//                     <div className="flex flex-col h-full w-[50rem] items-center gap-10">
//                         <div className="flex h-full w-full justify-center">
//                             <h1 className="text-7xl max-w-[40rem] text-center font-medium">Immersive Sound, Simplified</h1>
//                         </div>
//                         <div className="flex h-full w-full justify-center">
//                             <p className="text-xl text-center text-gray-700">Our most recent breakthrough in audio devices blends exceptional audio performance with unparalleled toughness and elegance.</p>
//                         </div>
//                         <div className="flex h-full w-full justify-center">
//                             <Button text={"Buy Now"} />
//                         </div>
//                     </div>
//                     <div className="flex h-full w-full justify-center z-[1]">
//                         <img src={Speaker_hero} alt=""  className="w-[42.5rem]"/>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }




























import Button from "../Components/Button";
import Speaker_hero from "../assets/Speaker_hero.png";

export default function Hero() {
  return (
    <div className="w-full bg-white px-4 lg:pt-48 pt-40 pb-12 flex justify-center">
      <div className="w-full max-w-screen-xl flex flex-col items-center gap-16">

        {/* Text Section */}
        <div className="flex flex-col items-center gap-6 text-center px-2">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold max-w-3xl leading-tight"  data-aos="fade-up" data-aos-duration="1000">
            Immersive Sound, Simplified
          </h1>
          <p className="sm:text-lg text-lg text-gray-700 max-w-2xl"  data-aos="fade-up" data-aos-duration="1200">
            Our most recent breakthrough in audio devices blends exceptional audio performance with unparalleled toughness and elegance.
          </p>
          <div  data-aos="fade-up" data-aos-duration="1800">
            <Button text={"Buy Now"} />
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full flex justify-center" data-aos="fade-up" data-aos-duration="1400">
          <img
            src={Speaker_hero}
            alt="Hero Speaker"
            className="w-[90%] max-w-2xl object-contain"
          />
        </div>

      </div>
    </div>
  );
}
