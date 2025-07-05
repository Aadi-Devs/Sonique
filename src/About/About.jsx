// import Speaker_1 from "../assets/Speaker_about_1.png";
// import Speaker_2 from "../assets/Speaker_about_2.png";

// function About() {
//   return (
//     <>
//       <div className="relative bottom-30 h-[30rem] w-full z-[2]">
//         <div className="flex h-[35rem] bg-white items-center justify-center">
//           <div className="flex flex-col h-full w-[80rem] items-center justify-center gap-5">
//             <div className="flex gap-4">
//               <p className="text-6xl font-medium">Our latest innovation</p>
//               <div className="flex items-center justify-center mt-2">
//                 <img
//                   src={Speaker_1}
//                   alt=""
//                   className="w-[6rem] h-[3rem] object-cover rounded-l-4xl rounded-r-4xl"
//                 />
//               </div>
//               <p className="text-6xl font-medium">in portable speakers</p>
//             </div>

//             <div className="flex gap-4">
//               <p className="text-6xl font-medium">
//                 combines superior sound quality
//               </p>
//               <div className="flex items-center justify-center mt-2">
//                 <img
//                   src={Speaker_2}
//                   alt=""
//                   className="w-[6rem] h-[3rem] object-cover rounded-l-4xl rounded-r-4xl"
//                 />
//               </div>
//             </div>
//             <div className="">
//               <p className="text-6xl font-medium">with unmatched durability</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default About;





























import Speaker_1 from "../assets/Speaker_about_1.png";
import Speaker_2 from "../assets/Speaker_about_2.png";

export default function About() {
  return (
    <div id="about" className="w-full px-4 py-20 bg-white flex justify-center">
      <div className="w-full max-w-6xl flex flex-col items-center gap-6 text-center">

        {/* Line 1 */}
        <div className="flex flex-wrap justify-center items-center gap-3" data-aos="fade-up" data-aos-duration="1000">
          <p className="text-3xl sm:text-4xl md:text-5xl font-medium">
            Our latest innovation
          </p>
          <img
            src={Speaker_1}
            alt="Speaker 1"
            className="h-10 w-20 object-cover rounded-full"
          />
          <p className="text-3xl sm:text-4xl md:text-5xl font-medium">
            in portable speakers
          </p>
        </div>

        {/* Line 2 */}
        <div className="flex flex-wrap justify-center items-center gap-3" data-aos="fade-up" data-aos-duration="1400">
          <p className="text-3xl sm:text-4xl md:text-5xl font-medium">
            combines superior sound quality
          </p>
          <img
            src={Speaker_2}
            alt="Speaker 2"
            className="h-10 w-20 object-cover rounded-full"
          />
        </div>

        {/* Line 3 */}
        <p className="text-3xl sm:text-4xl md:text-5xl font-medium" data-aos="fade-up" data-aos-duration="1800">
          with unmatched durability
        </p>
      </div>
    </div>
  );
}
