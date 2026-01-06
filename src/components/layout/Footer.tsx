import Image from "next/image";

export default function Footer() {
  return (
    <footer
      className="
        w-full
        h-[244px]
        px-[100px]
        py-[64px]
        bg-black
        flex
        flex-col
        gap-[48px]
      "
    >
      {/* Inner Layer */}
      <div
        className="
          max-w-[1240px]
          h-[56px]
          w-full
          flex
          items-center
          justify-between
          mx-auto
        "
      >
        {/* Left: Nike Logo (increased size) */}
        <Image
          src="/images/Frame 1.svg"
          alt="Nike"
          width={106.28}  // updated width
          height={56}     // updated height
          priority
          className="object-contain"
        />

        {/* Right side: Social icons */}
        <div
          className="flex items-center gap-[44.29px] w-[151.53px] h-[22.6px]"
        >
          <Image
            src="/images/Group.svg"
            alt="Facebook"
            width={21.705}
            height={22.595}
            className="object-contain"
          />
          <Image
            src="/images/Vector (1).svg"
            alt="Twitter"
            width={18.993}
            height={19.771}
            className="object-contain"
          />
          <Image
            src="/images/Vector.svg"
            alt="Instagram"
            width={19.535}
            height={20.336}
            className="object-contain"
          />
        </div>
      </div>
    </footer>
  );
}
