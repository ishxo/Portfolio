"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HeroType } from "@/app/types/hero";
import HeroSkeleton from "../../Skeleton/Hero";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const [heroimg, setHeroimg] = useState<HeroType[]>([]);
  const [loading, setLoading] = useState(true);
  const { t } = useTranslation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/data");
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setHeroimg(data.HeroData);
      } catch (error) {
        console.error("Error fetching service", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    cssEase: "linear",
  };

  return (
    <section>
      <div className="overflow-hidden">
        <div className="container relative z-0 pt-0 sm:pt-24">
          <div className="relative z-20 grid lg:grid-cols-12 grid-cols-1 items-center lg:justify-items-normal justify-items-center gap-15 lg:gap-30 pb-0 lg:pb-10">
            <div className="lg:col-span-7 col-span-1">
              <div className="flex flex-col lg:items-start items-center gap-12">
                <div className="text-center mb-5 sm:mb-12">
                  <div className="flex justify-center items-center gap-2 mb-8 mt-20">
                    <div className="w-[100px] h-[100px] rounded-full overflow-hidden">
                      <Image
                        src="/images/self/me.jpeg"
                        alt="ptrn1"
                        width={100}
                        height={100}
                        className="object-cover"
                      />
                    </div>
                    <h3 className="transform rotate-12 text-center text-black dark:text-gray-300 font-semibold mb-3 cursor-pointer">
                      {t(`hero.who`)}
                      <strong> {t(`hero.am_i`)}</strong>
                    </h3>
                    <h3 className="transform rotate-90 text-center text-red-500 font-semibold mt-8">
                      <strong>?</strong>
                    </h3>
                  </div>
                  <Link
                    href="https://www.google.com/maps/place/Armenia"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p className="text-lg text-black dark:text-gray-300 font-semibold mb-2 cursor-pointer">
                      🌍 {t(`hero.location`)} 🇦🇲
                    </p>
                  </Link>
                  <div className="text-center text-black dark:text-gray-300 max-w-2xl mx-auto space-y-2">
                    <p className="font-semibold flex justify-center items-center gap-4">
                      {t(`hero.subtitle1`)}
                    </p>
                    <p className="font-semibold flex justify-center items-center gap-4">
                      {t(`hero.subtitle2`)}
                    </p>
                    <h3 className="font-semibold flex justify-center items-center  gap-4">
                      <span className="text-blue-500 inline-flex items-center gap-1">
                        <Icon icon="mdi:monitor" width={50} height={50} />
                        <strong> {t(`hero.web`)}</strong>
                      </span>
                      <span className="text-green-500 inline-flex items-center gap-1">
                        <Icon icon="mdi:cellphone" width={50} height={50} />
                        <strong> {t(`hero.mobile`)}</strong>
                      </span>
                    </h3>
                    <p className="font-semibold flex justify-center items-center gap-4">
                      {t(`hero.subtitle3`)}
                    </p>
                  </div>
                </div>
                <div className="flex item-center gap-5">
                  <Link href={"/#project"}>
                    <button className="px-8 py-3 font-medium text-white border rounded-lg border-primary bg-primary hover:bg-transparent hover:text-primary hover:cursor-pointer duration-300">
                      {t(`hero.explore`)}
                    </button>
                  </Link>
                  <Link href={"/#contact"}>
                    <button className="px-8 py-3 font-medium text-primary border rounded-lg border-primary bg-transparent hover:bg-primary hover:text-white hover:cursor-pointer duration-300">
                      {t(`hero.contact`)}
                    </button>
                  </Link>
                </div>
                <div className="lg:col-span-4 sm:col-span-2 flex flex-col gap-5">
                  <div className="flex gap-4">
                    <Link href="https://t.me/@Ishxan_K" target="_blank">
                      <Icon
                        icon="tabler:brand-telegram"
                        width={45}
                        height={45}
                        className="text-darkblue dark:text-white bg-darkmode/5 dark:bg-white/10 rounded-lg p-2 hover:text-primary dark:hover:text-primary duration-300"
                      />
                    </Link>
                    <Link href="https://github.com/ishxo" target="_blank">
                      <Icon
                        icon="tabler:brand-github"
                        width={45}
                        height={45}
                        className="text-darkblue dark:text-white bg-darkmode/5 dark:bg-white/10 rounded-lg p-2 hover:text-primary dark:hover:text-primary duration-300"
                      />
                    </Link>
                    <Link
                      href="https://www.linkedin.com/in/ishkhan-kostanyan-962b67182/"
                      target="_blank"
                    >
                      <Icon
                        icon="tabler:brand-linkedin-filled"
                        width={45}
                        height={45}
                        className="text-darkblue dark:text-white bg-darkmode/5 dark:bg-white/10 rounded-lg p-2 hover:text-primary dark:hover:text-primary duration-300"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5 col-span-1 lg:w-full w-full sm:w-[80%]">
              <div className="relative w-full aspect-[3/2]  bg-darkmode/5   rounded-lg overflow-hidden">
                <Slider {...settings}>
                  {loading
                    ? Array.from({ length: 3 }).map((_, i) => (
                        <HeroSkeleton key={i} />
                      ))
                    : heroimg.map((item, i) => (
                        <div key={i} className="relative w-full aspect-[16/9]">
                          <Image
                            src={item.imgSrc}
                            alt={`Hero image ${i}`}
                            fill
                            className="object-cover rounded-lg"
                          />
                        </div>
                      ))}
                </Slider>
              </div>
            </div>
          </div>
          <div className="hidden lg:block absolute top-65 left-[40%] dark:opacity-10 rotate-90">
            <Image
              src={"/images/project/pattern1.svg"}
              alt="ptrn1"
              width={141}
              height={141}
            />
          </div>
          <div className="hidden lg:block absolute bottom-55 -left-30 dark:opacity-10 z-10 rotate-270">
            <Image
              src={"/images/project/pattern1.svg"}
              alt="ptrn1"
              width={141}
              height={141}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
