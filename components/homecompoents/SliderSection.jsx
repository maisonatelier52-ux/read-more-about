// "use client";
// import React from 'react'
// import { useEffect, useState } from "react";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// function SliderSection() {
//      const sliderItems = [
//     { id: 1, title: "Best Places to Get Your Mexican Food Fix", date: "October 7, 2021", type: "Exclusive" },
//     { id: 2, title: "The Best Pork Kebabs With Grilled Plums", date: "October 7, 2021", type: "Normal" },
//     { id: 3, title: "10 Things You Should Know Before You Visit Jungles", date: "October 7, 2021", type: "Exclusive" },
//     { id: 4, title: "Ultimate Guide to Vienna’s Coffee Renaissance", date: "October 7, 2021", type: "Normal" },
//     { id: 5, title: "How Celebrities Build Personal Brands", date: "October 7, 2021", type: "Normal" },
//   ];

//   const ITEMS_PER_VIEW = 4;
//     const [isDesktop, setIsDesktop] = useState(false);
//     const [startIndex, setStartIndex] = useState(0);
  
//     useEffect(() => {
//       const handleResize = () => {
//         setIsDesktop(window.innerWidth >= 1024);
//         setStartIndex(0);
//       };
  
//       handleResize();
//       window.addEventListener("resize", handleResize);
//       return () => window.removeEventListener("resize", handleResize);
//     }, []);
  
//     const handleNext = () => {
//       if (startIndex + ITEMS_PER_VIEW < sliderItems.length) {
//         setStartIndex(startIndex + 1);
//       }
//     };
  
//     const handlePrev = () => {
//       if (startIndex > 0) {
//         setStartIndex(startIndex - 1);
//       }
//     };
  
//     // Desktop uses slicing, mobile/tablet uses all items
//     const itemsToRender = isDesktop
//       ? sliderItems.slice(startIndex, startIndex + ITEMS_PER_VIEW)
//       : sliderItems;
  
//   return (
//     <>
//       <div className="bg-[#eaeaea]/50 py-6">
//               <div className="max-w-7xl mx-auto px-4 flex items-center gap-4 font-serif mb:0 lg:mb-20">
      
//                 {/* LEFT ARROW (Desktop only) */}
//                 {isDesktop && (
//                   <button
//                     onClick={handlePrev}
//                     disabled={startIndex === 0}
//                     className="h-10 w-10 flex items-center justify-center rounded-full bg-gray-300 text-white disabled:opacity-50 cursor-pointer disabled:cursor-default"
//                   >
//                     <FaChevronLeft />
//                   </button>
//                 )}
      
//                 {/* ITEMS */}
//                 <div
//                   className="
//                     flex gap-6 py-0 lg:py-5 flex-1
//                     overflow-x-auto lg:overflow-visible
//                     snap-x snap-mandatory
//                     scroll-smooth
//                     scrollbar-hide
//                   "
//                 >
//                   {itemsToRender.map((item) => (
//                     <div
//                       key={item.id}
//                       className="
//                         snap-start flex-shrink-0
//                         w-full sm:w-1/2
//                         lg:basis-[calc(25%-1.5rem)]
//                       "
//                     >
//                       <div className="flex items-start gap-4 px-2 box-border">
//                         <div className="flex flex-col">
//                           <h3 className="font-semibold text-sm leading-snug mb-2 hover:text-red-600 cursor-pointer">
//                             {item.type !== "Normal" && (
//                               <span className="mr-2 inline-block bg-red-600 px-2 py-[2px] text-[10px] font-bold text-white uppercase">
//                                 {item.type}
//                               </span>
//                             )}
//                             {item.title}
//                           </h3>
//                           <p className="text-xs text-gray-500">{item.date}</p>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
      
//                 {/* RIGHT ARROW (Desktop only) */}
//                 {isDesktop && (
//                   <button
//                     onClick={handleNext}
//                     disabled={startIndex + ITEMS_PER_VIEW >= sliderItems.length}
//                     className="h-10 w-10 flex items-center justify-center rounded-full bg-gray-300 text-white disabled:opacity-50 cursor-pointer disabled:cursor-default"
//                   >
//                     <FaChevronRight />
//                   </button>
//                 )}
//               </div>
//             </div>
//     </>
//   )
// }

// export default SliderSection


"use client";
import React from 'react'
import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Link from "next/link";

function SliderSection({ articles }) {
  const ITEMS_PER_VIEW = 4;
  const [isDesktop, setIsDesktop] = useState(false);
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
      setStartIndex(0);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNext = () => {
    if (startIndex + ITEMS_PER_VIEW < articles.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

    const formatDate = (dateString) => {
    const [day, month, year] = dateString.split('/')
    const date = new Date(year, month - 1, day)
    
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    return date.toLocaleDateString('en-US', options)
  }

  // Desktop uses slicing, mobile/tablet uses all items
  const itemsToRender = isDesktop
    ? articles.slice(startIndex, startIndex + ITEMS_PER_VIEW)
    : articles;

  if (!articles || articles.length === 0) {
    return null;
  }

  return (
    <>
      <div className="bg-[#eaeaea]/50 py-6">
        <div className="max-w-7xl mx-auto px-4 flex items-center gap-4 font-serif mb:0 lg:mb-20">
          {/* LEFT ARROW (Desktop only) */}
          {isDesktop && (
            <button
              onClick={handlePrev}
              disabled={startIndex === 0}
              className="h-10 w-10 flex items-center justify-center rounded-full bg-gray-300 text-white disabled:opacity-50 cursor-pointer disabled:cursor-default"
            >
              <FaChevronLeft />
            </button>
          )}

          {/* ITEMS */}
          <div
            className="
              flex gap-6 py-0 lg:py-5 flex-1
              overflow-x-auto lg:overflow-visible
              snap-x snap-mandatory
              scroll-smooth
              scrollbar-hide
            "
          >
            {itemsToRender.map((item) => (
              <div
                key={`${item.category}-${item.id}`}
                className="
                  snap-start flex-shrink-0
                  w-full sm:w-1/2
                  lg:basis-[calc(25%-1.5rem)]
                "
              >
                <Link href={`/${item.category}/${item.slug}`} title={item.title}>
                  <div className="flex items-start gap-4 px-2 box-border">
                    <div className="flex flex-col">
                      <h3 className="font-semibold text-sm leading-snug mb-2 hover:text-red-600 cursor-pointer">
                        {item.type !== "normal" && (
                          <span className="mr-2 inline-block bg-red-600 px-2 py-[2px] text-[10px] font-bold text-white uppercase">
                            {item.type}
                          </span>
                        )}
                        {item.title.slice(0, 60)}...
                      </h3>
                      <p className="text-xs text-gray-500">{formatDate(item.date)}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          {/* RIGHT ARROW (Desktop only) */}
          {isDesktop && (
            <button
              onClick={handleNext}
              disabled={startIndex + ITEMS_PER_VIEW >= articles.length}
              className="h-10 w-10 flex items-center justify-center rounded-full bg-gray-300 text-white disabled:opacity-50 cursor-pointer disabled:cursor-default"
            >
              <FaChevronRight />
            </button>
          )}
        </div>
      </div>
    </>
  )
}

export default SliderSection