import { OurClients } from "@/constData/cleaningServices";
import CloudinaryImage from "../mediaComponents/CloudinaryImage";

export default function ClienteleSection() {
  return (
    <section id="Clientele" className="py-10 sm:py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl text-center font-bold mb-8 sm:mb-10 text-balance">
          Who We Help
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {OurClients.map((client) => (
            <div
              className="w-full bg-cyan-50 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col"
              key={client.id}
            >
              <div className="h-52 sm:h-64 w-full bg-blue-100 overflow-hidden shrink-0">
                <CloudinaryImage
                  imgSrc={client.imgSrc}
                  height={400}
                  width={400}
                  alt={`${client.title} image`}
                  classNames="object-cover h-full w-full"
                />
              </div>
              <div className="px-4 sm:px-6 py-6 sm:py-8 flex flex-col gap-2 flex-1">
                <p className="text-lg sm:text-xl font-semibold">
                  {client.title}
                </p>
                <p className="text-sm sm:text-base text-balance leading-relaxed">
                  {client.textOne}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
