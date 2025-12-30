"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavLinkType } from "@/app/types/navlink";
import { useTranslation } from "react-i18next";

interface MobileHeaderLinkProps {
  item: NavLinkType;
  onLinkClick?: () => void;
}

const MobileHeaderLink: React.FC<MobileHeaderLinkProps> = ({
  item,
  onLinkClick,
}) => {
  const { t } = useTranslation();
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const path = usePathname();

  const handleClick = () => {
    if (item.submenu) {
      setSubmenuOpen(!submenuOpen);
    } else {
      onLinkClick?.();
    }
  };

  return (
    <div className="relative w-full">
      <Link
        href={item.href}
        onClick={handleClick}
        className={`flex items-center justify-between w-full py-2 text-darkblue dark:text-white focus:outline-none hover:text-primary dark:hover:text-primary hover:cursor-pointer ${
          item.href === path ? "!text-primary dark:!text-primary" : ""
        }`}
      >
        {t(`nav.${item.label}`)}
        {item.submenu && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.5em"
            height="1.5em"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="m7 10l5 5l5-5"
            />
          </svg>
        )}
      </Link>
    </div>
  );
};

export default MobileHeaderLink;
