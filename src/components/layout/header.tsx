'use client';
import Link from "next/link";
import Image from "next/image";
import Logo from "@/components/icons/Logo";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };

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
          width={30}
          height={5}
          className="opacity-100"
        />

        {/* Logout Text */}
        <button
          onClick={handleLogout}
          className="text-white font-inter font-semibold text-[12px] leading-[19.16px] tracking-[-0.03em] text-center opacity-100 hover:opacity-80 transition-opacity"
        >
          Log Out
        </button>
      </div>
    </header>
  );
}
