"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useRouter } from "next/navigation";
import api from "@/utils/api";

interface Product {
  id: number | string;
  name: string;
  price?: number;
  original_price?: number;
}

interface ShoeCardProps {
  product?: Product;
}

export default function ShoeCard4({ product }: ShoeCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const sizeRef = useRef<HTMLDivElement>(null);
  const colorRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const shoeRef = useRef<HTMLImageElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);
  const bgTextRef = useRef<HTMLDivElement>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);
  const router = useRouter();

  const handleBuyNow = async (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!product) return;

    try {
      const response = await api.post("/api/purchase-product/", {
        product_id: product.id
      });
      console.log("Order created:", response.data);
      router.push("/successful");
    } catch (error) {
      console.error("Purchase failed:", error);
      alert("Failed to purchase product. Please try again.");
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      tl.current = gsap.timeline({ paused: true });

      tl.current
        .to(shoeRef.current, {
          y: -30,
          scale: 1.1,
          rotate: 0,
          duration: 0.5,
          ease: "power2.out"
        }, "start")
        .to([contentRef.current, circleRef.current, bgTextRef.current], {
          y: -30,
          duration: 0.5,
          ease: "power2.out"
        }, "start")
        .fromTo(sizeRef.current,
          { opacity: 0, y: 20, display: "none" },
          { opacity: 1, y: 0, display: "flex", duration: 0.3, ease: "power2.out" },
          ">"
        )
        .fromTo(colorRef.current,
          { opacity: 0, y: 20, display: "none" },
          { opacity: 1, y: 0, display: "flex", duration: 0.3, ease: "power2.out" },
          ">0.001"
        )
        .fromTo(buttonRef.current,
          { opacity: 0, y: 20, display: "none" },
          { opacity: 1, y: 0, display: "block", duration: 0.3, ease: "power2.out" },
          ">0.001"
        );

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleMouseEnter = () => {
    tl.current?.play();
  };

  const handleMouseLeave = () => {
    tl.current?.reverse();
  };

  return (
    <div
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="w-[312px] h-[405px] bg-[#232323] relative overflow-hidden rounded-[20px] shadow-lg group cursor-pointer"
    >
      {/* Pink Circle - Theme Color #DB8CAE */}
      <div
        ref={circleRef}
        className="absolute top-[-170px] left-[-10px] w-[384px] h-[384px] bg-[#DB8CAE] rounded-full z-[1]"
      />

      {/* Background NIKE Text */}
      <div
        ref={bgTextRef}
        className="absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-inter font-extrabold italic text-[120px] leading-none tracking-tighter opacity-[0.05] pointer-events-none select-none z-[0] scale-x-[1.2]"
      >
        NIKE
      </div>

      {/* Shoe Image */}
      <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-[10] w-[250px]">
        <img
          ref={shoeRef}
          src="/images/Frame 8.svg"
          alt="Nike Shoe"
          className="w-full h-auto object-contain -rotate-[15deg] drop-shadow-2xl grayscale brightness-[.7] sepia hue-rotate-[10deg] saturate-[3]"
        />
      </div>

      {/* Content Container */}
      <div
        ref={contentRef}
        className="absolute top-[58%] left-0 w-full flex flex-col items-center gap-4 z-[20] translate-y-[20px]"
      >
        <h2 ref={titleRef} className="text-white font-inter font-bold text-[28px] uppercase tracking-wide text-center px-4">
          {product ? product.name : "NIKE SHOES"}
        </h2>

        {/* Size Selector */}
        <div ref={sizeRef} className="hidden flex-row items-center gap-2 opacity-0">
          <span className="text-[#AAAAAA] font-inter text-[12px] font-medium mr-2">SIZE:</span>
          {["7", "8", "9", "10"].map((size) => (
            <div
              key={size}
              className="w-[28px] h-[28px] bg-[#333333] hover:bg-white hover:text-black text-white rounded-[6px] flex items-center justify-center font-inter text-[12px] font-bold cursor-pointer transition-colors"
            >
              {size}
            </div>
          ))}
        </div>

        {/* Color Selector */}
        <div ref={colorRef} className="hidden flex-row items-center gap-2 opacity-0">
          <span className="text-[#AAAAAA] font-inter text-[12px] font-medium mr-2">COLOR:</span>
          <div className="w-[16px] h-[16px] rounded-full bg-[#9ADA2A] cursor-pointer ring-2 ring-white transition-all"></div>
          <div className="w-[16px] h-[16px] rounded-full bg-[#7B1FA2] cursor-pointer ring-2 ring-transparent hover:ring-white transition-all"></div>
          <div className="w-[16px] h-[16px] rounded-full bg-[#9D333B] cursor-pointer ring-2 ring-transparent hover:ring-white transition-all"></div>
        </div>

        {/* Buy Now Button */}
        <button
          ref={buttonRef}
          onClick={handleBuyNow}
          className="hidden opacity-0 bg-white text-black font-inter font-bold text-[14px] px-8 py-2 rounded-full hover:opacity-90 transition-opacity"
        >
          Buy Now
        </button>

      </div>
    </div>
  );
}
