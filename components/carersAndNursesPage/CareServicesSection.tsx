import { careServicesData } from "@/constData/caresAndNursesData";
import CloudinaryImage from "../mediaComponents/CloudinaryImage";

export default function CareServicesSection() {
  return (
    <>
      <section
        id="careServices"
        className="px-4 pt-28 pb-10 sm:py-28  bg-slate-50"
      >
        <div className="container mx-auto">
          <div className=" min-h-[70dvh] sm:min-h-[75dvh] ">
            <div className="max-w-xl mx-auto text-center text-balance">
              <h2 className="text-2xl md:text-4xl  font-bold ">
                Compassionate Care at Home
              </h2>
              <p className="text-lg font-medium my-6">
                Helping you navigate tailored nursing and daily care support so your loved ones can thrive comfortably in their own environment.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 my-20 ">
              {careServicesData.map((service) => (
                <div
                  key={service.id}
                  className="bg-blue-100 rounded-lg shadow-md"
                >
                  <CloudinaryImage
                    imgSrc={service.imageSrc}
                    width={500}
                    height={500}
                    alt={service.title}
                    classNames="w-full h-64 object-cover  rounded-t-md"
                  />
                  <div className="my-12 px-2 md:px-10">
                    <h3 className="text-xl font-bold  mb-2">{service.title}</h3>
                    <p className="text-gray-600 ">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
