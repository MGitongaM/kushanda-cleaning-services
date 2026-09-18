
import CloudinaryImage from "../mediaComponents/CloudinaryImage";
import ContactUSPageContactForm from "./ContactUSPageContactForm";

export default function HeroSection() {
  return (
    <>
      <section className="c">
        <div className="min-h-dvh flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 bg-amber-600/20 py-10 sm:py-16 md:py-36 lg:py-20 px-4">
            <div className="max-w-lg mx-auto grid place-content-center h-full pt-16 sm:pt-20 md:pt-10">
              <div className="text-center">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl text-amber-600 font-medium leading-tight">
                  Contact Us
                </h1>
                <p className="leading-relaxed sm:leading-8 text-sm sm:text-base mt-4 px-2">
                  We&apos;d love to answer any questions. Please feel free to
                  contact VA Centre for a no obligation chat.
                </p>
                <p className="leading-relaxed sm:leading-8 text-sm sm:text-base my-8 sm:my-12 font-medium">
                  Call: +27 (0) 64 766 9925
                </p>
                <p className="leading-relaxed sm:leading-8 text-sm sm:text-base mt-4 mb-8 sm:mb-12 lg:mb-20 px-2">
                  <span className="inline-block font-bold">Office Hours</span>:
                  Monday - Friday 08h00-17h00 SA time, GMT +2
                </p>
              </div>
              <div className="space-y-6 sm:space-y-10">
                <ContactUSPageContactForm />
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 min-h-[40dvh] sm:min-h-[50dvh] md:min-h-0 order-first md:order-last">
            <CloudinaryImage
              imgSrc="Hero_How_it_Works"
              height={400}
              width={400}
              alt=""
              classNames="object-cover w-full h-full"
            />
          </div>
        </div>
      </section>
    </>
  );
}
