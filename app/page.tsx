import Hero from "./components/Hero/Hero";
import Pricing from "./components/Pricing/Pricing";
import Features from "./components/Features/Features";

export default function Home() {
  return (
    <main className="px-[24px] md:px-[97px] lg:px-[165px]">
      <Hero />
      <Features />
      <Pricing />
    </main>
  );
}
