import Link from "next/link";
import Image from "next/image";
import { cookies } from "next/headers";

export default async function AuthNav() {
  const cookieStore = await cookies();
  const token = cookieStore.get("access_token");

  const isAuthenticated = Boolean(token);

  if (!isAuthenticated) {
    return (
      <Link
        href="/login"
        className="text-white font-inter font-semibold text-[12px] tracking-[-0.03em] hover:opacity-80"
      >
        Log out
      </Link>
    );
  }

  return (
    <div className="flex items-center gap-[16px]">
      {/* <Link href="/orders">
        <Image
          src="/images/UserCircle.svg"
          alt="User"
          width={30}
          height={30}
          className="cursor-pointer"
        />
      </Link> */}

      <form action="/api/logout" method="POST">
        <button
          type="submit"
          className="text-white font-inter font-semibold text-[12px] hover:opacity-80"
        >
          Log Out
        </button>
      </form>
    </div>
  );
}
