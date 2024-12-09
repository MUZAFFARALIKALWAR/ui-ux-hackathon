
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Hero(){
    return (
        <main className="bg-[#F2F0F1] md:h-[400px] pt-2 md:pt-0 flex flex-col md:flex-row justify-evenly items-center max-w-screen-2xl mx-auto">
              {/* left */}
               <div className=" p-4 md:pl-0 md:w-[450px] space-y-4">
                <h1 className="text-4xl md:text-5xl font-serif font-extrabold">FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
                <p className="text-sm">Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
                <button className="w-full sm:w-[140px] text-sm bg-black text-white py-2 px-8 rounded-[20px]" >Shop Now</button>
               </div>
               {/* mid div */}
               <div className="sm:hidden flex justify-evenly flex-wrap gap-y-4 mt-4 ml-4 space-x-4">
                  <div>
                    <h1 className="text-2xl font-bold">200+</h1>
                    <p className="text-xs">International Brands</p>
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold">2,000+</h1>
                    <p className="text-xs">High-Quality Products</p>
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold">30,000+</h1>
                    <p className="text-xs">Happy Customers</p>
                  </div>
               </div>
              {/* right */}
              <div>
              <Image src={"/images/hero-image.png"}
               className="w-[400px]"
              width={200} height={200} alt="hero-image"></Image> 
              </div>
        </main>
    )
}
