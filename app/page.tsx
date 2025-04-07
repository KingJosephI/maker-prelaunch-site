import Image from "next/image";

export default function Home() {
  return (
    <>
      <header>
        <Image src="/assets/logo.svg" alt="logo" width={100} height={100} />
      </header>
      <main>
        <section>
          <h1>Get paid for the work you love to do.</h1>
          <p>
            The 9-5 grind is so last century. We believe in living life on your
            own terms. Whether you’re looking to escape the rat race or set up a
            side hustle, we’ve got you covered.
          </p>
        </section>
        <section>
          <div>
            <div>
              <Image
                src="/assets/logo.svg"
                alt="logo"
                width={100}
                height={100}
              />
            </div>
            <h2>Indulge your passions</h2>
            <p>
              Your passions shouldn't be just for the weekend. Earn a living
              doing what you love.
            </p>
          </div>

          <div>
            <div>
              <Image
                src="/assets/logo.svg"
                alt="logo"
                width={100}
                height={100}
              />
            </div>
            <h2>Gain financial freedom</h2>
            <p>
              Start making money work for you. There’s nothing quite like
              earning while you sleep.
            </p>
          </div>

          <div>
            <div>
              <Image
                src="/assets/logo.svg"
                alt="logo"
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
                src="/assets/logo.svg"
                alt="logo"
                width={100}
                height={100}
              />
            </div>
            <h2>Work from anywhere</h2>
            <p>
              Selling online means not being pinned down. Want to work AND
              travel? Go for it!
            </p>
          </div>
        </section>

        <section>
          <h2>Our pricing plans</h2>
          <p>
            We only make money when our creators make money. Our plans are
            always affordable, and it’s completely free to get started.
          </p>
          <div>
            <div>
              <Image
                src="/assets/logo.svg"
                alt="logo"
                width={100}
                height={100}
              />
              <h3>Dip your toe</h3>
              <p>
                Just getting started? No problem at all! Our free plan will take
                you a long way.
              </p>
              <div>Free</div>
              <ul>
                <li>Unlimited products</li>
                <li>Basic analytics</li>
                <li>Limited marketplace exposure</li>
                <li>10% fee per transaction</li>
              </ul>
            </div>
            <div>
              <Image
                src="/assets/logo.svg"
                alt="logo"
                width={100}
                height={100}
              />
              <h3>Dive right in</h3>
              <p>
                Ready for the big time? Our paid plan will help you take your
                business to the next level.
              </p>
              <div>$25.00 /month</div>
              <ul>
                <li>Custom domain</li>
                <li>Advanced analytics and reports</li>
                <li>High marketplace visibility</li>
                <li>5% fee per transaction</li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <h2>Get notified when we launch</h2>
        <form>
          <input type="email" placeholder="Email address" />
          <button>Get notified</button>
        </form>
      </footer>
    </>
  );
}
