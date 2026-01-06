import Link from "next/link";
import Image from "next/image";
import Logo from "@/components/icons/Logo";

export default function Header() {
  return (
    <header className="w-full h-[70px] bg-[#191919] flex items-center justify-between px-[60px] py-[8px]">
      {/* Logo */}
      <Link href="/">
        <Logo className="text-white" />
      </Link>

      {/* Right side */}
      <div className="flex items-center gap-[16px]">
        {/* User Icon */}
        <Image
          src="/images/UserCircle.svg"
          alt="User"
          width={95}
          height={24}
          className="opacity-100"
        />

        {/* Logout Text */}
        <button
          className="
            text-white
            font-inter
            font-semibold
            text-[15px]
            leading-[19.16px]
            tracking-[-0.03em]
            text-center
            opacity-100
          "
        >
          Log Out
        </button>
      </div>
    </header>
  );
}
