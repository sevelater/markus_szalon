"use client";

const Page = () => {
  return (
    <div className="bg-gradient-to-t to-[#ad9451] from-[#54402f] scroll-mt-28" id="portfolio">
      <div className="mx-auto pb-8 max-w-5xl py-12">

      <h1 className="text-2xl sm:text-3xl justify-self-center text-white">Portfólióm</h1>


        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 sm:gap-8 lg:gap-10 p-2 sm:p-4 md:p-6">

          <div className="w-[200px] sm:w-[280px] lg:w-[360px] h-[200px] sm:h-[280px] lg:h-[360px] flex-shrink-0">
            <img
              src="/portfolio.png"
              alt="Saját magam"
              className="w-full h-full object-cover object-center rounded-full shadow-lg border-4 border-[#c1b883]"
            />
          </div>


          <div className="max-w-lg w-full bg-[#8d7341] bg-opacity-30 rounded-lg p-4 text-white flex flex-col justify-center h-auto border border-[#c7a56533]">
            <p className="text-sm sm:text-base md:text-lg text-center lg:text-left leading-relaxed">
              A haj nem csak munka, hanem szenvedély:
              <br />
              <br />
              <strong className="font-semibold">A 2024-es WAMP divatbemutatón</strong> egyedi frizurákkal hoztam harmóniát
              ruhákhoz és ékszerekhez.
              <br />
              <br />
              Versenyeken is bizonyítottam: 
              <br />
              <strong className="font-semibold">első hely</strong> férfi modern szárításban,
              <strong className="font-semibold"> dobogós helyezések</strong> a Magyar Bajnokságon.
              <br />
              <br />
             
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;