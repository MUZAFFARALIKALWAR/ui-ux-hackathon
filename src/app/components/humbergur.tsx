"use client"
import { TiThMenu } from "react-icons/ti";
import Link from "next/link";
import { RiArrowDropDownLine } from "react-icons/ri";
import { MdOutlineAccountCircle } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";



import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu";

  

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const SHEET_SIDES = [ "left"] as const

type SheetSide = (typeof SHEET_SIDES)[number]

export function SheetSide() {
  return (
    <div className=" gap-2">
      {SHEET_SIDES.map((side) => (
        <Sheet key={side} >
          <SheetTrigger asChild className="sm:hidden">
            <TiThMenu className="text-2xl "/>
          </SheetTrigger >
          <SheetContent side={side}>
            <SheetHeader>
              <SheetTitle>SHOP.CO</SheetTitle>
            </SheetHeader>
             {/* navigation bar */}
             <ul>
                <li className="flex flex-col space-y-5">
                    <Link href={"#"}> 
                    <DropdownMenu>
                         <DropdownMenuTrigger>
                          <div className="flex justify-center items-center">
                          Shop
                          <RiArrowDropDownLine className="text-3xl"/>
                          </div>
                         </DropdownMenuTrigger>
                         <DropdownMenuContent>
                           
                           <DropdownMenuItem>Home</DropdownMenuItem>
                           <DropdownMenuItem>Casual</DropdownMenuItem>
                           <DropdownMenuItem>T-shirts</DropdownMenuItem>
                           <DropdownMenuItem>Product Detail</DropdownMenuItem>
                         </DropdownMenuContent>
                    </DropdownMenu>

                      </Link>
                    <Link href={"/"}>On Sale</Link>
                    <Link href={"/"}>New Arrivals</Link>
                    <Link href={"/"}>Brands</Link>

                </li>
            </ul>
          </SheetContent>
        </Sheet>
      ))}
    </div>
  )
}
