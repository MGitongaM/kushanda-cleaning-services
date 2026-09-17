
import CloudinaryImage from "../mediaComponents/CloudinaryImage";
import ContactUSPageContactForm from "./ContactUSPageContactForm";

export default function HeroSection() {
  return (
    <>
      <section className="c">
        <div className="min-h-dvh flex flex-col md:flex-row ">
          <div className="w-full md:w-[50dvw] bg-amber-600/20 py-40">
            <div className="max-w-lg mx-auto grid place-content-center h-full">
              <div className="text-center">
                <h1 className="text-4xl lg:text-5xl text-amber-600 font-medium">
                  Contact Us
                </h1>
                <p className="leading-8  mt-4 ">
                  We&apos;d love to answer any questions. Please feel free to
                  contact VA Centre for a no obligation chat.
                </p>
                <p className="leading-8   my-12">
                  Call: +27 (0) 64 766 9925
                </p>
                <p className="leading-8  mt-4 mb-20">
                  <span className="inline-block font-bold">Office Hours</span>:
                  Monday - Friday 08h00-17h00 SA time, GMT +2
                </p>
              </div>
              <div className="space-y-10">
                <ContactUSPageContactForm />
              </div>
            </div>
          </div>
          <div className="w-full md:w-[50dvw]">
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
