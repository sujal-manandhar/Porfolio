import { motion } from "framer-motion";
import ParticlesContainer from "../components/ParticlesContainer";
import { BsArrowRight } from "react-icons/bs";
import { fadeIn } from "../variants";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";
import Head from "next/head";
import Link from "next/link";
import { FaDownload } from "react-icons/fa";
import Circles from "../components/Circles";
import { ReactTyped } from "react-typed";

const Home = () => {
  return (
    <div className="bg-primary/6 relative h-full">
      <Head>
        <title>Sujal Manandhar</title>
      </Head>
      <div className="w-full h-full   bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center  flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto px-4 sm:px-6 md:px-8">
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1 text-3xl mt-20  lg:mt-0 sm:text-4xl md:text-5xl xl:text-6xl font-semibold mb-4"
          >
            Hi, It&apos;s {""}
            <span className="text-accent">Sujal Manandhar</span>
            <div className="text-[30px] md:text-[35px] mt-4  text-white font-bold justify-start">
              I&apos;m a
              <ReactTyped
                className="pl-2 text-accent"
                strings={[
                  "Web Designer",
                  "Software Developer",
                  "Graphic Designer",
                  "UI UX Designer",
                  "Photographer",
                ]}
                typeSpeed={40}
                loop={true}
                backSpeed={50}
              />
            </div>
          </motion.h1>

          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="font-medium text-justify text-lg sm:text-xl md:text-2xl max-w-sw xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16"
          >
            I am an experienced and diligent IT worker. I am skilled in
            providing efficient and effective solutions. I thrive in team
            contexts and enjoy working towards shared goals since I have strong
            communication and cooperation skills. I am a technology enthusiast
            willing to lend my abilities to a creative IT firm that appreciates
            innovation and excellence.
          </motion.p>
          {/* Buttons Section */}
          <div className="flex flex-row justify-center xl:justify-start space-x-4 mb-10 xl:mb-16 z-10">
            <Link
              className="hover:cursor-pointer"
              href="/Sujal Manandhar CV.pdf"
              download="Sujal_Manandhar_CV"
            >
              <button className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group">
                <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                  Download CV
                </span>
                <FaDownload
                  className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 
                transition-all duration-300 absolute text-[22px]"
                />
              </button>
            </Link>
            {/* Contact Us Button */}
            <Link href="mailto:sujalmanandhar11@gmail.com" target="_blank">
              <button className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group">
                <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                  Contact Me
                </span>
                <BsArrowRight
                  className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 
                  transition-all duration-300 absolute text-[22px]"
                />
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Image and Background */}
      <div className="w-full xl:w-[1000px] h-full absolute right-0 bottom-0 -z-100">
        <div
          className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full 
          h-full absolute mix-blend-color-dodge translate-z-0"
        ></div>
        <ParticlesContainer />
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32 
          lg:bottom-0 lg:right-[5%] xl:right-[5%] mx-auto"
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
