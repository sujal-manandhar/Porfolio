import Link from "next/link";

import {
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookLine,
  RiDribbbleLine,
  RiBehanceLine,
  RiPinterestLine,
  RiLinkedinBoxFill,
  RiTwitterFill,
} from "react-icons/ri";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link
        href={"https://x.com/sujalmdr"}
        className="hover:text-accent transition-all duration-300"
      >
        <RiTwitterFill />
      </Link>

      <Link
        href={
          "https://www.instagram.com/suzal_manandhar/profilecard/?igsh=MWlpZnY0d281dGxjZw%3D%3D"
        }
        className="hover:text-accent transition-all duration-300"
      >
        <RiInstagramLine />
      </Link>

      <Link
        href={"https://www.facebook.com/sujal.mdhr79/"}
        className="hover:text-accent transition-all duration-300"
      >
        <RiFacebookLine />
      </Link>

      <Link
        href={"https://www.linkedin.com/in/sujal-manandhar07/"}
        className="hover:text-accent transition-all duration-300"
      >
        <RiLinkedinBoxFill />
      </Link>

      {/* <Link href={''} className="hover:text-accent transition-all duration-300">
      <RiBehanceLine/>
      </Link>

      <Link href={''} className="hover:text-accent transition-all duration-300">
      <RiPinterestLine/>
      </Link> */}
    </div>
  );
};

export default Socials;
