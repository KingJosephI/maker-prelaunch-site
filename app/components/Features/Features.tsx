import { ReactNode } from "react";
import { featuresList } from "./data/featuresList";
import Feature from "./components/Feature";

export const Features = (): ReactNode => {
   return (
     <section id="features" className="features-section px-6 md:px-24 lg:px-[10.3125rem]">
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

