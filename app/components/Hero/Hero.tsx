"use client";

import Image from "next/image";

const scrollToTarget = (targetId: string) => {
  const targetElement = document.getElementById(targetId);
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: "smooth" });
  }
};

export const Hero = () => {
  return (
    <section className="hero-section">
      <Image
        src="/assets/illustration-hero-mobile.png"
        alt="Hero section illustration"
        width={640}
        height={640}
        className="md:hidden w-full h-auto"
      />
      <div className="md:w-[460px] lg:w-[730px] mx-auto px-10 lg:pt-20">
        <h1 className="text-[2rem] font-extrabold pt-12 lg:text-5xl">
          Get paid for the work you <span className="text-[#3EE9E5]">love</span>{" "}
          to do.
        </h1>
        <p className="py-7">
          The 9-5 grind is so last century. We believe in living life on your
          own terms. Whether you’re looking to escape the rat race or set up a
          side hustle, we’ve got you covered.
        </p>

        <Image
          src="/assets/icon-scroll.svg"
          alt="Scroll icon"
          width={26}
          height={42}
          className="mx-auto animate-bounce hover:cursor-pointer"
          onClick={() => scrollToTarget("features")}
        />
      </div>
    </section>
  );
};
