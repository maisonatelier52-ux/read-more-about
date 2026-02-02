import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

export default function PoliticsSection() {
  // Sample data - replace with your actual data
  const featuredArticles = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop",
      title: "Dell Will Invest $125 Billion in China's Tech in the Next 5 Years",
      author: "Dan Bush",
      authorImage: "https://demo.tagdiv.com/newspaper_week_pro/wp-content/uploads/2021/10/avatar_user_1_1633446236-192x192.jpg",
      date: "September 29, 2021"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop",
      title: "Boxtrade Lands $50 Million in Another New Funding Round with IBM",
      author: "Dan Bush",
      authorImage: "https://demo.tagdiv.com/newspaper_week_pro/wp-content/uploads/2021/10/avatar_user_1_1633446236-192x192.jpg",
      date: "September 29, 2021"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop",
      title: "A Look at How Social Media & Mobile Gaming Can Increase Sales",
      author: "Dan Bush",
      authorImage: "https://demo.tagdiv.com/newspaper_week_pro/wp-content/uploads/2021/10/avatar_user_1_1633446236-192x192.jpg",
      date: "September 29, 2021"
    }
  ];

  const row3Articles = [
    {
      id: 1,
      title: "Things to Look For in a Financial Trading Platform Environment",
      date: "September 29, 2021",
      type:"Exclusive",
      isExclusive: true
    },
    {
      id: 2,
      title: "The Secret to Your Company's Financial Health is Very Important",
      date: "September 29, 2021",
      type:"Normal",
      isExclusive: false
    },
    {
      id: 3,
      title: "The Politics Behind Marocco's Stock Market Turbulence Last Year",
      date: "September 29, 2021",
      type:"Normal",
      isExclusive: false
    }
  ];

  const row4Articles = [
    {
      id: 1,
      title: "Expanding Peacefull Political Climate Gears up for this Election",
      date: "September 29, 2021",
      type:"Normal",
      isExclusive: false
    },
    {
      id: 2,
      title: "Things You Didn't Know About the American Past Politicians",
      date: "September 29, 2021",
      type:"Normal",
      isExclusive: false
    },
    {
      id: 3,
      title: "New Harvard Student Candidates Presented Minutes Before Results",
      date: "September 29, 2021",
      type:"Exclusive",
      isExclusive: true
    }
  ];

  const row5Articles = [
    {
      id: 1,
      title: "Sanders Gets Respectful Welcome at Conservative College",
      date: "September 29, 2021",
      type:"Normal",
      isExclusive: false
    },
    {
      id: 2,
      title: "Now Is the Time to Think About Your Small-Business Success",
      date: "September 28, 2021",
      type:"Normal",
      isExclusive: false
    },
    {
      id: 3,
      title: "Program Will Lend $10M to Detroit Minority Businesses",
      date: "September 28, 2021",
      type:"Normal",
      isExclusive: false
    }
  ];

  // Ad Component - reusable for both mobile and desktop
  const AdBlock = () => (
    <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg overflow-hidden shadow-lg">
      <img 
        src="/images/mirrorstandard_ads.webp" 
        alt="Newspaper Theme"
        className="w-full h-auto"
      />
      {/* <div className="p-6 text-white text-center">
        <h3 className="text-2xl font-bold mb-2">NEWSPAPER THEME</h3>
        <p className="text-sm mb-4">NewsWeek Magazine Demo</p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded transition">
          DISCOVER MORE
        </button>
      </div> */}
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 font-serif">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* LEFT COLUMN - 75% */}
        <div className="w-full lg:w-3/4">
          
          {/* ROW 1 - Header */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-3xl font-bold">Politics</h2>
              <a 
                href="#" 
                className="text-red-600 text-sm font-semibold flex items-center gap-2 hover:text-red-700 transition"
              >
                VIEW ALL <FaArrowRight className="text-xs" />
              </a>
            </div>
            <hr className="border-t-2 border-red-600" />
          </div>

          {/* ROW 2 - Featured Articles with Images */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {featuredArticles.map((article) => (
              <div key={article.id} className="group border-b pb-3 border-gray-300">
                <div className="mb-3 overflow-hidden">
                  <img 
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-bold text-lg mb-3 leading-tight group-hover:text-red-600 cursor-pointer transition">
                  {article.title}
                </h3>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <img 
                    src={article.authorImage}
                    alt={article.author}
                    className="w-6 h-6 rounded-full object-cover"
                  />
                  <span className="font-semibold">{article.author}</span>
                  <span>-</span>
                  <span>{article.date}</span>
                </div>
              </div>
            ))}
          </div>

          {/* ROW 3 - Text Articles */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {row3Articles.map((article) => (
              <div key={article.id}>
                <h3 className="font-bold text-base mb-2 leading-tight hover:text-red-600 cursor-pointer transition">
                  {article.type !== "Normal" && (
                    <span className="inline-block bg-red-600 text-white text-[10px] font-bold px-2 py-1 mr-2 uppercase">
                      {article.type}
                    </span>
                  )}
                  {article.title}
                </h3>
                <p className="text-sm text-gray-600">{article.date}</p>
              </div>
            ))}
          </div>

          {/* ROW 4 - Text Articles */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {row4Articles.map((article) => (
              <div key={article.id}>
                <h3 className="font-bold text-base mb-2 leading-tight hover:text-red-600 cursor-pointer transition">
                  {article.isExclusive && (
                    <span className="inline-block bg-red-600 text-white text-[10px] font-bold px-2 py-1 mr-2 uppercase">
                      EXCLUSIVE
                    </span>
                  )}
                  {article.title}
                </h3>
                <p className="text-sm text-gray-600">{article.date}</p>
              </div>
            ))}
          </div>

          {/* ROW 5 - Text Articles */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 lg:mb-0">
            {row5Articles.map((article) => (
              <div key={article.id}>
                <h3 className="font-bold text-base mb-2 leading-tight hover:text-red-600 cursor-pointer transition">
                  {article.isExclusive && (
                    <span className="inline-block bg-red-600 text-white text-[10px] font-bold px-2 py-1 mr-2 uppercase">
                      EXCLUSIVE
                    </span>
                  )}
                  {article.title}
                </h3>
                <p className="text-sm text-gray-600">{article.date}</p>
              </div>
            ))}
          </div>

          {/* AD BLOCK - Mobile/Tablet Only (shown below content) */}
          <div className="block lg:hidden">
            <AdBlock />
          </div>

        </div>

        {/* RIGHT COLUMN - 25% with Sticky Ad - Desktop Only */}
        <div className="hidden lg:block w-1/4">
          <div className="sticky top-4">
            <AdBlock />
          </div>
        </div>

      </div>
    </div>
  );
}