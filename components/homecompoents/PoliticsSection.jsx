
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function PoliticsSection({ articles }) {
  if (!articles || articles.length === 0) {
    return null;
  }

    const formatDate = (dateString) => {
    const [day, month, year] = dateString.split('/')
    const date = new Date(year, month - 1, day)
    
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    return date.toLocaleDateString('en-US', options)
  }

  // Split articles for different sections
  const featuredArticles = articles.slice(0, 3); // First 3 with images
  const row3Articles = articles.slice(3, 6); // Next 3
  const row4Articles = articles.slice(6, 9); // Last 3

  // Ad Component
  const AdBlock = () => (
    <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg overflow-hidden shadow-lg">
      <Image
        src="/images/mirrorstandard_ads.webp"
        alt="Newspaper Theme"
        width={1200}
        height={800}
        className="w-full h-auto"
        sizes="100vw"
      />
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
              <Link 
                href="/politics" 
                className="text-red-600 text-sm font-semibold flex items-center gap-2 hover:text-red-700 transition"
                title="politics page"
              >
                VIEW ALL <FaArrowRight className="text-xs" />
              </Link>
            </div>
            <hr className="border-t-2 border-red-600" />
          </div>

          {/* ROW 2 - Featured Articles with Images */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {featuredArticles.map((article) => (
              <Link
                key={`${article.category}-${article.id}`}
                href={`/${article.category}/${article.slug}`}
                title={article.title}
              >
                <div className="group border-b pb-3 border-gray-300">
                  <div className="mb-3 overflow-hidden relative h-48">
                    <Image
                      src={article.image}
                      alt={article.imageAlt || article.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <h3 className="font-bold text-lg mb-3 leading-tight group-hover:text-red-600 cursor-pointer transition">
                    {article.type !== "normal" && (
                      <span className="inline-block bg-red-600 text-white text-[10px] font-bold px-2 py-1 mr-2 uppercase">
                        {article.type}
                      </span>
                    )}
                    {article.title.slice(0, 65)}...
                  </h3>

                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    {article.author && (
                      <>
                        <div className="relative w-6 h-6">
                          <Image
                            src={article.author.profileImage}
                            alt={article.author.name}
                            fill
                            sizes="24px"
                            className="rounded-full object-cover"
                          />
                        </div>
                        <span className="font-semibold">{article.author.name}</span>
                        <span>-</span>
                      </>
                    )}
                    <span>{formatDate(article.date)}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>


          {/* ROW 3 - Text Articles */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {row3Articles.map((article) => (
              <Link key={`${article.category}-${article.id}`} href={`/${article.category}/${article.slug}`} title={article.title}>
                <div>
                  <h3 className="font-bold text-base mb-2 leading-tight hover:text-red-600 cursor-pointer transition">
                    {article.type !== "normal" && (
                      <span className="inline-block bg-red-600 text-white text-[10px] font-bold px-2 py-1 mr-2 uppercase">
                        {article.type}
                      </span>
                    )}
                    {article.title.slice(0, 70)}...
                  </h3>
                  <p className="text-sm text-gray-600">{formatDate(article.date)}</p>
                </div>
              </Link>
            ))}
          </div>

          {/* ROW 4 - Text Articles */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {row4Articles.map((article) => (
              <Link key={`${article.category}-${article.id}`} href={`/${article.category}/${article.slug}`} title={article.title}>
                <div>
                  <h3 className="font-bold text-base mb-2 leading-tight hover:text-red-600 cursor-pointer transition">
                    {article.type !== "normal" && (
                      <span className="inline-block bg-red-600 text-white text-[10px] font-bold px-2 py-1 mr-2 uppercase">
                        {article.type}
                      </span>
                    )}
                    {article.title.slice(0, 70)}...
                  </h3>
                  <p className="text-sm text-gray-600">{formatDate(article.date)}</p>
                </div>
              </Link>
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