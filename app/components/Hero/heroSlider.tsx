"use client";
import { useEffect, useState } from "react";
import cx from "classnames";

export default function HeroSlider({
  slide,
  setSlide,
}: {
  setSlide: React.Dispatch<React.SetStateAction<number>>;
  slide: number;
}) {
  useEffect(() => {
    const timer = setInterval(() => {
      automaticNextSlide();
    }, 6000);
    // Clear the interval on component unmount to prevent memory leaks
    return () => clearInterval(timer);
  }, [slide]); // Including slide as a dependency ensures the interval is reset when slide changes

  const automaticNextSlide = () => {
    if (slide >= 2) {
      setSlide(0);
    } else {
      setSlide(slide + 1);
    }
  };

  const setNextSlide = () => {
    if (slide >= 2) {
      setSlide(0);
    } else {
      setSlide(slide + 1);
    }
  };

  const setPreviousSlide = () => {
    if (slide <= 0) {
      setSlide(2);
    } else {
      setSlide(slide - 1);
    }
  };

  return (
    <div className="px-0 flex gap-6 w-fill">
      <div className="w-fill relative flex flex-col  md:gap-fluid-40 gap-fluid-40">
        <div className="flex gap-8 ">
          <button
            onClick={() => setSlide(0)}
            className={cx(
              " relative w-[33%] transition-all duration-500 ease-in-out",
              {
                ["w-[33%]"]: slide === 0,
              }
            )}
          >
            <div
              className={cx("h-6 rounded-6  ", {
                ["absolute orangeFiller w-[33%]  bg-buttonBlue"]: slide === 0,
                ["hidden orangeFiller bg-orange w-[33%]"]: slide != 0,
              })}
            ></div>
            <div
              className={cx(" h-6 w-fill rounded-6", {
                ["bg-greyInput opacity-70"]: slide != 0,
                ["bg-greyLight "]: slide === 0,
              })}
            ></div>
          </button>

          <button
            onClick={() => setSlide(1)}
            className={cx(
              " relative w-[33%] transition-all duration-500 ease-in-out",
              {
                ["w-[33%]"]: slide === 1,
              }
            )}
          >
            <div
              className={cx("h-6 rounded-6 ", {
                ["absolute orangeFiller w-[30%]  bg-buttonBlue"]: slide === 1,
                ["hidden orangeFiller bg-orange w-[15%]"]: slide != 1,
              })}
            ></div>
            <div
              className={cx(" h-6 w-fill rounded-6", {
                ["bg-greyInput opacity-70"]: slide != 1,
                ["bg-greyLight "]: slide === 1,
              })}
            ></div>
          </button>
          <button
            onClick={() => setSlide(2)}
            className={cx(
              " relative w-[33%] transition-all duration-500 ease-in-out",
              {
                ["w-[33%]"]: slide === 2,
              }
            )}
          >
            <div
              className={cx("h-6 rounded-6  ", {
                ["absolute orangeFiller w-[33%]  bg-buttonBlue"]: slide === 2,
                ["hidden orangeFiller bg-orange w-[33%]"]: slide != 2,
              })}
            ></div>
            <div
              className={cx(" h-6 w-fill rounded-6", {
                ["bg-greyInput opacity-90"]: slide != 2,
                ["bg-greyLight "]: slide === 2,
              })}
            ></div>
          </button>
        </div>
        <div className="flex gap-6">
          <button
            onClick={setPreviousSlide}
            className="p-fluid-18 bg-pureWhite rounded-32 self-center group shadow-heroSlide hover:shadow-heroSlideHover hover:scale-105 border-[1px] border-greyInput border-opacity-15 transition-all duration-300 ease-in-out"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-24 w-24 rotate-[270deg] group-hover:scale-105 duration-300 transition-all ease-in-out"
              viewBox="0 0 32 32"
            >
              <path
                stroke="#003896"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2.67"
                d="m24 20-8-8-8 8"
              />
            </svg>
          </button>
          <button
            onClick={setNextSlide}
            className="p-fluid-18 bg-pureWhite rounded-32  self-center group shadow-heroSlide hover:shadow-heroSlideHover hover:scale-105 border-[1px] border-greyInput border-opacity-15 transition-all duration-300 ease-in-out"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-24 w-24 rotate-90 group-hover:scale-105 duration-300 transition-all ease-in-out"
              viewBox="0 0 32 32"
            >
              <path
                stroke="#003896"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2.67"
                d="m24 20-8-8-8 8"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
