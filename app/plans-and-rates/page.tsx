import HeroSection from "@/components/planAndRatesPage/HeroSection";
import RatesSection from "@/components/planAndRatesPage/RatesSection";
import { Metadata } from "next";
import { getCldOgImageUrl } from "next-cloudinary";



const url= getCldOgImageUrl({src:"plans-and-rates_OG"})
export const metadata: Metadata = {
  title: "Plans & Pricing | Flexible Virtual Assistant Packages | Kushanda",
  description: "Explore transparent, flexible virtual assistant plans designed to fit your budget. Scale your business cost effectively with flexible hourly or dedicated support.",
  openGraph:{
    images:[
      {
        width:1200,
        height:627,
        url
      }
    ]
  }
};

export default function PlanAndRatesPage() {
  return (
    <>
      <HeroSection />
      <RatesSection />
    </>
  );
}
