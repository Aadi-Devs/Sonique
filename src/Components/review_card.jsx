// export default function review_card({heading, para, img}) {
//   return (
//     <>
//       <div className="flex flex-col h-full w-full p-8 bg-gray-50 rounded-3xl gap-20 justify-between">

//         <div className="h-10 w-full">
//           <div className="">
//             <div className="flex h-12 w-12 border-1 border-gray-300 rounded-4xl items-center justify-center">
//               <img src={img} alt="" className="object-cover h-5" />
//             </div>
//           </div>
//         </div>

//         <div className="flex flex-col gap-4">
//             <div className="">
//                 <h1 className="text-3xl font-bold py-2">{heading}</h1>
//             </div>
//             <div className="">
//                 <p className="text-xl">{para}</p>
//             </div>
//         </div>

//       </div>
//     </>
//   );
// }



































export default function ReviewCard({ heading, para, img }) {
  return (
    <div className="flex flex-col h-full w-full p-6 sm:p-8 bg-gray-50 rounded-3xl justify-between shadow-sm transition hover:shadow-md duration-300">
      
      {/* Icon or Avatar */}
      <div className="flex items-center">
        <div className="h-12 w-12 border border-gray-300 rounded-full flex items-center justify-center">
          <img src={img} alt="icon" className="h-5 w-5 object-contain" />
        </div>
      </div>

      {/* Text Content */}
      <div className="mt-6 space-y-3">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">{heading}</h1>
        <p className="text-base sm:text-lg text-gray-700">{para}</p>
      </div>
      
    </div>
  );
}
