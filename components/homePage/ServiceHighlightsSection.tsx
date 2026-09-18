import {
  Calculator,
  Code2,
  LaptopMinimalCheck,
  UserSquare,
} from "lucide-react";
import CloudinaryImage from "../mediaComponents/CloudinaryImage";

export default function ServiceHighlightsSection() {
  return (
    <>
      <section className="c">
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/2 min-h-[40dvh] sm:min-h-[50dvh] lg:min-h-[70dvh]">
            <CloudinaryImage
              imgSrc="empower_Image"
              height={400}
              width={400}
              alt=""
              classNames="object-cover w-full h-full"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <div className="grid place-content-center h-full px-4 sm:px-6 lg:px-12 xl:px-20 py-10 sm:py-12 lg:py-16">
              <h2 className="text-amber-600 text-2xl sm:text-3xl font-medium leading-tight">
                Empowering Communities Through Tech
              </h2>
              <p className="leading-relaxed sm:leading-8 text-sm sm:text-base mt-4">
                Kushanda means “work” in Shona. Founded in 2020, Kushanda exists
                to empower skilled Africans to break out of poverty by providing
                quality sustainable services to the world. In 2018, 433 million
                Africans lived in extreme poverty (surviving on less than $1.25
                a day). Covid has worsened this.
              </p>
              <br />
              <p className="leading-relaxed sm:leading-8 text-sm sm:text-base">
                Kushanda has developed a living database of people, mainly
                women, with skills, talent, and a hunger for work. We offer our
                people training, support, management, and quality assurance,
                while providing food, equipment and office space.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row" id="services">
          <div className="w-full lg:w-1/2">
            <div className="grid place-content-center h-full px-4 sm:px-6 lg:px-12 xl:px-20 py-10 sm:py-12 lg:py-16">
              <h2 className="text-amber-600 text-2xl sm:text-3xl font-medium leading-tight">
                Our Services
              </h2>
              <p className="text-amber-600 text-lg sm:text-xl font-medium mt-2 mb-4 leading-relaxed">
                Dedicated professional support to deliver what you need
              </p>
              <p className="leading-relaxed sm:leading-8 text-sm sm:text-base">
                Life is busy. Time is precious. Kushanda Virtual Assistants can
                deliver all the services that you want to outsource. We’d be
                delighted to protect your time, so trust us to reliably manage
                your inbox and calendar, book travel, take minutes, do typing
                and transcription, and file your documents. We will research and
                write content. We will expertly design and code your website. We
                create and manage your social media, and so much more…
              </p>
              <br />
              <div className="max-w-lg mx-auto grid grid-cols-2 gap-6 sm:gap-10 lg:gap-20 mt-8 sm:mt-10 w-full">
                <div className="grid place-content-center text-center">
                  <UserSquare className="mx-auto size-16 sm:size-20" />
                  <p className="text-amber-600 text-xs sm:text-sm lg:text-base mt-2">Executive Support</p>
                </div>
                <div className="grid place-content-center text-center">
                  <LaptopMinimalCheck className="mx-auto size-16 sm:size-20" />
                  <p className="text-amber-600 text-xs sm:text-sm lg:text-base mt-2">Digital Marketing</p>
                </div>
                <div className="grid place-content-center text-center">
                  <Code2 className="mx-auto size-16 sm:size-20" />
                  <p className="text-amber-600 text-xs sm:text-sm lg:text-base mt-2">Websites &amp; Coding</p>
                </div>
                <div className="grid place-content-center text-center">
                  <Calculator className="mx-auto size-16 sm:size-20" />
                  <p className="text-amber-600 text-xs sm:text-sm lg:text-base mt-2">Account Management</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 min-h-[40dvh] sm:min-h-[50dvh] lg:min-h-0">
            <CloudinaryImage
              imgSrc="services_Image"
              height={400}
              width={400}
              alt=""
              classNames="object-cover w-full h-full"
            />
          </div>
        </div>
        <div className="min-h-[25dvh] sm:min-h-[30dvh] relative grid place-content-center px-4 py-10 sm:py-12">
          <div className="absolute inset-0 bg-[url('https://res.cloudinary.com/hqho8qw7/image/upload/v1789631987/africa_bg_Image.png')] bg-cover bg-center bg-no-repeat" />
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative text-center ">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl text-slate-100 font-semibold leading-tight text-balance px-4">
              Your Business Empowered by Africa
            </h2>
          </div>
        </div>
      </section>
    </>
  );
}
