import { valuePropositionData } from "@/constData/businessProcessOutsourcingData";
import CloudinaryImage from "../mediaComponents/CloudinaryImage";


export default function ValuePropositionSection() {
  return (
     <section className="px-4 pt-28 pb-10 sm:pt-32 mt-10 lg:mt-5 bg-amber-50">
      <div className="container mx-auto">
        <div className=" min-h-[70dvh] sm:min-h-[75dvh] ">
          <div className="max-w-7xl mx-auto ">
            <h2 className="text-4xl  font-bold text-center text-balance">BPO Beyond Cost Saving: Remote Support That Creates Value</h2>
            </div>

            <div className="grid grid-cols-2 gap-8 my-20 ">
            {valuePropositionData.map((value) => (
              <div key={value.id} className="bg-white rounded-lg shadow-md grid grid-cols-2 gap-4 items-center">
                
                <CloudinaryImage 
                  imgSrc={value.imageSrc}
                  width={500}
                  height={500}
                  alt={value.title}
                  classNames="w-96 h-96 object-cover object-top rounded-l-md"
                />
                <div className="my-12 px-2 md:px-10">
                  <h3 className="text-xl font-bold  mb-2">{value.title}</h3>
                  <p className="text-gray-600 ">{value.description}</p>

                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
