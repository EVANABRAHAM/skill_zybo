import Image from "next/image";
import ShoeCard1 from "@/components/product/shoe1";
import ShoeCard2 from "@/components/product/shoe2";
import ShoeCard3 from "@/components/product/shoe3";
import ShoeCard4 from "@/components/product/shoe4";
import Footer from "@/components/layout/Footer";

export default function ProductPage() {
  return (
    <div className="min-h-screen bg-[#111111] flex flex-col">
      {/* HEADER */}
      <header className="w-full h-[80px] px-[60px] flex items-center justify-between bg-[#111111] border-b border-white/5">
        {/* Left: Nike Logo */}
        <div className="flex items-center">
          <Image
            src="/images/Frame 1.svg"
            alt="Nike"
            width={78}
            height={28}
            className="object-contain invert brightness-0" // The footer logo was weirdly sized, standardizing here. Or just use same logic. Footer used Frame 1.svg. Let's assume it's white or we need to invert if black.
            // Actually Frame 1.svg in footer didn't have invert class. If it's the swoosh, on dark bg it should be white.
            // If svg is black, we need invert. Let's assume user assets are correct or handle it.
            style={{ filter: "brightness(0) invert(1)" }}
          />
        </div>

        {/* Right: Log Out */}
        <button className="flex items-center gap-2 text-white font-inter text-[14px] font-medium hover:opacity-80 transition-opacity">
          <Image
            src="/images/UserCircle.svg"
            alt="User"
            width={24}
            height={24}
            className="rounded-full"
          />
          <span>Log Out</span>
        </button>
      </header>

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
