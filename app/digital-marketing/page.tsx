import HeroSection from "@/components/digitalMarketingPage/HeroSection";
import { Metadata } from "next";
import { getCldOgImageUrl } from "next-cloudinary";

const url= getCldOgImageUrl({src:"digital-marketing_OG"})
export const metadata: Metadata = {
  title: "Digital Marketing Virtual Assistants | Growth Support | Kushanda",
  description: "Drive online engagement and growth. Access skilled remote marketers for social media management, content creation, email campaigns, and SEO support.",
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


export default function DigitalMarketingPage() {
  return (
    <>
    <HeroSection/>
    </>
  )
}
