import CloudinaryImage from "../mediaComponents/CloudinaryImage";

export default function HeroSection() {
  return (
    <>
      <section className="c">
        <div className="min-h-[70dvh] flex flex-col md:flex-row ">
          <div className="w-full md:w-[50dvw]">
            <CloudinaryImage
              imgSrc="Hero_How_it_Works"
              height={400}
              width={400}
              alt=""
              classNames="object-cover w-full h-full"
            />
          </div>
          <div className="w-full md:w-[50dvw]  bg-amber-600/20 ">
          <div className="max-w-xl mx-auto grid place-content-center h-full">
            <div className="c">
              <h1 className="text-4xl lg:text-5xl text-amber-600">
                Your Investment
              </h1>
              <p className="leading-8 text-lg mt-4 mb-20">
                We understand that every business has varying support needs, therefore we offer flexible monthly plans to fit different workloads.  If your support needs differ to what we offer, please feel free to give us a call and hopefully we can accommodate you. 

              </p>
            </div>
            <div className="space-y-10">
              <div className="c">
                <p className="text-lg text-amber-600 font-medium mb-4">
                  Includes everything you need...
                </p>
                <ul className="list-none space-y-4 ml-4">
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
