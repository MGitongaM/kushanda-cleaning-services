"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
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
import { MenuSquare } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";
import CloudinaryImage from "../mediaComponents/CloudinaryImage";

const navLinks = [
  { id: 1, title: "Home", href: "/" },
  { id: 3, title: "Services", href: "/#services" },
  { id: 4, title: "How It Works", href: "/how-it-works" },
  { id: 5, title: "About Us", href: "/about-us" },
  { id: 6, title: "Testimonials", href: "/#testimonials" },
  { id: 7, title: "Plans & Rates", href: "/plans-and-rates" },
//   { id: 8, title: "Media", href: "" },
  { id: 9, title: "Contact Us", href: "/contact-us" },
];
export default function NavigationSection() {
  const [open, setOpen] = useState(false);
  return (
    <>
      {/* <nav className=" fixed z-50"> */}
      <nav className="fixed z-50">
        {/* <NavigationMenu className=" bg-slate-900/80 backdrop-blur-md min-w-[88dvw] rounded-sm mx-auto   top-1 left-6 md:left-20"> */}
        <NavigationMenu className=" bg-slate-50 backdrop-blur-md min-w-[94dvw] lg:min-w-[99dvw] rounded-sm mx-auto   top-0 left-2 sm:left-6 lg:left-0">
          <NavigationMenuList className=" flex py-2">
            <NavigationMenuItem className="pl-1 flex-1 lg:pl-10">
              <NavigationMenuLink
                href="/"
                className="bg-transparent hover:bg-transparent active:bg-transparent focus:bg-transparent"
              >
                <CloudinaryImage
                  imgSrc={"Kushand_Logo_White_Transparent"}
                  height={400}
                  width={400}
                  alt={`Kushanda logo image`}
                  classNames={"object-contain h-12 w-96 rounded-lg"}
                />
              </NavigationMenuLink>
            </NavigationMenuItem>
            {/* desktop navigation */}
            <div className="hidden lg:block flex-1 bg-amber-2000">
              <div className="grid place-content-center mr-0 lg:mr-">
                <NavigationMenuItem>
                  {navLinks.map((link) => (
                    <NavigationMenuLink
                      key={link.id}
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "text-amber-600 rounded-sm focus:text-slate-950 font-semibold hover:text-slate-950 hover:bg-amber-400",
                      )}
                      render={<Link href={link.href}>{link.title}</Link>}
                      href={link.href}
                    />
                  ))}
                </NavigationMenuItem>
              </div>
            </div>
            {/* <div className="bg-red-500"> */}
            <NavigationMenuItem className="mr-10 justify-end md:pl-0 hidden">
              <NavigationMenuLink
                href="/contact-us"
                className=" inline-block cursor-pointer rounded-md font-bold bg-amber-400 text-slate-900 hover:text-slate-900 hover:shadow-lg hover:bg-cyan-300"
                render={
                  <Button className="  hover:scale-110 transition-all transition-discrete ease-linear duration-500 shadow-md">
                      <Link href="/contact-us">
                      Get AV Quote
                  </Link>
                    </Button>
                }
              />
            </NavigationMenuItem>
            {/* </div> */}
            {/* mobile navigation */}
            <div className="block  lg:hidden">
              <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger>
                  <MenuSquare size={32} className="text-cyan-400 mr-2" />
                </SheetTrigger>
                <SheetContent
                  side="top"
                  className="max-w-sm md:max-w-xl mx-auto rounded-b-md bg-slate-900/80 backdrop-blur-md border-none border-transparent"
                >
                  <SheetHeader>
                    <SheetTitle></SheetTitle>
                    <SheetDescription></SheetDescription>
                  </SheetHeader>
                  <div className="c">
                    <div className="flex flex-col justify-center items-center gap-8 list-none">
                      <NavigationMenuItem>
                        {navLinks.map((link) => (
                          <NavigationMenuLink
                            key={link.id}
                            className={cn(
                              navigationMenuTriggerStyle(),
                              "block my-4 font-semibold  text-slate-100",
                            )}
                            render={<Link href={link.href}>{link.title}</Link>}
                            href={link.href}
                            onClick={() => setOpen(false)}
                          />
                        ))}
                      </NavigationMenuItem>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </NavigationMenuList>
        </NavigationMenu>
      </nav>
    </>
  );
}