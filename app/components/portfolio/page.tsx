"use client";

import Image from 'next/image';


const Page = () => {
    return (
        <>
            <div className="grid backdrop-blue-lg bg-white bg-opacity-20 w-auto pt-12 p-5 pb-12 sm:grid-cols-2 scroll-mt-28" id="portfolio">
                <Image 
            alt="profile pic"
            src="/profile.png"
            width={150}
            height={150}
            className="opacity-50 justify-self-center justify-items-center pb-9 lg:w-52"
            />

            <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat provident sit at expedita dolorem corrupti quis accusantium dicta qui, neque, fuga vitae laudantium quaerat exercitationem obcaecati, dolores eligendi veniam dignissimos temporibus deserunt eius! Vitae aspernatur repellendus doloribus, ipsam incidunt reprehenderit repellat dolor excepturi necessitatibus id tempora dignissimos. Quis, corporis quo?</p>
            </div>
        </>
    )
};

export default Page;