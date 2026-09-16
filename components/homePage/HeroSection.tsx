import Link from "next/link";
import { buttonVariants } from "../ui/button";
import QuoteForm from "./QuoteForm";
import { cn } from "@/lib/utils";

export default function HeroSection() {
  return (
    <section className="px-4 pt-28 pb-10 sm:pt-32 mt-5">
      <div className="container mx-auto">
        <div className="relative overflow-hidden rounded-xl min-h-[70dvh] sm:min-h-[75dvh] flex items-center justify-center">
          {/* Background image */}
          <div className="absolute inset-0 bg-[url('https://res.cloudinary.com/hqho8qw7/image/upload/v1789559616/heroSection_bg_image.jpg')] bg-cover bg-center bg-no-repeat" />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/45 backdrop-blur-[2px]" />

          {/* Content */}
          <div className="relative z-10 w-full px-4 py-10 sm:px-6 sm:py-14 lg:px-8 text-slate-100 flex flex-col items-center gap-6 sm:gap-8 text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight text-balance max-w-5xl">
              KUSHANDA CLEANING SERVICES
            </h1>
            <p className="text-base sm:text-xl lg:text-2xl text-center text-balance font-medium max-w-3xl">
              Dependable cleaning for homes, offices and properties across
              Guernsey.
            </p>
            <p className="max-w-3xl mx-auto text-sm sm:text-lg lg:text-xl text-center text-balance font-medium leading-relaxed">
              With more than 10 years&apos; experience running a cleaning
              business in London, Kushanda provides careful, consistent and
              reliable cleaning services tailored to your needs.
            </p>
            <div className="w-full max-w-md sm:max-w-lg flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <div className="w-full sm:w-auto [&_button]:w-full sm:[&_button]:w-auto">
                <QuoteForm />
              </div>
              <Link
                href="#contact-us"
                className={cn(
                  buttonVariants({ variant: "secondary", size: "lg" }),
                  "w-full sm:w-auto px-8 py-6 text-base sm:text-lg hover:bg-lime-100"
                )}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
