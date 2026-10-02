import { impactData } from "@/constData/businessProcessOutsourcingData";

export default function PurposeImpactSection() {
  return (
    <section id="purposeImpact" className="px-4 pb-10 pt-20 sm:pt-40  bg-slate-100">
      <div className="container mx-auto">
        <div className=" min-h-[50dvh] ">
          <div className="container mx-auto text-center text-balance">
            <div className="grid place-content-center ">
              <div className="text-center">
                <h2 className="text-2xl md:text-4xl  font-bold ">
                  Creating Quality Work & Sustainable Career Opportunities
                </h2>
                <p className="text-start md:text-center leading-7 mt-6">
                  At Kushanda, we believe that delivering exceptional business
                  results and driving positive social impact go hand in hand. We
                  are dedicated to creating meaningful employment for skilled
                  professionals with a strong focus on empowering young women in
                  Zimbabwe and Kenya.
                </p>
              </div>
              <div className="container mx-auto flex flex-wrap justify-center items-center gap-8 my-20 ">
                {impactData.map((data) => (
                  <div
                    key={data.id}
                    className={` rounded-lg shadow-md w-full h-auto md:min-h-[32dvh] lg:min-h-[3dvh] md:w-[28dvw] ${data.id === 1 ? "bg-amber-100" : data.id === 2 ? "bg-amber-200" : "bg-amber-300"} `}
                  >
                    <div className="my-12 px-2 md:px-5 text-start">
                      <div className="flex items-center gap-4 mb-4">
                        {data.iconSrc}
                        <h3 className="text-xl font-bold  mb-2">
                          {data.title}
                        </h3>
                      </div>
                      <p className="text-gray-600 ">{data.description}</p>
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
