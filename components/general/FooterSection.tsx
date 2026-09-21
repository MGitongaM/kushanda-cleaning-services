import { Copyright } from "lucide-react";
import Link from "next/link";
import CloudinaryImage from "../mediaComponents/CloudinaryImage";
import { FooterLinks1, FooterLinks2 } from "@/constData/homePageData";

export default function FooterSection() {
  return (
    <>
      <footer className="bg-amber-700">
        <div className="container mx-auto px-4 py-10 sm:py-12 lg:py-16">
          <div className="w-full text-slate-100 flex flex-col lg:flex-row gap-8 lg:gap-12 justify-between items-center lg:items-start text-center lg:text-left">
            <div className="flex flex-col items-center lg:items-start shrink-0">
              <Link href="/">
                <CloudinaryImage
                  imgSrc={"Kushanda_footer_logo_Transparent"}
                  height={400}
                  width={400}
                  alt={`Kushanda logo image`}
                  classNames="object-contain h-32 sm:h-40 lg:h-52 w-auto max-w-[220px] sm:max-w-[260px] lg:max-w-[320px] rounded-lg"
                />
              </Link>
            </div>
            <div className="flex flex-col sm:flex-row flex-1 justify-around items-center sm:items-start lg:items-start gap-8 sm:gap-6 lg:pt-8 w-full">
              <ul className="flex flex-col justify-center sm:justify-start lg:justify-start gap-2 sm:gap-3 lg:gap-6 list-none text-center sm:text-left w-full sm:w-auto">
                {FooterLinks1.map((link) => (
                  <li key={link.id}>
                    <Link
                      href={link.href}
                      className="inline-block px-3 py-2 text-sm sm:text-base rounded-md hover:bg-amber-400 hover:text-slate-900 hover:shadow-sm transition-all duration-200"
                    >
                      {link.link}
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="flex flex-col justify-center sm:justify-start lg:justify-start gap-2 sm:gap-3 lg:gap-6 list-none text-center sm:text-left w-full sm:w-auto">
                {FooterLinks2.map((link) => (
                  <li key={link.id}>
                    <Link
                      href={link.href}
                      className="inline-block px-3 py-2 text-sm sm:text-base rounded-md hover:bg-amber-400 hover:text-slate-900 hover:shadow-sm transition-all duration-200"
                    >
                      {link.link}
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="flex flex-col justify-center sm:justify-start lg:justify-start gap-2 sm:gap-3 lg:gap-6 list-none text-center sm:text-left w-full sm:w-auto">
                <li>
                  <Link
                    href="/contact-us"
                    className="inline-block px-3 py-2 text-sm sm:text-base rounded-md hover:bg-amber-400 hover:text-slate-900 hover:shadow-sm transition-all duration-200"
                  >
                    Contact Us
                  </Link>
                </li>
                <li className="text-sm sm:text-base px-3 py-2">+123 456 789</li>
              </ul>
            </div>
          </div>

          <hr className="max-w-7xl mx-auto border border-slate-100/30 mt-8 sm:mt-10" />
          <div className="flex justify-center items-center mt-6 sm:mt-8 pt-6 sm:pt-8 ">
            <p className="text-xs sm:text-sm text-slate-100 text-center flex flex-wrap items-center justify-center gap-1 px-2 leading-relaxed">
              <Copyright size={12} className="inline-block shrink-0" />
              <span>Copyright Kushanda | Created by Kushanda | </span>
              <span>{new Date().getFullYear()}</span>
              <span>| Privacy Policy | Cookie Policy | Terms of Use</span>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
