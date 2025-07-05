// export default function Blog_card({Heading, Para, img}){
//     return(
//         <>
//             <div className="flex flex-col">
//                 <div className="h-[19rem] w-[23.7rem] overflow-hidden rounded-3xl bg-cover bg-no-repeat">
//                     <img src={img} alt="" className="h-[19rem] w-[23.7rem] object-cover transition duration-600 ease-in-out hover:scale-110" />
//                 </div>
//                 <div className="">
//                     <div className="flex flex-col justify-center h-[6rem] w-full">
//                         <div className=""> 
//                             <h1 className="text-2xl">{Heading}</h1>
//                         </div>
//                         <div>
//                             <p className="text-lg">{Para}</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }












export default function Blog_card({ Heading, Para, img }) {
  return (
    <div className="flex flex-col w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)] max-w-sm bg-gray-50 rounded-4xl">
      {/* Image */}
      <div className="w-full h-64 overflow-hidden rounded-3xl">
        <img
          src={img}
          alt={Heading}
          className="w-full h-full object-cover transition duration-500 ease-in-out hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="mt-4 h-24 flex flex-col justify-center pl-4">
        <h1 className="text-xl font-semibold mb-1">{Heading}</h1>
        <p className="text-gray-600 text-sm">{Para}</p>
      </div>
    </div>
  );
}
