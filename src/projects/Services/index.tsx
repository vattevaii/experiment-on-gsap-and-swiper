import clsx from "clsx";
import React, { useEffect, useMemo, useState } from "react";
import "./style.css";
import { gsap } from "gsap";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
type Props = {};

const changeByWidth = gsap.utils.mapRange(0, window.innerWidth, 0, 1);
gsap.registerPlugin(CSSRulePlugin);

export default function Services({}: Props) {
  const [activeSlide, setActiveSlide] = useState(0);
  const data = [
    { title: ["Slide 1", "Hello World"], summary: "Summary of the title  1" },
    { title: ["Slide 2"], summary: "Summary of the title  2" },
    { title: ["Slide 3"], summary: "Summary of the title  3" },
    { title: ["Slide 4"], summary: "Summary of the title  4" },
    { title: ["Slide 5"], summary: "Summary of the title  5" },
  ];
  useEffect(() => {
    const t1 = gsap.timeline({ defaults: { duration: 1 } });
    t1.to(".title", { duration: 1, x: "50vw", y: 100, opacity: 0 })
      .to(".title.isPrev", { duration: 1, y: 0, opacity: 0 }, "<")
      .fromTo(
        "html",
        { "--active-title-height": "100%", "--title-height": "0%" },
        { "--active-title-height": "0%", "--title-height": "100%" },
        "<"
      )
      .to(".title.isActive", { y: 50, duration: 1, opacity: 1 }, "<");
  }, [activeSlide]);
  useEffect(() => {
    gsap.to(".title", { translate: "-50% -100%" });
    const timeout = setInterval(
      () => setActiveSlide((active) => (active + 1) % data.length),
      2000
    );
    return () => {
      clearInterval(timeout);
    };
  }, []);

  return (
    <div>
      {data.map((item, i) => {
        return (
          <>
            <div
              className={clsx(
                {
                  isActive: activeSlide === i,
                  isNext: (activeSlide + 1) % data.length === i,
                  isPrev: (activeSlide - 1 + data.length) % data.length === i,
                },
                "title"
              )}
            >
              {item.title.map((title) => (
                <h1>{title}</h1>
              ))}
            </div>
            <span
              className={clsx(
                {
                  isActive: activeSlide === i,
                  isNext: (activeSlide + 1) % data.length === i,
                  isPrev: (activeSlide - 1 + data.length) % data.length === i,
                },
                "summary"
              )}
            >
              {item.summary}
            </span>
          </>
        );
      })}
    </div>
  );
}
