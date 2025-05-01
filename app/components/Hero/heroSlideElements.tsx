"use client";
import { FadeIn } from "../FadeIn/fadeIn";
import Button from "../Button/Button";
import { FrontPageDocumentData } from "@/prismicio-types";
import { PrismicNextLink } from "@prismicio/next";
import Arrow from "../../icons/arrow.svg";
export default function HeroSlideElements({
  content,
  slide,
  setSlide,
}: {
  content: FrontPageDocumentData;
  slide: number;
  setSlide: React.Dispatch<React.SetStateAction<number>>;
}) {
  return (
    <div className="flex smmd:w-[50%] md:w-[40%] flex-col gap-fluid-48">
      <div className="flex flex-col gap-fluid-24">
        <FadeIn className="" delay={0.2}>
          <h2 className=" text-headlineColor font-semiBold font-body text-h3">
            {content.hero_title}
          </h2>
        </FadeIn>
        <FadeIn className="" delay={0.2}>
          <p className=" text-bodyGrey font-body text-[16px]">
            {content.hero_paragraph_1}
          </p>
        </FadeIn>

        <FadeIn delay={0.4} className=" mt-fluid-12 ">
          <PrismicNextLink
            field={content.hero_link_1}
            aria-label={"hlekkur til að lesa meira um okkur"}
            className="group text-[16px] hover:bg-buttonBlue hover:text-pureWhite text-buttonBlue flex pointer-events-auto rounded-32 border-[1.5px] border-buttonBlue border-opacity-60  gap-16 py-fluid-8 items-center pr-fluid-12 pl-fluid-24  h-fit w-fit  font-body font-medium transition-all duration-300 ease-in-out ${className} "
          >
            Sækja um aðild
            <div className="p-12  group-hover:bg-pureWhite group-hover:ml-4   bg-buttonBlue w-fit rounded-full transition-all duration-300 ease-in-out">
              <Arrow className="text-pureWhite group-hover:text-buttonBlue -rotate-45 h-[14px]  transition-all duration-300 ease-in-out " />
            </div>
          </PrismicNextLink>
        </FadeIn>
      </div>
    </div>
  );
}
