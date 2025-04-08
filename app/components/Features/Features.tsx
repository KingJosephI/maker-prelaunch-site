import { ReactNode } from "react";
import Feature from "./Feature/Feature";
import { featuresList } from "./data/featuresList";

const Features = (): ReactNode => {
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

export default Features;
