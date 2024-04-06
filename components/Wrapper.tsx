import { cn } from "@/lib/utils";
import React from "react";

interface WrapProp extends React.HTMLAttributes<HTMLDivElement> {}

const Wrapper = ({ children, className, ...props }: WrapProp) => {
  return (
    <div {...props} className={cn("container", className)}>
      {children}
    </div>
  );
};

export default Wrapper;
