import Image from "next/image";

type IconProps = {
  imageSource: string
}
const FeatureIcon: React.FC<IconProps> = ({ imageSource }) => {
  return (
    <div className="bg-feature-blue w-[120px] h-[124px] flex justify-center items-center rounded-[50px] max-sm:mx-auto">
      <Image src={imageSource} alt="illustration" width={50} height={50} />
    </div>
  );
};

export default FeatureIcon
