


// import AdBannerSection from "@/components/homecompoents/AdBannerSection";
// import ArticleGrid from "@/components/homecompoents/ArticleGrid";
// import CelebritySection from "@/components/homecompoents/CelebritySection";
// import FeaturedContentSection from "@/components/homecompoents/FeaturedcontentSection";
// import FoodTravelSection from "@/components/homecompoents/FoodtravelSection";
// import FreshStories from "@/components/homecompoents/FreshStories";
// import PoliticsSection from "@/components/homecompoents/PoliticsSection";
// import RecentPostsSection from "@/components/homecompoents/RecentpostsSection";
// import SliderSection from "@/components/homecompoents/SliderSection";
// import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";
// import articlesData from '../public/data/articles.json'

// export default function Home() {

//   return (
//     <div className="min-h-screen bg-white">
      

//       {/* SLIDER + OVERLAY SECTION */}
// <div className="relative">
//   {/* Slider */}
//   <SliderSection/>

//   {/* Overlay FreshStories */}
//   <div className="absolute left-0 right-0 lg:top-[140px] top-30 z-20">
//     <FreshStories />
//   </div>

//   {/* Spacer to push next content down */}
//   <div className="h-[2450px] lg:h-[630px]" />
// </div>

// {/* JOIN / SOCIAL BAR */}
// <div className="px-5 lg:px-7">
//   <div className="w-full border-t-2 border-b-2 border-gray-200 px-5 mb-10">
//   <div className="max-w-7xl mx-auto px-4 py-3">
//     <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm font-serif">

//       {/* Column 1 */}
//       <div className="text-xs font-semibold">
//         JOIN OR SOCIAL MEDIA
//       </div>

//       {/* Column 2 */}
//       <div className="text-center text-lg font-bold">
//         For even more exclusive content!
//       </div>

//       {/* Column 3 */}
//       <div className="flex items-center gap-4 text-red-500">
//         <a href="#" className="hover:text-black transition">
//           <FaFacebookF />
//         </a>
//         <a href="#" className="hover:text-black transition">
//           <FaInstagram />
//         </a>
//         <a href="#" className="hover:text-black transition">
//           <FaXTwitter />
//         </a>
//       </div>

//     </div>
//   </div>
// </div>
// </div>

// <ArticleGrid />
// <PoliticsSection/>   
// <CelebritySection/>
// <FoodTravelSection/>
// <AdBannerSection/>
// {/* <FeaturedContentSection/> */}
// <RecentPostsSection/>



//     </div>
//   );
// }



import AdBannerSection from "@/components/homecompoents/AdBannerSection";
import ArticleGrid from "@/components/homecompoents/ArticleGrid";
import CelebritySection from "@/components/homecompoents/CelebritySection";
import FoodTravelSection from "@/components/homecompoents/FoodtravelSection";
import FreshStories from "@/components/homecompoents/FreshStories";
import PoliticsSection from "@/components/homecompoents/PoliticsSection";
import RecentPostsSection from "@/components/homecompoents/RecentpostsSection";
import SliderSection from "@/components/homecompoents/SliderSection";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";
import articlesData from '../public/data/articles.json';
import authorsData from '../public/data/authors.json';

// Helper function to parse date in DD/MM/YYYY format
function parseDate(dateStr) {
  const [day, month, year] = dateStr.split('/');
  return new Date(year, month - 1, day);
}

// Helper function to get author info
function getAuthorInfo(category) {
  const categoryData = authorsData.categories.find(
    cat => cat.category.toLowerCase() === category.toLowerCase()
  );
  return categoryData ? categoryData.author : null;
}

// Helper function to get unique articles
function getUniqueArticles(articles, count, fromDifferentCategories, usedArticleIds) {
  const result = [];
  const categoriesUsed = new Set();
  
  for (const article of articles) {
    if (usedArticleIds.has(`${article.category}-${article.id}`)) {
      continue;
    }
    
    if (fromDifferentCategories && categoriesUsed.has(article.category)) {
      continue;
    }
    
    result.push(article);
    usedArticleIds.add(`${article.category}-${article.id}`);
    
    if (fromDifferentCategories) {
      categoriesUsed.add(article.category);
    }
    
    if (result.length >= count) {
      break;
    }
  }
  
  return result;
}

// Helper function to get articles from specific category
function getArticlesFromCategory(sortedArticles, category, count, usedArticleIds) {
  const categoryArticles = sortedArticles.filter(
    article => article.category.toLowerCase() === category.toLowerCase() &&
    !usedArticleIds.has(`${article.category}-${article.id}`)
  );
  
  const selected = categoryArticles.slice(0, count);
  selected.forEach(article => {
    usedArticleIds.add(`${article.category}-${article.id}`);
  });
  
  return selected;
}

