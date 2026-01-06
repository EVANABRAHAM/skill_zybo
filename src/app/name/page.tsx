import LoginHeader from "@/components/auth/LoginHeader";
import NameFormBlock from "@/components/auth/NameFormBlock";
import Footer from "@/components/layout/Footer";
import { Suspense } from "react";

export default function NamePage() {
    return (
        <div className="bg-black">

            {/* HEADER */}
            <LoginHeader />

            {/* FIRST SCREEN (FULL VIEWPORT) */}
            <section className="flex w-full h-[calc(100vh-70px)]">

                {/* LEFT SIDE – Background */}
                <div
                    className="w-1/2 h-full relative bg-cover bg-center"
                    style={{
                        backgroundImage: "url('/images/login-bg.svg')",
                    }}
                >
                    <div className="absolute inset-0 bg-black/20" />
                </div>

                {/* RIGHT SIDE – Login Form */}
                <div className="w-1/2 h-full bg-black flex items-center justify-center">
                    <Suspense fallback={<div className="text-white text-center mt-20">Loading...</div>}>
                        <NameFormBlock />
                    </Suspense>
                </div>

            </section>

            {/* FOOTER (SCROLL REQUIRED) */}
            <Footer />

        </div>
    );
}
