import Link from "next/link";
import Logo from "@/components/icons/Logo";
import AuthNav from "./AuthNav";

export default function Header() {
  return (
    <header className="w-full h-[70px] bg-[#191919] flex items-center justify-between px-[60px] py-[8px]">
      {/* Logo - Static & Server Rendered */}
      <Link href="/">
        <Logo className="text-white" />
      </Link>

      {/* Right side - Dynamic Authentication Logic */}
      <AuthNav />
    </header>
  );
}
