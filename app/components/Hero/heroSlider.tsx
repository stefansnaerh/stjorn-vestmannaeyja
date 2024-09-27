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
    <div className="absolute px-fluid-32 md:px-0 flex gap-6 w-fill bottom-0 md:bottom-[40px]">
      <div className="w-fill relative flex md:flex-col flex-col-reverse md:gap-fluid-24 gap-fluid-40">
        <div className="flex gap-8 ">
          <div
            className={cx(" relative transition-all duration-500 ease-in-out", {
              ["w-[30%]"]: slide === 0,
              ["w-[15%]"]: slide != 0,
            })}
          >
            <div
              className={cx("h-10 rounded-2  ", {
                ["absolute orangeFiller w-[30%]  bg-buttonBlueHover"]:
                  slide === 0,
                ["hidden orangeFiller bg-orange w-[15%]"]: slide != 0,
              })}
            ></div>
            <div className=" h-10 w-fill rounded-2 bg-greyLight "></div>
          </div>

          <div
            className={cx(" relative transition-all duration-500 ease-in-out", {
              ["w-[30%]"]: slide === 1,
              ["w-[15%]"]: slide != 1,
            })}
          >
            <div
              className={cx("h-10 rounded-2  ", {
                ["absolute orangeFiller w-[30%]  bg-buttonBlueHover"]:
                  slide === 1,
                ["hidden orangeFiller bg-orange w-[15%]"]: slide != 1,
              })}
            ></div>
            <div className=" h-10 w-fill rounded-2 bg-greyLight "></div>
          </div>
          <div
            className={cx(" relative transition-all duration-500 ease-in-out", {
              ["w-[30%]"]: slide === 2,
              ["w-[15%]"]: slide != 2,
            })}
          >
            <div
              className={cx("h-10 rounded-2  ", {
                ["absolute orangeFiller w-[30%]  bg-buttonBlueHover"]:
                  slide === 2,
                ["hidden orangeFiller bg-orange w-[15%]"]: slide != 2,
              })}
            ></div>
            <div className=" h-10 w-fill rounded-2 bg-greyLight "></div>
          </div>
        </div>
        <div className="flex gap-6">
          <button
            onClick={setPreviousSlide}
            className="p-fluid-18 bg-pureWhite rounded-4 self-center group shadow-heroSlide hover:shadow-heroSlideHover hover:scale-105 border-[1px] border-greyInput border-opacity-15 transition-all duration-300 ease-in-out"
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
            className="p-fluid-18 bg-pureWhite rounded-4  self-center group shadow-heroSlide hover:shadow-heroSlideHover hover:scale-105 border-[1px] border-greyInput border-opacity-15 transition-all duration-300 ease-in-out"
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
