"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { PrismicNextImage } from "@prismicio/next";
import ArrowRight from "../../../public/icons/ArrowRight.svg";
import Image from "next/image";
import { FadeIn } from "../FadeIn/fadeIn";
import Container from "../Container/container";
import Button from "../Button/Button";

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
    <Container className=" flex-col gap-fluid-48  overflow-hidden ">
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
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2.67"
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
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2.67"
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
          className="flex py-26 gap-fluid-56 w-fill no-scrollbar overflow-scroll lg:grid lg:grid-cols-3 snap-x snap-mandatory snap-always snap-center"
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
                className="min-w-[80%] xs:min-w-[60%]  group  smmd:min-w-[40%] md:min-w-[26%] lg:w-fill snap-x snap-mandatory snap-always snap-center   transition-all duration-150 ease-in-out"
                key={`${i}${section.title}`}
              >
                <Link className=" flex flex-col " href={`${item.url}`}>
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
                  <div className="flex flex-col gap-12  py-fluid-24 ">
                    <div className=" w-fit rounded-6 ">
                      <p
                        suppressHydrationWarning
                        className="font-body text-sm font-semiBold text-bodyGrey"
                      >
                        {formattedDate}
                      </p>
                    </div>
                    <h2 className="font-body font-semiBold text-headlineColor text-paragraph group-hover:text-buttonBlue transition-all duration-300 ease-in-out">
                      {section.title}
                    </h2>
                    <Button
                      className="text-[16px] mt-fluid-12 "
                      text={"Lesa meira"}
                      noShadow
                      arrow
                      type="none"
                    />
                  </div>
                </Link>
              </div>
            );
          })}
          <div className="self-end  justify-center bg-greyLight flex flex-col gap-fluid-24 w-full h-full rounded-4 py-fluid-40 px-fluid-40">
            <FadeIn className="flex flex-col gap-fluid-12">
              <p className="font-body font-semiBold text-headlineColor text-paragraph">
                Ýttu á hnappinn til að sjá allar fréttir
              </p>
              <p className="font-body font-regular text-bodyGrey text-[16px]">
                Hér deilum við öllum tilkynningum og fréttum af félaginu fyrir
                félagsmenn.
              </p>
            </FadeIn>
            <FadeIn>
              <Button
                arrow
                noShadow
                aHref={"/frettir"}
                className=" text-[16px] bg-pureWhite  text-buttonBlue  font-semiBold flex justify-center rounded-4 "
                type="nextLink"
                text={"Sjá allar fréttir"}
              />
            </FadeIn>
          </div>
        </div>
      </FadeIn>
    </Container>
  );
}
