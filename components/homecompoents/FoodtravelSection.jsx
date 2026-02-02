"use client";

import { FaArrowRight } from "react-icons/fa";

export default function FoodTravelSection() {
  // Sample data - replace with your actual data
  const largeArticles = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop",
      title: "Easy Food Survey: Salad Voted As One of the Most Satisfying Meals",
      author: "Dan Bush",
      authorImage: "https://i.pravatar.cc/150?img=1",
      date: "September 29, 2021",
      type:"Normal",
      isExclusive: false
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1511688878353-3a2f5be94cd7?w=600&h=400&fit=crop",
      title: "This Week in Houston Food Blogs: High-Protein Recipes and Low Fat Shakes",
      author: "Dan Bush",
      authorImage: "https://i.pravatar.cc/150?img=1",
      date: "September 29, 2021",
      type:"Normal",
      isExclusive: false
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=600&h=400&fit=crop",
      title: "Moroccan Salmon with Garlic Mayonnaise is Common in Southern Spain",
      author: "Dan Bush",
      authorImage: "https://i.pravatar.cc/150?img=1",
      date: "September 29, 2021",
      type:"Normal",
      isExclusive: false
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&h=400&fit=crop",
      title: "Best Places to Get Your Mexican Food Fix When You Visit Mexico City",
      author: "Dan Bush",
      authorImage: "https://i.pravatar.cc/150?img=1",
      date: "September 29, 2021",
      type:"Exclusive",
      isExclusive: true
    }
  ];

  const smallArticles1 = [
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=300&h=200&fit=crop",
      title: "The Best Pork Kebabs With Grilled Plums and Couscous is Found in Poland",
      isExclusive: false,
      type:"Normal",
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=300&h=200&fit=crop",
      title: "Ultimate Guide to Vienna's Coffee Renaissance Packed in One Weekend",
      type:"Normal",
      isExclusive: false
    },
    {
      id: 7,
      image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=300&h=200&fit=crop",
      title: "10 Things You Should Know Before You Visit South America's Jungles",
      type:"Normal",
      isExclusive: false
    },
    {
      id: 8,
      image: "https://images.unsplash.com/photo-1530789253388-582c481c54b0?w=300&h=200&fit=crop",
      title: "Vacation Bucket List: The Top 10 Trips of a Lifetime You Should Take",
      type:"Normal",
      isExclusive: false
    }
  ];

  const smallArticles2 = [
    {
      id: 9,
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop",
      title: "The Cliffs of Moher Reach 1 Million Visitors Every Year Since 2014",
      type:"Exclusive",
      isExclusive: true
    },
    {
      id: 10,
      image: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=300&h=200&fit=crop",
      title: "The 25 Best Cities You Can Find in Italy to Satisfy the Love for Pizza",
      type:"Exclusive",
      isExclusive: true
    },
    {
      id: 11,
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=300&h=200&fit=crop",
      title: "Now Is the Time to Think About Your Small-Business Success",
      type:"Normal",
      isExclusive: false
    },
    {
      id: 12,
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=300&h=200&fit=crop",
      title: "Program Will Lend $10M to Detroit Minority Businesses",
      type:"Normal",
      isExclusive: false
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-5 lg:px-7 py-5 font-serif">
      {/* Row 1: Header */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-3xl md:text-4xl font-bold text-black">Food & travel</h2>
          <a 
            href="#" 
            className="flex items-center gap-2 text-red-600 hover:text-red-700 font-semibold text-sm uppercase transition-colors"
          >
            VIEW ALL
            <FaArrowRight className="text-xs" />
          </a>
        </div>
        <div className="h-[3px] bg-red-600 w-full"></div>
      </div>

      {/* Row 2: Large Cards (4 columns) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {largeArticles.map((article) => (
          <div key={article.id} className="group cursor-pointer">
            {/* Image */}
            <div className="mb-3 overflow-hidden">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-[180px] object-cover transition-transform duration-300 group-hover:scale-105"
              />
            
            </div>
            
            {/* Title */}
            <h3 className="text-base font-bold leading-snug mb-3 group-hover:text-red-600 transition-colors">
              {article.type !== "Normal" && (
                        <span className="inline-block bg-red-600 px-2 py-[2px] text-[10px] font-bold text-white uppercase mr-2">
                          {article.type}
                        </span>
                      )}
                      {article.title}
            </h3>
            
            {/* Author Info */}
            <div className="flex items-center gap-2 text-xs text-gray-600">
              <img
                src={article.authorImage}
                alt={article.author}
                className="w-6 h-6 rounded-full"
              />
              <span className="font-semibold">{article.author}</span>
              <span>-</span>
              <span>{article.date}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Row 3: Small Cards (4 columns) - Image Left, Title Right */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {smallArticles1.map((article) => (
          <div key={article.id} className="group cursor-pointer">
            <div className="flex gap-3 items-start">
              {/* Image Left */}
              <div className="flex-shrink-0 w-24 h-24 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
               
              </div>
              
              {/* Title Right */}
              <h3 className="text-sm font-bold leading-snug group-hover:text-red-600 transition-colors flex-1">
                {article.type !== "Normal" && (
                        <span className="inline-block bg-red-600 px-2 py-[2px] text-[10px] font-bold text-white uppercase mr-2">
                          {article.type}
                        </span>
                      )}

                {article.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* Row 4: Small Cards (4 columns) - Image Left, Title Right */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {smallArticles2.map((article) => (
          <div key={article.id} className="group cursor-pointer">
            <div className="flex gap-3 items-start">
              {/* Image Left */}
              <div className="flex-shrink-0 w-24 h-24 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                
              </div>
              
              {/* Title Right */}
              <h3 className="text-sm font-bold leading-snug group-hover:text-red-600 transition-colors flex-1">
                {article.isExclusive && (
                        <span className="inline-block bg-red-600 text-white text-[10px] font-bold px-2 py-1 mr-2 uppercase">
                          EXCLUSIVE
                        </span>
                      )}
                {article.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}