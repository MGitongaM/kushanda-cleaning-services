import CloudinaryImage from "../mediaComponents/CloudinaryImage";
import Link from "next/link";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

export default function HeroSection() {
  return (
    <section className="px-4 pt-2 pb-0  sm:pt-10 mt-10 lg:mt-5">
      <div className="containerr mx-auto">
        <div className=" min-h-[70dvh] sm:min-h-[75dvh] grid grid-cols-1  md:grid-cols-12 gap-2 items-center justify-between">
          {/* <div className="max-w-2xl pt-20"> */}
          <div className="col-span-12 md:col-span-5 max-w-2xl pt-20 lg:pl-20">
            <div className="text-start">
              <h1 className="text-5xl lg:text-7xl font-bold text-balance">
                Experienced Carers and Nurses You Can Depend On
              </h1>
              <p className="text-lg font-semibold text-gray-600 mt-20 text-balance">
                Connecting individuals, families, and care homes across Guernsey with compassionate, highly qualified care professionals for short term cover or permanent placement.
              </p>
            </div>
            <div className="flex flex-col lg:flex-row  justify-center md:justify-start items-start gap-4 mt-10">
              <Link href="#contactUs" className="">
                <Button className="bg-cyan-600  text-white hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-300 font-medium rounded-lg text-lg px-5 py-8 text-center dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800">
                 
                 Request Staffing
                </Button>
              </Link>
              <Link href="#coreServices" className="">
                <Button className="bg-cyan-50 text-slate-900 hover:bg-cyan-400 focus:ring-4 focus:ring-cyan-300 font-medium rounded-lg text-lg px-5 py-8 text-center dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800">
                  Find Care Support
                </Button>
              </Link>
            </div>
            <div className="flex flex-wrap gap-2 mt-10 mb-20">
                <Badge variant="outline" className="border border-cyan-200">Regulatory Compliant</Badge>
                <Badge variant="outline" className="border border-cyan-200">Fully Vetted & DBS/Guernsey Checked</Badge>
                {/* <Badge variant="outline">60+ Years Combined Team Experience</Badge> */}
            </div>
          </div>
          <div className="col-span-12 md:col-span-7 w-full h-full">
            <CloudinaryImage
              imgSrc="carers_Hero_Image"
              width={1500}
              height={1500}
              alt="Experienced Carers and Nurses"
              classNames="rounded-lg  object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
