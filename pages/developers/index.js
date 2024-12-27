import TestimonialSlider from "../../components/TestimonialSlider";

import {motion} from 'framer-motion';
import {fadeIn} from '../../variants';
import Head from "next/head";
const Testimonials = () => {
  return (
    <div className="h-full bg-primary/30 py-32 text-center">
       <Head>
        <title>Testimonials</title>
        <meta name="description" content="Know about us" />
      </Head>
      <div className="container mx-auto h-full flex flex-col justify-center">
        {/* title */}
        <motion.h2 
        variants={fadeIn('up', 0.4)}
        initial = 'hidden'
        animate='show'
        exit='hidden'
        className="h2 mb-8 xl:mb-0">
         Our <span className="text-accent">Developers.</span>
        </motion.h2>
        <motion.div
               variants={fadeIn('up', 0.6)}
               initial = 'hidden'
               animate='show'
               exit='hidden'
        >
          <TestimonialSlider />
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;
