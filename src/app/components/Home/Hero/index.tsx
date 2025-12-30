"use client";

import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";
import { HeroData } from "@/data";

const Hero = () => {
  const { t } = useTranslation();

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
          <div className="relative z-20 grid lg:grid-cols-12 grid-cols-1 items-center gap-15 lg:gap-30 pb-0 lg:pb-10">
            <div className="lg:col-span-7">
              <div className="flex flex-col lg:items-start items-center gap-12">
                <div className="text-center mb-5 sm:mb-12">
                  <div className="flex justify-center items-center gap-2 mb-8 mt-20">
                    <div className="w-[100px] h-[100px] rounded-full overflow-hidden">
                      <Image
                        src="/images/self/me.jpeg"
                        alt="me"
                        width={100}
                        height={100}
                        className="object-cover"
                      />
                    </div>
                    <h3 className="transform rotate-12 font-semibold">
                      {t("hero.who")} <strong>{t("hero.am_i")}</strong>
                    </h3>
                    <h3 className="transform rotate-90 text-red-500 font-semibold">
                      ?
                    </h3>
                  </div>

                  <Link
                    href="https://www.google.com/maps/place/Armenia"
                    target="_blank"
                  >
                    <p className="text-lg font-semibold">
                      🌍 {t("hero.location")} 🇦🇲
                    </p>
                  </Link>

                  <div className="space-y-2">
                    <p>{t("hero.subtitle1")}</p>
                    <p>{t("hero.subtitle2")}</p>
                    <h3 className="flex justify-center gap-4">
                      <span className="text-blue-500 flex items-center gap-1">
                        <Icon icon="mdi:monitor" width={40} />
                        <strong>{t("hero.web")}</strong>
                      </span>
                      <span className="text-green-500 flex items-center gap-1">
                        <Icon icon="mdi:cellphone" width={40} />
                        <strong>{t("hero.mobile")}</strong>
                      </span>
                    </h3>
                    <p>{t("hero.subtitle3")}</p>
                  </div>
                </div>

                <div className="flex gap-5">
                  <Link href="/#project">
                    <button className="px-8 py-3 bg-primary text-white rounded-lg">
                      {t("hero.explore")}
                    </button>
                  </Link>
                  <Link href="/#contact">
                    <button className="px-8 py-3 border border-primary text-primary rounded-lg">
                      {t("hero.contact")}
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5 w-full">
              <div className="relative w-full aspect-[3/2] rounded-lg overflow-hidden">
                <Slider {...settings}>
                  {HeroData.map((item, i) => (
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
        </div>
      </div>
    </section>
  );
};

export default Hero;
