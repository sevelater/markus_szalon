// "use client";

// import Image from 'next/image';
// import Slider from 'react-slick';
// import { useState } from 'react';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// // Define the type for slider settings
// interface SliderSettings {
//   dots: boolean;
//   infinite: boolean;
//   speed: number;
//   slidesToShow: number;
//   slidesToScroll: number;
//   swipeToSlide: boolean;
//   adaptiveHeight: boolean;
//   arrows: boolean;
//   autoplay: boolean;
//   autoplaySpeed: number;
//   responsive: Array<{
//     breakpoint: number;
//     settings: Partial<SliderSettings>;
//   }>;
// }

// // Define the type for gallery images
// interface GalleryImage {
//   id: number;
//   src: string;
//   alt: string;
// }

// const GalleryPage: React.FC = () => {
//   const [images] = useState<GalleryImage[]>([
//     { id: 1, src: "/hair1.jpg", alt: "Hairstyle 1" },
//     { id: 2, src: "/hair1.jpg", alt: "Hairstyle 2" },
//     { id: 3, src: "/hair1.jpg", alt: "Hairstyle 3" },
//     { id: 4, src: "/hair1.jpg", alt: "Hairstyle 4" },
//   ]);

//   const settings: SliderSettings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     swipeToSlide: true,
//     adaptiveHeight: true,
//     arrows: true,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//         }
//       },
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//         }
//       },
//       {
//         breakpoint: 640,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         }
//       }
//     ]
//   };

//   return (
//     <div className="bg-gradient-to-tr from-slate-600 to-slate-900 pb-12">

//       <div className="font-mono text-gray-600 p-5">
//         <div className="container mx-auto px-4 py-5 md:py-10">
//           <h1 className="text-center text-slate-100 mb-12 text-2xl md:text-3xl font-semibold p-6 border max-w-xs mx-auto">
//             Galéria
//           </h1>

//           <div className="max-w-6xl mx-auto">
//             <Slider 
//               {...settings}
//               className="relative"
              
//               dotsClass="slick-dots static bottom-0 mt-8 flex justify-center gap-2"
//               customPaging={() => (
//                 <div className="w-3 h-3 bg-white/50 rounded-full hover:bg-white/70 transition-colors duration-200 mt-5" />
//               )}
//             >
//               {images.map((image) => (
//                 <div key={image.id} className="px-2 -z-10">
//                   <div className="relative w-full aspect-[5/6] overflow-hidden rounded-md">
//                     <Image
//                       src={image.src}
//                       alt={image.alt}
//                       fill
//                       className="object-cover rounded-md shadow-lg -z-10"
//                       sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
//                       priority={image.id === 1}
//                       placeholder="blur"
//                       blurDataURL="/placeholder.jpg"
//                     />
//                   </div>
//                 </div>
//               ))}
//             </Slider>

//             {/* Custom arrows styling using Tailwind */}
//             <style jsx>{`
//               .slick-prev, .slick-next {
//                 width: 40px;
//                 height: 40px;
//                 z-index: 10;
//               }
//               .slick-prev {
//                 left: -50px;
//               }
//               .slick-next {
//                 right: -50px;
//               }
//               .slick-prev:before, .slick-next:before {
//                 font-size: 40px;
//                 color: #ffffff;
//                 opacity: 0.7;
//                 transition: opacity 0.2s;
//               }
//               .slick-prev:hover:before, .slick-next:hover:before {
//                 opacity: 1;
//               }
//               .slick-dots li.slick-active div {
//                 background-color: #ffffff;
//                 opacity: 1;
//               }
//             `}</style>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default GalleryPage;