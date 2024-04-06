import { Music2, Piano } from "lucide-react";
import Section from "../Section";
import Wrapper from "../Wrapper";

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/C2HEvNtAgmW
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
export default function Sell() {
  return (
    <Section className="w-full py-6 md:py-12">
      <Wrapper className=" grid gap-6  lg:grid-cols-2 xl:gap-12">
        <div className="flex flex-col justify-center space-y-4">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              De ce sa ne alegi pe noi?
            </h2>
            <p className="max-w-[500px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Formatia Stângaciu se distinge prin profesionalismul și pasiunea
              pentru muzica lăutărească. Cu ani de experiență în industria
              evenimentelor, ne-am angajat să oferim servicii de cea mai înaltă
              calitate, adaptate nevoilor și preferințelor fiecărui client.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center space-y-4">
          <ul className="grid gap-6">
            <li>
              <div className="grid gap-1">
                <h3 className="text-xl font-bold flex gap-3 md:-ml-9"><Music2 /> Atmosferă autentică</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Cu sunetul autentic al muzicii lăutărești și energia
                  contagioasă a interpretării noastre, creăm o atmosferă
                  autentică și plină de viață la fiecare eveniment.
                </p>
              </div>
            </li>
            <li>
              <div className="grid gap-1">
                <h3 className="text-xl font-bold flex gap-3 md:-ml-9"><Music2 /> Experiență bogată</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Cu o istorie îndelungată de spectacole de succes și evenimente
                  memorabile, avem expertiza necesară pentru a face din
                  evenimentul tău un succes garantat.
                </p>
              </div>
            </li>
            <li>
              <div className="grid gap-1">
                <h3 className="text-xl font-bold flex gap-3 md:-ml-9"><Music2 /> Repertoriu variat</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Avem un repertoriu vast care acoperă o gamă largă de genuri
                  muzicale și piese, asigurându-ne că putem satisface gusturile
                  diverse ale publicului nostru.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </Wrapper>
    </Section>
  );
}
