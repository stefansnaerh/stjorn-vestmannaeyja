"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { PrismicNextImage } from "@prismicio/next";
import ArrowRight from "../../../public/icons/ArrowRight.svg";

import { FadeIn } from "../FadeIn/fadeIn";
import Container from "../Container/container";
import Arrow from "../../icons/arrow.svg";
import Chevron from "../../icons/chevronUp.svg";

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
    <Container className=" flex-col gap-fluid-48 sm:gap-fluid-72  overflow-hidden bg-backgroundBlue ">
      <div className="flex flex-col xs:flex-row justify-between w-fill">
        <div className="w-fill flex flex-col gap-fluid-18">
          <FadeIn className="self-start">
            <h2 className="font-headline text-h2 font-semiBold text-headlineColor">
              Fréttir og tilkynningar
            </h2>
          </FadeIn>
        </div>
        <FadeIn className="xs:flex  gap-fluid-24 self-center hidden">
          <button
            onClick={() => scrollCarousel("left")}
            className="group hover:bg-buttonBlue bg-pureWhite   shadow-none flex justify-center  h-[56px] w-[80px] border-purple rounded-32 transition-all duration-150 ease-in-out "
          >
            <Chevron className="-rotate-90 h-[24px] text-bodyGrey group-hover:text-pureWhite self-center transition-all duration-150 ease-in-out" />
          </button>
          <button
            onClick={() => scrollCarousel("right")}
            className="group hover:bg-buttonBlue bg-pureWhite   shadow-none flex justify-center  h-[56px] w-[80px] border-purple rounded-32 transition-all duration-150 ease-in-out "
          >
            <Chevron className="rotate-90 h-[24px] text-bodyGrey group-hover:text-pureWhite self-center transition-all duration-150 ease-in-out" />
          </button>
        </FadeIn>
      </div>
      <FadeIn className="max-w-fill">
        <div
          ref={carouselElement}
          onScroll={handleScroll}
          className="flex  gap-fluid-56 w-fill no-scrollbar overflow-scroll snap-x snap-mandatory snap-always snap-center"
        >
          {news.map((item: any, i: number) => {
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
                className="min-w-[80%] xs:min-w-[60%] smmd:min-w-[40%] md:min-w-[26%] snap-x snap-mandatory snap-always snap-center bg-pureWhite pt-[10px] px-[10px] rounded-24 border-greyInput border-opacity-20"
                key={`${i}${section.title}`}
              >
                <Link className="group flex flex-col " href={`${item.url}`}>
                  <div className="relative snap-center snap-mandatory overflow-hidden rounded-b-4 rounded-t-24 ">
                    <div className="relative pb-[85%] ">
                      <PrismicNextImage
                        field={section.image}
                        className="object-cover z-0 rounded-t-24 group-hover:scale-105 transition-all duration-300 ease-in-out"
                        fill
                        alt={""}
                        sizes="(max-width: 768px) 80vw, 25vw"
                      />
                    </div>
                  </div>
                  <div className="flex  flex-col justify-between  gap-fluid-32 py-fluid-16 px-fluid-18">
                    <div className="flex flex-col gap-fluid-16">
                      <p
                        suppressHydrationWarning
                        className="font-body text-[14px] text-bodyGrey"
                      >
                        {formattedDate}
                      </p>
                      <h2 className="font-body font-semiBold text-headlineColor text-[16px] group-hover:text-purple transition-all duration-300 ease-in-out">
                        {section.title}
                      </h2>
                    </div>
                    <div className="flex gap-8 ">
                      <p className="text-[16px] text-buttonBlue group-hover:text-buttonBlueHover font-body font-medium justify-self-end">
                        Lesa meira
                      </p>
                      <Arrow className="w-[12px] group-hover:text-buttonBlueHover group-hover:pl-6 group-hover:w-18 self-center text-buttonBlue transition-all duration-300 ease-in-out" />
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </FadeIn>
      <FadeIn className="self-center">
        <Link
          href={"/frettir"}
          aria-label={"til að sjá allar fréttir"}
          className="group text-[16px] bg-pureWhite hover:bg-buttonBlue  hover:text-pureWhite text-buttonBlue flex pointer-events-auto rounded-32   gap-16 py-fluid-8 items-center pr-fluid-12 pl-fluid-24  h-fit w-fit  font-body font-medium transition-all duration-300 ease-in-out"
        >
          Sjá allar fréttir
          <div className="p-12  bg-pureWhite  w-fit rounded-full transition-all duration-300 ease-in-out">
            <Arrow className="text-buttonBlue  h-[14px]  transition-all duration-300 ease-in-out " />
          </div>
        </Link>
      </FadeIn>
    </Container>
  );
}
