import React, { useEffect, useRef, useState } from "react";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
  FaDownload,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
  SiCanva,
  SiAdobepremierepro,
  SiWondersharefilmora,
  SiDavinciresolve,
} from "react-icons/si";

import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { fadeIn } from "../../variants";

export const aboutData = [
  {
    title: "Skills",
    info: [
      {
        stage: "Web Development",
        icons: [
          <FaReact key="react" />,
          <FaHtml5 key="html5" />,
          <FaCss3 key="css3" />,
          <FaJs key="js" />,
          <FaWordpress key="wordpress" />,
          <SiFramer key="framer" />,
          <SiNextdotjs key="nextjs" />,
        ],
      },
      {
        stage: "UI UX Design",
        icons: [
          <FaFigma key="figma" />,
          <SiAdobephotoshop key="photoshop" />,
          <SiAdobexd key="adobexd" />,
          <SiCanva key="canva" />,
        ],
      },
      {
        stage: "Video Editing",
        icons: [<SiAdobepremierepro key="premierepro" />],
      },
    ],
  },
  {
    title: "Experience",
    info: [
      {
        stage: "Frontend Developer -Trion Tech Solution",
      },
      {
        stage: "UI/UX Designer -Truenary Solution",
      },
      {
        stage: "Software Developer - Kutumba Tech",
      },
    ],
  },
  {
    title: "Certificate",
    info: [
      {
        stage: "Click here to Download",
        icons: [<FaDownload key="download" />],
      },
    ],
  },
];

import Head from "next/head";
import Avatar2 from "../../components/Avatar2";
import ParticlesContainer from "../../components/ParticlesContainer";
import Circles from "../../components/Circles";

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 5000 });
  const isInview = useInView(ref, { once: true });

  useEffect(() => {
    if (isInview) {
      motionValue.set(value);
    }
  }, [isInview, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

const About = () => {
  const [index, setIndex] = useState(0);

  console.log(index);
  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      {/* particles */}

      <Head>
        <title>About Us</title>
        <meta name="description" content="Know about us" />
      </Head>
      <Circles />
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[450px]"
      >
        <Avatar2 />
      </motion.div>
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            Simplifying <span className="text-accent">Complexity</span>{" "}
            Maximizing Efficiency
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] mx-auto xl:mx-0 mb-12 xl:mb-6 px-2 xl:px-0"
          >
            To be the leading provider of innovative and reliable IT solutions
            in Nepal, driving digital transformation and empowering businesses
            to thrive in the digital era
          </motion.p>
          {/* counters */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <AnimatedNumbers value={5} />+
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Years of Experience
                </div>
              </div>
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <AnimatedNumbers value={7} />+
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Finished Projects
                </div>
              </div>
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <AnimatedNumbers value={10} />+
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Satisfied Clients
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        {/* info */}
        <ParticlesContainer />
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4 font-normal">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${
                    index === itemIndex &&
                    "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                  }
                  cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className="py-2 xl:py-6 flex xl:text-lg flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className="flex-1 xl:text-lg flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
                >
                  <div className="font-light xl:text-lg">{item.title}</div>
                  <div className="hidden md:flex">-</div>
                  <div className="xl:text-lg text-white font-normal mt-4 md:mt-0 ">
                    {item.stage}
                  </div>
                  <div className="flex gap-x-4 mt-2 md:mt-0">
                    {item.icons &&
                      item.icons.map((icon, iconIndex) => {
                        return (
                          <div
                            key={iconIndex}
                            className={`text-2xl ml-2 text-white hover:text-red-700 cursor-pointer`}
                          >
                            {icon}
                          </div>
                        );
                      })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
