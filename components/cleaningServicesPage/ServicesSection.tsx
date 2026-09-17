import {
  CleaningServices,
  FutureCleaningServices,
} from "@/constData/cleaningServices";
import { ArrowBigDownDash, ArrowBigRightDash } from "lucide-react";
import CloudinaryImage from "../mediaComponents/CloudinaryImage";

export default function ServicesSection() {
  return (
    <section id="services">
      <div className="container mx-auto px-4 py-10">
        <div className="max-w-7xl mx-auto border bg-green-200 rounded-md flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 lg:gap-12 p-5 sm:p-6 lg:p-10">
          <div className="w-full lg:w-[35%]">
            <h2 className="text-3xl sm:text-4xl font-bold leading-tight lg:leading-tight">
              Cleaning You Can Depend On
            </h2>
          </div>
          <div className="w-full lg:w-[60%] space-y-4 sm:space-y-6 text-sm sm:text-base leading-relaxed">
            <p className="text-balance">
              Whether you need help keeping your home clean every week,
              preparing a property for new occupants, or giving your office a
              thorough clean, Kushanda offers practical cleaning services
              built around your requirements.
            </p>
            <p className="text-balance">
              We work with homeowners, tenants, businesses, landlords and
              property managers across Guernsey.
            </p>
          </div>
        </div>

        <div className="my-12 sm:my-16 lg:my-20">
          <h3 className="text-2xl sm:text-3xl text-center font-bold mb-6 sm:mb-8">
            Our Cleaning Services
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {CleaningServices.map((service) => (
              <div
                className="w-full rounded-lg bg-cyan-50 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col"
                key={service.id}
              >
                {/* <div className="h-56 sm:h-64 lg:h-80 w-full bg-blue-100 relative overflow-hidden shrink-0"> */}
                <div className="h-56 sm:h-64 lg:h-80 w-full bg-blue-100 relative overflow-hidden shrink-0">
                  <CloudinaryImage
                    imgSrc={service.imgSrc}
                    height={400}
                    width={400}
                    alt={`${service.title} image`}
                    classNames="object-cover h-full w-full"
                  />
                </div>
                <div className="p-4 sm:p-5 flex flex-col gap-3 flex-1">
                  <p className="text-lg sm:text-xl font-semibold bg-cyan-100 -mt-10 sm:-mt-12 relative rounded-md px-3 py-2 shadow-sm">
                    {service.title}
                  </p>
                  <p className="text-sm sm:text-base text-balance leading-relaxed">
                    {service.textOne}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="border border-cyan-200 rounded-md px-4 py-6 sm:px-6 sm:py-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="col-span-1 lg:col-span-4 space-y-6">
              <h3 className="text-2xl sm:text-3xl text-start font-semibold">
                More Than Cleaning
              </h3>
              <div className="space-y-4 sm:space-y-6 text-sm sm:text-base leading-relaxed">
                <p className="font-semibold">
                  Practical help for the smaller jobs that keep a property
                  running well.
                </p>
                <p>
                  Cleaning is where we start. As Kushanda grows, we plan to
                  introduce a wider range of practical home and property
                  services.
                </p>
                <p className="flex items-center gap-2 flex-wrap">
                  Our future services may include:
                  <ArrowBigRightDash className="hidden lg:block size-6 sm:size-8 shrink-0 text-cyan-700" />
                  <ArrowBigDownDash className="block lg:hidden size-6 sm:size-8 shrink-0 text-cyan-700" />
                </p>
                <p className="max-w-lg italic text-xs sm:text-sm text-balance">
                  New services will be introduced carefully, with the
                  appropriate team, training, equipment, insurance and
                  regulatory arrangements in place.
                </p>
              </div>
            </div>
            <div className="col-span-1 lg:col-span-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {FutureCleaningServices.map((service) => (
                  <div
                    className="w-full bg-cyan-50 flex flex-col sm:flex-row overflow-hidden rounded-lg hover:shadow-xl transition-all duration-300"
                    key={service.id}
                  >
                    <div className="px-4 py-5 flex-1 flex flex-col justify-center gap-2 order-2 sm:order-1">
                      <p className="text-base sm:text-lg font-semibold">
                        {service.title}
                      </p>
                      <p className="text-sm sm:text-base text-balance leading-relaxed">
                        {service.textOne}
                      </p>
                    </div>
                    <div className="h-48 sm:h-auto sm:w-32 lg:w-36 bg-blue-100 shrink-0 order-1 sm:order-2">
                      <CloudinaryImage
                        imgSrc={service.imgSrc}
                        height={400}
                        width={400}
                        alt={`${service.title} image`}
                        classNames="object-cover h-full w-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
