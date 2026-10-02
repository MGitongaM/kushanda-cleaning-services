import { corePillarsData } from "@/constData/businessProcessOutsourcingData";


export default function WhyKushandaSection() {
  return (
     <section id="whyUs" className="px-4 pb-10 pt-20 sm:pt-12  bg-yellow-100">
               <div className="container mx-auto">
                 <div className=" min-h-[70dvh] sm:min-h-[75dvh] ">
                   <div className="container mx-auto text-center text-balance" >
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-y-8 my-1 ">
                      <div className="col-span-5 grid place-content-center text-start">
                          <h2 className="text-4xl  font-bold ">Built for Quality, Reliability, and Operational Excellence</h2>
                          
                      </div>
         
                     <div className="col-span-7 flex flex-wrap gap-8 my-20 ">
                     {corePillarsData.map((service) => (
                       <div key={service.id} className="bg-slate-200 rounded-lg shadow-md w-full md:w-[25dvw]">
                         
                         <div className="my-12 px-2 md:px-5 text-start">
                          <div className="flex items-center gap-4 mb-4">
                            {service.iconSrc}
                           <h3 className="text-xl font-bold  mb-2">{service.title}</h3>
                            </div>
                           <p className="text-gray-600 ">{service.description}</p>
         
                         </div>
                       </div>
                     ))}
                   </div>
                    </div>
                     </div>
                 </div>
               </div>
        </section>
  )
}
