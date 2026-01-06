'use client';
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState, useRef } from "react";

export default function VerifyPhoneBlock() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [urlOtp, setUrlOtp] = useState("");
  const [inputOtp, setInputOtp] = useState(["", "", "", ""]);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    const otpParam = searchParams.get("otp");
    if (otpParam) {
      setUrlOtp(otpParam);
    }
  }, [searchParams]);

  const handleChange = (index: number, value: string) => {
    if (isNaN(Number(value))) return;
    const newOtp = [...inputOtp];
    newOtp[index] = value;
    setInputOtp(newOtp);

    // Auto-focus next input
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
    // In a real app, strict equality check: if (enteredOtp === urlOtp)
    // For now, valid length or non-empty is enough, or matching the URL OTP.
    if (enteredOtp.length === 4) {
      router.push("/product-page");
    } else {
      alert("Please enter the 4-digit OTP.");
    }
  };

  return (
    <div
      className="w-[720px] h-[859px] flex flex-col items-center gap-[56px] px-[60px] pt-[200px] pb-[100px]"
    >
      {/* Heading */}
      <h1 className="w-[600px] h-[34px] text-center font-inter text-[28px] font-semibold leading-[100%] tracking-[-0.03em] text-white">
        Verify Phone
      </h1>

      {/* Subtext: OTP instruction */}
      <div className="flex flex-col items-center gap-2">
        <p className="w-[234px] h-[11px] text-center font-inter text-[15px] font-normal leading-[100%] tracking-[-0.03em] text-white/100">
          Enter the OTP sent to your phone
        </p>

        {/* Display OTP from URL for Demo Purposes */}
        {urlOtp && (
          <p className="text-[#9ADA2A] font-medium text-[16px] mt-2">
            Your OTP Code: {urlOtp}
          </p>
        )}
      </div>

      {/* OTP Input Blocks */}
      <div className="w-[600px] h-[87px] flex gap-[16px]">
        {Array.from({ length: 4 }).map((_, i) => (
          <input
            key={i}
            ref={(el) => { inputRefs.current[i] = el }}
            type="text"
            maxLength={1}
            value={inputOtp[i]}
            onChange={(e) => handleChange(i, e.target.value)}
            onKeyDown={(e) => handleKeyDown(i, e)}
            className="w-[138px] h-[87px] px-[16px] py-[10px] bg-white/10 rounded-[12px] text-center text-white text-[28px] font-medium outline-none placeholder-white/30 focus:ring-2 focus:ring-[#9ADA2A] transition-all"
            placeholder="-"
          />
        ))}
      </div>

      {/* Verify Button */}
      <button
        type="button"
        onClick={handleVerify}
        className="w-[600px] h-[56px] py-[10px] px-[16px] rounded-[12px] bg-white text-black font-inter text-[16px] font-medium flex items-center justify-center gap-[10px] hover:opacity-90 transition"
      >
        Verify
      </button>
    </div>
  );
}
