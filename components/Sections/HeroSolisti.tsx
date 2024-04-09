import { Aclonica as FontSans } from "next/font/google";

import React from "react";
import Wrapper from "../Wrapper";
import Section from "../Section";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";
import { Parisienne as Kaushan_Script } from "next/font/google";

const fontSans = Kaushan_Script({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400"],
});
const HeroSolisti = () => {
  return (
    <Section className=" relative w-full">
      <Image
        alt="Hero"
        className="h-[60vh] md:h-[400px] w-full overflow-hidden   object-cover object-top "
        src="/hero2.jpg"
        width={500}
        height={400}
      />
      <Wrapper>
        <div className="absolute inset-0 flex flex-col items-start justify-center gap-6  bg-gradient-to-r from-black to-background/80">
          <div className="space-y-2 container grid place-content-center">
            <h1
              className={cn(
                "  text-3xl font-bold tracking-tighter font-sans  sm:text-5xl md:text-5xl lg:text-7xl/none ",
                fontSans.variable
              )}
            >
              Hai sa facem cunostinta
            </h1>
            {/* <p className=" max-w-[700px] text-gray-400  md:text-xl">
              Bucurați-vă de farmecul muzicii lăutărești alături de Formatia
              Stângaciu! Suntem o echipă dedicată să aducem și bucurie la
              evenimentele tale. Contactați-ne acum pentru o experiență muzicală
              de neuitat!
            </p> */}
          </div>

        </div>
      </Wrapper>
    </Section>
  );
};

export default HeroSolisti;
