import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
} from "react-icons/rx";

export const serviceData = [
  {
    icon: <RxCrop />,
    title: "Branding",
    description: "Lorem ispum dolor sit amet, consectetur adipisting elit",
  },
  {
    icon: <RxPencil2 />,
    title: "Branding",
    description: "Lorem ispum dolor sit amet, consectetur adipisting elit",
  },
  {
    icon: <RxDesktop />,
    title: "Branding",
    description: "Lorem ispum dolor sit amet, consectetur adipisting elit",
  },
];

//components
import ServiceSlider from "../../components/ServiceSlider";
import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";

//framer motion

import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import Head from "next/head";

const Services = () => {
  return (
    <div className="h-full bg-primary/30 py-36 flex items-center">
      <Head>
        <title>Services</title>
        <meta name="description" content="Know about us" />
      </Head>
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 xl:mt-8"
            >
              Services <span className="text-accent"></span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 max-w-[400px] mx-auto lg:mx-0"
            >
              My mission is to deliver cutting-edge IT solutions and services
              that enable organizations in Nepal to unlock their full potential.
            </motion.p>
          </div>
          <motion.div
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[65%]"
          >
            <ServiceSlider />
          </motion.div>
          {/* Slider */}
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Services;
