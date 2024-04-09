"use client";
import React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { navConfig } from "./navConfig";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { cva } from "class-variance-authority";
const navigationMenuTriggerStyle = cva(
  "group inline-flex h-10 w-max items-center justify-center rounded-md  px-4 py-2 text-sm font-medium transition-colors hover:underline hover:text-accent-foreground  focus:text-accent-foreground  disabled:pointer-events-none disabled:opacity-50 "
);
const Navigation = ({
  className,
  vertical,
}: {
  className?: string;
  vertical?: string;
}) => {
  const urlPath = usePathname();
  return (
    <NavigationMenu className={cn("hidden md:flex", className)}>
      <NavigationMenuList className={cn("text-foreground/50", vertical)}>
        {navConfig.map((navItem) => (
          <NavigationMenuItem key={navItem.label}>
            <Link href={navItem.path} legacyBehavior passHref>
              <NavigationMenuLink
                className={cn(
                  navigationMenuTriggerStyle(),
                  `${urlPath === navItem.path && " underline text-primary"} ${
                    vertical && "text-lg my-2"
                  }`
                )}
              >
                {navItem.label}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};
export default Navigation;
