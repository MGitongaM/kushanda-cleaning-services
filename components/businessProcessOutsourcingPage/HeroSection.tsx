import CloudinaryImage from "../mediaComponents/CloudinaryImage";
import Link from "next/link";
import { Button } from "../ui/button";

export default function HeroSection() {
  return (
    <section className="px-4 pt-28 pb-10 sm:pt-10 mt-10 lg:mt-5">
      <div className="container mx-auto">
        <div className=" min-h-[70dvh] sm:min-h-[75dvh] grid grid-cols-1 md:grid-cols-2 gap-2 items-center justify-between">
          <div className="max-w-2xl">
            <div className="text-start">
              <h1 className="text-7xl font-bold text-balance">
                Elevate Your Operations with Reliable, Impact Driven Remote
                Talent
              </h1>
              <p className="text-lg text-gray-600 mt-20 text-balance">
                Kushanda connects global organizations with skilled
                professionals in Zimbabwe and Kenya to streamline your customer
                support, administration, and back office operations.
              </p>
            </div>
            <div className="flex justify-center md:justify-start items-center gap-4 mt-10">
              <Link href="#contactUs">
                <Button className="bg-blue-600  text-white hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-8 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Discuss Your Needs With Us
                </Button>
              </Link>
              <Link href="#coreServices">
                <Button className="bg-gray-600 text-white hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-lg px-5 py-8 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                  Explore Our Services
                </Button>
              </Link>
            </div>
          </div>
          <div className="w-full h-full">
            <CloudinaryImage
              imgSrc="HeroSectionImage"
              width={1500}
              height={1500}
              alt="Business Process Outsourcing"
              classNames="rounded-lg shadow-lg object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
