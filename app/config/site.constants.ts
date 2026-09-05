import { siteConfig as samsungSite } from "./site.constants.samsung";
import { siteConfig as lgSite } from "./site.constants.lg";

const SITE = process.env.NEXT_PUBLIC_SITE;

export const site = SITE === "lg" ? lgSite : samsungSite;
