import React, { useEffect, useRef } from "react";
import Swiper, { Autoplay } from "swiper";
import { Swiper as Slider, SwiperSlide } from "swiper/react";
import FSlide from "./FPage/FSlide";
import SSlide from "./FPage/SSlide";
import TSlide from "./FPage/TSlide";

type Props = {};

export default function FPage({}: Props) {
  const firstSwiper = useRef<Swiper | null>(null);
  const initSliders = () => {
    firstSwiper.current = new Swiper(".slide-1", {
      spaceBetween: 0,
      effect: "slide",
      loop: true,
      autoplay: {
        delay: 1000,
        disableOnInteraction: false,
      },
      speed: 800,
      modules: [Autoplay],
    });
  };
  const destroySliders = () => {
    if (firstSwiper.current?.destroyed === false)
      firstSwiper.current?.destroy();
    firstSwiper.current = null;
  };

  useEffect(() => {
    initSliders();

    return () => {
      destroySliders();
    };
  }, []);
  return (
    <div className="">
      <Slider className="slide-1 container">
        {[FSlide, SSlide, TSlide].map((Child, i) => (
          <SwiperSlide key={i}>
            <div
              className="slide"
              style={{ background: `rgba(${150 / i},${255 / i},${255 / i},1)` }}
            >
              <Child />
            </div>
          </SwiperSlide>
        ))}
      </Slider>
    </div>
  );
}
