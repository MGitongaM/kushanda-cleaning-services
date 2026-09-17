import { PartnersLogo } from "@/constData/homePageData";
import CloudinaryImage from "../mediaComponents/CloudinaryImage";

export default function PartnersSection() {
  return (
    <>
      <section className="c">
        <div className="container mx-auto px-4 py-20">
            <h3 className="text-4xl text-center text-amber-600 font-medium my-4">Our Partners</h3>
          <div className="flex flex-wrap justify-center items-center gap-4 my-28">
            
              {PartnersLogo.map((partner) => (
                <div key={partner.id} className="w-auto h-20">
                  <CloudinaryImage
                    imgSrc={partner.imgSrc}
                    height={200}
                    width={200}
                    alt={partner.name}
                    classNames="object-cover w-auto h-auto"
                  />
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
