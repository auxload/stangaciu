import React from "react";
import Wrapper from "../Wrapper";
import Section from "../Section";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <Section className=" relative w-full">
      <Image
        alt="Hero"
        className="h-[60vh] md:h-[40rem] w-full overflow-hidden   object-cover"
        src="/hero.jpg"
        width={500}
        height={400}
      />
      <Wrapper>
        <div className="absolute inset-0 flex flex-col items-start justify-center gap-6  bg-gradient-to-tr from-black to-black/60">
          <div className="space-y-2 container">
            <h1 className="  text-3xl font-bold tracking-tighter  sm:text-4xl md:text-5xl lg:text-6xl/none ">
              Transformă nunta ta într-o experiență autentică
            </h1>
            <p className=" max-w-[700px] text-gray-400  md:text-xl">
              Bucurați-vă de farmecul muzicii lăutărești alături de Formatia
              Stângaciu! Suntem o echipă dedicată să aducem și bucurie la
              evenimentele tale. Contactați-ne acum pentru o experiență muzicală
              de neuitat!
            </p>
          </div>
          <div className="space-x-4 container">
            <Link
              className="inline-flex h-9 items-center justify-center rounded-md  px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
              href="#"
            >
              Află mai multe
            </Link>
            <Link
              className="inline-flex h-9 items-center justify-center rounded-md border  border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800  dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
              href="#"
            >
              Rezervă-ne acum!
            </Link>
          </div>
        </div>
      </Wrapper>
    </Section>
  );
};

export default Hero;
