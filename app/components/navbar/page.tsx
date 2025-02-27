// "use client";

// import { useState, useEffect, useRef } from "react";
// import { motion, useScroll, useMotionValueEvent } from "framer-motion";

// import Link from 'next/link';


// function Menu() {
//     const [isOpen, setIsOpen] = useState(false);

//     const menuRef = useRef<HTMLDivElement>(null);
//     const buttonRef = useRef<HTMLButtonElement>(null);
//     const navbarRef = useRef<HTMLDivElement>(null);

//     const { scrollY } = useScroll();
//     const [change, setChange] = useState(false);
  

//   useMotionValueEvent(scrollY, "change", (latest) => {
//     const previous = scrollY.getPrevious();
    
//     if (previous && latest > previous && latest > 100) {
//       setChange(true);
//     } else {
//       setChange(false);
//     };
//   })

    
   
//     useEffect(() => {
//       function handleClickOutside(event: MouseEvent) {
//         if (
//           menuRef.current &&
//           !menuRef.current.contains(event.target as Node) &&
//           buttonRef.current &&
//           !buttonRef.current.contains(event.target as Node) &&
//           navbarRef.current && 
//           !navbarRef.current.contains(event.target as Node)
//         ) {
//           setIsOpen(false);
//         }
//       }
    
//       if (isOpen) {
//         document.addEventListener("mousedown", handleClickOutside);
//       }
    
//       return () => {
//         document.removeEventListener("mousedown", handleClickOutside);
//       };
  
//     }, [isOpen]);
        
  
//     return (
      
//       <>
//         <div className="flex justify-between bg-gradient-to-br bg-opacity-85 p-5 w-full z-40 fixed">
          
//           <motion.a
//           variants= {{
//             visible: { opacity: 1 },
//             hidden: { opacity : 0 },
//           }}
//             animate={change ? "hidden" : "visible"}
//             href="../"
//             className={`text-2xl p-3 z-40 font-sans ${isOpen ? "opacity-30 md:opacity-100" : "opacity-100"}`}>Márkus Szalon
//           </motion.a>



//           <motion.button
//             variants= {{
//               visible: { opacity: 1},
//               hidden: { opacity: 1 }
//             }}

//             animate={change ? "hidden" : "visible"}

//             ref={buttonRef}
//             onClick={() => setIsOpen(!isOpen)}
//             className="flex flex-col justify-center items-center scale-125 z-50"
//           >
//             <span
//               className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
//                 isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
//               }`}
//             ></span>
//             <span
//               className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
//                 isOpen ? "opacity-0" : "opacity-100"
//               }`}
//             ></span>
//             <span
//               className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
//                 isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
//               }`}
//             ></span>
//           </motion.button>
//         </div>
  
//         {isOpen && (
//           <div className="top-0 left-0 w-full h-full bg-transparent absolute z-30">
//             <div>
//             <div
//               ref={menuRef}
//               className="fixed top-0 right-0 h-full w-72 bg-slate-800 bg-opacity-85 flex items-center justify-center"
//             >
//               <ul className="grid text-slate-400 text-xl w-2/4">
//                 <a onClick={() => setIsOpen(!isOpen)} className="py-12 hover:text-white cursor-pointer w-0 h-0" href="../">Főoldal</a>
//                 <a onClick={() => setIsOpen(!isOpen)} className="py-12 hover:text-white cursor-pointer w-0 h-0" href="#service">Szolgáltatások</a>
//                 <a onClick={() => setIsOpen(!isOpen)} className="py-12 hover:text-white cursor-pointer w-0 h-0" href="#portfolio">Portfólióm</a>
//                 <Link href="../components/gallery" onClick={() => setIsOpen(!isOpen)} className="py-12 hover:text-white cursor-pointer w-0 h-0" >Referencia</Link>
//                 <a onClick={() => setIsOpen(!isOpen)} className="py-12 hover:text-white cursor-pointer w-0 h-0" href="#get-in-touch">Elérhetőségek</a>
//               </ul>
//             </div>
//             </div>
//           </div>
//         )}
//       </>
//     );
//   };

//   export default Menu;


"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from 'next/link';

function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (previous && latest > previous && latest > 100) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      
      <div className="fixed top-0 left-0 w-full flex justify-between bg-gradient-to-br bg-opacity-85 p-5 z-50">

        <motion.a
          variants= {{
            visible: {opacity: 1},
            hidden: {opacity: 0},
          }}
          animate={hidden ? "hidden" : "visible"}

          href="../"
          className="text-2xl font-sans transition-opacity">
          Márkus Szalon
        </motion.a>

        
        <button
          ref={buttonRef}
          onClick={() => setIsOpen(!isOpen)}
          className="flex flex-col justify-center items-center scale-125 z-50"
        >
          <span
            className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
              isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
            }`}
          ></span>
          <span
            className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
              isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
            }`}
          ></span>
        </button>
      </div>

      
      {isOpen && (
        <div className="fixed inset-0 bg-transparent z-40">
          <div
            ref={menuRef}
            className="fixed top-0 right-0 h-full w-72 bg-slate-800 bg-opacity-95 flex items-center justify-center"
          >
            <ul className="grid text-slate-400 text-xl w-2/4">
              <a onClick={() => setIsOpen(!isOpen)} className="py-12 hover:text-white cursor-pointer w-0 h-0" href="../">Főoldal</a>
              <a onClick={() => setIsOpen(!isOpen)} className="py-12 hover:text-white cursor-pointer w-0 h-0" href="#service">Szolgáltatások</a>
              <a onClick={() => setIsOpen(!isOpen)} className="py-12 hover:text-white cursor-pointer w-0 h-0" href="#portfolio">Portfólióm</a>
              <Link href="../components/gallery" onClick={() => setIsOpen(!isOpen)} className="py-12 hover:text-white cursor-pointer w-0 h-0" >Referencia</Link>
              <a onClick={() => setIsOpen(!isOpen)} className="py-12 hover:text-white cursor-pointer w-0 h-0" href="#get-in-touch">Elérhetőségek</a>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}

export default Menu;
