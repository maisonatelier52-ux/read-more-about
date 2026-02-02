

import Image from "next/image";

export default function CelebritySection() {
  // Sample data - replace with your actual data
  const featuredArticles = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop",
      title: "Kristen Stewart Visits the Toronto Film Festival with New Boyfriend",
      author: "Dan Bush",
      authorImage: "https://demo.tagdiv.com/newspaper_week_pro/wp-content/uploads/2021/10/avatar_user_1_1633446236-192x192.jpg",
      date: "September 29, 2021",
      isExclusive: true,
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop",
      title: "Celebrity Make-up Artist Gary Meyers Shows you His Beauty Tricks",
      author: "Dan Bush",
      authorImage: "https://demo.tagdiv.com/newspaper_week_pro/wp-content/uploads/2021/10/avatar_user_1_1633446236-192x192.jpg",
      date: "September 29, 2021",
      isExclusive: false,
    },
  ];

  const gridArticles = [
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop",
      title: "The Biggest Hollywood Celebrities Visit the Ranches of California",
      author: "Dan Bush",
      authorImage: "https://demo.tagdiv.com/newspaper_week_pro/wp-content/uploads/2021/10/avatar_user_1_1633446236-192x192.jpg",
      date: "September 29, 2021",
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop",
      title: "The Most Popular Celebrity Name List of the Millennium is Here",
      author: "Dan Bush",
      authorImage: "https://demo.tagdiv.com/newspaper_week_pro/wp-content/uploads/2021/10/avatar_user_1_1633446236-192x192.jpg",
      date: "September 29, 2021",
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop",
      title: "Fashion Finder: Biggest Shows, Parties and Celebrity for New Years",
      author: "Dan Bush",
      authorImage: "https://demo.tagdiv.com/newspaper_week_pro/wp-content/uploads/2021/10/avatar_user_1_1633446236-192x192.jpg",
      date: "September 29, 2021",
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop",
      title: "iTunes is Now the Second Biggest Name in Music World Giants",
      author: "Dan Bush",
      authorImage: "https://demo.tagdiv.com/newspaper_week_pro/wp-content/uploads/2021/10/avatar_user_1_1633446236-192x192.jpg",
      date: "September 29, 2021",
    },
  ];

  return (
    <div className="relative mb-5 pt-10">
      {/* Celebrity Heading with LIFESTYLE Background */}
      <div className="max-w-7xl mx-auto px-4 relative mb-8">
        <div className="relative">
          {/* Background Text */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
            <span className="text-7xl md:text-7xl lg:text-7xl font-bold text-gray-50 font-serif uppercase whitespace-nowrap">
              LIFESTYLE
            </span>
          </div>
          
          {/* Foreground Heading */}
          <h2 className="text-4xl md:text-4xl font-bold text-center mb-0 font-serif relative z-10 py-4">
            Celebrity
          </h2>
        </div>
      </div>

      {/* Blue background container */}
      <div className="relative">
        {/* First Row - 2 Columns */}
        <div className="max-w-7xl mx-auto px-4 mb-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredArticles.map((article) => (
              <div key={article.id} className="group">
                {/* Desktop: Horizontal Layout, Mobile/Tablet: Vertical Layout */}
                <div className="flex md:flex-row flex-col gap-4">
                  {/* Image */}
                  <div className="md:w-1/2 w-full flex-shrink-0">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 flex flex-col justify-center">
                    <h3 className="font-serif text-xl md:text-xl font-bold leading-tight mb-3 group-hover:text-red-600 transition-colors cursor-pointer">
                      {article.isExclusive && (
                        <span className="inline-block bg-red-600 text-white text-[10px] font-bold px-2 py-1 mr-2 uppercase">
                          EXCLUSIVE
                        </span>
                      )}
                      {article.title}
                    </h3>

                    {/* Author Info */}
                    <div className="flex items-center gap-2 text-xs text-gray-600">
                      <div className="w-6 h-6 rounded-full overflow-hidden bg-gray-300 flex-shrink-0">
                        <img
                          src={article.authorImage}
                          alt={article.author}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <span className="font-medium">{article.author}</span>
                      <span>-</span>
                      <span>{article.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Blue Background - positioned absolutely to cover from middle of first row to end of second row */}
        <div 
          className="absolute left-0 right-0 bg-[#eaeaea]/40 pointer-events-none h-200 lg:h-130 top:90 lg:top-90"
          style={{
            // top: '60%',
            transform: 'translateY(-50%)',
            bottom: 0,
            zIndex: 0
          }}
        />

        {/* Second Row - 4 Columns */}
        <div className="max-w-7xl mx-auto px-4 pb-8 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {gridArticles.map((article) => (
              <div key={article.id} className="group">
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden mb-4">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Title */}
                <h3 className="font-serif text-base font-bold leading-snug mb-3 group-hover:text-red-600 transition-colors cursor-pointer">
                  {article.title}
                </h3>

                {/* Author Info */}
                <div className="flex items-center gap-2 text-xs text-gray-600">
                  <div className="w-6 h-6 rounded-full overflow-hidden bg-gray-300 flex-shrink-0">
                    <img
                      src={article.authorImage}
                      alt={article.author}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="font-medium">{article.author}</span>
                  <span>-</span>
                  <span>{article.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

