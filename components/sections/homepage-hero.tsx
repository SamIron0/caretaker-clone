import { Hero, HeroSubtitle, HeroTitle } from "../hero";
import { HeroImage } from "../heroImage";
import { ChevronRight } from "../icons/chevronRight";
import { Button } from "../ui/button";
import { ButtonHighlight } from "../ui/button";

export const HomePageHero = () => {
  return (
    <Hero>
      <Button
        className="translate-y-[-1rem] animate-fade-in opacity-0"
        href="/"
        variant="secondary"
        size="small"
      >
        Introducing Smart Automation
        <ButtonHighlight className="-mr-2 ml-2">→</ButtonHighlight>
      </Button>
      <div className="px-6 md:px-8">
        <HeroTitle className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
          Effortless Property Management, <br className="hidden md:block" />{" "}
          Anywhere You Are
        </HeroTitle>
        <HeroSubtitle className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
          Streamline operations, reduce costs, and stay connected with your
          properties <br className="hidden md:block" />
          whether you&apos;re at home or abroad — on Caretaker&apos;s all-in-one platform.
        </HeroSubtitle>
      </div>
      <div className="space-x-4 space-y-2 md:space-y-0">
        <Button
          href="/"
          variant="primary"
          size="large"
          className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:800ms]"
        >
          Sign up <ChevronRight className="ml-2" />
        </Button>
        <Button
          href="/"
          variant="secondary"
          size="large"
          className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:800ms]"
        >
          Schedule a Demo <ChevronRight className="ml-2" />
        </Button>
      </div>
      <HeroImage />
    </Hero>
  );
};
