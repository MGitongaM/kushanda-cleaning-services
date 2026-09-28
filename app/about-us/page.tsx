import FounderSection from "@/components/aboutUsPage/FounderSection";
import HeroSection from "@/components/aboutUsPage/HeroSection";
import OurStorySection from "@/components/aboutUsPage/OurStorySection";
import { Metadata } from "next";
import { getCldOgImageUrl } from "next-cloudinary";


const url= getCldOgImageUrl({src:"about-us_OG"})
export const metadata: Metadata = {
  title: "About Us | Kushanda Global Virtual Assistant Services",
  description: "Learn how Kushanda connects growing businesses with top tier, skilled global virtual assistants to drive efficiency, scale operations, and reduce overhead.",
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

export default function AboutUsPage() {
  return (
    <>
    <HeroSection/>
    <OurStorySection/>
    <FounderSection/>
    </>
  )
}
