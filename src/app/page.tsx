import { cn } from "@/lib/utils";
import { CheckCircle } from "lucide-react";

export default function Home() {
  const stack = [
    "Next.js 16.1.1",
    "React 19.2.3",
    "Tailwind CSS 4",
    "GSAP",
    "Zustand",
    "Lucide React",
    "Axios"
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-zinc-50 dark:bg-zinc-950">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
          Skill Zybo Test
        </h1>
      </div>
    </main>
  );
}
