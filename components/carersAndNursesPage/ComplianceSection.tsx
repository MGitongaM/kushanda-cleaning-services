import { complianceData } from "@/constData/caresAndNursesData";
import CloudinaryImage from "../mediaComponents/CloudinaryImage";

export default function ComplianceSection() {
  return (
    <>
      <section id="compliance" className="px-4 pb-10 pt-20 sm:pt-12  bg-slate-100">
        <div className="container mx-auto">
          <div className=" min-h-[70dvh] sm:min-h-[75dvh] ">
            <div className="container mx-auto text-center ">
              {/* <div className="grid grid-cols-1 md:grid-cols-12 place-content-center gap-x-12 gap-y-8 my-1 "> */}
              <div className="flex flex-wrap md:flex-nowrap  justify-between items-center gap-x-12 gap-y-8 my-1 ">
                <div className="w-full md:w-[90dvw] lg:w-[50dvw] ">
                  <div className="flex flex-col justify-center items-center text-start mt-0 md:-mt-128 lg:-mt-40">
                    <h2 className="text-4xl  font-bold ">
                      Rigorous Vetting & Regulatory Standards
                    </h2>
                    <p className="leading-7 text-lg my-8 lg:ml-10">
                      Every placement meets exact legal, ethical, and
                      professional requirements for total reassurance.
                    </p>
                    <CloudinaryImage
                      imgSrc="Rigorous_Vetting"
                      width={500}
                      height={500}
                      alt="Rigorous Vetting"
                      classNames="w-full lg:w-[42dvw] h-full object-cover  rounded-md"
                    />
                  </div>
                </div>

                <div className="col-span-6 flex flex-col gap-8 my-20 ">
                  {complianceData.map((compliance) => (
                    <div
                      key={compliance.id}
                      className="bg-sky-100 rounded-lg shadow-md w-full "
                    >
                      <div className="my-12 px-2 md:px-5 text-start">
                        <div className="flex items-center gap-4 mb-4">
                          {compliance.iconSrc}
                          <h3 className="text-xl font-bold  mb-2">
                            {compliance.title}
                          </h3>
                        </div>
                        <p className="text-gray-600 ">
                          {compliance.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
