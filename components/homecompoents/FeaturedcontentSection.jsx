"use client";

import Image from "next/image";

const FeaturedContentSection = () => {
  // Sample data - replace with your actual data
  const featuredMain = {
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop",
    type: "Exclusive",
    title: "The Future of Digital Marketing in 2026",
    description: "Explore the latest trends and strategies that are reshaping the marketing landscape this year.",
    category: "MARKETING"
  };

  const featuredItems = [
    {
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop",
      category: "BUSINESS",
      title: "Top Business Strategies for Growth gdfggggggggggggggggggggggggg gggggggggggggggg",
       type: "Exclusive",
    },
    {
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop",
      category: "TECHNOLOGY",
      title: "AI Innovation Transforming Industries fgajnsjjjjjjjjjjjjjjjj hsadfjhjddd",
      type: "Exclusive",
    },
    {
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop",
      category: "FINANCE",
      title: "Investment Tips for the Modern Investor",
      type: "Exclusive",
    },
    {
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop",
      category: "LIFESTYLE",
      title: "Work-Life Balance in Remote Era",
      type: "Exclusive",
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-5 lg:px-7 py-7 font-serif">
      <div className="bg-white shadow-xl rounded-lg overflow-hidden">
        <div className="flex flex-col lg:flex-row">
          
          {/* First Column - 25% width */}
          <div className="lg:w-2/5 relative py-7 ps-2 pe-2 lg:ps-7 lg:pe-0">
            <div className="relative h-64 lg:h-full min-h-[400px]">
              <Image
                src={featuredMain.image}
                alt={featuredMain.title}
                fill
                className="object-cover"
              />
              
              {/* Type Badge Overlay */}
              <div className="absolute -top-3 left-4">
                <span className="bg-red-600 text-white text-xs font-bold px-3 py-3 uppercase">
                  {`${featuredMain.type} Content`}
                </span>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 leading-tight font-serif group-hover:text-red-400 transition-colors">
                {featuredMain.type !== "Normal" && (
                        <span className="inline-block bg-red-600 px-2 py-[6px] text-[13px] font-bold text-white uppercase mr-2">
                          {featuredMain.type}
                        </span>
                      )}
                      {featuredMain.title}
              </h2>
              <p className="text-sm lg:text-md leading-relaxed opacity-90">
                {featuredMain.description}
              </p>
            </div>

              
            </div>
          </div>

          {/* Second Column - 75% width */}
          <div className="lg:w-3/5 p-7">
            
            {/* First Row - 2 Columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {featuredItems.slice(0, 2).map((item, index) => (
                <div key={index} className="group cursor-pointer">
                  <div className="relative h-48 mb-3 overflow-hidden rounded">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <p className="text-xs font-semibold uppercase mb-2">
                    {item.category}
                  </p>
                  <h4 className="font-bold text-base leading-snug group-hover:text-red-600 transition-colors">
                     {item.type !== "Normal" && (
                        <span className="inline-block bg-red-600 px-2 py-[2px] text-[10px] font-bold text-white uppercase mr-2">
                          {item.type}
                        </span>
                      )}
                      {item.title}
                  </h4>
                </div>
              ))}
            </div>

            {/* Second Row - 2 Columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featuredItems.slice(2, 4).map((item, index) => (
                <div key={index} className="group cursor-pointer">
                  <div className="relative h-48 mb-3 overflow-hidden rounded">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <p className="text-xs font-semibold uppercase mb-2">
                    {item.category}
                  </p>
                  <h4 className="font-bold text-base leading-snug group-hover:text-red-600 transition-colors">
                    {item.type !== "Normal" && (
                        <span className="inline-block bg-red-600 px-2 py-[2px] text-[10px] font-bold text-white uppercase mr-2">
                          {item.type}
                        </span>
                      )}
                    {item.title}
                  </h4>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedContentSection;