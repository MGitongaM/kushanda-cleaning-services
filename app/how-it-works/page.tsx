import FaqsSection from "@/components/howItWorksPage/FaqsSection";
import HeroSection from "@/components/howItWorksPage/HeroSection";
import { Metadata } from "next";
import { getCldOgImageUrl } from "next-cloudinary";


const url= getCldOgImageUrl({src:"how-it-works_OG"})
export const metadata: Metadata = {
  title: "How It Works | Streamlined Virtual Assistant Hiring | Kushanda",
  description: "Discover our simple process for matching your business with vetted remote professionals. From consultation to onboarding, hiring executive support is seamless.",
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

export default function HowItWorksPage() {
  return (
    <>
    <HeroSection/>
    <FaqsSection/>
    </>
  )
}
