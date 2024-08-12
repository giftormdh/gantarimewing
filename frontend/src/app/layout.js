"use client";
import { Urbanist } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import "./globals.css";

const urbanist = Urbanist({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [scroll, setScroll] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50 && pathname !== "/health") {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    // Check scroll position on initial load
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]); // Tambahkan pathname sebagai dependency

  const noNavbarPaths = ["/auth/sign-in", "/auth/sign-up", "/admin/dashboard"];
  const showNavbar = !noNavbarPaths.includes(pathname);

  return (
    <html lang="en">
      <body className={urbanist.className}>
        {showNavbar && (
          <header className={`fixed w-full z-30 transition-all duration-300 ${scroll || pathname === "/health" ? "bg-opacity-75 bg-black shadow-lg" : "bg-transparent"}`}>
            <nav className="container mx-auto flex items-center justify-between p-5">
              <Link href="/">
                <div className="flex items-center">
                  <Image src="/mengwi-logo-text-white.svg" alt="Mengwi Logo" width={100} height={100} className="hover:transform hover:scale-105 transition-transform duration-200 ease-in-out" />
                </div>
              </Link>
              <div className={`flex items-center space-x-16 text-white text-lg`}>
                <Link href="/baha">
                  <div className={`px-4 py-2 rounded-full ${pathname === "/baha" ? "bg-mengwi text-white" : "hover:bg-mengwi"}`}>Baha Village</div>
                </Link>
                <Link href="/sobangan">
                  <div className={`px-4 py-2 rounded-full ${pathname === "/sobangan" ? "bg-mengwi text-white" : "hover:bg-mengwi"}`}>Sobangan Village</div>
                </Link>
                <Link href="/health">
                  <div className={`px-4 py-2 rounded-full ${pathname === "/health" ? "bg-mengwi text-white" : "hover:bg-mengwi"}`}>Health Services</div>
                </Link>
              </div>
              <Link href="/contact-us">
                <div className={`px-4 py-2 rounded-full bg-white font-semibold hover:bg-primary hover:text-white`}>Contact Us</div>
              </Link>
            </nav>
          </header>
        )}
        {children}
      </body>
    </html>
  );
}
