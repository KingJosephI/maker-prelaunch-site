import Image from "next/image";
import { FeatureType } from "../types/Feature";

const Feature: React.FC<FeatureType> = ({ title, description, image }) => {
  return (
    <div>
      <div>
        <Image src={image} alt="illustration" width={50} height={50} />
      </div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Feature;
