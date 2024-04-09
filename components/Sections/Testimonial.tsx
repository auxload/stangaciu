import React from "react";
import Section from "../Section";
import Wrapper from "../Wrapper";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";

const Testimonial = () => {
  return (
    <>
      <Section className="bg-accent">
        <TestimonialSection1 />
      </Section>
      <Section className="">
        <TestimonialSection2 />
      </Section>
      <Section className="bg-accent">
        <TestimonialSection3 />
      </Section>
    </>
  );
};

const TestimonialSection1 = () => {
  return (
    <Wrapper className=" w-full md:h-[300px] grid md:grid-cols-2 gap-8 ">
      <Image
        className="w-full h-full rounded-lg object-cover object-top"
        src={"/geo.png"}
        alt="safdsaf"
        width={500}
        height={500}
      />
      <div className=" grid place-content-center justify-center text-center gap-3">
        <h1 className="text-3xl font-bold">George</h1>
        <span className="text-foreground/50">Voce si canta la furculita</span>
        <Link
          href={"/"}
          className={cn(
            buttonVariants({ variant: "outline" }),
            "bg-transparent border-primary"
          )}
        >
          Vezi clipuri
        </Link>
      </div>
    </Wrapper>
  );
};
const TestimonialSection2 = () => {
  return (
    <Wrapper className=" w-full md:h-[300px] grid md:grid-cols-2 gap-8 ">
      <div className=" grid place-content-center justify-center text-center gap-3">
        <h1 className="text-3xl font-bold">Danut</h1>
        <span className="text-foreground/50">Voce si canta la furculita</span>
        <Link
          href={"/"}
          className={cn(
            buttonVariants({ variant: "outline" }),
            "bg-transparent border-primary"
          )}
        >
          Vezi clipuri
        </Link>
      </div>
      <Image
        className="w-full h-full rounded-lg object-cover object-top"
        src={"/danut.png"}
        alt="safdsaf"
        width={500}
        height={500}
      />
    </Wrapper>
  );
};
const TestimonialSection3 = () => {
  return (
    <Wrapper className=" w-full md:h-[300px] grid md:grid-cols-2 gap-8 ">
      <Image
        className="w-full h-full rounded-lg object-cover object-center"
        src={"/nasu.png"}
        alt="safdsaf"
        width={500}
        height={500}
      />
      <div className=" grid place-content-center justify-center text-center gap-3">
        <h1 className="text-3xl font-bold">Stangaciu Mafia Boss</h1>
        <span className="text-foreground/50">Voce si canta la furculita</span>
        <Link
          href={"/"}
          className={cn(
            buttonVariants({ variant: "outline" }),
            "bg-transparent border-primary"
          )}
        >
          Vezi clipuri
        </Link>
      </div>
    </Wrapper>
  );
};

export default Testimonial;
