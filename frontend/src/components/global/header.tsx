"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import MaxFullWidthWrapper from "./max-full-width-wrapper";
import MaxWidthWrapper from "./max-width-wrapper";
import CustomButton from "../common/button";
import { useRouter } from "next/navigation";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setHasMounted(true);
  }, []);

  // ✅ Prevent hydration mismatch
  if (!hasMounted) return null;

  return (
    <MaxFullWidthWrapper className="relative z-10">
      {/* ✅ Background Illustration (only on client) */}
      <Image
        src="/images/lines.svg"
        alt="lines"
        width={1200}
        height={300}
        className="absolute top-0 left-10 z-0 pointer-events-none select-none max-w-[90%]"
      />

      <header className="relative bg-[var(--primary-bg)] -z-10">
        <MaxWidthWrapper>
          <div className="flex justify-between items-center w-full pt-8 pb-6">
            {/* ✅ Logo */}
            <div className="flex items-center gap-2 z-10">
              <Image
                src="/images/full-logo.svg"
                alt="Logo"
                width={220}
                height={60}
                className="h-auto cursor-pointer"
                                onClick={()=>router.push("/")}
              />
            </div>

            {/* ✅ Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-16 z-10">
              <div
                onClick={()=>router.push("/")}
                className="hover:text-[var(--primary-hover)] text-[var(--primary-text)] font-medium cursor-pointer"
              >
                Home
              </div>
              <Link
                href="/search"
                className="hover:text-[var(--primary-hover)] text-[var(--primary-text)] font-medium cursor-pointer"
              >
                Search
              </Link>
              <Link
                href="/about"
                className="hover:text-[var(--primary-hover)] text-[var(--primary-text)] font-medium cursor-pointer"
              >
                About Us
              </Link>
              <CustomButton
              onClick={()=>router.push("/login")}
                title="LOGIN"
                textVariant="primary"
                bgVariant="white"
                className="shadow-none !w-fit !py-2 !text-sm"
              />
              <CustomButton
                title="SIGN UP"
                className="shadow-none !w-fit !py-2 !text-sm"
                              onClick={()=>router.push("/signup")}
              />
            </nav>

            {/* ✅ Mobile Menu Toggle */}
            <div className="lg:hidden z-20">
              <button onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>

          {/* ✅ Mobile Dropdown */}
          {isOpen && (
            <div className="lg:hidden bg-[var(primary-bg)] rounded-b-lg px-4 py-4 space-y-4 transition-all duration-300 shadow-md">
              <Link href="/" className="block text-[var(--primary-button)]">
                Home
              </Link>
              <Link href="/search" className="block text-[var(--primary-text)]">
                Search
              </Link>
              <Link href="/about" className="block text-[var(--primary-text)]">
                About Us
              </Link>
              <Link href="/login">
                <button className="w-full bg-white text-[var(--primary-button)] font-semibold py-2 rounded-md">
                  LOG IN
                </button>
              </Link>
              <Link href="/signup">
                <button className="w-full bg-[var(--primary-button)] text-white font-semibold py-2 rounded-md mt-4">
                  SIGN UP
                </button>
              </Link>
            </div>
          )}
        </MaxWidthWrapper>
      </header>
    </MaxFullWidthWrapper>
  );
};

export default Header;
