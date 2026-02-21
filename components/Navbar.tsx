"use client";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
export default function Navbar() {
  return (
    <nav className="w-full px-8 py-4 flex justify-between items-center border-b border-[#1a1a1a] bg-black">

      <h1 className="text-green-400 font-bold tracking-wider">
        DHINITH.
      </h1>

      <div className="flex gap-6 text-sm">
        <Link href="/" className="hover:text-green-400 transition">
          Home
        </Link>
        <Link href="/profile" className="hover:text-green-400 transition">
          Profile
        </Link>
        <a
          href="mailto:dhinithmuruganantham@gmail.com"
          className="hover:text-green-400 transition"
        >
          Contact
        </a>
      </div>
<ThemeToggle />
    </nav>
  );
}