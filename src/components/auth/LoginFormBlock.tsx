'use client';
import { useState } from "react";
import { useRouter } from "next/navigation";
import api from "@/utils/api";

export default function LoginFormBlock() {
  const [phone, setPhone] = useState("");
  const router = useRouter();

  const handleVerify = async () => {
    try {
      localStorage.removeItem("token");
      const response = await api.post("/api/verify/", {
        phone_number: phone,
      });
      console.log("Verification successful:", response.data);

      if (response.data.user === false) {
        // Redirect to Name page if user doesn't exist
        router.push(`/login/name?phone=${encodeURIComponent(phone)}`);
      } else {
        // Existing user flow - check for token and redirect
        const token = response.data.access || response.data.token?.access;
        if (token) {
          localStorage.setItem("token", token);
        }
        router.push("/product-page");
      }
    } catch (error) {
      console.error("Verification failed:", error);
      // Handle error
    }
  };

  return (
    <div className="w-[600px] flex flex-col items-center gap-[36px]">
      <h1 className="w-full h-[34px] text-center font-inter text-[28px] font-semibold leading-[100%] tracking-[-0.03em] text-white">
        Log In
      </h1>

      <div className="w-full flex flex-col gap-[16px]">
        <label
          htmlFor="phone"
          className="w-[47px] h-[19px] font-inter text-[16px] font-medium leading-[100%] tracking-[-0.03em] text-white"
        >
          Phone
        </label>

        <input
          type="tel"
          placeholder="Enter Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-[600px] h-[56px] px-[16px] py-[10px] rounded-[12px] bg-white/10 text-white font-inter text-[16px] outline-none placeholder:text-[15px] placeholder:font-normal placeholder:tracking-[-0.03em] placeholder-white/3"
        />
        <button
          type="button"
          onClick={handleVerify}
          className="w-[600px] h-[56px] py-[10px] px-[16px] rounded-[12px] bg-white text-black font-inter text-[16px] font-medium flex items-center justify-center gap-[10px] hover:opacity-90 transition"
        >
          Continue
        </button>
      </div>
    </div>
  );
}
