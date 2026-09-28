import HeroSection from "@/components/websitesPage/HeroSection";
import { Metadata } from "next";
import { getCldOgImageUrl } from "next-cloudinary";


const url= getCldOgImageUrl({src:"websites_OG"})
export const metadata: Metadata = {
  title: "Website Development & Maintenance Assistants | Kushanda",
  description: "Keep your website updated, secure, and optimized. Hire remote technical talent for site management, CMS updates, troubleshooting, and web design support.",
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

export default function WebsitesPage() {
  return (
    <>
    <HeroSection/>
    </>
  )
}
