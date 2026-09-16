import Link from "next/link";
import { Button } from "../ui/button";
import QuoteForm from "./QuoteForm";

export default function HeroSection() {
  return (
    <>
      <section className="mt-10">
        <div className="container mx-auto min-h-[90dvh] px-4 py-10 relative">
          <div className="container mx-auto min-h-[65dvh] bg-[url('https://res.cloudinary.com/hqho8qw7/image/upload/v1789559616/heroSection_bg_image.jpg')] bg-cover bg-center bg-no-repeat rounded-lg mt-20 relative"></div>
          <div className="container mx-auto min-h-[65dvh] bg-black/40 backdrop-blur-sm rounded-lg absolute top-0 right-0 left-0 mt-30 z-10"></div>
          <div className="mt-64 space-y-12 text-slate-100 absolute top-0 right-0 left-0  z-20">
            <h1 className="text-4xl lg:text-7xl text-center  font-bold">
              KUSHANDA CLEANING SERVICES
            </h1>
            <p className="text-2xl text-center text-balance font-medium">
              Dependable cleaning for homes, offices and properties across
              Guernsey.
            </p>
            <p className="max-w-4xl mx-auto text-xl text-center text-balance font-medium ">
              With more than 10 years&apos; experience running a cleaning
              business in London, Kushanda provides careful, consistent and
              reliable cleaning services tailored to your needs.
            </p>
            <div className=" max-w-md mx-auto grid grid-cols-1 md:grid-cols-2 justify-center gap-8">
              <div className="c">
                <QuoteForm />
              </div>
              <Button
                type="submit"
                size="lg"
                variant="secondary"
                form="form-rhf-demo"
                className="px-8 py-6 w-48 hover:bg-lime-100 text-xl"
              >
                <Link href="\#contact-us">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
