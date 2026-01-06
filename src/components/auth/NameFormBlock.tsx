'use client';
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import api from "@/utils/api";

export default function NameFormBlock() {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const router = useRouter();
    const searchParams = useSearchParams();

    useEffect(() => {
        const phoneParam = searchParams.get("phone");
        if (phoneParam) {
            setPhone(phoneParam);
        }
    }, [searchParams]);

    const handleRegister = async () => {
        try {
            const response = await api.post("/api/login-register/", {
                name: name,
                phone_number: phone,
            });
            console.log("Registration successful:", response.data);
            // Store token (checking both 'access' field and 'token.access' nested field)
            const token = response.data.access || response.data.token?.access;
            if (token) {
                localStorage.setItem("token", token);
            }
            router.push("/product-page");
        } catch (error) {
            console.error("Registration failed:", error);
            // Handle error
        }
    };

    return (
        <div className="w-[600px] flex flex-col items-center gap-[36px]">
            <div className="w-full flex flex-col items-center gap-2">
                <h1 className="w-full h-[34px] text-center font-inter text-[28px] font-semibold leading-[100%] tracking-[-0.03em] text-white">
                    What's your name?
                </h1>
                <p className="text-white/60 font-inter text-[14px]">
                    We need it to personalize your experience.
                </p>
            </div>

            <div className="w-full flex flex-col gap-[16px]">
                <label
                    htmlFor="name"
                    className="w-[47px] h-[19px] font-inter text-[16px] font-medium leading-[100%] tracking-[-0.03em] text-white"
                >
                    Name
                </label>

                <input
                    type="text"
                    placeholder="Enter Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-[600px] h-[56px] px-[16px] py-[10px] rounded-[12px] bg-white/10 text-white font-inter text-[16px] outline-none placeholder:text-[15px] placeholder:font-normal placeholder:tracking-[-0.03em] placeholder-white/3"
                />
                <button
                    type="button"
                    onClick={handleRegister}
                    className="w-[600px] h-[56px] py-[10px] px-[16px] rounded-[12px] bg-white text-black font-inter text-[16px] font-medium flex items-center justify-center gap-[10px] hover:opacity-90 transition"
                >
                    Continue
                </button>
            </div>
        </div>
    );
}