// Process data function
function processArticlesData() {
  // Collect all articles from all categories and add author info
  const allArticles = [];
  Object.keys(articlesData).forEach(category => {
    if (Array.isArray(articlesData[category])) {
      articlesData[category].forEach(article => {
        const author = getAuthorInfo(category);
        allArticles.push({
          ...article,
          category: category,
          author: author,
          parsedDate: parseDate(article.date)
        });
      });
    }
  });

  // Sort all articles by date (latest first)
  const sortedArticles = allArticles.sort((a, b) => b.parsedDate - a.parsedDate);

  // Track used article IDs to prevent duplication
  const usedArticleIds = new Set();

  // FreshStories data distribution
  const freshStoriesLatest = getUniqueArticles(sortedArticles, 1, false, usedArticleIds)[0]; // Latest article
  const freshStoriesNext2 = getUniqueArticles(sortedArticles, 2, false, usedArticleIds); // Next 2 latest
  const freshStoriesLeftColumn = getUniqueArticles(sortedArticles, 5, true, usedArticleIds); // Next 5 from different categories
  const freshStoriesPopular = getUniqueArticles(sortedArticles, 5, true, usedArticleIds); // Next 5 from different categories

  // SliderSection data
  const sliderArticles = getUniqueArticles(sortedArticles, 5, true, usedArticleIds); // Next 5 from different categories

  // ArticleGrid data
  const articleGridData = getUniqueArticles(sortedArticles, 8, true, usedArticleIds); // Next 8 from different categories

  // PoliticsSection data
  const politicsArticles = getArticlesFromCategory(sortedArticles, 'politics', 9, usedArticleIds); // 9 politics articles

  // CelebritySection data (using business category)
  const celebrityArticles = getArticlesFromCategory(sortedArticles, 'business', 6, usedArticleIds); // 6 business articles

  // FoodTravelSection data (using sports category)
  const foodTravelArticles = getArticlesFromCategory(sortedArticles, 'sports', 8, usedArticleIds); // 8 sports articles

  // RecentPostsSection data
  const recentFeatured = getUniqueArticles(sortedArticles, 1, false, usedArticleIds)[0]; // Next 1 latest
  const recentGrid1 = getUniqueArticles(sortedArticles, 3, false, usedArticleIds); // Next 3 latest
  const recentGrid2 = getUniqueArticles(sortedArticles, 3, false, usedArticleIds); // Next 3 latest
  const recentSidebar = getUniqueArticles(sortedArticles, 4, false, usedArticleIds); // Next 4 latest

  return {
    freshStories: {
      latest: freshStoriesLatest,
      next2: freshStoriesNext2,
      leftColumn: freshStoriesLeftColumn,
      popular: freshStoriesPopular
    },
    slider: sliderArticles,
    articleGrid: articleGridData,
    politics: politicsArticles,
    celebrity: celebrityArticles,
    foodTravel: foodTravelArticles,
    recent: {
      featured: recentFeatured,
      grid1: recentGrid1,
      grid2: recentGrid2,
      sidebar: recentSidebar
    }
  };
}

export default function Home() {
  // Process data on the server
  const processedData = processArticlesData();

  return (
    <div className="min-h-screen bg-white">
      {/* SLIDER + OVERLAY SECTION */}
      <div className="relative">
        {/* Slider */}
        <SliderSection articles={processedData.slider} />

        {/* Overlay FreshStories */}
        <div className="absolute left-0 right-0 lg:top-[140px] top-30 z-20">
          <FreshStories 
            latestArticle={processedData.freshStories.latest}
            next2Articles={processedData.freshStories.next2}
            leftColumnArticles={processedData.freshStories.leftColumn}
            popularArticles={processedData.freshStories.popular}
          />
        </div>

        {/* Spacer to push next content down */}
        <div className="h-[2450px] lg:h-[630px]" />
      </div>

      {/* JOIN / SOCIAL BAR */}
      <div className="px-5 lg:px-7">
        <div className="w-full border-t-2 border-b-2 border-gray-200 px-5 mb-10">
          <div className="max-w-7xl mx-auto px-4 py-3">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm font-serif">
              {/* Column 1 */}
              <div className="text-xs font-semibold">
                JOIN OUR SOCIAL MEDIA
              </div>

              {/* Column 2 */}
              <div className="text-center text-lg font-bold">
                For even more exclusive content!
              </div>

              {/* Column 3 */}
              <div className="flex items-center gap-4 text-red-500">
                <a href="#" className="hover:text-black transition">
                  <FaFacebookF />
                </a>
                <a href="#" className="hover:text-black transition">
                  <FaInstagram />
                </a>
                <a href="#" className="hover:text-black transition">
                  <FaXTwitter />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ArticleGrid articles={processedData.articleGrid} />
      <PoliticsSection articles={processedData.politics} />   
      <CelebritySection articles={processedData.celebrity} />
      <FoodTravelSection articles={processedData.foodTravel} />
      <AdBannerSection />
      <RecentPostsSection 
        featuredPost={processedData.recent.featured}
        grid1Posts={processedData.recent.grid1}
        grid2Posts={processedData.recent.grid2}
        sidebarPosts={processedData.recent.sidebar}
      />
    </div>
  );
}
