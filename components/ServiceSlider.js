import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";

import { FreeMode, Pagination } from "swiper";

// data
const serviceData = [
  {
    icon: <RxPencil2 />,
    title: "Design",
    description: "We will design your product in best Manner Possible.",
  },
  {
    icon: <RxDesktop />,
    title: "Development",
    description:
      "My team and I ensure that your product is built with the best practices.",
  },
  {
    icon: <RxCrop />,
    title: "Visualization ",
    description:
      "I help you bring your ideas to life, making them impactful for your audience.",
  },

  {
    icon: <RxReader />,
    title: "Deployment",
    description: "Devops work will be handle by our team.",
  },
  {
    icon: <RxRocket />,
    title: "Testing",
    description: "All the testing will be done and extra services.",
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },

        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{ clickable: true }}
      modules={[FreeMode, Pagination]}
      className="h-[240px] sm:h-[340px]"
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div
              className="bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer
            hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300"
            >
              <div className="text-4xl text-orange-500 mb-4">{item.icon}</div>
              <div className="mb-8">
                <div className="mb-2 text-lg">{item.title}</div>
                <p className="mx-w-[350px] leading-normal">
                  {item.description}
                </p>
              </div>
              <div className="text-3xl">
                <RxArrowTopRight
                  className="group-hover:rotate-45
                group-hover:text-blue-500 transition-all duration-300
                "
                />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
