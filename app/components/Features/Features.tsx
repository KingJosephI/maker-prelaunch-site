// "use client";

import Image from "next/image";

const Features = () => {
  return (
    <section>
      <div>
        <div>
          <Image
            src="/assets/illustration-passions.svg"
            alt="illustration passions"
            width={100}
            height={100}
          />
        </div>
        <h2>Indulge your passions</h2>
        <p>
          Your passions shouldn't be just for the weekend. Earn a living doing
          what you love.
        </p>
      </div>

      <div>
        <div>
          <Image
            src="/assets/illustration-financial-freedom.svg"
            alt="illustration financial freedom"
            width={100}
            height={100}
          />
        </div>
        <h2>Gain financial freedom</h2>
        <p>
          Start making money work for you. There’s nothing quite like earning
          while you sleep.
        </p>
      </div>

      <div>
        <div>
          <Image
            src="/assets/illustration-lifestyle.svg"
            alt="Illustration lifestyle"
            width={100}
            height={100}
          />
        </div>
        <h2>Choose your lifestyle</h2>
        <p>
          Own your daily schedule. Fancy a lie-in? Go for it! Take charge of
          your week.
        </p>
      </div>
      <div>
        <div>
          <Image
            src="/assets/illustration-work-anywhere.svg"
            alt="Illustration work anywhere"
            width={100}
            height={100}
          />
        </div>
        <h2>Work from anywhere</h2>
        <p>
          Selling online means not being pinned down. Want to work AND travel?
          Go for it!
        </p>
      </div>
    </section>
  );
}

export default Features