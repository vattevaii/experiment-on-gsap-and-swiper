import clsx from "clsx";
import React, { useEffect, useRef, useState } from "react";

import Swiper, { Autoplay, EffectCreative } from "swiper";
import { Swiper as Slider, SwiperSlide } from "swiper/react";
import "./style.css";
type Props = {};

export default function ServicesPage({}: Props) {
  const [activeSlide, setActiveSlide] = useState(0);
  const titleSwiper = useRef<Swiper | null>(null);
  const summarySwiper = useRef<Swiper | null>(null);
  const initSliders = () => {
    titleSwiper.current = new Swiper(".slide-services-title", {
      spaceBetween: 0,
      effect: "creative",
      direction: "vertical",
      loop: true,
      autoplay: {
        delay: 1000,
        disableOnInteraction: false,
      },
      speed: 800,
      creativeEffect: {
        next: {
          translate: [0, 0, 0],
          opacity: 0,
        },
        prev: {
          translate: [0, 0, 0],
          opacity: 0,
        },
      },
      modules: [Autoplay, EffectCreative],
    });
    summarySwiper.current = new Swiper(".slide-services-summary", {
      spaceBetween: 0,
      effect: "creative",
      direction: "vertical",
      loop: true,
      autoplay: {
        delay: 1000,
        disableOnInteraction: false,
      },
      speed: 800,
      creativeEffect: {
        next: {
          translate: [0, 0, 0],
          opacity: 0,
        },
        prev: {
          translate: [0, 0, 0],
          opacity: 0,
        },
      },
      modules: [Autoplay, EffectCreative],
    });
  };
  const destroySliders = () => {
    if (titleSwiper.current?.destroyed === false)
      titleSwiper.current?.destroy();
    titleSwiper.current = null;
    if (summarySwiper.current?.destroyed === false)
      summarySwiper.current?.destroy();
    summarySwiper.current = null;
  };
  const data = [
    { title: ["Slide 1", "Hello World"], summary: "Summary of the title  1" },
    { title: ["Slide 2"], summary: "Summary of the title  2" },
    { title: ["Slide 3"], summary: "Summary of the title  3" },
    { title: ["Slide 4"], summary: "Summary of the title  4" },
    { title: ["Slide 5"], summary: "Summary of the title  5" },
  ];

  useEffect(() => {
    initSliders();

    return () => {
      destroySliders();
    };
  }, []);
  return (
    <div className="">
      <Slider className="slide-services-title">
        {data.map((item, i) => (
          <SwiperSlide key={i}>
            <div className="center-items center-text" style={{}}>
              {item.title.map((title) => (
                <>
                  <h1 className={"services-title"}>{title}</h1>
                  <br />
                </>
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Slider>
      <hr style={{ width: "60%", height: "20px" }} />
      <Slider className="slide-services-summary">
        {data.map((item, i) => (
          <SwiperSlide key={i}>
            <div className="center-items center-text" style={{}}>
              <div className="services-summary">{item.summary}</div>
            </div>
          </SwiperSlide>
        ))}
      </Slider>
    </div>
  );
}
