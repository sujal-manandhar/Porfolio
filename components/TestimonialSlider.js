// testimonial data
export const testimonialData = [
  {
    image: "/testmonit.png",
    name: "Mohit Verma",
    position: "Senior Developer",
    message:
      "He is the senior developer in the company having 5+ years of Experience from Google, Amazon mastering in System engineering.",
  },
  {
    image: "/testimonial2.png",
    name: "Vishal Sahu",
    position: "Front End Engineer",
    message:
      "Experienced Frontend engineeer with 2 Years puls in Reactjs, Html, Css Javascript completed industry level projects. ",
  },
  {
    image: "/test3.png",
    name: "Prem Basnet",
    position: "C.T.O",
    message:
      "Chief Technical Officer with more than 5 years of experience and have sucessfully delivered industry level projects.",
  },
];

// data

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation, Autoplay } from "swiper";
import { FaQuoteLeft } from "react-icons/fa";
import Image from "next/image";

// data
const TestimonialSlider = () => {
  return (
    <Swiper
    
      spaceBetween={10}
      autoplay={{
        delay: 5000,
      
        disableOnInteraction: false
       }}
       loop={true}
      pagination={{ clickable: true }}
      modules={[Navigation, Pagination,Autoplay]}
      className="h-[480px]"
    >
      {testimonialData.map((person, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center md:flex-row gap-x-8 h-full px-16">
              {/* avatar name position */}
              <div className="w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0">
                <div className='flex flex-col justify-center text-center'>
                  <div className='mb-2 mx-auto'>
                    <Image 
                    src={person.image}
                    width={100}
                    height={100}
                    alt="test"
                    priority={true}
                    />
                  </div>
                  <div className='text-lg'>{person.name}</div>
                  <div className="text-[12px] uppercase font-extralight
                  tracking-widest
                  " >{person.position}</div>
                </div>
              </div>
              {/* quote andmessage */}
              <div
                className=" flex-1
       flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative
       xl:pl-20"
              >
                <div className="mb-4">
                  <FaQuoteLeft className="text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0" />
                </div>
                <div>
                  {/* message */}
                  <div className="xl:text-lg text-center md:text-left">
                    {person.message}
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TestimonialSlider;
