'use client';

import { useRouter, useSearchParams } from "next/navigation";
import { useState, useRef } from "react";

export default function VerifyPhoneBlock() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const urlOtp = searchParams.get("otp") ?? "";
  const [inputOtp, setInputOtp] = useState(["", "", "", ""]);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (index: number, value: string) => {
    if (isNaN(Number(value))) return;

    const newOtp = [...inputOtp];
    newOtp[index] = value;
    setInputOtp(newOtp);

    if (value && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !inputOtp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleVerify = () => {
    const enteredOtp = inputOtp.join("");

    if (enteredOtp.length === 4) {
      const token = localStorage.getItem("token");
      if (token) {
        document.cookie = `access_token=${token}; path=/; max-age=86400;`;
      }

      router.push("/product-page");
    } else {
      alert("Please enter the 4-digit OTP.");
    }
  };

  return (
    <div className="w-[720px] h-[859px] flex flex-col items-center gap-[56px] px-[60px] pt-[200px] pb-[100px]">
      <h1 className="text-white font-inter text-[28px] font-semibold">
        Verify Phone
      </h1>

      <div className="flex flex-col items-center gap-2">
        <p className="text-white text-[15px]">
          Enter the OTP sent to your phone
        </p>

        {urlOtp && (
          <p className="text-[#9ADA2A] font-medium text-[16px] mt-2">
            Your OTP Code: {urlOtp}
          </p>
        )}
      </div>

      <div className="w-[600px] h-[87px] flex gap-[16px]">
        {Array.from({ length: 4 }).map((_, i) => (
          <input
            key={i}
            ref={(el) => {
              inputRefs.current[i] = el;
            }}
            type="text"
            maxLength={1}
            value={inputOtp[i]}
            onChange={(e) => handleChange(i, e.target.value)}
            onKeyDown={(e) => handleKeyDown(i, e)}
            className="w-[138px] h-[87px] bg-white/10 rounded-[12px] text-center text-white text-[28px] focus:ring-2 focus:ring-[#9ADA2A]"
          />
        ))}
      </div>

      <button
        onClick={handleVerify}
        className="w-[600px] h-[56px] bg-white text-black rounded-[12px]"
      >
        Verify
      </button>
    </div>
  );
}
