import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
// import FooterSection from "@/components/general/FooterSection";
// import NavigationSection from "@/components/general/NavigationSection";
import { Toaster } from "sonner";
import { getCldOgImageUrl } from "next-cloudinary";
import FooterSection from "@/components/general/FooterSection";
import NavigationSection from "@/components/general/NavigationSection";

const geistHeading = Geist({subsets:['latin'],variable:'--font-heading'});

const notoSans = Noto_Sans({subsets:['latin'],variable:'--font-sans'});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const url= getCldOgImageUrl({src:"kushanda_OG_image"})

export const metadata: Metadata = {
  title: "Kushanda",
  description: "Scale your business with top tier global virtual assistants. Access skilled remote professionals for administrative, technical, and creative support.",
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

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", geistSans.variable, geistMono.variable, "font-sans", notoSans.variable, geistHeading.variable, "scroll-smooth")}
    >
      <body className="min-h-full flex flex-col">
        <NavigationSection/>
        {children}
        <Toaster duration={8000} position="top-right"/>
        <FooterSection/>
      </body>
    </html>
  );
}
