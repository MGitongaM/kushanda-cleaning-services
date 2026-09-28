import HeroSection from "@/components/accountManagementAndBookKeepingPage/HeroSection";
import { Metadata } from "next";
import { getCldOgImageUrl } from "next-cloudinary";

const url= getCldOgImageUrl({src:"account-management-and-book-keeping_OG"})
export const metadata: Metadata = {
  title: "Virtual Bookkeeping & Account Management Services | Kushanda",
  description: "Streamline your finances and client relations. Connect with skilled remote professionals for invoicing, expense tracking, bookkeeping, and account maintenance.",
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

export default function AccountManagementAndBookKeepingPage() {
  return (
    <>
    <HeroSection/>
    </>
  )
}
