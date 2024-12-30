import { useState, useEffect } from "react";
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

// Data for the services
const serviceData = [
  {
    icon: <RxPencil2 />,
    title: "Design",
    description: "We will design your product in the best manner possible.",
  },
  {
    icon: <RxDesktop />,
    title: "Development",
    description:
      "My team and I ensure that your product is built with the best practices.",
  },
  {
    icon: <RxCrop />,
    title: "Visualization",
    description:
      "I help you bring your ideas to life, making them impactful for your audience.",
  },
  {
    icon: <RxReader />,
    title: "Deployment",
    description: "DevOps work will be handled by our team.",
  },
  {
    icon: <RxRocket />,
    title: "Testing",
    description: "All the testing will be done and extra services.",
  },
  {
    icon: <RxRocket />,
    title: "Additional Services",
    description: "Additional services and packages offered as per request.",
  },
];

const ServiceSlider = () => {
  // State to track screen size
  const [isMobile, setIsMobile] = useState(false);

  // Track window size changes
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024); // Set to true for mobile sizes and false for larger screens
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Call initially to set the state correctly

    return () => window.removeEventListener("resize", handleResize); // Cleanup listener
  }, []);

  return (
    <div className="service-slider">
      {/* Swiper for small and medium screens */}
      {isMobile && (
        <Swiper
          breakpoints={{
            320: {
              slidesPerView: 1, // 1 slide per view on small screens
              spaceBetween: 15,
            },
            640: {
              slidesPerView: 3, // 3 slides per view on medium screens
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3, // 3 slides per view on larger tablets and smaller desktops
              spaceBetween: 20,
            },
          }}
          freeMode={true}
          pagination={{ clickable: true }} // Pagination will be active only for small/medium screens
          modules={[FreeMode, Pagination]}
          className="h-[240px] sm:h-[340px]" // Adjust Swiper size
        >
          {serviceData.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300">
                <div className="text-4xl text-orange-500 mb-4">{item.icon}</div>
                <div className="mb-8">
                  <div className="mb-2 text-lg">{item.title}</div>
                  <p className="max-w-[350px] leading-normal">
                    {item.description}
                  </p>
                </div>
                <div className="text-3xl">
                  <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-blue-500 transition-all duration-300" />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}

      {/* Grid layout for large screens (desktop) */}
      {!isMobile && (
        <div className="lg:grid lg:grid-cols-3 xl:grid-cols-3 gap-6 mt-12">
          {/* Display items in a grid for large and extra-large screens */}
          {serviceData.map((item, index) => (
            <div
              key={index}
              className="bg-[rgba(65,47,123,0.15)] rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300"
            >
              <div className="text-4xl text-orange-500 mb-4">{item.icon}</div>
              <div className="mb-8">
                <div className="mb-2 text-lg">{item.title}</div>
                <p className="max-w-[350px] leading-normal">
                  {item.description}
                </p>
              </div>
              <div className="text-3xl">
                <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-blue-500 transition-all duration-300" />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ServiceSlider;
