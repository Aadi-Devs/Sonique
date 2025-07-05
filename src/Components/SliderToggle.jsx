// import { motion } from "framer-motion";
// import { useState } from "react";
// import { FiMoon, FiSun } from "react-icons/fi";

// const TOGGLE_CLASSES =
//   "text-sm font-medium flex items-center gap-2 px-3 md:pl-3 md:pr-3.5 py-3 md:py-1.5 transition-colors relative z-10";

// const SliderToggle = () => {
//   const [selected, setSelected] = useState("light");
//   return (
//     <div
//       className={`grid place-content-center px-4 transition-colors ${
//         selected === "light" ? "bg-white" : "bg-slate-900"
//       }`}
//     >
//       <Toggle selected={selected} setSelected={setSelected} />
//     </div>
//   );
// };

// const Toggle = ({ selected, setSelected }) => {
//   return (
//     <div className="relative flex w-fit items-center rounded-full">
//       <button
//         className={`${TOGGLE_CLASSES} ${
//           selected === "light" ? "text-white" : "text-slate-300"
//         }`}
//         onClick={() => {
//           setSelected("light");
//         }}
//       >
//         <FiMoon className="relative z-10 text-lg md:text-sm" />
//         {/* <span className="relative z-10">Light</span> */}
//       </button>
//       <button
//         className={`${TOGGLE_CLASSES} ${
//           selected === "dark" ? "text-white" : "text-slate-800"
//         }`}
//         onClick={() => {
//           setSelected("dark");
//         }}
//       >
//         <FiSun className="relative z-10 text-lg md:text-sm" />
//         {/* <span className="relative z-10">Dark</span> */}
//       </button>
//       <div
//         className={`absolute inset-0 z-0 flex ${
//           selected === "dark" ? "justify-end" : "justify-start"
//         }`}
//       >
//         <motion.span
//           layout
//           transition={{ type: "spring", damping: 15, stiffness: 250 }}
//           className="h-full w-1/2 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600"
//         />
//       </div>
//     </div>
//   );
// };

// export default SliderToggle










import { FiMoon, FiSun } from "react-icons/fi";
import { useState } from "react";


function SliderToggle(){

  const [theme, setTheme] = useState("");


  return(
    <>
      <div className={`${ theme ? "dark" : "" } bg-white dark:bg-zinc-900 grid place-items-center w-full`}>
        <div className="bg-zinc-100 dark:bg-zinc-700 p-2 rounded-xl">
          <button
          onClick={()=>{
            setTheme("");
          }}
          className="bg-transparent p-3 hover:bg-zinc-200 dark:hover:bg-zinc-100/10 rounded-lg text-black dark:text-white"
          >
            <FiSun />
          </button>

          <button
          onClick={()=>{
            setTheme("dark");
          }}
          className="bg-transparent p-3 hover:bg-zinc-200 dark:hover:bg-zinc-100/10 rounded-lg text-black dark:text-white"
          >
            <FiMoon />
          </button>
        </div>
      </div>
    </>
  )
}


export default SliderToggle