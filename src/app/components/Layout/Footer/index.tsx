"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Logo from "../Header/Logo";
import { Icon } from "@iconify/react";
import { FooterLinkType } from "@/app/types/footerlinks";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  const [footerlink, SetFooterlink] = useState<FooterLinkType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/data");
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        SetFooterlink(data.FooterLinkData);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <footer>
      <div className="container py-14">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 mb-0 sm:mb-20">
          <div className="w-fit hidden xl:block">
            <Logo />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-16 xl:gap-8">
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
          {/* CLOUMN-2 */}
          <div className="lg:col-span-4 col-span-1">
            <div className="flex gap-20">
              {footerlink.map((product, i) => (
                <div key={i} className="group relative col-span-2">
                  <ul>
                    {product.links.map((item, i) => (
                      <li key={i} className="mb-2">
                        <Link
                          href={item.href}
                          className="text-darkblue/60 dark:text-white/60 hover:text-primary dark:hover:text-primary text-base font-normal mb-6"
                        >
                          {t(`nav.${item.label}`)}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-4 col-span-1">
            <div className="flex gap-2">
              <Icon
                icon={"tabler:map-pin"}
                width={22}
                height={22}
                className="text-lightgrey"
              />
              <a
                href="https://www.google.com/maps/place/Armenia/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <p className="text-base font-normal text-offwhite hover:text-primary dark:hover:text-primary">
                  {t("footer.armenia")}
                </p>{" "}
              </a>
            </div>
            <div className="flex gap-2 mt-6">
              <Icon
                icon={"tabler:phone"}
                width={22}
                height={22}
                className="text-lightgrey"
              />
              <Link href="tel:+ 374 93 14 32 92">
                <p className="text-base font-normal text-offwhite hover:text-primary dark:hover:text-primary">
                  +374 93 14 32 92
                </p>
              </Link>
            </div>
            <div className="flex gap-2 mt-6">
              <Icon
                icon={"tabler:mail"}
                width={22}
                height={22}
                className="text-lightgrey"
              />
              <Link href="mailto: ishkhankostanyan@gmail.com">
                <p className="text-base font-normal text-offwhite hover:text-primary dark:hover:text-primary">
                  ishkhankostanyan@gmail.com
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
