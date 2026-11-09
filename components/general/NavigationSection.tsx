"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { ChevronDown, MenuSquare } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";
import CloudinaryImage from "../mediaComponents/CloudinaryImage";

const navLinks = [
  // { id: 1, title: "Home", href: "/" },
  // { id: 2, title: "Services", href: "/#services" },
  { id: 3, title: "How It Works", href: "/how-it-works" },
  { id: 4, title: "About Us", href: "/about-us" },
  { id: 5, title: "Testimonials", href: "/#testimonials" },
  { id: 6, title: "Plans & Rates", href: "/plans-and-rates" },
  { id: 7, title: "Contact Us", href: "/contact-us" },
  //   { id: 8, title: "Media", href: "" },
];
const servicesLink = [
  // { id: 1, title: "Cleaning Services", href: "/cleaning-services" },
  { id: 1, title: "Websites", href: "/websites" },
  { id: 2, title: "Executive Support", href: "/executive-support" },
  { id: 3, title: "Digital Marketing", href: "/digital-marketing" },
  {
    id: 4,
    title: "Account Management and Book Keeping",
    href: "/account-management-and-book-keeping",
  },
];

export default function NavigationSection() {
  const [open, setOpen] = useState(false);
  return (
    <>
      {/* <nav className="fixed top-0 inset-x-0 z-50 px-2 sm:px-4 lg:px-8 "> */}
      <nav className="fixed top-0 inset-x-0 z-50  ">
        {/* <NavigationMenu className=" bg-slate-50 backdrop-blur-md w-full max-w-7xl mx-auto rounded-sm"> */}
        <NavigationMenu className=" bg-slate-50 backdrop-blur-md min-w-dvw mx-auto pr-0 lg:pr-10">
          <NavigationMenuList className="w-full flex items-center justify-between py-2 px-2 sm:px-4">
            <NavigationMenuItem className="flex-1">
              <NavigationMenuLink
                href="/"
                className="bg-transparent hover:bg-transparent active:bg-transparent focus:bg-transparent"
              >
                <CloudinaryImage
                  imgSrc={"Kushand_Logo_White_Transparent"}
                  height={70}
                  width={280}
                  alt={`Kushanda logo image`}
                  classNames={
                    "object-contain h-10 sm:h-12 w-auto max-w-[160px] sm:max-w-[220px] lg:max-w-[280px] rounded-lg"
                  }
                />
              </NavigationMenuLink>
            </NavigationMenuItem>
            {/* desktop navigation */}
            <NavigationMenuItem className="hidden lg:flex  items-center">
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "text-amber-900 text-sm rounded-sm focus:text-slate-950 font-semibold hover:text-slate-950 hover:bg-amber-300",
                    )}
                    render={<Link href="/">Home</Link>}
                  />
            </NavigationMenuItem>
            <NavigationMenuItem className="hidden lg:block">
                  <NavigationMenuTrigger
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "text-amber-900 text-sm rounded-sm focus:text-slate-950 font-semibold hover:text-slate-950 hover:bg-amber-300",
                    )}
                  >
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="min-w-56 bg-slate-50 p-2">
                      {servicesLink.map((link) => (
                        <li key={link.id}>
                          <NavigationMenuLink
                            className={cn(navigationMenuTriggerStyle(), "w-full text-amber-900 text-sm rounded-sm focus:text-slate-950 font-semibold hover:text-slate-950 hover:bg-amber-300")}
                            render={<Link href={link.href}>{link.title}</Link>}
                            href={link.href}
                          />
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
            </NavigationMenuItem>
            {navLinks.map((link) => (
              <NavigationMenuItem key={link.id} className="hidden lg:block">
                <NavigationMenuLink
                  className={cn(navigationMenuTriggerStyle(), "text-amber-900 text-sm rounded-sm focus:text-slate-950 font-semibold hover:text-slate-950 hover:bg-amber-300")}
                  render={<Link href={link.href}>{link.title}</Link>}
                />
              </NavigationMenuItem>
            ))}
            {/* <div className="bg-red-500"> */}
            <NavigationMenuItem className="mr-10 justify-end md:pl-0 hidden">
              <NavigationMenuLink
                href="/contact-us"
                className=" inline-block cursor-pointer rounded-md font-bold bg-amber-400 text-slate-900 hover:text-slate-900 hover:shadow-lg hover:bg-cyan-300"
                render={
                  <Button className="  hover:scale-110 transition-all transition-discrete ease-linear duration-500 shadow-md">
                    <Link href="/contact-us">Get AV Quote</Link>
                  </Button>
                }
              />
            </NavigationMenuItem>
            {/* </div> */}
            {/* mobile navigation */}
            <NavigationMenuItem className="block lg:hidden">
              <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger aria-label="Open navigation menu">
                  <MenuSquare size={32} className="text-amber-800 mr-2" />
                </SheetTrigger>
                <SheetContent
                  side="top"
                  // className="max-w-sm md:max-w-xl mx-auto rounded-b-md bg-slate-100/80 backdrop-blur-md border-none border-transparent"
                  className="w-full mx-auto rounded-b-md bg-slate-50 backdrop-blur-md border-none border-transparent"
                >
                  <SheetHeader>
                    <SheetTitle></SheetTitle>
                    <SheetDescription></SheetDescription>
                  </SheetHeader>
                  <div className="c">
                    <ul className="flex flex-col items-start  gap-3 py-4">
                      {navLinks.map((link) => (
                        <li key={link.id}>
                          <Link className="block py-2 font-semibold pl-16 md:pl-80 text-amber-900 text-sm" href={link.href} onClick={() => setOpen(false)}>{link.title}</Link>
                        </li>
                      ))}
                      <li className="text-amber-900 text-sm pl-16 md:pl-80 font-semibold">Services<ChevronDown aria-hidden="true" className="inline-block ml-1"/>
                        <ul className="mt-2">
                          {servicesLink.map((link) => (
                            <li key={link.id}>
                              <Link className="block py-2 pl-4 text-amber-900 text-sm" href={link.href} onClick={() => setOpen(false)}>{link.title}</Link>
                            </li>
                          ))}
                        </ul>
                      </li>
                    </ul>
                  </div>
                </SheetContent>
              </Sheet>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </nav>
    </>
  );
}
