import CloudinaryImage from "../mediaComponents/CloudinaryImage";

export default function HeroSection() {
  return (
    <>
      <section className="c">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 min-h-[40dvh] sm:min-h-[50dvh] md:min-h-[70dvh]">
            <CloudinaryImage
              imgSrc="Hero_How_it_Works"
              height={400}
              width={400}
              alt=""
              classNames="object-cover w-full h-full"
            />
          </div>
          <div className="w-full md:w-1/2 bg-amber-600/20">
          <div className="max-w-xl mx-auto grid place-content-center h-full px-4 sm:px-6 py-10 sm:py-12 md:py-36 lg:py-16">
            <div className="c">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl text-amber-600 leading-tight">
                Your Investment
              </h1>
              <p className="leading-relaxed sm:leading-8 text-base sm:text-lg mt-4 mb-10 sm:mb-16 lg:mb-20">
                We understand that every business has varying support needs, therefore we offer flexible monthly plans to fit different workloads.  If your support needs differ to what we offer, please feel free to give us a call and hopefully we can accommodate you. 

              </p>
            </div>
            <div className="space-y-6 sm:space-y-10">
              <div className="c">
                <p className="text-base sm:text-lg text-amber-600 font-medium mb-4 leading-relaxed">
                  Includes everything you need...
                </p>
                <ul className="list-none space-y-3 sm:space-y-4 ml-2 sm:ml-4 text-sm sm:text-base leading-relaxed">
                    <li>Dedicated support with 20+ years experience</li>
                    <li>Only pay for the exact time used - no rounding up or down</li>
                    <li>No hidden fees or additional costs</li>
                    <li>100% client confidentiality</li>
                    <li>Time & tasks will be digitally tracked & a detailed report provided</li>
                    <li>Ability to amend your package when required</li>
                    <li>Packages designed to help you keep within budget</li>
                    <li>Out of working hours work can be arranged upon request</li>
                </ul>
              </div>
             
              
            </div>
          </div>
          </div>
        </div>
      </section>
    </>
  );
}
