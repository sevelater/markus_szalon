"use client";

const Page = () => {
    return (
        <>
            <div className="bg-[url('../public/background.png')] bg-cover bg-center
                      h-auto justify-items-center text-center w-full 
                      lg:bg-[url('../public/calendar.jpg')] 
                      md:bg-[url('../public/desktop.jpg')]" id="schedule__1">

            <div className="w-full bg-black bg-opacity-55">
         
            <div 
            className="flex gap-12 mx-1 py-5 px-9  justify-center w-full scroll-mt-20" 
            id="elerhetosegek"
            >

            <div className="text-gray-200 pt-5 pb-5">
                <h3 className="mb-1 text-sm sm:text-md lg:text-lg">Hétfő</h3>
                <h3 className="mb-1 text-sm sm:text-md lg:text-lg">Kedd</h3>
                <h3 className="mb-1 text-sm sm:text-md lg:text-lg">Szerda</h3>
                <h3 className="mb-1 text-sm sm:text-md lg:text-lg">Csütörtök</h3>
                <h3 className="mb-1 text-sm sm:text-md lg:text-lg">Péntek</h3>
                <h3 className="mb-1 text-sm sm:text-md lg:text-lg">Szombat</h3>
                <h3 className="mb-1 text-sm sm:text-md lg:text-lg">Vasárnap</h3>
            </div>

            <div className="bg-slate-50 h-auto w-px pt-5 pb-5 my-2 lg:my-3 md:my-2.5"></div>

            <div className="text-gray-200 pt-5 pb-5 justify-items-center">
                <h4 className="mb-1 text-sm sm:text-md lg:text-lg">Zárva</h4>
                <h4 className="mb-1 text-sm sm:text-md lg:text-lg">8:00-20:00</h4>
                <h4 className="mb-1 text-sm sm:text-md lg:text-lg">8:00-20:00</h4>
                <h4 className="mb-1 text-sm sm:text-md lg:text-lg">8:00-20:00</h4>
                <h4 className="mb-1 text-sm sm:text-md lg:text-lg">8:00-20:00</h4>
                <h4 className="mb-1 text-sm sm:text-md lg:text-lg">7:00-16:00</h4>
                <h4 className="mb-1 text-sm sm:text-md lg:text-lg">Zárva</h4>
            </div>
            </div>
        </div>
      </div>
        </>
    )
}

export default Page;