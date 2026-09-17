import { Copyright } from "lucide-react";
import Link from "next/link";
import CloudinaryImage from "../mediaComponents/CloudinaryImage";


export default function FooterSection() {
  return (
    <footer className="bg-cyan-950/10">
      <div className="container mx-auto px-4 py-10 sm:py-12 lg:py-16">
        <div className="w-full text-slate-900 flex flex-col lg:flex-row gap-8 lg:gap-12 justify-between items-center lg:items-start text-center lg:text-left">
          <div className="flex flex-col items-center lg:items-start shrink-0">
            <CloudinaryImage
              imgSrc={"Kushanda_Cleaning_Services_logo_1"}
              height={400}
              width={400}
              alt={`Kushanda Cleaning Services logo image`}
              // classNames="object-cover h-28 sm:h-32 lg:h-40 w-auto max-w-[260px] sm:max-w-[320px] rounded-lg"
              classNames="object-cover lg:object-contain h-72 sm:h-72 lg:h-72 w-auto max-w-[260px] sm:max-w-[320px] rounded-lg"
            />
            <p className="hidden">KUSHANDA CLEANING SERVICES</p>
            <p className="hidden">Reliable. Practical. Personal.</p>
          </div>
          <div className="flex flex-col items-center lg:items-start gap-6 lg:pt-8">
            <p className="text-sm sm:text-base font-medium text-balance">
              Residential Cleaning • Commercial Cleaning • Property Cleaning
            </p>
            <ul className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-6 list-none">
              <li>
                <Link
                  href="https://facebook.com"
                  target="_blank"
                  className="inline-block px-3 py-2 text-sm sm:text-base rounded-md hover:bg-white hover:shadow-sm transition-all duration-200"
                >
                  Facebook
                </Link>
              </li>
              <li>
                <Link
                  href="https://instagram.com"
                  target="_blank"
                  className="inline-block px-3 py-2 text-sm sm:text-base rounded-md hover:bg-white hover:shadow-sm transition-all duration-200"
                >
                  Instagram
                </Link>
              </li>
              <li>
                <Link
                  href="https://tiktok.com/"
                  target="_blank"
                  className="inline-block px-3 py-2 text-sm sm:text-base rounded-md hover:bg-white hover:shadow-sm transition-all duration-200"
                >
                  Tiktok
                </Link>
              </li>
              <li>
                <Link
                  href="https://youtube.com"
                  target="_blank"
                  className="inline-block px-3 py-2 text-sm sm:text-base rounded-md hover:bg-white hover:shadow-sm transition-all duration-200"
                >
                  Youtube
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center items-center mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-cyan-950/10">
          <p className="text-xs sm:text-sm text-slate-700 text-center flex flex-wrap items-center justify-center gap-1">
            <span>copyright</span>
            <Copyright size={12} className="inline-block" />
            <span>{new Date().getFullYear()} Kushanda Cleaning Services</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
