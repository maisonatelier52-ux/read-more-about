import Image from "next/image"; // For image optimization

export default function AdBannerSection() {
  return (
   <section className="py-10 px-5 lg:px-15">
      <div className="relative w-full overflow-hidden rounded-md h-[70px] sm:h-[100px] md:h-[100px] lg:h-[140px] xl:h-[170px]">
        <Image src="/images/mirrorstandard_ads_2.webp" alt="That's Capitalism" fill priority className="object-fit" />
      </div>
    </section>
  );
}
