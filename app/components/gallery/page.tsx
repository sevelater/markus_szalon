"use client";

import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react'
// import Autoplay from 'embla-carousel-autoplay'

import Menu from '../navbar/page';
import Footer from '../connect-us/page';


function Page () {
  const [emblaRef] = useEmblaCarousel({ loop: true })

  return (
    <>
      <div className="h-screen font-mono text-gray-100">

      <Menu/>

    <div className="embla w-full h-full bg-gradient-to-br from-slate-800 to-slate-600 " ref={emblaRef}>
      <div className="embla__container h-full w-full">
        <div className="embla__slide flex items-center justify-center container-sm">
          <Image
            alt=""
            width={600}
            height={600}
            src="/hair2.jpg"
            className="rounded-lg"
            />
        </div>
        <div className="embla__slide flex items-center justify-center">
        <Image
            alt=""
            width={600}
            height={600}
            src="/hair3.jpg"
            className="rounded-lg"
            />
        </div>
        <div className="embla__slide flex items-center justify-center">
        <Image
            alt=""
            width={600}
            height={600}
            src="/hair2.jpg"
            className="rounded-lg"
            />
        </div>
        <div className="embla__slide flex items-center justify-center">
        <Image
            alt=""
            width={600}
            height={600}
            src="/hair3.jpg"
            className="rounded-lg"
            />
        </div>

      </div>
    </div>

    <Footer/>

    </div>
    </>
  )
}

export default Page;