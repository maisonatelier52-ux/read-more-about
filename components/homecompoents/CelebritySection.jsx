// components/homecompoents/CelebritySection.jsx
import Image from "next/image";
import Link from "next/link";

const formatDate = (dateString) => {
  const [day, month, year] = dateString.split('/');
  const date = new Date(year, month - 1, day);
  
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString('en-US', options);
};

export default function CelebritySection({ articles }) {
  if (!articles || articles.length === 0) {
    return null;
  }

  // Split articles: first 2 for featured, next 4 for grid
  const featuredArticles = articles.slice(0, 2);
  const gridArticles = articles.slice(2, 6);

  return (
    <section className="relative mb-5 pt-10">
      {/* Celebrity Heading with LIFESTYLE Background */}
      <header className="max-w-7xl mx-auto px-4 relative mb-8">
        <div className="relative">
          {/* Background Text */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
            <span className="text-7xl md:text-7xl lg:text-7xl font-bold text-gray-50 font-serif uppercase whitespace-nowrap" aria-hidden="true">
              LIFESTYLE
            </span>
          </div>
          
          {/* Foreground Heading */}
          <h2 className="text-4xl md:text-4xl font-bold text-center mb-0 font-serif relative z-10 py-4">
            Business
          </h2>
        </div>
      </header>

      {/* Blue background container */}
      <div className="relative">
        {/* First Row - 2 Columns */}
        <div className="max-w-7xl mx-auto px-4 mb-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredArticles.map((article, index) => (
              <article key={`${article.category}-${article.id}`}>
                <Link href={`/${article.category}/${article.slug}`} title={article.title}>
                  <div className="group">
                    {/* Desktop: Horizontal Layout, Mobile/Tablet: Vertical Layout */}
                    <div className="flex md:flex-row flex-col gap-4">
                      {/* Image */}
                      <div className="md:w-1/2 w-full flex-shrink-0">
                        <div className="relative aspect-[4/3] overflow-hidden">
                          <Image
                            src={article.image}
                            alt={article.imageAlt || article.title}
                            fill
                            sizes="(max-width: 768px) 100vw, 33vw"
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                            loading={index === 0 ? "eager" : "lazy"}
                            quality={85}
                          />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 flex flex-col justify-center">
                        <h3 className="font-serif text-xl md:text-xl font-bold leading-tight mb-3 group-hover:text-red-600 transition-colors cursor-pointer">
                          {article.newsType !== "news" && (
                            <span className="inline-block bg-red-600 text-white text-[10px] font-bold px-2 py-1 mr-2 uppercase">
                              {article.newsType}
                            </span>
                          )}
                          {article.title.slice(0, 80)}...
                        </h3>

                        {/* Author Info */}
                        {article.author && (
                          <div className="flex items-center gap-2 text-xs text-gray-600">
                            <div className="relative w-6 h-6 rounded-full overflow-hidden bg-gray-300 flex-shrink-0">
                              <Image
                                src={article.author.profileImage}
                                alt={article.author.name}
                                fill
                                sizes="24px"
                                className="object-cover"
                                loading="lazy"
                              />
                            </div>

                            <span className="font-medium">{article.author.name}</span>
                            <span>-</span>
                            <time dateTime={article.date}>{formatDate(article.date)}</time>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>

        {/* Blue Background */}
        <div 
          className="absolute left-0 right-0 bg-[#eaeaea]/40 pointer-events-none h-200 lg:h-130 top:90 lg:top-90"
          style={{
            transform: 'translateY(-50%)',
            bottom: 0,
            zIndex: 0
          }}
          aria-hidden="true"
        />

        {/* Second Row - 4 Columns */}
        <div className="max-w-7xl mx-auto px-4 pb-8 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {gridArticles.map((article) => (
              <article key={`${article.category}-${article.id}`}>
                <Link href={`/${article.category}/${article.slug}`} title={article.title}>
                  <div className="group">
                    {/* Image */}
                    <div className="relative aspect-[4/3] overflow-hidden mb-4">
                      <Image
                        src={article.image}
                        alt={article.imageAlt || article.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 25vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                        quality={85}
                      />
                    </div>

                    {/* Title */}
                    <h3 className="font-serif text-base font-bold leading-snug mb-3 group-hover:text-red-600 transition-colors cursor-pointer">
                      {article.title.length > 70
                        ? `${article.title.slice(0, 70)}...`
                        : article.title}
                    </h3>

                    {/* Author Info */}
                    {article.author && (
                      <div className="flex items-center gap-2 text-xs text-gray-600">
                        <div className="relative w-6 h-6 rounded-full overflow-hidden bg-gray-300 flex-shrink-0">
                          <Image
                            src={article.author.profileImage}
                            alt={article.author.name}
                            fill
                            sizes="24px"
                            className="object-cover"
                            loading="lazy"
                          />
                        </div>
                        <span className="font-medium">{article.author.name}</span>
                        <span>-</span>
                        <time dateTime={article.date}>{formatDate(article.date)}</time>
                      </div>
                    )}
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

