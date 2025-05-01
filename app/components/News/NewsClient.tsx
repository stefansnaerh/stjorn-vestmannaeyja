"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { PrismicNextImage } from "@prismicio/next";
import { FadeIn } from "../FadeIn/fadeIn";
import Container from "../Container/container";
import Button from "../Button/Button";
import Arrow from "../../icons/arrow.svg";
import FourCyanPolygons from "../../icons/fourCyanPolygons.svg";

export default function NewsClient({ news }: { news: any }) {
  const carouselElement = useRef<HTMLDivElement>(null);
  const cardElement = useRef<HTMLDivElement>(null);
  const [clientLoaded, setClientLoaded] = useState(false);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [scrollRight, setScrollRight] = useState(0);

  type Direction = "left" | "right";

  const scrollCarousel = (direction: Direction) => {
    if (carouselElement.current && cardElement.current) {
      const computedStyles = window.getComputedStyle(carouselElement.current);
      const gap = parseFloat(computedStyles.getPropertyValue("gap"));
      const cardWidth = cardElement.current.getBoundingClientRect().width;
      const scrollValue =
        direction === "right" ? cardWidth + gap : -(cardWidth + gap);

      carouselElement.current.scrollBy({
        top: 0,
        left: scrollValue,
        behavior: "smooth",
      });
      // Update scroll states
      if (direction === "right") {
        setScrollRight((prevScrollRight) => prevScrollRight + 1);
      } else {
        setScrollLeft((prevScrollLeft) => prevScrollLeft + 1);
      }
    }
  };
  const handleScroll = () => {
    if (!carouselElement.current) return;

    const carousel = carouselElement.current;
    const scroll = carousel?.scrollLeft;
    const maxScroll = carousel.scrollWidth - carousel.clientWidth;

    // If we are at the start of the carousel
    if (scroll <= 0) {
      setScrollLeft(0);
    }
    // If we are at the end of the carousel
    else if (scroll >= maxScroll) {
      setScrollRight(0);
    }
    // We are in the middle
    else {
      setScrollLeft(scroll);
      setScrollRight(maxScroll - scroll);
    }
  };
  useEffect(() => {
    setClientLoaded(true);
  }, []);

  return (
    <Container className=" flex-col gap-fluid-48  overflow-hidden bg-lightBlue ">
      <div className="flex flex-col xs:flex-row justify-between w-fill">
        <div className="w-fill flex flex-col gap-fluid-18">
          <FadeIn className="self-start">
            <h2 className="font-headline text-h2 font-semiBold text-headlineColor">
              Fréttir og tilkynningar
            </h2>
          </FadeIn>
        </div>
        <FadeIn className="xs:flex  lg:hidden gap-fluid-12 self-center hidden">
          <button
            onClick={() => scrollCarousel("left")}
            className="p-fluid-18 bg-pureWhite self-center group shadow-heroSlide hover:shadow-heroSlideHover hover:scale-105 border-[1px] border-greyInput border-opacity-15 transition-all duration-300 ease-in-out"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-24 w-24 rotate-[270deg] group-hover:scale-105 duration-300 transition-all ease-in-out"
              viewBox="0 0 32 32"
            >
              <path
                stroke="#003896"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.67"
                d="m24 20-8-8-8 8"
              />
            </svg>
          </button>
          <button
            onClick={() => scrollCarousel("right")}
            className="p-fluid-18 bg-pureWhite self-center group shadow-heroSlide hover:shadow-heroSlideHover hover:scale-105 border-[1px] border-greyInput border-opacity-15 transition-all duration-300 ease-in-out"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-24 w-24 rotate-90 group-hover:scale-105 duration-300 transition-all ease-in-out"
              viewBox="0 0 32 32"
            >
              <path
                stroke="#003896"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.67"
                d="m24 20-8-8-8 8"
              />
            </svg>
          </button>
        </FadeIn>
      </div>
      <FadeIn className="max-w-fill">
        <div
          ref={carouselElement}
          onScroll={handleScroll}
          className="flex py-26 gap-fluid-56 w-fill no-scrollbar overflow-scroll lg:grid lg:grid-cols-3 snap-x snap-mandatory snap-always snap-center h-full"
        >
          {news.slice(0, 5).map((item: any, i: number) => {
            function formatDate(dateString: string): string {
              const options: Intl.DateTimeFormatOptions = {
                day: "numeric",
                month: "long",
                year: "numeric",
              };
              const date = new Date(dateString);
              return date.toLocaleDateString("is-IS", options); // 'is-IS' for Icelandic locale
            }
            const section = item.data;
            const formattedDate = formatDate(`${section.date}`);
            return (
              <div
                ref={cardElement}
                className="min-w-[80%] xs:min-w-[60%] group smmd:min-w-[40%] md:min-w-[26%] lg:w-fill snap-x snap-mandatory snap-always snap-center  transition-all duration-150 ease-in-out"
                key={`${i}${section.title}`}
              >
                <Link className=" flex flex-col" href={`${item.url}`}>
                  <div className="relative snap-center snap-mandatory overflow-hidden rounded-4">
                    <div className="relative pb-[60%] ">
                      <PrismicNextImage
                        field={section.image}
                        className="object-cover z-0 rounded-4 group-hover:scale-105 transition-all duration-300 ease-in-out"
                        fill
                        alt={""}
                        sizes="(max-width: 768px) 80vw, 25vw"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-12  py-fluid-24 min-h-full ">
                    <div className=" w-fit rounded-6 ">
                      <p
                        suppressHydrationWarning
                        className="font-body text-sm font-medium text-bodyGrey"
                      >
                        {formattedDate}
                      </p>
                    </div>
                    <h2 className="font-body font-semiBold text-headlineColor text-[20px] group-hover:text-buttonBlue transition-all duration-300 ease-in-out">
                      {section.title}
                    </h2>
                    <FadeIn className="mt-fluid-16 ">
                      <div className="group text-[14px] group-hover:bg-buttonBlue group-hover:text-pureWhite text-buttonBlue flex pointer-events-auto rounded-32 border-[1.5px] border-buttonBlue border-opacity-60  gap-16 py-6 items-center pr-fluid-12 pl-fluid-24  h-fit w-fit  font-body font-medium transition-all duration-300 ease-in-out ${className} ">
                        Lesa meira
                        <div className="p-10  group-hover:bg-pureWhite group-hover:ml-4   bg-buttonBlue w-fit rounded-full transition-all duration-300 ease-in-out">
                          <Arrow className="text-pureWhite group-hover:text-buttonBlue -rotate-45 h-[12px]  transition-all duration-300 ease-in-out " />
                        </div>
                      </div>
                    </FadeIn>
                  </div>
                </Link>
              </div>
            );
          })}
          <Link
            href={"/frettir"}
            className="min-w-[80%] relative xs:min-w-[60%]  group  smmd:min-w-[40%] md:min-w-[26%] justify-center  bg-cyanideBlue flex flex-col gap-fluid-24 w-full h-full rounded-4 py-fluid-40 px-fluid-40 snap-x snap-mandatory snap-always snap-center "
          >
            <FadeIn className="flex flex-col gap-fluid-12">
              <p className="font-body font-semiBold text-pureWhite text-paragraph">
                Ýttu hér til að sjá allar fréttir
              </p>
              <p className="font-body font-regular text-pureWhite text-[16px]">
                Hér deilum við öllum tilkynningum og fréttum af félaginu fyrir
                félagsmenn.
              </p>
            </FadeIn>

            <div className="group text-[16px] bg-pureWhite group-hover:bg-buttonBlue group-hover:text-pureWhite text-buttonBlue flex pointer-events-auto rounded-32  mt-fluid-12 gap-16 py-fluid-8 items-center pr-fluid-12 pl-fluid-24 h-fit w-fit font-body font-medium transition-all duration-300 ease-in-out ">
              Sjá allar fréttir
              <div className="p-12  group-hover:bg-pureWhite group-hover:ml-4   bg-buttonBlue w-fit rounded-full transition-all duration-300 ease-in-out">
                <Arrow className="text-pureWhite group-hover:text-buttonBlue -rotate-45 h-[14px]  transition-all duration-300 ease-in-out " />
              </div>
            </div>
            <FourCyanPolygons className="absolute -bottom-20 -right-12" />
          </Link>
        </div>
      </FadeIn>
    </Container>
  );
}
