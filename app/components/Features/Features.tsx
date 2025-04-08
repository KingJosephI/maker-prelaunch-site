import { ReactNode } from "react";
import Feature from "./Feature/Feature";
import { featuresList } from "./data/featuresList";

const Features = (): ReactNode => {
   return (
     <section className="flex flex-col gap-14 lg:h-[300px] lg:flex-row lg:[&>*:nth-child(even)]:self-end md:[&>*:nth-child(odd)]:ml-14 lg:[&>*:nth-child(odd)]:ml-0">
       {featuresList.map((feature) => (
         <Feature
           key={feature.id}
           title={feature.title}
           description={feature.description}
           image={feature.image}
         />
       ))}
     </section>
   );
};

export default Features;
