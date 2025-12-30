"use client";

import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTranslation } from "react-i18next";
import { projects } from "@/data";

const Project = () => {
  const { t } = useTranslation();
  const loading = false;
  const PrevArrow = ({ onClick }: { onClick?: () => void }) => (
    <button
      className="hidden md:flex items-center justify-center absolute top-1/2 -translate-y-1/2 left-[-50px] z-30 w-10 h-10 rounded-full
                 bg-white/80 text-blue-600 hover:bg-white hover:text-blue-700
                 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600"
      onClick={onClick}
    >
      ←
    </button>
  );

  const NextArrow = ({ onClick }: { onClick?: () => void }) => (
    <button
      className="hidden md:flex items-center justify-center absolute top-1/2 -translate-y-1/2 right-[-50px] z-30 w-10 h-10 rounded-full
                 bg-white/80 text-blue-600 hover:bg-white hover:text-blue-700
                 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600"
      onClick={onClick}
    >
      →
    </button>
  );

  const settings = {
    dots: true,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    cssEase: "linear",
    responsive: [
      { breakpoint: 992, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 576, settings: { slidesToShow: 2 } },
      { breakpoint: 430, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div id="project" className="scroll-mt-12">
      <section className="bg-secondary dark:bg-darklight overflow-hidden">
        <div className="container relative">
          <div className="mb-12 text-center">
            <h2>{t("projects.participated")}</h2>
          </div>

          <div className="relative z-20">
            <Slider {...settings}>
              {projects.map((project, index) => (
                <div key={index}>
                  <div className="h-full">
                    <div className="p-5 bg-white dark:bg-lightdarkblue m-3 rounded-lg h-full flex flex-col min-h-[300px]">
                      {project.link ? (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="relative w-full aspect-[4/3] mb-4 rounded-lg overflow-hidden"
                        >
                          <Image
                            src={project.imgSrc}
                            alt={project.title}
                            fill
                            className="object-cover rounded-lg"
                          />
                        </a>
                      ) : (
                        <div className="relative w-full aspect-[4/3] mb-4 rounded-lg overflow-hidden">
                          <Image
                            src={project.imgSrc}
                            alt={project.title}
                            fill
                            className="object-cover rounded-lg"
                          />
                        </div>
                      )}

                      <div className="flex flex-col items-center gap-2 flex-1 text-center">
                        <p className="text-base font-medium text-darkblue dark:text-white">
                          {project.title}
                        </p>

                        <span className="text-xs text-darkblue dark:text-white">
                          {project.sharing}
                        </span>

                        {project.link && project.location && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1"
                          >
                            <Image
                              src={project.location}
                              alt="Store"
                              width={20}
                              height={20}
                            />
                            <span className="text-xs text-darkblue dark:text-white">
                              {project.locationName}
                            </span>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;
