"use client";

const Page = () => {
    return (
        <>
            <div className="bg-[url('../public/background.png')] bg-cover bg-center bg-opacity-0
                      h-auto justify-items-center text-center w-full 
                      lg:bg-[url('../public/calendar.jpg')] 
                      md:bg-[url('../public/desktop.jpg')]" id="schedule__1">

            <div className="w-full bg-black bg-opacity-55">
         
            <div 
            className="flex gap-12 mx-1 py-5 px-9 sm:scale-110 md:scale-120 text-sm justify-center w-full" 
            id="get-in-touch"
            >

            <div className="text-gray-200 pt-5 pb-5 ">
                <h3 className="mb-1 text-sm">Hétfő</h3>
                <h3 className="mb-1 text-sm">Kedd</h3>
                <h3 className="mb-1 text-sm">Szerda</h3>
                <h3 className="mb-1 text-sm">Csütörtök</h3>
                <h3 className="mb-1 text-sm">Péntek</h3>
                <h3 className="mb-1 text-sm">Szombat</h3>
                <h3 className="mb-1 text-sm">Vasárnap</h3>
            </div>

            <div className="bg-slate-50 h-auto p-px pt-5 pb-5 my-2 lg:my-3 md:my-2.5"></div>

            <div className="text-gray-200 pt-5 pb-5 justify-items-center">
                <h4 className="mb-1 text-sm">Zárva</h4>
                <h4 className="mb-1 text-sm">8:00-20:00</h4>
                <h4 className="mb-1 text-sm">8:00-20:00</h4>
                <h4 className="mb-1 text-sm">8:00-20:00</h4>
                <h4 className="mb-1 text-sm">8:00-20:00</h4>
                <h4 className="mb-1 text-sm">7:00-16:00</h4>
                <h4 className="mb-1 text-sm">Zárva</h4>
            </div>
            </div>
        </div>
      </div>
        </>
    )
}

export default Page;