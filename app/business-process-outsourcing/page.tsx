import ContactSection from "@/components/businessProcessOutsourcingPage/ContactSection";
import CoreServicesSection from "@/components/businessProcessOutsourcingPage/CoreServicesSection";
import HeroSection from "@/components/businessProcessOutsourcingPage/HeroSection";
import HowItWorksSection from "@/components/businessProcessOutsourcingPage/HowItWorksSection";
import PurposeImpactSection from "@/components/businessProcessOutsourcingPage/PurposeImpactSection";
import ValueProposition from "@/components/businessProcessOutsourcingPage/ValuePropositionSection";
import WhyKushandaSection from "@/components/businessProcessOutsourcingPage/WhyKushandaSection";


import { Metadata } from "next";
import { getCldOgImageUrl } from "next-cloudinary";



const url= getCldOgImageUrl({src:"Business_Process_Outsourcing_OG"})
export const metadata: Metadata = {
  title: "Business Process Outsourcing | Kushanda",
  description: "Kushanda connects global organizations with skilled professionals to streamline your customer support, administration, and back office operations.",
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

export default function BusinessProcessOutsourcingPage() {
  return (
    <>
    <HeroSection/>
    <ValueProposition/>
    <CoreServicesSection/>
    <WhyKushandaSection/>
    <PurposeImpactSection/>
    <HowItWorksSection/>
    <ContactSection/>
    </>
  )
}
