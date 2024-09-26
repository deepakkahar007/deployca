import { type NavLinkType, HeroSectionType, EssentialType } from "./types";
import ess from "../assets/ess.jpg";

export const NavLink: NavLinkType = [
  { title: "services", url: "#" },
  { title: "about us", url: "#" },
  { title: "ai engine", url: "#" },
];

export const HeroSection: HeroSectionType = {
  headline:
    "Creative solutions crafted to help you achieve the perfect digital presence",
  shortHeadline: "global leader in social-first transformation and commerce.",
};

export const EssentialSection: EssentialType = {
  headline: "Essentials for startup , Diggin to roi then, we seen potential,",
  shortHeadline:
    "Creative solutions crafted to help you achieve the perfect digital presence",
  buttonText: "essential service",
  img_Url: ess,
};
