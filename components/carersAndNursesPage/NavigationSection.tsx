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
  // { id: 1, title: "Home", href: "/" },
  { id: 3, title: "Our Team", href: "/carers-and-nurses#leadership" },
  { id: 4, title: "Care Services", href: "/carers-and-nurses#careServices" },
  { id: 5, title: "Staff Services", href: "/carers-and-nurses#staffServices" },
  { id: 6, title: "Compliance", href: "/carers-and-nurses#compliance" },
  { id: 7, title: "Contact Us", href: "/carers-and-nurses#contactUs" },
];
export default function NavigationSection() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav className=" fixed z-50">

        <NavigationMenu className=" bg-green-100/80 backdrop-blur-md min-w-dvw mx-auto pr-0 lg:pr-16  top-0  ">
          <NavigationMenuList className="w-full flex py-4">
            <NavigationMenuItem className="pl-1 flex-1 lg:pl-10">
              <NavigationMenuLink
                href="/"
                className="bg-transparent hover:bg-transparent active:bg-transparent focus:bg-transparent"
              >
                <CloudinaryImage
                  imgSrc={"Kushand_Logo_White_Transparent"}
                  height={400}
                  width={400}
                  alt={`Kushanda Cleaning Services logo image`}
                  // classNames={"object-cover hidden h-24 w-64 rounded-lg"}
                  classNames={"object-contain h-10 sm:h-12 w-auto max-w-[160px] sm:max-w-[220px] lg:max-w-[280px] rounded-lg"}
                />
              </NavigationMenuLink>
            </NavigationMenuItem>
            {/* desktop navigation */}
            {navLinks.map((link) => (
              <NavigationMenuItem key={link.id} className="hidden lg:block">
                <NavigationMenuLink
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "text-slate-700 rounded-sm focus:text-slate-950 font-bold hover:text-slate-950 hover:bg-cyan-200",
                  )}
                  render={<Link href={link.href}>{link.title}</Link>}
                  href={link.href}
                />
              </NavigationMenuItem>
            ))}
            {/* <div className="bg-red-500"> */}
            <NavigationMenuItem className="mr-10 justify-end md:pl-0 hidden">
              <NavigationMenuLink
                href="/contact-us"
                className=" inline-block cursor-pointer rounded-md font-bold bg-blue-200 text-slate-900 hover:text-slate-900 hover:shadow-lg hover:bg-cyan-300"
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
            <NavigationMenuItem className="block lg:hidden">
              <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger aria-label="Open navigation menu">
                  <MenuSquare size={32} className="text-slate-700 mr-2" />
                </SheetTrigger>
                <SheetContent
                  side="top"
                  // className="max-w-sm md:max-w-xl mx-auto rounded-b-md bg-slate-900/80 backdrop-blur-md border-none border-transparent"
                  className="max-w-sm md:max-w-xl mx-auto rounded-b-md bg-orange-100/80 backdrop-blur-md border-none border-transparent"
                >
                  <SheetHeader>
                    <SheetTitle></SheetTitle>
                    <SheetDescription></SheetDescription>
                  </SheetHeader>
                  <div className="c">
                    <ul className="flex flex-col items-center gap-3 py-4">
                      {navLinks.map((link) => (
                        <li key={link.id}>
                          <Link className="block py-2 font-semibold text-slate-900" href={link.href} onClick={() => setOpen(false)}>{link.title}</Link>
                        </li>
                      ))}
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
