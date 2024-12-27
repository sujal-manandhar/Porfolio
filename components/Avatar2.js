import Image from "next/image";

const Avatar2 = () => {
  return (
    <div className=" xl:items-end  ml-28 hidden xl:flex xl:max-w-none ">
      <Image
        src={"/sujal.png"}
        width={400}
        height={678}
        alt="test"
        className="translate-z-0 w-full h-[70%] animate-pulse duration-200"
        priority={true}
      />
    </div>
  );
};

export default Avatar2;
