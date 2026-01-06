import Image from "next/image";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/header";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function SuccessfulPage() {
    const cookieStore = await cookies();
    const token = cookieStore.get("access_token");

    if (!token) {
        redirect("/login");
    }

    // Since this is a static success page, we don't fetch data here. 
    // Ideally we'd fetch the specific order details if the ID was in the URL.
    // For now, it matches the provided static design/requirements.

    return (
        <div className="min-h-screen bg-[#111111] flex flex-col font-inter">

            <Header />

            {/* MAIN CONTENT */}
            <main className="flex-1 w-full flex flex-col items-center justify-center py-20 pb-40">

                {/* Central Logo */}
                <div className="mb-8">
                    <Image
                        src="/images/Frame 1.svg"
                        alt="Nike"
                        width={120}
                        height={42}
                        className="object-contain"
                        style={{ filter: "brightness(0) invert(1)" }}
                    />
                </div>

                {/* Success Message */}
                <h1 className="text-white font-bold text-[40px] tracking-tight mb-2">
                    Successfully Ordered!
                </h1>
                <p className="text-[#707070] text-[14px] font-medium mb-12">
                    12:34 PM, 20th Dec 2025
                </p>

                {/* Order Summary Card */}
                <div className="w-[480px] h-[160px] bg-[#1E1E1E] rounded-[16px] p-4 flex items-center gap-6 shadow-2xl border border-white/5 relative overflow-hidden">
                    {/* Small accent glow behind the card content */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] bg-[#9ADA2A] opacity-[0.03] blur-[50px] pointer-events-none"></div>

                    {/* Shoe Image Thumbnail */}
                    <div className="w-[120px] h-[120px] bg-[#2A2A2A] rounded-[12px] flex items-center justify-center relative overflow-hidden group shrink-0">
                        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-[#9ADA2A] to-transparent opacity-10 group-hover:opacity-20 transition-opacity"></div>
                        <Image
                            src="/images/Frame 8.svg"
                            alt="Nike Air Max 90"
                            width={100}
                            height={100}
                            className="object-contain -rotate-[15deg] drop-shadow-xl z-10"
                        />
                    </div>

                    {/* Product Details */}
                    <div className="flex-1 flex flex-col justify-center h-full z-10">
                        <h3 className="text-white font-medium text-[18px] mb-1">Nike Air Max 90</h3>
                        <p className="text-[#707070] text-[13px] font-medium mb-4">UK 7, 9ADA2A</p>

                        {/* Price */}
                        <div className="flex items-center gap-3">
                            <span className="text-white font-bold text-[16px]">₹1,200</span>
                            <span className="text-[#555] text-[13px] font-medium line-through decoration-1">₹1,399</span>
                        </div>
                    </div>
                </div>

            </main>

            {/* FOOTER */}
            <Footer />
        </div>
    );
}
