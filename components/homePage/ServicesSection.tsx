import {
  CleaningServices,
  FutureCleaningServices,
} from "@/constData/cleaningServices";
import { ArrowBigRightDash } from "lucide-react";
import CloudinaryImage from "../mediaComponents/CloudinaryImage";

export default function ServicesSection() {
  return (
    <>
      <section className="c" id="services">
        <div className="container mx-auto min-h-[80dvh] px-4 py-10">
          <div className="max-w-7xl mx-auto border bg-green-200 rounded-md flex flex-wrap justify-between items-center gap-y-12 p-5 lg:p-10">
            <div className="w-full md:w-[25dvw] ">
              <h2 className="text-4xl font-bold md:leading-16">
                {" "}
                Cleaning You Can Depend On
              </h2>
            </div>
            <div className="w-full md:w-[45dvw]  space-y-12">
              <p className="text-balance">
                Whether you need help keeping your home clean every week,
                preparing a property for new occupants, or giving your office a
                thorough clean, Kushanda offers practical cleaning services
                built around your requirements.
              </p>
              <p className=" text-balance">
                We work with homeowners, tenants, businesses, landlords and
                property managers across Guernsey.
              </p>
            </div>
          </div>
          <div className="my-20">
            <h3 className="text-3xl text-center font-bold my-4">
              Our Cleaning Services
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-16">
              {CleaningServices.map((service) => (
                <div
                  className="w-full md:w-[44dvh] rounded-lg bg-cyan-50 roounded-lg hover:shadow-xl transition-discrete duration-300"
                  key={service.id}
                >
                  <div className="h-80 w-full bg-blue-100  relative  rounded-l-lg z-10">
                    <CloudinaryImage
                      imgSrc={service.imgSrc}
                      height={400}
                      width={400}
                      alt={`Kushanda Cleaning Services logo image`}
                      classNames={"object-cover h-80 w-full rounded-t-lg"}
                    />
                  </div>
                  <div className="pl-4 py-16 flex flex-col justify-end">
                    <p className="text-xl font-semibold bg-cyan-100 pl-2 -mt-28  relative  rounded-l-lg z-20 mb-20 ">
                      {service.title}
                    </p>
                    <p className="text-balance">{service.textOne}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="border border-cyan-200 rounded-md px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
              <div className="col-span-4 md:col-span-4">
                <h3 className="text-3xl text-start font-semibold">
                  More Than Cleaning
                </h3>
                <div className=" space-y-12">
                  <p className="font-semibold">
                    Practical help for the smaller jobs that keep a property
                    running well.
                  </p>
                  <p className="c">
                    Cleaning is where we start. As Kushanda grows, we plan to
                    introduce a wider range of practical home and property
                    services.
                  </p>
                  <p className="c">
                    Our future services may include:{" "}
                    <span>
                      <ArrowBigRightDash  className=" size-10 md:size-80 inline-block" />
                    </span>
                  </p>
                  <p className="max-w-lg  italic text-sm text-balance ">
                    New services will be introduced carefully, with the
                    appropriate team, training, equipment, insurance and
                    regulatory arrangements in place.
                  </p>
                </div>
              </div>
              <div className="col-span-12 md:col-span-8">
                <div className="flex flex-col  lg:flex-row justify-center items-center gap-x-8 gap-y-16">
                  {FutureCleaningServices.map((service) => (
                    <div
                      className="w-full md:w-[40dvw] bg-cyan-50 roounded-sm flex flex-wrap justify-between rounded-lg hover:shadow-xl transition-discrete duration-300"
                      key={service.id}
                    >
                      <div className="px-2 py-6">
                        <p className="text-lg font-semibold">{service.title}</p>
                        <p className="text-balance">{service.textOne}</p>
                      </div>
                      <div className="h-40 w-40 md:w-40 bg-blue-100 rounded-lg">
                        <CloudinaryImage
                          imgSrc={service.imgSrc}
                          height={400}
                          width={400}
                          alt={`Kushanda Cleaning Services logo image`}
                          classNames={"object-cover h-full lg:h-40 w-full rounded-r-lg"}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                {/* <p className="max-w-lg mx-autoitalic text-sm text-center  text-balance ">New services will be introduced carefully, with the appropriate team, training, equipment, insurance and regulatory arrangements in place.</p> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
