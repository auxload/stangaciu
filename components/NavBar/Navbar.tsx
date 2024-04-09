"use client";
import React, { useEffect, useState } from "react";
import Navigation from "./Navigation";
import Link from "next/link";
import Wrapper from "../Wrapper";
import TopNav from "./TopNav";
import MobileNav from "./MobileNav";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      // Adjust the value (e.g., 100) based on when you want the change to occur
      setIsScrolled(scrollTop > 3);
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <section className="absolute z-20 w-full">
      <TopNav className={`${isScrolled && "absolute -top-20"}`} />
      <header
        className={cn(
          " bg-background/90 w-full",
          `${isScrolled ? "fixed " : "relative"}`
        )}
      >
        <Wrapper className="flex items-center h-20 justify-between">
          <Link href={"/"} className="text-2xl font-bold">
            Formatia <span className="text-primary">Stangaciu</span>
          </Link>
          <Navigation />
          <MobileNav />
        </Wrapper>
      </header>
    </section>
  );
};

export default Navbar;
