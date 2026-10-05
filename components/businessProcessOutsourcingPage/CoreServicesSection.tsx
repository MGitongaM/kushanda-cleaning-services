import { coreServicesData } from "@/constData/businessProcessOutsourcingData";
import CloudinaryImage from "../mediaComponents/CloudinaryImage";


export default function CoreServicesSection() {
  return (
     <section id="coreServices" className="px-4 pt-28 pb-10 sm:pt-10  bg-slate-50">
           <div className="container mx-auto">
             <div className=" min-h-[70dvh] sm:min-h-[75dvh] ">
               <div className="max-w-7xl mx-auto text-center text-balance" >
                 <h2 className="text-2xl md:text-4xl  font-bold ">What Kushanda Can Support With</h2>
                 <p className="text-lg font-medium my-6">Flexible, scalable remote functions built around your operational needs.</p>
                 </div>
     
                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-20 ">
                 {coreServicesData.map((service) => (
                   <div key={service.id} className="bg-amber-100 rounded-lg shadow-md">
                     
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
  )
}
