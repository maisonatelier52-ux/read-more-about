


import AdBannerSection from "@/components/homecompoents/AdBannerSection";
import ArticleGrid from "@/components/homecompoents/ArticleGrid";
import CelebritySection from "@/components/homecompoents/CelebritySection";
import FeaturedContentSection from "@/components/homecompoents/FeaturedcontentSection";
import FoodTravelSection from "@/components/homecompoents/FoodtravelSection";
import FreshStories from "@/components/homecompoents/FreshStories";
import PoliticsSection from "@/components/homecompoents/PoliticsSection";
import RecentPostsSection from "@/components/homecompoents/RecentpostsSection";
import SliderSection from "@/components/homecompoents/SliderSection";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";

export default function Home() {

  return (
    <div className="min-h-screen bg-white">
      

      {/* SLIDER + OVERLAY SECTION */}
<div className="relative">
  {/* Slider */}
  <SliderSection/>

  {/* Overlay FreshStories */}
  <div className="absolute left-0 right-0 lg:top-[140px] top-30 z-20">
    <FreshStories />
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
        JOIN OR SOCIAL MEDIA
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

<ArticleGrid />
<PoliticsSection/>   
<CelebritySection/>
<FoodTravelSection/>
<AdBannerSection/>
<FeaturedContentSection/>
<RecentPostsSection/>



    </div>
  );
}

