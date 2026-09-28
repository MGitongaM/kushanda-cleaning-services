import HeroSection from "@/components/executiveSupportPage/HeroSection";
import { Metadata } from "next";
import { getCldOgImageUrl } from "next-cloudinary";


const url= getCldOgImageUrl({src:"executive-support_OG"})
export const metadata: Metadata = {
  title: "Executive Support Services | Dedicated Virtual Assistants | Kushanda",
  description: "Delegate inbox management, scheduling, travel logistics, and administrative tasks to experienced executive remote assistants trained to keep leadership focused.",
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

export default function ExecutiveSupportPage() {
  return (
    <>
    <HeroSection/>
    </>
  )
}
