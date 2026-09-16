import { OurClients } from "@/constData/cleaningServices";
import CloudinaryImage from "../mediaComponents/CloudinaryImage";

export default function ClienteleSection() {
  return (
    <>
      <section className="c" id="Clientele">
        <div className="container mx-auto min-h-[80dvh] px-4 py-10 mb-40">
          <h2 className="text-4xl text-center font-bold mb-10">Who We Help</h2>
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-16">
            {OurClients.map((client) => (
              <div
                className="w-full md:w-[40dvw] bg-cyan-50 rounded-lg hover:shadow-xl transition-discrete duration-300"
                key={client.id}
              >
                <div className="h-64 w-full bg-blue-100 rounded-lg ">
                   <CloudinaryImage
                                            imgSrc={client.imgSrc}
                                            height={400}
                                            width={400}
                                            alt={`Kushanda Cleaning Services logo image`}
                                            classNames={"object-cover h-64 w-full rounded-t-lg"}
                                          />
                </div>
                <div className="px-4 py-12">
                  <p className="text-xl font-semibold">{client.title}</p>
                  <p className="text-balance">{client.textOne}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
