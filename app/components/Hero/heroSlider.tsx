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
    <div className=" flex gap-6">
      <div
        className={cx("w-fill  flex flex-col gap-6", {
          ["hidden"]: slide !== 0,
          ["relative "]: slide === 0,
        })}
      >
        <div
          className={cx(" h-4 w-[100%] rounded-6  ", {
            ["absolute orangeFiller bg-buttonBlue"]: slide === 0,
            ["hidden orangeFiller bg-orange"]: slide !== 0,
          })}
        ></div>
        <div
          className={cx(" h-4 w-[100%] rounded-6  ", {
            ["bg-white"]: slide === 0,
            ["bg-greyDarker"]: slide != 0,
          })}
        ></div>
        <div className="flex gap-6">
          <p
            className={cx("font-body  font-semiBold text-sm", {
              ["text-white"]: slide === 0,
              ["text-greyDarker"]: slide != 0,
            })}
          >
            01 / 03
          </p>
          <button onClick={() => setSlide(1)} className="h-16 w-16 self-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-16 w-16 rotate-90"
              viewBox="0 0 32 32"
            >
              <path
                stroke="#FFFFFF"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2.67"
                d="m24 20-8-8-8 8"
              />
            </svg>
          </button>
        </div>
      </div>
      <div
        className={cx("w-fill  flex flex-col gap-6", {
          ["hidden"]: slide !== 1,
          ["relative "]: slide === 1,
        })}
      >
        <div
          className={cx("absolute h-4 w-[100%] rounded-6  ", {
            ["orangeFiller bg-buttonBlue"]: slide === 1,
          })}
        ></div>
        <div
          className={cx(" h-4 w-[100%] rounded-6  ", {
            ["bg-white"]: slide === 1,
            ["bg-greyDarker"]: slide != 1,
          })}
        ></div>
        <div className="flex gap-6">
          <p
            className={cx("font-body  font-semiBold text-sm", {
              ["text-white"]: slide === 1,
              ["text-greyDarker"]: slide != 1,
            })}
          >
            02 / 03
          </p>
          <button onClick={() => setSlide(2)} className="h-16 w-16 self-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-16 w-16 rotate-90"
              viewBox="0 0 32 32"
            >
              <path
                stroke="#FFFFFF"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2.67"
                d="m24 20-8-8-8 8"
              />
            </svg>
          </button>
        </div>
      </div>
      <div
        className={cx("w-fill  flex flex-col gap-6", {
          ["hidden"]: slide !== 2,
          ["relative "]: slide === 2,
        })}
      >
        <div
          className={cx("absolute h-4 w-[100%] rounded-6  ", {
            ["orangeFiller bg-buttonBlue"]: slide === 2,
          })}
        ></div>
        <div
          className={cx(" h-4 w-[100%] rounded-6  ", {
            ["bg-white"]: slide === 2,
            ["bg-greyDarker"]: slide != 2,
          })}
        ></div>
        <div className="flex gap-6">
          <p
            className={cx("font-body  font-semiBold text-sm", {
              ["text-white"]: slide === 2,
              ["text-greyDarker"]: slide != 2,
            })}
          >
            03 / 03
          </p>
          <button onClick={() => setSlide(0)} className="h-16 w-16 self-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-16 w-16 rotate-90"
              viewBox="0 0 32 32"
            >
              <path
                stroke="#FFFFFF"
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
