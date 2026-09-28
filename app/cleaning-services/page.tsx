import ClienteleSection from "@/components/cleaningServicesPage/ClienteleSection";
import ContactSection from "@/components/cleaningServicesPage/ContactSection";
import ExperienceSection from "@/components/cleaningServicesPage/ExperienceSection";
import HeroSection from "@/components/cleaningServicesPage/HeroSection";
import ServicesSection from "@/components/cleaningServicesPage/ServicesSection";
import { Metadata } from "next";
import { getCldOgImageUrl } from "next-cloudinary";



const url= getCldOgImageUrl({src:"cleaning-services_OG"})
export const metadata: Metadata = {
  title: "Cleaning & Facilities Management | Kushanda",
  description: "Streamline your cleaning and property maintenance operations.",
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

export default function CleaningServicesPage() {
  return (
    <>
    <HeroSection/>
    <ServicesSection/>
    <ExperienceSection/>
    <ClienteleSection/>
    <ContactSection/>
    </>
  )
}
