import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Sans } from "next/font/google";
import "./globals.css";
import FooterSection from "@/components/general/FooterSection";
import { cn } from "@/lib/utils";
import NavigationSection from "@/components/general/NavigationSection";
import { Toaster } from "sonner";

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

export const metadata: Metadata = {
  title: "Kushanda Cleaning Services",
  description: "Dependable cleaning for homes, offices and properties across Guernsey.",
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
