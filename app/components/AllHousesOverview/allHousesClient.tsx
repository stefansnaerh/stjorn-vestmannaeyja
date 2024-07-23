"use client";
import { AllHousesOverviewDocumentData } from "@/prismicio-types";
import { useRef, useState, useEffect } from "react";
import Container from "../Container/container";
import { FadeIn } from "../FadeIn/fadeIn";
import { PrismicNextLink } from "@prismicio/next";
import { PrismicNextImage } from "@prismicio/next";
export default function AllHousesClient({
  content,
}: {
  content: AllHousesOverviewDocumentData;
}) {
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
    <section className="flex justify-center overflow-y-visible">
      <Container className=" flex-col gap-fluid-48 sm:gap-fluid-72  overflow-hidden ">
        <div className="flex flex-col xs:flex-row justify-between w-fill">
          <div className="w-fill flex flex-col gap-fluid-18">
            <FadeIn className="self-start">
              <h2 className="font-headline text-h2 font-semiBold text-headlineColor">
                Allir orlofskostir
              </h2>
            </FadeIn>
          </div>
          <FadeIn className="xs:flex  gap-fluid-24 self-center hidden">
            <button
              onClick={() => scrollCarousel("left")}
              className=" hover:bg-purple bg-pureWhite group shadow-none flex justify-center border-[1px] h-fluid-56 w-fluid-56 border-purple border-opacity-10 rounded-[50%] transition-all duration-150 ease-in-out"
            >
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 18 18"
                fill="none"
                className="rotate-180 text-purple group-hover:text-pureWhite h-fluid-18 self-center transition-all duration-300 ease-in-out"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.2917 10.0493L15.1585 9.19348H13.9404H1.145C0.944498 9.19348 0.801088 9.13175 0.68047 9.01267C0.560197 8.89393 0.5 8.75538 0.5 8.56304C0.5 8.3707 0.560196 8.23216 0.680471 8.11342C0.801089 7.99433 0.944499 7.93261 1.145 7.93261H13.9404H15.1585L14.2917 7.0768L8.68116 1.53767C8.5792 1.43701 8.52329 1.31189 8.52909 1.11706L8.02931 1.10217L8.52909 1.11706C8.53517 0.913143 8.59964 0.775418 8.70978 0.666679C8.81636 0.561458 8.9527 0.5 9.16 0.5C9.3673 0.5 9.50364 0.561458 9.61022 0.666678L17.1672 8.12755L17.1833 8.14346L17.2008 8.15786C17.2428 8.19235 17.2701 8.23158 17.2881 8.28494C17.3182 8.37416 17.3334 8.46612 17.3334 8.56304C17.3334 8.66012 17.3182 8.74347 17.2916 8.81687C17.2727 8.86915 17.2366 8.93008 17.1672 8.99854L9.61022 16.4594C9.50364 16.5646 9.3673 16.6261 9.16 16.6261C8.9527 16.6261 8.81636 16.5646 8.70978 16.4594C8.59964 16.3507 8.53517 16.2129 8.52909 16.009C8.52329 15.8142 8.5792 15.6891 8.68116 15.5884L14.2917 10.0493Z"
                  fill="currentColor"
                  stroke="currentColor"
                />
              </svg>
            </button>
            <button
              onClick={() => scrollCarousel("right")}
              className="group hover:bg-purple bg-pureWhite shadow-none flex justify-center border-[1px] border-opacity-10 h-fluid-56 w-fluid-56 border-purple rounded-[50%] transition-all duration-150 ease-in-out "
            >
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 18 18"
                fill="none"
                className="text-purple group-hover:text-pureWhite h-fluid-18 self-center transition-all filter duration-300 ease-in-out"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.2917 10.0493L15.1585 9.19348H13.9404H1.145C0.944498 9.19348 0.801088 9.13175 0.68047 9.01267C0.560197 8.89393 0.5 8.75538 0.5 8.56304C0.5 8.3707 0.560196 8.23216 0.680471 8.11342C0.801089 7.99433 0.944499 7.93261 1.145 7.93261H13.9404H15.1585L14.2917 7.0768L8.68116 1.53767C8.5792 1.43701 8.52329 1.31189 8.52909 1.11706L8.02931 1.10217L8.52909 1.11706C8.53517 0.913143 8.59964 0.775418 8.70978 0.666679C8.81636 0.561458 8.9527 0.5 9.16 0.5C9.3673 0.5 9.50364 0.561458 9.61022 0.666678L17.1672 8.12755L17.1833 8.14346L17.2008 8.15786C17.2428 8.19235 17.2701 8.23158 17.2881 8.28494C17.3182 8.37416 17.3334 8.46612 17.3334 8.56304C17.3334 8.66012 17.3182 8.74347 17.2916 8.81687C17.2727 8.86915 17.2366 8.93008 17.1672 8.99854L9.61022 16.4594C9.50364 16.5646 9.3673 16.6261 9.16 16.6261C8.9527 16.6261 8.81636 16.5646 8.70978 16.4594C8.59964 16.3507 8.53517 16.2129 8.52909 16.009C8.52329 15.8142 8.5792 15.6891 8.68116 15.5884L14.2917 10.0493Z"
                  fill="currentColor"
                  stroke="currentColor"
                />
              </svg>
            </button>
          </FadeIn>
        </div>
        <FadeIn className="max-w-fill min-w-fill self-start">
          <div
            ref={carouselElement}
            onScroll={handleScroll}
            className="flex gap-fluid-56 w-fill no-scrollbar overflow-scroll overflow-y-hidden snap-x snap-mandatory snap-always snap-center"
          >
            {content.houses.map((item: any, i: number) => {
              return (
                <div
                  ref={cardElement}
                  className="min-w-[80%] xs:min-w-[60%] smmd:min-w-[40%] md:min-w-[26%] snap-x snap-mandatory snap-always snap-center"
                  key={`${i}${item.address}`}
                >
                  <PrismicNextLink
                    className="group flex flex-col "
                    field={item.link}
                  >
                    <div className="relative w-fill xxs:w-[80%] sm:w-fill  self-center">
                      <div className="relative pb-[70%] overflow-hidden rounded-6 ">
                        <PrismicNextImage
                          field={item.image}
                          className="object-cover z-0 rounded-8 group-hover:scale-105 transition-all duration-300 ease-in-out"
                          imgixParams={{ fit: "crop" }}
                          fill
                          sizes="(max-width: 768px) 100vw"
                        />
                      </div>
                    </div>
                    <div className="flex self-start flex-col gap-fluid-8">
                      <h3 className="mt-8  text-h5 text-headlineColor font-headline font-semiBold w-fit ">
                        {item.address}
                      </h3>
                      <div className="flex gap-4">
                        <p className="text-[16px] font-semiBold font-body text-purple group-hover:text-buttonBlue transition-all duration-300 ease-in-out">
                          Sjá meira um húsið
                        </p>
                        <svg
                          className="w-[30px] text-purple group-hover:text-buttonBlue  transition-all  duration-300 ease-in-out self-center h-[14px]   group-hover:pl-[14px]"
                          width="100%"
                          height="100%"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M14.2917 10.0493L15.1585 9.19348H13.9404H1.145C0.944498 9.19348 0.801088 9.13175 0.68047 9.01267C0.560197 8.89393 0.5 8.75538 0.5 8.56304C0.5 8.3707 0.560196 8.23216 0.680471 8.11342C0.801089 7.99433 0.944499 7.93261 1.145 7.93261H13.9404H15.1585L14.2917 7.0768L8.68116 1.53767C8.5792 1.43701 8.52329 1.31189 8.52909 1.11706L8.02931 1.10217L8.52909 1.11706C8.53517 0.913143 8.59964 0.775418 8.70978 0.666679C8.81636 0.561458 8.9527 0.5 9.16 0.5C9.3673 0.5 9.50364 0.561458 9.61022 0.666678L17.1672 8.12755L17.1833 8.14346L17.2008 8.15786C17.2428 8.19235 17.2701 8.23158 17.2881 8.28494C17.3182 8.37416 17.3334 8.46612 17.3334 8.56304C17.3334 8.66012 17.3182 8.74347 17.2916 8.81687C17.2727 8.86915 17.2366 8.93008 17.1672 8.99854L9.61022 16.4594C9.50364 16.5646 9.3673 16.6261 9.16 16.6261C8.9527 16.6261 8.81636 16.5646 8.70978 16.4594C8.59964 16.3507 8.53517 16.2129 8.52909 16.009C8.52329 15.8142 8.5792 15.6891 8.68116 15.5884L14.2917 10.0493Z"
                            fill="currentColor"
                            stroke="currentColor"
                          />
                        </svg>
                      </div>
                    </div>
                  </PrismicNextLink>
                </div>
              );
            })}
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
