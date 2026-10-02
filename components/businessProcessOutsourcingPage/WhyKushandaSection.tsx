import { corePillarsData } from "@/constData/businessProcessOutsourcingData";


export default function WhyKushandaSection() {
  return (
     <section id="core-services" className="px-4 pb-10 sm:pt-12 mt-10 lg:mt-5 bg-yellow-100">
               <div className="container mx-auto">
                 <div className=" min-h-[70dvh] sm:min-h-[75dvh] ">
                   <div className="max-w-7xl mx-auto text-center text-balance" >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-1 ">
                      <div className="grid place-content-center text-start">
                          <h2 className="text-4xl  font-bold ">Built for Quality, Reliability, and Operational Excellence</h2>
                          <p className="text-lg font-medium my-6">Flexible, scalable remote functions built around your operational needs.</p>
                      </div>
         
                     <div className="grid grid-cols-1 gap-8 my-20 ">
                     {corePillarsData.map((service) => (
                       <div key={service.id} className="bg-slate-200 rounded-lg shadow-md">
                         
                         <div className="my-6 px-2 md:px-10 text-start">
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
