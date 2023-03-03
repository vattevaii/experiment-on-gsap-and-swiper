import FPage from "./FPage";
import SPage from "./SPage";
import TProj from "./TProj";
import React, { useEffect, useRef } from "react";
import Swiper, {
  EffectFade,
  Mousewheel,
  EffectCards,
  EffectCreative,
  Navigation,
} from "swiper";
import { Swiper as Slider, SwiperSlide } from "swiper/react";
import { atom, useAtom } from "jotai";
import { navScreenAtom } from "../../global/states";
import debounce from "lodash/debounce";

type Props = {};
export const lastSlideAtom = atom(false);

export default function FProj({}: Props) {
  const [slideIsLast, setSlideIsLastt] = useAtom(lastSlideAtom);
  const [navScreenIsOpen, setNavScreenIsOpen] = useAtom(navScreenAtom);
  const firstSwiper = useRef<Swiper | null>(null);
  const initSliders = () => {
    firstSwiper.current = new Swiper(".project-slider", {
      spaceBetween: 30,
      effect: "creative",
      on: {
        slideChange: onNext,
      },
      mousewheel: {
        thresholdDelta: 5,
        sensitivity: 0.01,
        thresholdTime: 1000,
        releaseOnEdges: true,
      },
      creativeEffect: {
        perspective: true,
        limitProgress: 1,
        prev: {
          shadow: true,
          translate: [0, "-100%", 5],
        },
        next: {
          shadow: false,
          translate: [0, 0, 0],
        },
      },
      modules: [
        EffectFade,
        Mousewheel,
        EffectCards,
        EffectCreative,
        Navigation,
      ],
    });
  };
  const destroySliders = () => {
    if (firstSwiper.current?.destroyed === false)
      firstSwiper.current?.destroy();
    firstSwiper.current = null;
  };

  const onNext = (swiper: Swiper) => {
    console.log("Real, Slides Length", swiper.realIndex, swiper.slides.length);
    if (swiper.realIndex === swiper.slides.length - 1) setSlideIsLastt(true);
    else setSlideIsLastt(false);
  };

  const nextItem = debounce(
    () => {
      if (slideIsLast && navScreenIsOpen) {
        setNavScreenIsOpen(false);
        firstSwiper.current?.slideTo(0);
      } else if (slideIsLast) {
        setNavScreenIsOpen(true);
      } else {
        firstSwiper.current?.slideNext();
      }
    },
    1000,
    { trailing: false, leading: true }
  );
  const prevItem = debounce(
    () => {
      if (slideIsLast && navScreenIsOpen) {
        setNavScreenIsOpen(false);
      } else {
        firstSwiper.current?.slidePrev();
      }
    },
    1000,
    { trailing: false, leading: true }
  );

  useEffect(() => {
    initSliders();

    return () => {
      destroySliders();
    };
  }, []);
  return (
    <div
      onWheel={(e) => {
        console.log(e);
        if (e.deltaY > 10) nextItem();
        if (e.deltaY < -10) prevItem();
      }}
    >
      <Slider className="container project-slider">
        {[FPage, SPage, TProj].map((Child, i) => (
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
      <div className="static-button center-text">
        <button className="nextItem" onClick={nextItem}>
          Next
        </button>
      </div>
    </div>
  );
}
