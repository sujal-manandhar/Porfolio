import Image from "next/image";

const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none ">
      <Image
        src={"/Sujal.png"}
        width={737}
        height={678}
        alt="test"
        className="translate-z-0 w-full h-full"
        priority={true}
      />
    </div>
  );
};

export default Avatar;
