import { staffingData } from "@/constData/caresAndNursesData";
import CloudinaryImage from "../mediaComponents/CloudinaryImage";


export default function StaffingSection() {
  return (
    <>
          <section
            id="staffServices"
            className="px-4 pt-28 pb-10 sm:py-28  bg-sky-100"
          >
            <div className="container mx-auto">
              <div className=" min-h-[70dvh] sm:min-h-[75dvh] ">
                <div className="max-w-2xl mx-auto text-center text-balance">
                  <h2 className="text-2xl md:text-4xl  font-bold ">
                    Dependable Healthcare Staffing for Guernsey Care Homes
                  </h2>
                  <p className="text-lg font-medium my-6">
                    Flexible nursing and care cover to help you maintain seamless operations, regulatory compliance, and high standards of resident care.
                  </p>
                </div>
    
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 my-20 ">
                  {staffingData.map((service) => (
                    <div
                      key={service.id}
                    //   className="bg-blue-100 rounded-lg shadow-md"
                      className="bg-slate-100 rounded-lg shadow-md flex flex-col md:flex-row"
                    >
                      <CloudinaryImage
                        imgSrc={service.imageSrc}
                        width={500}
                        height={500}
                        alt={service.title}
                        classNames="w-full h-64 object-cover  rounded-l-md"
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
  )
}
