import { ReactNode } from "react";
import { featuresList } from "./data/featuresList";
import Feature from "./components/Feature";

export const Features = (): ReactNode => {
   return (
     <section className="features-section">
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

