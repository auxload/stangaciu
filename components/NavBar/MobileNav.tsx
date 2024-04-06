import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Navigation from "./Navigation";

const MobileNav = () => {
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger>
          <Menu className="size-9" />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
          <SheetTitle>Formatia Stangaciu</SheetTitle>
          {/* <SheetDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </SheetDescription> */}
        </SheetHeader>
          <Navigation className="flex mt-6" vertical={"block text-3xl space-x-0"} />
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
