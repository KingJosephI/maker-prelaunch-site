import Feature from "./Feature/Feature";
import { featuresList } from "./data/data";

const Features = () => {
   return (
    <section className="flex flex-col md:flex-row">
      {featuresList.map((feature) => (
        <Feature
          key={feature.title}
          title={feature.title}
          description={feature.description}
          image={feature.image}
        />
      ))}
    </section>
  );
};

export default Features;
