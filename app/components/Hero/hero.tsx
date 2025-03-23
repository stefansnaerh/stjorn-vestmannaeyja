"use client";

import { FrontPageDocumentData } from "@/prismicio-types";

import { useState, useEffect } from "react";

import HeroImages from "./heroImages";

export default function Hero({ content }: { content: FrontPageDocumentData }) {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setNextSlide();
    }, 6000);

    // Clear the interval on component unmount to prevent memory leaks
    return () => clearInterval(timer);
  }, [slide]); // Including slide as a dependency ensures the interval is reset when slide changes

  const setNextSlide = () => {
    if (slide >= 2) {
      setSlide(0);
    } else {
      setSlide(slide + 1);
    }
  };

  return (
    <section className="relative flex justify-center ">
      {/* <div className={styles.gradient}></div> */}
      <HeroImages content={content} slide={slide} setSlide={setSlide} />
    </section>
  );
}
