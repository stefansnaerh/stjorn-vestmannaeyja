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
    <Container
      morePadding
      className=" flex-col gap-fluid-48 sm:gap-fluid-72  overflow-hidden "
    >
      <div className="flex flex-col xs:flex-row justify-between w-fill">
        <div className="w-fill flex flex-col gap-fluid-18">
          <FadeIn className="self-start">
            <h2 className="font-headline text-h2 font-semiBold text-headlineBlue">
              Fréttir
            </h2>
          </FadeIn>
          <FadeIn className="self-start">
            <p className="font-body text-lg text-bodyGrey">
              Fréttir, greinar og tilkynningar frá STF.{" "}
            </p>
          </FadeIn>
        </div>
        <FadeIn className="xs:flex  gap-fluid-24 self-center hidden">
          <button
            onClick={() => scrollCarousel("left")}
            className=" hover:bg-softBLue shadow-none flex justify-center border-[2px] h-fluid-56 w-fluid-56 border-buttonBlue rounded-[50%] transition-all duration-150 ease-in-out"
          >
            <Image
              alt="ör til hægri"
              className="rotate-180 filterButtonBlue self-center transition-all duration-300 ease-in-out"
              src={ArrowRight}
            />
          </button>
          <button
            onClick={() => scrollCarousel("right")}
            className=" hover:bg-softBLue shadow-none flex justify-center border-[2px] h-fluid-56 w-fluid-56 border-buttonBlue rounded-[50%] transition-all duration-150 ease-in-out "
          >
            <Image
              alt="ör til hægri"
              className="filterButtonBlue h-fluid-24 self-center transition-all filter  duration-300 ease-in-out"
              src={ArrowRight}
            />
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
                className="min-w-[80%] xs:min-w-[60%] smmd:min-w-[40%] md:min-w-[24%] snap-x snap-mandatory snap-always snap-center "
                key={`${i}${section.title}`}
              >
                <Link
                  className="group flex flex-col gap-fluid-16"
                  href={`${item.url}`}
                >
                  <div className="relative snap-center snap-mandatory overflow-hidden rounded-6 ">
                    <div className="relative pb-[120%] ">
                      <PrismicNextImage
                        field={section.image}
                        className="object-cover z-0 rounded-6 group-hover:scale-105 transition-all duration-300 ease-in-out"
                        fill
                        alt={""}
                        sizes="(max-width: 768px) 80vw, 25vw"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-6 ">
                    <p
                      suppressHydrationWarning
                      className="font-body text-sm text-bodyGrey"
                    >
                      {formattedDate}
                    </p>

                    <h2 className="font-body font-semiBold text-headlineBlue text-navLinksMobile group-hover:text-buttonBlue transition-all duration-300 ease-in-out">
                      {section.title}
                    </h2>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </FadeIn>
      <FadeIn className="self-end">
        <Button
          arrow
          noShadow
          aHref={"/frettir"}
          className=" hover:bg-softBLue text-buttonBlue font-semiBold flex justify-center border-[2px]  border-buttonBlue [&_img]:filterButtonBlue rounded-32"
          type="nextLink"
          text={"Sjá allar fréttir"}
        />
      </FadeIn>
    </Container>
  );
}
