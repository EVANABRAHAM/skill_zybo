import Image from "next/image";
import ShoeCard1 from "@/components/product/shoe1";
import ShoeCard2 from "@/components/product/shoe2";
import ShoeCard3 from "@/components/product/shoe3";
import ShoeCard4 from "@/components/product/shoe4";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/header";


export default function ProductPage() {
  return (
    <div className="min-h-screen bg-[#111111] flex flex-col">
      {/* HEADER */}
        <Header />

      {/* MAIN CONTENT */}
      <main className="flex-1 w-full max-w-[1440px] mx-auto px-[60px] py-[60px] flex flex-col gap-[40px]">
        {/* Title */}
        <h1 className="text-white font-inter font-medium text-[32px] leading-tight">
          Men’s Jordan Shoes
        </h1>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[24px]">
          {/* Row 1 */}
          <ShoeCard1 />
          <ShoeCard2 />
          <ShoeCard3 />
          <ShoeCard4 />

          {/* Row 2 */}
          <ShoeCard1 />
          <ShoeCard2 />
          <ShoeCard3 />
          <ShoeCard4 />
        </div>
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
