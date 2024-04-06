import Section from "../Section";
import Wrapper from "../Wrapper";

export default function AboutUs() {
  return (
    <Section className="bg-accent w-full">
      <Wrapper className=" flex flex-col gap-4  md:gap-8 md:flex-row md:items-center  lg:gap-12">
        <img
          alt="Photo"
          className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center md:w-[400px] lg:order-last lg:w-[500px]"
          height="300"
          src="/hero.jpg"
          width="700"
        />
        <div className="mx-auto max-w-[700px] space-y-4 md:order-last md:mx-0 md:space-y-2">
          <h2 className="text-3xl font-bold md:text-4xl">Despre Noi</h2>
          <p className="text-gray-500 md:text-xl/relaxed dark:text-gray-400">
            Fiecare membru al echipei noastre este un muzician talentat, dedicat
            să creeze o atmosferă memorabilă și autentică în fiecare eveniment.
            Având în portofoliu numeroase spectacole de succes și aprecieri din
            partea clienților noștri, ne mândrim cu abilitatea noastră de a
            transforma orice eveniment într-o experiență de neuitat. Cu un
            repertoriu vast, care acoperă o gamă variată de genuri și stiluri
            muzicale, suntem pregătiți să satisfacem orice cerințe și să aducem
            bucurie și energie în fiecare moment al evenimentului dumneavoastră.

          </p>
        </div>
      </Wrapper>
    </Section>
  );
}
