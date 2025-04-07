// "use client";
import Image from "next/image";

const Hero = () => {
  return (
    <section>
      <Image
        src="/assets/illustration-hero-mobile.png"
        alt="Hero section illustration"
        className="sm:hidden"
        width={640}
        height={640}
      />
      <h1>Get paid for the work you love to do.</h1>
      <p>
        The 9-5 grind is so last century. We believe in living life on your own
        terms. Whether you’re looking to escape the rat race or set up a side
        hustle, we’ve got you covered.
      </p>
    </section>
  );
};

export default Hero;
