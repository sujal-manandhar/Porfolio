//components
import WorkSlider from "../../components/WorkSlider";
import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";

//framer motion

import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import Head from "next/head";

const Work = () => {
  return (
    <div className="h-full bg-primary/30 py-36 flex items-center">
      <Head>
        <title>Work</title>
        <meta name="description" content="Know about us" />
      </Head>
      <div className="  container mx-auto my-auto ">
        <div className="flex flex-col xl:flex-row gap-x-8">
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0 ">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 xl:mt-12"
            >
              Projects <span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 max-w-[400px] mx-auto lg:mx-0"
            >
              Your business can realise its full potential. We are a team who
              believe that technology is the panacea for all your business. Our
              Purpose is to help our customers to reach their full potential and
              create effective business solutions.
            </motion.p>
          </div>
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[65%]"
          >
            <WorkSlider />
          </motion.div>
          {/* Slider */}
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Work;
