import FooterSection from "@/components/cleaningServicesPage/FooterSection";
import NavigationSection from "@/components/cleaningServicesPage/NavigationSection";


export default function CleaningServicesLayout({children}:LayoutProps<"/cleaning-services">) {
  return (
    <html lang="en" 
    // className={cn("h-full", "antialiased", geistSans.variable, geistMono.variable, "font-sans", notoSans.variable, geistHeading.variable, "scroll-smooth")}
    >
        <body className="min-h-full flex flex-col">
            <NavigationSection/>
                {children}
            <FooterSection/>
        </body>
     </html>
  )
}
