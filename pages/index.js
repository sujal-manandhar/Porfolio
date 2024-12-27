import { motion } from "framer-motion";
import ParticlesContainer from "../components/ParticlesContainer";
import { BsArrowRight } from "react-icons/bs";
import { fadeIn } from "../variants";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";
import Head from "next/head";
import Link from "next/link";
import { FaDownload } from "react-icons/fa";

const Home = () => {
  return (
    <div className="bg-primary/60 relative  h-full">
      <Head>
        <title>Sujal Manandhar</title>
      </Head>
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1"
          >
            Transforming Ideas <br /> Into {""}
            <span className="text-accent">Digital Reality</span>
          </motion.h1>
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className=" font-medium text-lg max-w-sw xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16"
          >
            I am an experienced and diligent IT worker. I am skilled in
            providing efficient and effective solutions. I thrive in team
            contexts and enjoy working towards shared goals since I have strong
            communication and cooperation skills. I am a technology enthusiast
            willing to lend my abilities to a creative IT firm that appreciates
            innovation and excellence.
          </motion.p>

          {/* Buttons Section */}
          <div className="flex justify-center xl:justify-start space-x-4 mb-10 xl:mb-16">
            <Link
              className="hover:cursor-pointer"
              href="\Sujal Manandhar CV.pdf"
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
                  Contact Us
                </span>
                <BsArrowRight
                  className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 
                  transition-all duration-300 absolute text-[22px]"
                />
              </button>
            </Link>

            {/* Download CV Button */}
          </div>
        </div>
      </div>

      {/* Image and Background */}
      <div className="w-[1000px] h-full absolute right-0 bottom-0 -z-100 ">
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
          lg:bottom-0 lg:right-[8%] "
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;