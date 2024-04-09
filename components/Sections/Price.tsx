import Link from "next/link";
import Section from "../Section";
import Wrapper from "../Wrapper";
import { buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";

export default function Price() {
  return (
    <Section className="bg-accent">
      <Wrapper className="space-y-12 px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
              Ofertele noastre
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Preturi personalizate pentru orice eveniment
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              La Formatia Stângaciu, suntem dedicați să îți oferim soluții
              personalizate pentru evenimentul tău special. Descoperă opțiunile
              noastre flexibile și contactează-ne pentru a crea împreună o
              experiență memorabilă!
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-sm items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
          <div className="transition-transform hover:-translate-y-5 flex flex-col items-start gap-3 bg-primary/50 p-8 rounded-xl">
            <h3 className="text-3xl font-bold">Oferta Premium</h3>
            {/* <div className="text-4xl font-bold">$19</div> */}
            <ul className="grid gap-2 text-sm list-disc list-inside ">
              <li>2 solisti</li>
              <li>3 instrumentisti</li>
              <li>Sonorizare profesionala</li>
              <li>Potrivit pt. evenimente medii / mari</li>
            </ul>
            <Link
              className={cn(buttonVariants({ variant: "default" }))}
              href="#"
            >
              Solicita oferta
            </Link>
          </div>
          <div className="transition-transform hover:-translate-y-5 flex flex-col items-start gap-3 bg-primary/50 p-8 rounded-xl">
            <h3 className="text-3xl font-bold">Oferta Personalizata</h3>
            {/* <div className="text-4xl font-bold">$99</div> */}
            <ul className="grid gap-2 text-sm list-disc list-inside">
              <li>Includes everything in Pro</li>
              <li>Parallelism: 16x</li>
              <li>Concurrency: 16x</li>
              <li>Support: 24/7 phone support</li>
            </ul>
            <Link
              className={cn(buttonVariants({ variant: "default" }))}
              href="#"
            >
              Solicita oferta
            </Link>
          </div>
          <div className="transition-transform hover:-translate-y-5 flex flex-col items-start gap-3 bg-primary/50 p-8 rounded-xl">
            <h3 className="text-3xl font-bold">Oferta VIP</h3>
            {/* <div className="text-4xl font-bold">$49</div> */}
            <ul className="grid gap-2 text-sm list-disc list-inside">
              <li>Ideal pentru mirii care vor să impresioneze</li>
              <li>Sonorizare profesională</li>
              <li> 4 instrumentiști</li>
              <li>DJ</li>
            </ul>
            <Link
              className={cn(buttonVariants({ variant: "default" }))}
              href="#"
            >
              Solicita oferta
            </Link>
          </div>
        </div>
      </Wrapper>
    </Section>
  );
}
