import { Container } from "@/components/container";
import { HomePageHero } from "@/components/sections/homepage-hero";
import { StressFreeManagement } from "@/components/sections/stress-free-management";
import { StarComponent } from "@/components/stars";

export default function Home() {
  return (
    <>
      <Container>
        <HomePageHero />
      </Container>
      <StarComponent />
      <StressFreeManagement />
    </>
  );
}
