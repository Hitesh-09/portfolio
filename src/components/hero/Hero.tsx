import { HeroVisual } from "./HeroVisual";
import { HeroContent } from "./HeroContent";

export function Hero() {
  return (
    <section className="relative h-[calc(100vh-2rem)] min-h-[600px] w-full max-w-[calc(100vw-2rem)] mx-auto mt-4 mb-20 rounded-[2.5rem] overflow-hidden">
      <HeroVisual />
      <HeroContent />
    </section>
  );
}
