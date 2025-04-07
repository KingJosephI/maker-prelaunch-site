"use client";

import Image from "next/image";

const Pricing = () => {
  return (
    <section>
      <h2>Our pricing plans</h2>
      <p>
        We only make money when our creators make money. Our plans are always
        affordable, and it’s completely free to get started.
      </p>
      <div>
        <div>
          <Image
            src="/assets/icon-free.svg"
            alt="Icon free"
            width={100}
            height={100}
          />
          <h3>Dip your toe</h3>
          <p>
            Just getting started? No problem at all! Our free plan will take you
            a long way.
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
            src="/assets/icon-paid.svg"
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
  );
}

export default Pricing