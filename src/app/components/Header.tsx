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
  } from "@/components/ui/dropdown-menu"
import { SheetSide } from "./humbergur";
  


export default function Header() {
  return (
     <header className="w-full border-b bg-white h-[60px] md:h-[80px] flex justify-between  items-center max-w-screen-2xl mx-auto">
           <div className="flex justify-center items-center">
           <SheetSide/>
            {/* logo */}
            <h1 className="text-2xl md:text-4xl font-extrabold pl-2">SHOP.CO</h1>
           </div>
            {/* navigation bar */}
            <ul className="hidden sm:block">
                <li className="space-x-6 ml-6 mt-2">
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
                    <Link href={`#sale`}>On Sale</Link>
                    <Link href={"#arival"}>New Arrivals</Link>
                    <Link href={"#brands"}>Brands</Link>

                </li>
            </ul>
            {/* right */}
            <div className="ml-14 flex justify-center items-center">
                <div className="flex justify-start items-center lg:bg-[#F0F0F0] lg:w-[500px] h-[40px] pl-2 ml-12 md:ml-0 hover:border-none rounded-full "> <IoIosSearch className="text-xl hidden lg:block" /> <input   placeholder={`Search for products...`}  className="bg-[#F0F0F0] w-full h-full rounded-full ml-2 hidden lg:block"/></div>
                
            </div>
            <div className="flex space-x-2 sm:space-x-4">
            <IoIosSearch className="text-xl  lg:hidden" />
            <IoCartOutline className="text-2xl"/>
   <MdOutlineAccountCircle className="text-2xl"/>
            </div>
         


         {/* </div> */}
     </header>
  );
}
