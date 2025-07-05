// import footer_img from "../assets/footer_img.svg"
// import x_logo from "../assets/X.png"
// import ig_logo from "../assets/instagram.png"


// export default function footer() {
//   return (
//     <>
//       <div className="h-full w-full bg-[#1A1D21] py-30 px-5">
//         <div className="h-[37rem] w-full flex flex-col justify-center items-center">

//           <div>
//             <footer
//               id="Footer"
//               className="relative h-[6rem] w-full content-center transition delay-500 pl-14"
//             >
//               <div className="container mx-auto px-4" data-aos="fade-up">
//                 <div className="info-wrapper flex flex-row w-[70rem] text-left lg:text-left gap-5 ">

//                     {/* Left */}
//                   <div className="flex w-full lg:w-6/12 h-[2.3rem] items-center gap-8">
//                     <h4 className="text-4xl font-semibold text-white">
//                       SONIC
//                     </h4>
//                     <div className="h-8 mt-2 w-[1px] bg-white"></div>
//                     <div className="">
//                         <h1 className="text-lg text-white">The Perfect Sound</h1>
//                     </div>
//                   </div>

//                   {/* Right */}
//                   <div className="w-full lg:w-6/12 px-4">
//                     <div className="links-container flex flex-wrap items-top mb-6 gap-6">
//                       <div className="w-full lg:w-4/12 px-4 ml-auto">
//                         <span className="block uppercase text-white text-lg font-semibold mb-5">
//                           Company
//                         </span>
//                         <ul className="list-unstyled">
//                           <li>
//                             <a
//                               className="text-white hover:text-gray-400 font-semibold block pb-2 text-sm"
//                               href="https://chat.whatsapp.com/IzoYNN2fsz35PnzxAzywMU"
//                             >
//                               Blog
//                             </a>
//                           </li>
//                           <li>
//                             <a
//                               className="text-white hover:text-gray-400 font-semibold block pb-2 text-sm"
//                               href="https://forms.gle/YG2VfugSAaWRCnSE6"
//                             >
//                               Contact Us
//                             </a>
//                           </li>
//                         </ul>
//                       </div>
//                       <div className="w-full lg:w-4/12 px-4 ml-auto">
//                         <span className="block uppercase text-white text-lg font-semibold mb-5">
//                           Legal
//                         </span>
//                         <ul className="list-unstyled">
//                           <li>
//                             <a
//                               className="text-white hover:text-gray-400 font-semibold block pb-2 text-sm"
//                               href="https://chat.whatsapp.com/IzoYNN2fsz35PnzxAzywMU"
//                             >
//                               Terms Of Service
//                             </a>
//                           </li>
//                           <li>
//                             <a
//                               className="text-white hover:text-gray-400 font-semibold block pb-2 text-sm"
//                               href="https://forms.gle/YG2VfugSAaWRCnSE6"
//                             >
//                               Privacy Policy
//                             </a>
//                           </li>
//                         </ul>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </footer>
//           </div>

//           <div className="flex h-full w-full justify-center items-center">
//             <img src={footer_img} alt="" className="w-[75rem] opacity-10" />
//           </div>


//           <div className="flex justify-between w-[75rem]">

//             <div className="flex text-gray-300">
//                 <div className="mr-1">@</div>
//                 <div>
//                     <h1>2025. All rights reserved. SONIQUE</h1>
//                 </div>
//             </div>

//             <div className="flex items-center gap-3">
//                 <div className="text-gray-300">
//                     <a href="">
//                         @sonique
//                     </a>
//                 </div>
//                 <div>
//                     <a href="">
//                         <img src={x_logo} alt="" className="w-10" />
//                     </a>
//                 </div>
//                 <div>
//                     <a href="">
//                         <img src={ig_logo} alt="" className="w-10" />
//                     </a>
//                 </div>
//             </div>
            
//           </div>

//         </div>
//       </div>
//     </>
//   );
// }



























import footer_img from "../assets/footer_img.svg";
import x_logo from "../assets/X.png";
import ig_logo from "../assets/instagram.png";

export default function Footer() {
  return (
    <div id="contacts" className="w-full bg-[#1A1D21] py-16 px-4">
      <div className="max-w-screen-xl mx-auto flex flex-col items-center">
        {/* Top Section */}
        <footer className="w-full" id="Footer">
          <div className="w-full" data-aos="fade-up">
            <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
              {/* Left */}
              <div className="flex items-center gap-4">
                <h4 className="text-4xl font-semibold text-white">SONIC</h4>
                <div className="h-8 w-px bg-white"></div>
                <h1 className="text-lg text-white">The Perfect Sound</h1>
              </div>

              {/* Right */}
              <div className="flex flex-col sm:flex-row gap-8 text-white">
                <div>
                  <span className="block uppercase text-lg font-semibold mb-4">
                    Company
                  </span>
                  <ul>
                    <li>
                      <a
                        href=""
                        className="hover:text-gray-400 block pb-2 text-sm font-semibold"
                      >
                        Blog
                      </a>
                    </li>
                    <li>
                      <a
                        href=""
                        className="hover:text-gray-400 block pb-2 text-sm font-semibold"
                      >
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <span className="block uppercase text-lg font-semibold mb-4">
                    Legal
                  </span>
                  <ul>
                    <li>
                      <a
                        href=""
                        className="hover:text-gray-400 block pb-2 text-sm font-semibold"
                      >
                        Terms Of Service
                      </a>
                    </li>
                    <li>
                      <a
                        href=""
                        className="hover:text-gray-400 block pb-2 text-sm font-semibold"
                      >
                        Privacy Policy
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>

        {/* Background Image */}
        <div className="w-full my-12">
          <img
            src={footer_img}
            alt="footer background"
            className="w-full max-w-7xl mx-auto opacity-10"
          />
        </div>

        {/* Bottom Row */}
        <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-4 text-gray-300 text-sm" > 
          <div className="flex items-center gap-1">
            <span>@</span>
            <span>2025. All rights reserved. SONIQUE</span>
          </div>

          <div className="flex items-center gap-3">
            <a href="" className="hover:text-white">@sonique</a>
            <a href="">
              <img src={x_logo} alt="X logo" className="w-6 sm:w-8" />
            </a>
            <a href="">
              <img src={ig_logo} alt="Instagram logo" className="w-6 sm:w-8" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
