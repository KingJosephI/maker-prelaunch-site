"use client";

import Image from "next/image";

export const Pricing = () => {
  return (
    <section className="px-6 md:px-24 lg:px-[10.3125rem]">
      <h2 className="text-2xl md:text-[2rem] text-center">Our pricing plans</h2>
      <p className="text-center pt-[27px] pb-[56px]">
        We only make money when our creators make money. Our plans are always
        affordable, and it’s completely free to get started.
      </p>
      <div className="flex flex-col gap-8 lg:flex-row lg:justify-center">
        <div className="max-w-[27rem] rounded-xl bg-feature-blue px-[2.375rem] pt-[4.5rem] pb-12 relative">
          <Image
            src="/assets/icon-free.svg"
            alt="Icon free"
            width={46}
            height={46}
            className="absolute -top-5 left-6"
          />
          <h3 className="pricing-heading">Dip your toe</h3>
          <p className="text-white opacity-50 pt-[19px] pb-[24px]">
            Just getting started? No problem at all! Our free plan will take you
            a long way.
          </p>
          <div className="pricing-cost">Free</div>
          <ul className="pricing-list-free pl-6">
            <li>Unlimited products</li>
            <li>Basic analytics</li>
            <li>Limited marketplace exposure</li>
            <li>10% fee per transaction</li>
          </ul>
        </div>
        <div className="max-w-[27rem] rounded-xl bg-[#3EE9E5] px-[2.375rem] pt-[4.5rem] pb-12 text-backcolor relative">
          <Image
            src="/assets/icon-paid.svg"
            alt="logo"
            width={46}
            height={46}
            className="absolute -top-5 left-6"
          />
          <h3 className="pricing-heading">Dive right in</h3>
          <p className="text-backcolor opacity-75 pt-[19px] pb-[24px]">
            Ready for the big time? Our paid plan will help you take your
            business to the next level.
          </p>
          <div className="pricing-cost flex items-center gap-1">
            <span>$25.00</span>
            <span className="font-normal text-[15px] lh-10">/month</span>
          </div>
          <ul className="pricing-list-paid pl-6">
            <li>Custom domain</li>
            <li>Advanced analytics and reports</li>
            <li>High marketplace visibility</li>
            <li>5% fee per transaction</li>
          </ul>
        </div>
      </div>
    </section>
  );
};
