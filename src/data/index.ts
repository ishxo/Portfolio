import { ProjectType } from "@/app/types/project";
import { NavLinkType } from "@/app/types/navlink";
import { CompaniesType } from "@/app/types/companies";
import { FooterLinkType } from "@/app/types/footerlinks";
import { HeroType } from "@/app/types/hero";

// Hero
export const HeroData: HeroType[] = [
  { imgSrc: "/images/project/rbtex_web.png" },
  { imgSrc: "/images/project/rbtex_web1.png" },
  { imgSrc: "/images/project/rbtex_web2.png" },
  { imgSrc: "/images/project/pet_sharing1.png" },
  { imgSrc: "/images/project/pet_sharing2.png" },
  { imgSrc: "/images/project/pet_sharing3.png" },
  { imgSrc: "/images/project/khosrov.png" },
  { imgSrc: "/images/project/nfty.png" },
  { imgSrc: "/images/project/blockstars.png" },
  { imgSrc: "/images/project/blockstars1.png" },
  { imgSrc: "/images/project/blockstars2.png" },
  { imgSrc: "/images/project/lotto.png" },
  { imgSrc: "/images/project/lotto1.png" },
  { imgSrc: "/images/project/lotto2.png" },
  { imgSrc: "/images/project/rbtm.png" },
];

// Projects
export const projects: ProjectType[] = [
  {
    title: "Pet Sharing!",
    imgSrc: "/images/project/pet_sharing.png",
    location: "/images/project/app_store.webp",
    locationName: "App Store",
    sharing: "",
    link: "https://apps.apple.com/us/app/pupdates-pet-sharing/id6743079360",
  },
  {
    title: "Khosrov",
    imgSrc: "/images/project/khosrov.png",
    sharing: "Cannot be shared", 
  },
  {
    title: "Nfty",
    imgSrc: "/images/project/nfty.png",
    location: "/images/project/app_store.webp",
    locationName: "App Store",
    sharing: "",
    link: "https://apps.apple.com/am/app/nfty-nft/id1632800570",
  },
  {
    title: "Blockstars",
    imgSrc: "/images/project/blockstars.png",
    location: "/images/project/website.png",
    locationName: "Website",
    link: "https://www.blockstars.tech/",
  },
  {
    title: "Lucky Lotto",
    imgSrc: "/images/project/lotto.png",
    location: "/images/project/website.png",
    locationName: "Website",
    link: "https://www.vbet.am/en/",
  },
  {
    title: "Rbtex",
    imgSrc: "/images/project/rbtex_web.png",
    location: "/images/project/website.png",
    locationName: "Website",
    link: "https://rbtex.com",
  },
  {
    title: "Rbtex",
    imgSrc: "/images/project/rbtm.png",
    locationName: "App Store",
    sharing: "Soon",
    location: "/images/project/app_store.webp",
    link: "",
  },
];

// Companies
export const CompaniesData: CompaniesType[] = [
  {
    imgSrc: "/images/companies/gsb.webp",
    name: "Golden SB Tech Group",
    title: "web_mobile",
    desc: "gsb_text",
  },
  {
    imgSrc: "/images/companies/soft.png",
    name: "SoftConstruct",
    title: "web",
    desc: "vivaro_text",
  },
  {
    imgSrc: "/images/companies/blockstars.webp",
    name: "Blockstars",
    title: "web_mobile",
    desc: "blockstars_text",
  },
  {
    imgSrc: "/images/companies/locator.webp",
    name: "Locator",
    title: "mobile",
    desc: "locator_text",
  },
  {
    imgSrc: "/images/companies/codeep.jpg",
    name: "Codeep",
    title: "mobile",
    desc: "codeep_text",
  },
];

// Nav links
export const NavLinkData: NavLinkType[] = [
  { label: "who_am_i", href: "/#hero" },
  { label: "my_journey", href: "/#companies" },
  { label: "projects", href: "/#project" },
  { label: "contact_me", href: "/#contact" },
];

// Footer links
export const FooterLinkData: FooterLinkType[] = [
  {
    section: "Company",
    links: [
      { label: "who_am_i", href: "/#hero" },
      { label: "my_journey", href: "/#companies" },
      { label: "projects", href: "/#project" },
      { label: "contact_me", href: "/#contact" },
    ],
  },
];
