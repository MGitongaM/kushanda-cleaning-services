import { PartnersLogo } from "@/constData/homePageData";
import CloudinaryImage from "../mediaComponents/CloudinaryImage";

export default function PartnersSection() {
  return (
    <>
      <section className="c">
        <div className="container mx-auto px-4 py-12 sm:py-16 lg:py-20">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl text-center text-amber-600 font-medium my-4 leading-tight">Our Partners</h3>
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 my-8 sm:my-12 lg:my-16">
            
              {PartnersLogo.map((partner) => (
                <div key={partner.id} className="w-32 h-16 sm:w-40 sm:h-20 lg:w-48 lg:h-20 flex items-center justify-center">
                  <CloudinaryImage
                    imgSrc={partner.imgSrc}
                    height={200}
                    width={200}
                    alt={partner.name}
                    classNames="object-contain w-full h-full"
                  />
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
