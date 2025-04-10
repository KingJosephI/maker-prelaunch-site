import Image from "next/image";

type IconProps = {
  imageSource: string
}
const FeatureIcon: React.FC<IconProps> = ({ imageSource }) => {
  return (
    <div className="relative bg-feature-blue w-[120px] h-[124px] rounded-[50px] max-md:mx-auto">
      <Image src={imageSource} alt="illustration" width={50} height={50} className='feature-icon'/>
    </div>
  );
};

export default FeatureIcon
