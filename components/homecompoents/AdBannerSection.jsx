// components/homecompoents/AdBannerSection.jsx
import Image from "next/image";

export default function AdBannerSection() {
  return (
    <section className="py-10 px-5 lg:px-15" aria-label="Advertisement">
      <div className="relative w-full overflow-hidden rounded-md h-[70px] sm:h-[100px] md:h-[100px] lg:h-[140px] xl:h-[170px]">
        <Image 
          src="/images/read_more_about_ads_2.webp" 
          alt="Advertisement - That's Capitalism" 
          fill 
          priority={false}
          loading="lazy"
          className="object-fit" 
          sizes="100vw"
          quality={85}
        />
      </div>
    </section>
  );
}