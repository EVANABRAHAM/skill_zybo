export default function ShoeCard() {
  return (
    <div className="w-[312px] h-[405px] bg-[#232323] relative overflow-hidden rounded-[20px] shadow-lg group">

      {/* Green Circle */}
      <div
        className="
          absolute
          top-[-170px]
          left-[-10px]
          w-[384px]
          h-[384px]
          bg-[#9ADA2A]
          rounded-full
          z-[1]
        "
      />

      {/* Background NIKE Text */}
<div
  className="
    absolute
    top-[50%]
    left-1/2
    -translate-x-1/2
    -translate-y-1/2
    text-white
    font-inter
    font-extrabold
    italic
    text-[120px]
    leading-none
    tracking-tighter
    opacity-[0.05]
    pointer-events-none
    select-none
    z-[0]
    scale-x-[1.2]
  "
>
  NIKE
</div>


      {/* Shoe Image */}
      <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-[10] w-[250px]">
        <img
          src="/images/Frame 8.svg"
          alt="Nike Shoe"
          className="w-full h-auto object-contain -rotate-[-5deg] drop-shadow-2xl"
        />
      </div>

      {/* Bottom Text */}
      <div className="absolute bottom-[30px] left-0 w-full text-center z-[20]">
        <h2 className="text-white font-inter font-bold text-[28px] uppercase tracking-wide">
          NIKE SHOES
        </h2>
      </div>
    </div>
  );
}
