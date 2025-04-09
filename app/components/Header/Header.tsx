import Image from "next/image";

export const Header = () => {
  return (
    <header className="px-6 md:px-24 lg:px-[10.3125rem] max-sm:flex max-sm:justify-center pt-10 pb-16">
      <Image src="/assets/logo.svg" alt="logo" width={100} height={100} />
    </header>
  );
}

