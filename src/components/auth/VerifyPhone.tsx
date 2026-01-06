export default function VerifyPhoneBlock() {
  return (
    <div
      className="w-[720px] h-[859px] bg-black flex flex-col items-center gap-[56px] px-[60px] pt-[200px] pb-[100px]"
    >
      {/* Heading */}
      <h1 className="w-[600px] h-[34px] text-center font-inter text-[28px] font-semibold leading-[100%] tracking-[-0.03em] text-white">
        Verify Phone
      </h1>

      {/* Subtext: OTP instruction */}
      <p className="w-[234px] h-[11px] text-center font-inter text-[15px] font-normal leading-[100%] tracking-[-0.03em] text-white/100">
        Enter the OTP sent to 0987654321
      </p>

      {/* OTP Input Blocks */}
      <div className="w-[600px] h-[87px] flex gap-[16px]">
        {Array.from({ length: 4 }).map((_, i) => (
          <input
            key={i}
            type="text"
            maxLength={1}
            className="w-[138px] h-[87px] px-[16px] py-[10px] bg-white/10 rounded-[12px] text-center text-white text-[28px] font-medium outline-none placeholder-white/30"
            placeholder="-"
          />
        ))}
      </div>

      {/* Verify Button */}
      <button
        type="button"
        className="w-[600px] h-[56px] py-[10px] px-[16px] rounded-[12px] bg-white text-black font-inter text-[16px] font-medium flex items-center justify-center gap-[10px] hover:opacity-90 transition"
      >
        Verify
      </button>
    </div>
  );
}
