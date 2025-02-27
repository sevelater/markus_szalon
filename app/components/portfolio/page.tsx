"use client";

import Image from 'next/image';


const Page = () => {
    return (
        <>
            <div className="grid from-slate-400 to-slate-600 bg-gradient-to-br w-auto pt-12 p-5 pb-12 sm:grid-cols-2 scroll-mt-28" id="portfolio">
                <Image 
            alt="profile pic"
            src="/profile.png"
            width={150}
            height={150}
            className=" justify-self-center justify-items-center pb-9 lg:w-52"
            />

            <p className="">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias ipsam temporibus commodi fugiat voluptatum illum similique. Ea harum et nobis, facilis nam unde enim voluptas, officia facere adipisci incidunt amet.</p>
            </div>
        </>
    )
};

export default Page;