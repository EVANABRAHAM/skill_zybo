import Link from "next/link";
import Logo from "@/components/icons/Logo";

export default function LoginHeader() {
  return (
    <header className="w-full h-[70px] bg-[#191919] flex items-center justify-between px-[60px] py-[8px]">
      <Link href="/">
        <Logo className="text-white" />
      </Link>

      {/* Right side (login/profile later) */}
      <div />
    </header>
  );
}
