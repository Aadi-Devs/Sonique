// import Blog_card from "../Components/Blog_card"
// import Image1 from "../assets/blog_img_1.jpeg"
// import Image2 from "../assets/blog_img_2.jpeg"
// import Image3 from "../assets/blog_img_3.jpeg"
// import paper_clip from "../assets/paper-clip.png"

// export default function Blogs() {
//   return (
//     <>
//       <div className="flex h-full w-full ">
//         <div className="flex flex-col h-full w-[75rem] m-[10rem] gap-11 justify-between">
//           {/* top */}
//           <div className="flex gap-4">
//             <div className="w-[43rem]">
//               <div className="w-full">
//                 <div className="flex w-[6rem] p-1 pl-2 border-1 border-gray-300 rounded-l-3xl rounded-r-3xl items-center gap-2">
//                   <img src={paper_clip} alt="" className="h-[14px] pl-1" />
//                   <h1 className="text-center text-lg">Blogs</h1>
//                 </div>
//               </div>
//               <div className="mt-2">
//                 <h1 className="text-5xl">
//                   Sound Insights
//                 </h1>
//               </div>
//             </div>

//             <div className="flex w-[45rem] items-end">
//               <h1 className="text-right text-[20px]">
//                 Stay updated with the latest trends in audio technology, speaker innovations, and expert tips to enhance your listening experience.
//               </h1>
//             </div>
//           </div>

//           {/* bottom */}
//           <div className="flex gap-8 h-[25rem] w-full mt-6">
//             <Blog_card Heading={"The Evolution Of Speakers"} Para={"Feb 1, 2025"} img={Image1} />
//             <Blog_card Heading={"Right Speaker for You"} Para={"Feb 1, 2025"} img={Image2} />
//             <Blog_card Heading={"Wireless Speakers"} Para={"Feb 1, 2025"} img={Image3} />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }



















import Blog_card from "../Components/Blog_card";
import Image1 from "../assets/blog_img_1.jpeg";
import Image2 from "../assets/blog_img_2.jpeg";
import Image3 from "../assets/blog_img_3.jpeg";
import paper_clip from "../assets/paper-clip.png";

export default function Blogs() {
  return (
    <div className="w-full bg-white px-4 py-16 flex justify-center">
      <div className="max-w-screen-xl w-full flex flex-col gap-12">
        
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          {/* Left side: title */}
          <div className="lg:w-1/2 space-y-4" data-aos="fade-right" data-aos-duration="1200">
            <div className="inline-flex items-center gap-2 border border-gray-300 rounded-full px-3 py-1 w-fit">
              <img src={paper_clip} alt="clip" className="h-4" />
              <h1 className="text-base font-medium">Blogs</h1>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">Sound Insights</h1>
          </div>

          {/* Right side: description */}
          <div className="lg:w-1/2 flex items-end" data-aos="fade-left" data-aos-duration="1200">
            <p className="text-lg text-gray-700 text-left lg:text-right">
              Stay updated with the latest trends in audio technology, speaker innovations, and expert tips to enhance your listening experience.
            </p>
          </div>
        </div>

        {/* Blog Cards Section */}
        <div className="flex flex-col sm:flex-row gap-8 flex-wrap lg:pl-8" data-aos="fade-up" data-aos-duration="1200">
          <Blog_card Heading={"The Evolution Of Speakers"} Para={"Feb 1, 2025"} img={Image1} />
          <Blog_card Heading={"Right Speaker for You"} Para={"Feb 1, 2025"} img={Image2} />
          <Blog_card Heading={"Wireless Speakers"} Para={"Feb 1, 2025"} img={Image3} />
        </div>
      </div>
    </div>
  );
}
