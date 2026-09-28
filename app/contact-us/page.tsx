import HeroSection from "@/components/contactUsPage/HeroSection";
import { Metadata } from "next";
import { getCldOgImageUrl } from "next-cloudinary";


const url= getCldOgImageUrl({src:"contact-us_OG"})
export const metadata: Metadata = {
  title: "Contact Us | Hire Skilled Remote Talent | Kushanda",
  description: "Ready to scale your business? Get in touch with the Kushanda team today to find the perfect virtual assistant for your administrative, technical, or creative needs.",
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

export default function ContactUsPage() {
  return (
    <>
    <HeroSection/>
    </>
  )
}
