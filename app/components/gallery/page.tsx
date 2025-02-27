"use client";

import Menu from '../navbar/page';
import Footer from '../connect-us/page';
import Image from 'next/image';


function Page () {
    
    return (
    
    <>

      <div className="font-mono text-slate-100 bg-gradient-to-tr from-slate-600 to-slate-900 pt-12">


      <Menu/>


    <div className="font-mono text-gray-600 overflow-hidden p-5">

      
        
        <div className="p-5 md:p-10">

          <div className="grid justify-center justify-items-center gap-5 sm:columns-2 md:grid-cols-2 lg:grid-cols-3 xl:columns-4 [&>img:not(:first-child)]:mt-5">

            <Image
            alt="first image"
            src="/hair1.jpg"
            width={300}
            height={300}
            className="rounded-md"
            />

            <Image
            alt="first image"
            src="/hair1.jpg"
            width={300}
            height={300}
            className="rounded-md"
            />

            <Image
            alt="first image"
            src="/hair1.jpg"
            width={300}
            height={300}
            className="rounded-md"
            />

            <Image
            alt="first image"
            src="/hair1.jpg"
            width={300}
            height={300}
            className="rounded-md"
            />

            <Image
            alt="first image"
            src="/hair1.jpg"
            width={300}
            height={300}
            className="rounded-md"
            />

            <Image
            alt="first image"
            src="/hair1.jpg"
            width={300}
            height={300}
            className="rounded-md"
            />

            <Image
            alt="first image"
            src="/hair1.jpg"
            width={300}
            height={300}
            className="rounded-md"
            />

          </div>

        </div>

        

      

    </div>

    <div className="py-0.5 bg-slate-900" id="line"></div>

    <span className="font-sans"><Footer/></span>

    </div>

    </>

    )
}

export default Page;