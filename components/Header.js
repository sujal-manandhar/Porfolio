import Image from "next/image";
import Link from "next/link";

import Socials from "../components/Socials";

const Header = () => {
  return (
    <header className="absolute z-30 w-full  flex items-center px-4 sm:px-8 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto ">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-12 sm:py-12">
          <Link href={"/"}>
            {/* <Image src={'/trion.svg'} width={320} height={48} alt='' priority={true} /> */}
            <p className="font-bold text-3xl sm:text-4xl text-red-600 xl:mt-9 ">
              Sujal Manandhar
            </p>
          </Link>
          {/* socials */}
          <div className="lg:flex space-x-6 ">
            <Socials />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
