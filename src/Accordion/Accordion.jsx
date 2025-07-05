// import arrow from "../assets/down_arrow.png"


// export default function Accordion(){
//     return(
//         <>
//             <div className="flex h-full w-full p-20 items-center justify-center">
//                 <div className="flex h-[33rem] w-[75rem] justify-between gap-15">

//                     <div className="flex flex-col h-full w-[50rem] gap-14">
//                         <div className="">
//                             <h1 className="text-3xl">
//                                 Welcome to Beyond FAQ!
//                             </h1>
//                         </div>
//                         <div className="">
//                             <h1 className="text-5xl">
//                                 Everything You Need to Know About Our Speakers
//                             </h1>
//                         </div>
//                     </div>

//                     <div className="h-full w-full">
//                         <FAQ />
//                     </div>

//                 </div>
//             </div>
//         </>
//     )
// }



// const FAQ = () => {
//   return (
//     <>
//       <div
//         id="faqs"
//         className=" w-full h-[33rem] items-center flex flex-col"
//       >
//         <div className="sm:w-5/5">
//           <div className="flex flex-col  m-2 space-y-2">
//             <div
//               className="min-h-15 group flex flex-col items-center justify-center rounded-2xl p-5  w-full cursor-pointer"
//               tabindex="1"
//             >
//               <div className="flex w-full cursor-pointer items-center justify-between">
//                 <span className="sm:text-3xl text-xl">
//                   What makes your speakers stand out?
//                 </span>
//                 <img
//                   src={arrow}
//                   className="h-5 w-5 transition-all duration-500 group-focus:-rotate-180"
//                 />
//               </div>
//               <div className="mt-2 invisible h-auto max-h-0 items-center opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000 sm:text-lg text-xl w-9/10">
//                 Our speakers deliver premium sound quality, sleek design, and long-lasting durability, ensuring an unmatched listening experience.
//               </div>
//             </div>
//             <hr />
//             <div
//               className="min-h-20 group flex flex-col items-center rounded-2xl p-5  w-full cursor-pointer"
//               tabindex="2"
//             >
//               <div className="flex w-full cursor-pointer items-center justify-between">
//                 <span className="sm:text-3xl text-2xl">
//                   Are your speakers compatible with all devices?
//                 </span>
//                 <img
//                   src={arrow}
//                   className="h-5 w-5 transition-all duration-500 group-focus:-rotate-180"
//                 />
//               </div>
//               <div className="invisible h-auto max-h-0 items-center opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000 sm:text-lg mt-2 text-xl w-9/10">
//                 Yes! Our speakers connect seamlessly via Bluetooth, AUX, and USB, making them compatible with smartphones, tablets, laptops, and more.
//               </div>
//             </div>
//             <hr />
//             <div
//               className="min-h-20 group flex flex-col items-center rounded-2xl  p-5  w-full cursor-pointer"
//               tabindex="3"
//             >
//               <div className="flex w-full cursor-pointer items-center justify-between">
//                 <span className="sm:text-3xl text-2xl">
//                   How long does the battery last?
//                 </span>
//                 <img
//                   src={arrow}
//                   className="h-5 w-5 transition-all duration-500 group-focus:-rotate-180"
//                 />
//               </div>
//               <div className="invisible h-auto max-h-0 items-center opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000 sm:text-lg mt-2 text-xl w-9/10">
//                 Depending on the model, our speakers offer up to 12–24 hours of continuous playtime on a full charge.
//               </div>
//             </div>
//             <hr />
//             <div
//               className="min-h-20 group flex flex-col items-center rounded-2xl  p-5  w-full cursor-pointer"
//               tabindex="4"
//             >
//               <div className="flex w-full cursor-pointer items-center justify-between">
//                 <span className="sm:text-3xl text-2xl">
//                   Are the speakers waterproof?
//                 </span>
//                 <img
//                   src={arrow}
//                   className="h-5 w-5 transition-all duration-500 group-focus:-rotate-180"
//                 />
//               </div>
//               <div className="invisible h-auto max-h-0 items-center opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000 sm:text-lg mt-2 text-xl w-9/10">
//                 Many of our models are water-resistant or fully waterproof, making them perfect for outdoor adventures and poolside use.
//               </div>
//             </div>
//             <hr />
//             <div
//               className="min-h-20 group flex flex-col items-center rounded-2xl  p-5  w-full cursor-pointer"
//               tabindex="5"
//             >
//               <div className="flex w-full cursor-pointer items-center justify-between">
//                 <span className="sm:text-3xl text-2xl">
//                   Do you offer a warranty?
//                 </span>
//                 <img
//                   src={arrow}
//                   className="h-5 w-5 transition-all duration-500 group-focus:-rotate-180"
//                 />
//               </div>
//               <div className="invisible h-auto max-h-0 items-center opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000 sm:text-lg mt-2 text-xl w-9/10">
//                 Yes, all our speakers come with a 1-year warranty, covering manufacturing defects and ensuring peace of mind.
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };




















import { useState } from "react";
import arrow from "../assets/down_arrow.png";

export default function Accordion() {
  return (
    <div className="w-full px-4 py-16 flex justify-center bg-white">
      <div className="max-w-screen-xl w-full flex flex-col lg:flex-row gap-12">
        {/* Left Text Section */}
        <div className="lg:w-1/2 space-y-6"  data-aos="fade-right" data-aos-duration="1200">
          <h1 className="text-3xl font-semibold text-gray-800">
            Welcome to Beyond FAQ!
          </h1>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Everything You Need to Know About Our Speakers
          </h2>
        </div>

        {/* FAQ Section */}
        <div className="lg:w-1/2">
          <FAQ />
        </div>
      </div>
    </div>
  );
}

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (idx) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <div className="w-full space-y-4" data-aos="fade-up" data-aos-duration="1200">
      {faqList.map(({ question, answer }, idx) => {
        const isOpen = openIndex === idx;

        return (
          <div
            key={idx}
            className="border border-gray-200 rounded-2xl p-5 transition-all duration-300"
            //  data-aos="fade-up" data-aos-duration="1200"
          >
            <button
              onClick={() => toggle(idx)}
              className="w-full flex justify-between items-center cursor-pointer"
            >
              <span className="text-lg sm:text-xl font-medium text-left">
                {question}
              </span>
              <img
                src={arrow}
                alt="arrow"
                className={`w-4 h-4 transform transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              className={`grid transition-all duration-500 ease-in-out overflow-hidden ${
                isOpen ? "max-h-[500px] mt-4 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="text-gray-600 sm:text-lg text-base leading-relaxed">
                {answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const faqList = [
  {
    question: "What makes your speakers stand out?",
    answer:
      "Our speakers deliver premium sound quality, sleek design, and long-lasting durability, ensuring an unmatched listening experience.",
  },
  {
    question: "Are your speakers compatible with all devices?",
    answer:
      "Yes! Our speakers connect seamlessly via Bluetooth, AUX, and USB, making them compatible with smartphones, tablets, laptops, and more.",
  },
  {
    question: "How long does the battery last?",
    answer:
      "Depending on the model, our speakers offer up to 12–24 hours of continuous playtime on a full charge.",
  },
  {
    question: "Are the speakers waterproof?",
    answer:
      "Many of our models are water-resistant or fully waterproof, making them perfect for outdoor adventures and poolside use.",
  },
  {
    question: "Do you offer a warranty?",
    answer:
      "Yes, all our speakers come with a 1-year warranty, covering manufacturing defects and ensuring peace of mind.",
  },
];

