"use client";

const Page = () => {
  return (
    <div className="bg-gradient-to-t from-[#54402f] to-[#c1895789] scroll-mt-28" id="portfolio">
      <div className="mx-auto pb-8 max-w-5xl py-12">

      <h1 className="text-2xl sm:text-3xl justify-self-center text-white text-center mb-5">Portfólióm</h1>


        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 sm:gap-8 lg:gap-10 p-2 sm:p-4 md:p-6">

          <div className="w-[250px] sm:w-[280px] lg:w-[360px] h-[250px] sm:h-[280px] lg:h-[360px] flex-shrink-0">
            <img
              src="/portfolio.png"
              alt="Saját magam"
              className="w-full h-full object-cover object-center rounded-full shadow-lg border-4 border-[#c1b883]"
            />
          </div>

          <div className="custom:max-w-lg bg-[#54402f] m-2 bg-opacity-10 rounded-lg p-4 text-white flex flex-col justify-center h-auto border border-[#c7a56533]">
            <p className="text-sm sm:text-base md:text-lg text-center lg:text-left leading-relaxed m-1">
              A haj nem csak munka, hanem szenvedély:
              <br />
              <br />
              <strong className="font-semibold">A 2024-es WAMP divatbemutatón</strong> egyedi frizurákkal hoztam harmóniát
              ruhákhoz és ékszerekhez.
              <br />
              <br />
              Versenyeken is indultam:
              <br />
              <br />
              A <strong className="font-semibold">Magyar Online bajnokságon</strong> férfi modern szárításban második és harmadik hely,
              <br />
              a <strong className="font-semibold">Miskolci Kézműves Kupán</strong> pedig harmadik helyezést értem el.
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
