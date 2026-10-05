import { foundersData, leadershipData } from "@/constData/caresAndNursesData";
import CloudinaryImage from "../mediaComponents/CloudinaryImage";

export default function LeadershipSection() {
  return (
    <>
      <section id="leadership" className="px-4 pb-10 pt-20 sm:pt-28  bg-cyan-50">
        <div className="container mx-auto">
          <div className=" min-h-[70dvh] sm:min-h-[75dvh] ">
            <div className="container mx-auto text-center ">
              {/* <div className="grid grid-cols-1 md:grid-cols-12 place-content-center gap-x-12 gap-y-8 my-1 "> */}
              <div className="flex flex-wrap md:flex-nowrap  justify-between items-center gap-x-12 gap-y-8 my-1 ">
                <div className="w-full md:w-[50dvw] ">
                  <div className="flex flex-col justify-center items-center text-start">
                    <h2 className="text-4xl  font-bold ">
                      Over 60 Years of Real World Care Experience
                    </h2>
                    <p className="leading-7 text-lg my-8">
                      Between cofounders Nyasha and Emma, Kushanda brings over
                      six decades of hands on experience as carers, care
                      managers, and recruitment specialists including extensive
                      experience through Banya.
                      <br/>
                      <br/>
                      
                       We don&apos;t just match resumes; we
                      understand the daily, practical realities of caregiving
                      and the peace of mind that comes with finding someone
                      genuinely skilled, dependable, and respectful.
                    </p>
                    <div className="grid grid-cols-2 gap-5 lg:gap-20">
                      {foundersData.map((founder) => (
                        <div key={founder.id} className="c">
                          <CloudinaryImage
                            imgSrc={founder.imageSrc}
                            width={500}
                            height={500}
                            alt={founder.name}
                            classNames="rounded-lg shadow-lg object-cover object-top  w-full h-[40dvh]"
                          />
                          <div className="text-start mt-2">
                            <h3 className="text-xl font-semibold text-center">
                              {founder.name}
                            </h3>
                            <p className="text-gray-600">{founder.title}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="col-span-6 flex flex-col gap-8 my-20 ">
                  {leadershipData.map((leader) => (
                    <div
                      key={leader.id}
                      className="bg-sky-100 rounded-lg shadow-md w-80 lg:w-full "
                    >
                      <div className="my-12 px-2 md:px-5 text-start">
                        <div className="flex items-center gap-4 mb-4">
                          {leader.iconSrc}
                          <h3 className="text-xl font-bold  mb-2">
                            {leader.title}
                          </h3>
                        </div>
                        <p className="text-gray-600 ">{leader.description}</p>
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
