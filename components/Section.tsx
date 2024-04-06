import { cn } from "@/lib/utils";
import React, { HTMLAttributes, HTMLProps } from "react";
interface SectionProps extends HTMLAttributes<HTMLElement> {}

const Section = ({ className, children, ...props }: SectionProps) => {
  return (
    <section className={cn("py-20", className)} {...props}>
      {children}
    </section>
  );
};

export default Section;
