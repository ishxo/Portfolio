"use client";

import { CompaniesType } from "@/app/types/companies";
import Image from "next/image";
import { useEffect, useState } from "react";
import CompaniesSkeleton from "../../Skeleton/Companies";
import { useTranslation } from "react-i18next";

const Companies = () => {
  const [companies, setCompanies] = useState<CompaniesType[]>([]);
  const [loading, setLoading] = useState(true);
  const { t } = useTranslation("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/data");
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setCompanies(data.CompaniesData);
      } catch (error) {
        console.error("Error fetching service", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <section id="companies" className="scroll-mt-12">
      <div className="container">
        <div className="text-center mb-10 sm:mb-30">
          <h2> {t("journey.title")}</h2>
        </div>
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
          {loading
            ? Array.from({ length: 6 }).map((_, i) => (
                <CompaniesSkeleton key={i} />
              ))
            : companies.map((item, i) => (
                <div key={i} className="h-full">
                  <div className="bg-secondary dark:bg-darklight rounded-lg p-6 h-full flex flex-col">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-1 rounded-lg bg-white w-fit shadow-lg shadow-primary/30">
                        <Image
                          src={item.imgSrc}
                          alt={item.title}
                          width={50}
                          height={50}
                        />
                      </div>
                      <h5 className="font-bold text-gray-800 dark:text-gray-200">
                        {item.name}
                      </h5>
                    </div>
                    <div className="flex flex-col flex-1">
                      <h5 className="font-bold mb-2">
                        {t(`journey.${item.title}`)}
                      </h5>
                      <p className="text-black dark:text-white text-base font-normal max-w-xs flex-1">
                        {t(`journey.${item.desc}`)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </section>
  );
};

export default Companies;
