import { FeatureType } from "../types/Feature";
import FeatureIcon from "./FeatureIcon";

const Feature: React.FC<FeatureType> = ({ title, description, image }) => {
  return (
    <div className="max-sm:text-center md:flex lg:flex-col">
      <FeatureIcon imageSource={image} />
      <div className="md:ml-14 lg:ml-0">
        <h2 className="pb-[11px] pt-[32px]">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Feature;
