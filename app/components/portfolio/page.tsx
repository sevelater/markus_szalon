"use client";

const Page = () => {
    return (
        <>
            <div className="scroll-mt-28" id="portfolio">
                <div className="bg-opacity-40 mx-auto p-4 sm:p-6">
                    {/* Címsor */}
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center py-4 sm:py-6">Portfólióm</h2>

                    {/* Kép és szöveg konténer */}
                    <div className="flex flex-col md:flex-col lg:flex-row items-center p-2 sm:p-6 justify-center">
                        <div className="w-[200px] sm:w-[280px] lg:w-[360px] h-[200px] sm:h-[280px] lg:h-[360px] mb-6 lg:mb-0 lg:mr-10">
                            <img 
                                src="/portfolio.png" 
                                alt="Saját magam" 
                                className="w-full h-full object-cover object-center rounded-full shadow-lg border-4 border-white"
                            />
                        </div>
                        <p className="h-auto text-xs sm:text-sm lg:text-base max-w-lg text-center lg:text-left bg-[#c9ba7b] bg-opacity-30 rounded-md p-4 sm:p-6 sm:h-[300px] lg:h-[360px] flex flex-col justify-center">
                            A haj nem csak munka, hanem szenvedély: 
                            <br /><br />
                            <strong>A 2024-es WAMP divatbemutatón</strong> egyedi frizurákkal hoztam harmóniát ruhákhoz és ékszerekhez
                            <div className="p-2" />
                            Versenyeken is bizonyítottam:<strong className="pt-2">első hely</strong> férfi modern szárításban, <strong className="pt-2">dobogós helyezések</strong> a Magyar Online Bajnokságon. 
                            <div className="p-2" />
                            Minden ollócsattintás egy újabb történet!
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Page;

// const Alma = () => {
//     return (
//         <>
//             <div className="scroll-mt-28 p-4" id="portfolio">
//                 <div className="bg-opacity-40 mx-auto max-w-5xl border rounded-md border-opacity-10 p-4 sm:p-6 lg:p-8">
//                     {/* Címsor */}
//                     <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center py-4 sm:py-6">Portfólióm</h2>

//                     {/* Kép és szöveg konténer */}
//                     <div className="flex flex-col md:flex-col lg:flex-row items-center justify-center p-2 sm:p-6 min-h-[200px] sm:min-h-[280px] lg:min-h-0">
//                         <div className="w-[200px] sm:w-[280px] lg:w-[360px] h-[200px] sm:h-[280px] lg:h-[360px] mb-6 lg:mb-0 lg:mr-10">
//                             <img 
//                                 src="/portfolio.png" 
//                                 alt="Saját magam" 
//                                 className="w-full h-full object-cover object-center rounded-full shadow-lg border-4 border-white"
//                             />
//                         </div>
//                         <p className="text-xs sm:text-sm lg:text-base max-w-lg text-center lg:text-left bg-[#c9ba7b] bg-opacity-30 rounded-md p-4 sm:p-6 h-[200px] sm:h-[280px] lg:h-[360px] flex flex-col justify-center">
//                             A haj nem csak munka, hanem szenvedély: a <strong>2024-es WAMP divatbemutatón</strong> egyedi frizurákkal hoztam harmóniát ruhákhoz és ékszerekhez. 
//                             <div className="p-2" />
//                             Versenyeken is bizonyítottam – <strong>első hely</strong> férfi modern szárításban, <strong>dobogós helyezések</strong> a Magyar Online Bajnokságon. 
//                             <div className="p-2" />
//                             Minden ollócsattintás egy újabb történet!
//                         </p>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default Alma;