import { RxCrop, RxPencil2, RxDesktop } from "react-icons/rx";

export const serviceData = [
  {
    icon: <RxCrop />,
    title: "Branding",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: <RxPencil2 />,
    title: "Graphic Design",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: <RxDesktop />,
    title: "Web Development",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

// Components
import ServiceSlider from "../../components/ServiceSlider";
import Bulb from "../../components/Bulb";

// Framer Motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import Head from "next/head";

const Services = () => {
  return (
    <section className="h-full bg-primary/30 py-36 flex items-center xl:items-baseline">
      <Head>
        <title>Services</title>
        <meta
          name="description"
          content="Discover the IT services we offer, including branding, graphic design, and web development."
        />
        {/* Additional SEO Meta Tags */}
        <meta property="og:title" content="Our Services" />
        <meta
          property="og:description"
          content="Discover the IT services we offer, including branding, graphic design, and web development."
        />
        <meta property="og:image" content="your-image-url.jpg" />
        <meta property="og:url" content="your-page-url.com" />
      </Head>
      <div className="container  mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          <div className="text-center md:items-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 xl:mt-8"
            >
              Services
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 max-w-[400px] mx-auto lg:mx-0 text-justify font-normal"
            >
              I specialize in offering innovative IT services that drive digital
              transformation. Whether you&apos;re a startup looking for your
              first website or a large enterprise needing custom software
              solutions, I provide tailored solutions designed to meet your
              unique business needs.
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
        </div>
      </div>
      <Bulb />
    </section>
  );
};

export default Services;
