import React from "react";
import Wrapper from "../Wrapper";
import { Facebook, Instagram, Mail, Phone, Youtube } from "lucide-react";
import Link from "next/link";
import Section from "../Section";
import { cn } from "@/lib/utils";

const TopNav = ({ className }: { className?: string }) => {
  return (
    <div className={cn("bg-background/80 border-b  hidden md:block",className)}>
      <Wrapper className="flex items-center justify-between">
        <div className="flex items-center h-10 gap-4 text-xs">
          <span>Ne puteti contacta la</span>
          <span className="flex items-center gap-1">
            <Phone className="size-4" />
            0737122906
          </span>
          <span>|</span>
          <span className="flex items-center gap-1">
            <Mail className="size-4" />
            gd69435@gmail.com
          </span>
        </div>
        <ul className="flex items-center gap-2">
          <li>
            <Link href={"/"}>
              <Facebook className="size-5" />
            </Link>
          </li>
          <li>
            <Link href={"/"}>
              <Youtube className="size-6" />
            </Link>
          </li>
          <li>
            <Link href={"/"}>
              <Instagram className="size-5" />
            </Link>
          </li>
        </ul>
      </Wrapper>
    </div>
  );
};

export default TopNav;
