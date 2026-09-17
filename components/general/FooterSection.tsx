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
              <CloudinaryImage
                imgSrc={"Kushanda_footer_logo_Transparent"}
                height={400}
                width={400}
                alt={`Kushanda logo image`}
                // classNames="object-cover h-28 sm:h-32 lg:h-40 w-auto max-w-[260px] sm:max-w-[320px] rounded-lg"
                classNames="object-cover lg:object-contain h-72 sm:h-72 lg:h-72 w-auto max-w-[260px] sm:max-w-[320px] rounded-lg"
              />
            </div>
            <div className="flex flex-1 justify-around items-center lg:items-start gap-6 lg:pt-8">
              <ul className="flex flex-col justify-center lg:justify-start gap-3 sm:gap-6 list-none">
                {FooterLinks1.map((link) => (
                  <li key={link.id}>
                    <Link
                      href={link.href}
                      target="_blank"
                      className="inline-block px-3 py-2 text-sm sm:text-base rounded-md hover:bg-amber-400 hover:text-slate-900 hover:shadow-sm transition-all duration-200"
                    >
                      {link.link}
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="flex flex-col justify-center lg:justify-start gap-3 sm:gap-6 list-none">
                {FooterLinks2.map((link) => (
                  <li key={link.id}>
                    <Link
                      href={link.href}
                      target="_blank"
                      className="inline-block px-3 py-2 text-sm sm:text-base rounded-md hover:bg-amber-400 hover:text-slate-900 hover:shadow-sm transition-all duration-200"
                    >
                      {link.link}
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="flex flex-col justify-center lg:justify-start gap-3 sm:gap-6 list-none">
                <li>
                  <Link
                    href="/contact us"
                    target="_blank"
                    className="inline-block px-3 py-2 text-sm sm:text-base rounded-md hover:bg-amber-400 hover:text-slate-900 hover:shadow-sm transition-all duration-200"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>+123 456 789</li>
              </ul>
            </div>
          </div>

          <hr className="max-w-7xl mx-auto border bg-slate-100" />
          <div className="flex justify-center items-center mt-8 sm:mt-10 pt-6 sm:pt-8 ">
            <p className="text-xs sm:text-sm text-slate-100 text-center flex flex-wrap items-center justify-center gap-1">
              <Copyright size={12} className="inline-block" />
              <span>Copyright Kushanda | Created by Kushanda | </span>
              <span>{new Date().getFullYear()} Kushanda Cleaning Services</span>
              <span>| Privacy Policy | Cookie Policy | Terms of Use</span>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
