"use client";
import { FadeIn } from "../FadeIn/fadeIn";
import Button from "../Button/Button";
import { FrontPageDocumentData } from "@/prismicio-types";
import { PrismicNextImage } from "@prismicio/next";
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
    <div className="hidden  sm:flex w-[40%] flex-col gap-fluid-48">
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
        <FadeIn delay={0.4} className="mt-fluid-12">
          <Button
            text={"Sækja um aðild"}
            href={content.hero_link_1}
            ariaLabel={`Hlekkur til að hafa samband `}
            type="anchor"
            className="text-fontBlue rounded-8  text-white bg-buttonBlue hover:bg-buttonBlueHover text-[16px] xl:text-navLinks  transition-all duration-300 ease-in-out"
          />
        </FadeIn>
      </div>
    </div>
  );
}
