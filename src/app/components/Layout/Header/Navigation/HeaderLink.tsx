"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import { NavLinkType } from "@/app/types/navlink";

interface HeaderLinkProps {
  item: NavLinkType;
}

const HeaderLink: React.FC<HeaderLinkProps> = ({ item }) => {
  const path = usePathname();
  const { t } = useTranslation();

  const isActive = path === item.href;

  return (
    <li className="relative">
      <Link
        href={item.href}
        className={`text-base flex font-normal ${
          isActive
            ? "!text-primary dark:!text-primary"
            : "text-darkblue dark:text-white hover:text-primary dark:hover:text-primary"
        }`}
      >
        {t(`nav.${item.label}`)}
      </Link>
    </li>
  );
};

export default HeaderLink;
