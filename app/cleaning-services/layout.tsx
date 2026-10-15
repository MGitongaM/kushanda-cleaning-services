// import FooterSection from "@/components/cleaningServicesPage/FooterSection";
import NavigationSection from "@/components/cleaningServicesPage/NavigationSection";


import { cn } from "@/lib/utils";
import { Geist, Geist_Mono, Noto_Sans } from "next/font/google";

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


export default function CleaningServicesLayout({children}:LayoutProps<"/cleaning-services">) {
  return (
    <html lang="en" 
    className={cn("h-full", "antialiased", geistSans.variable, geistMono.variable, "font-sans", notoSans.variable, geistHeading.variable, "scroll-smooth")}
    >
        <body className="min-h-full flex flex-col">
            <NavigationSection/>
                {children}
            {/* <FooterSection/> */}
        </body>
     </html>
  )
}
