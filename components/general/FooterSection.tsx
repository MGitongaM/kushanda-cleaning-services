import { Copyright } from "lucide-react";
import Link from "next/link";
import CloudinaryImage from "../mediaComponents/CloudinaryImage";


export default function FooterSection() {
  return (
    <>
    <footer className="bg-cyan-950/10 ">
        <div className="container mx-auto px-4 lg:py-40">
            <div className="w-full text-slate-900 flex flex-col md:flex-row h-full  justify-between items-center">
                <div className="space-y-12">

                    <p className="hidden">KUSHANDA CLEANING SERVICES</p>
                     <CloudinaryImage
                                      imgSrc={"Kushanda_Cleaning_Services_logo_1"}
                                      height={400}
                                      width={400}
                                      alt={`Kushanda Cleaning Services logo image`}
                                      classNames={"object-cover h-40 w-full md:w-80 rounded-lg"}
                                    />
                    <p className="hidden">Reliable. Practical. Personal.</p>
                </div>
                <div className="c">
                    <p className="c">Residential Cleaning • Commercial Cleaning • Property Cleaning</p>
                </div>
                <div className="c">
                    <ul className="list-disc flex flex-col md:flex-row gap-8">
                        <li className="px-1 py-2 transition-discrete duration-300 hover:shadow-md hover:scale-95"><Link href="https://facebook.com" target="_blank">Facebook</Link></li>
                        <li className="px-1 py-2 transition-discrete duration-300 hover:shadow-md hover:scale-95"><Link href="https://instagram.com" target="_blank">Instagram</Link></li>
                        <li className="px-1 py-2 transition-discrete duration-300 hover:shadow-md hover:scale-95"><Link href="https://tiktok.com/" target="_blank">Tiktok</Link></li>
                        <li className="px-1 py-2 transition-discrete duration-300 hover:shadow-md hover:scale-95"><Link href="https://youtube.com" target="_blank">Youtube</Link></li>
                    </ul>
                </div>
            </div>
            <div className="flex justify-center items-center mt-80 md:-mb-30">
                <p className="text-sm text-slate-900">copyright<Copyright size={10} className="inline-block mx-0.5"/>{new Date().getFullYear()} Kushanda cleaning services</p>
            </div>
        </div>
    </footer>
    </>
  )
}
