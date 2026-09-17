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
          <div className="w-full lg:w-[50dvw] min-h-[70dvh]">
            <CloudinaryImage
              imgSrc="empower_Image"
              height={400}
              width={400}
              alt=""
              classNames="object-cover w-full h-full"
            />
          </div>
          <div className="w-full lg:w-[50dvw]">
            <div className="grid place-content-center h-full px-4 md:px-20 py-16">
              <h2 className="text-amber-600 text-3xl font-medium">
                Empowering Communities Through Tech
              </h2>
              <p className="leading-8">
                Kushanda means “work” in Shona. Founded in 2020, Kushanda exists
                to empower skilled Africans to break out of poverty by providing
                quality sustainable services to the world. In 2018, 433 million
                Africans lived in extreme poverty (surviving on less than $1.25
                a day). Covid has worsened this.
              </p>
              <br />
              <p className="leading-8">
                Kushanda has developed a living database of people, mainly
                women, with skills, talent, and a hunger for work. We offer our
                people training, support, management, and quality assurance,
                while providing food, equipment and office space.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row" id="services">
          <div className="w-full lg:w-[50dvw]">
            <div className="grid place-content-center h-full px-4 md:px-20 py-16">
              <h2 className="text-amber-600 text-3xl font-medium">
                Our Services
              </h2>
              <p className="text-amber-600 text-xl font-medium mt-2 mb-4">
                Dedicated professional support to deliver what you need
              </p>
              <p className="leading-8">
                Life is busy. Time is precious. Kushanda Virtual Assistants can
                deliver all the services that you want to outsource. We’d be
                delighted to protect your time, so trust us to reliably manage
                your inbox and calendar, book travel, take minutes, do typing
                and transcription, and file your documents. We will research and
                write content. We will expertly design and code your website. We
                create and manage your social media, and so much more…
              </p>
              <br />
              <div className="max-w-lg mx-auto grid grid-cols-2 gap-20  mt-10">
                <div className="grid place-content-center">
                  <UserSquare size={80} className="mx-auto" />
                  <p className="text-amber-600">Executive Support</p>
                </div>
                <div className="grid place-content-center">
                  <LaptopMinimalCheck size={80} className="mx-auto" />
                  <p className="text-amber-600">Digital Marketing</p>
                </div>
                <div className="grid place-content-center">
                  <Code2 size={80} className="mx-auto" />
                  <p className="text-amber-600">Websites & Coding</p>
                </div>
                <div className="grid place-content-center">
                  <Calculator size={80} className="mx-auto" />
                  <p className="text-amber-600">Account Management</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[50dvw]">
            <CloudinaryImage
              imgSrc="services_Image"
              height={400}
              width={400}
              alt=""
              classNames="object-cover w-full h-full"
            />
          </div>
        </div>
        <div className="min-h-[30dvh] relative grid place-content-center">
          <div className="absolute inset-0 bg-[url('https://res.cloudinary.com/hqho8qw7/image/upload/v1789631987/africa_bg_Image.png')] bg-cover bg-center bg-no-repeat" />
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative text-center ">
            <h2 className="text-4xl text-slate-100 font-semibold">
              Your Business Empowered by Africa
            </h2>
          </div>
        </div>
      </section>
    </>
  );
}
