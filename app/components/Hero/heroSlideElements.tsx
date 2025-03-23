"use client";
import { FadeIn } from "../FadeIn/fadeIn";
import Button from "../Button/Button";
import { FrontPageDocumentData } from "@/prismicio-types";
import HeroSlider from "./heroSlider";
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
    <div className="w-[40%] self-end flex flex-col gap-fluid-48">
      <FadeIn className="flex flex-col gap-fluid-24">
        <FadeIn>
          <h2 className="tracking-[0px] font-bold font-headline text-headlineColor text-h6">
            {content.hero_title_1}
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
            className="text-fontBlue rounded-8  text-white bg-buttonBlue hover:bg-buttonBlueHover text-navLinks  transition-all duration-300 ease-in-out"
          />
        </FadeIn>
      </FadeIn>
      <div className="flex gap-fluid-40">
        <div className="relative self-end w-[50%] pb-[70%] md:pb-[30%] ">
          <PrismicNextImage
            field={content.image_3}
            className="object-cover z-0 rounded-6"
            fill
            alt={""}
            sizes="(max-width: 768px) 100vw"
          />
        </div>
        <div className="relative w-[50%]  pb-[70%] md:pb-[30%] ">
          <PrismicNextImage
            field={content.image_4}
            className="object-cover z-0 rounded-6"
            fill
            alt={""}
            sizes="(max-width: 768px) 100vw"
          />
        </div>
      </div>
      {/* {slide === 0 ? (
        <FadeIn className="flex flex-col gap-fluid-24">
          <FadeIn>
            <h2 className="tracking-[0px] font-bold font-headline text-headlineColor text-h6">
              {content.hero_title_1}
            </h2>
          </FadeIn>
          <FadeIn className="" delay={0.2}>
            <p className=" text-bodyGrey font-body text-[16px]">
              {content.hero_paragraph_1}
            </p>
          </FadeIn>
          <FadeIn delay={0.4} className="mt-fluid-24">
            <Button
              text={"Sækja um aðild"}
              href={content.hero_link_1}
              ariaLabel={`Hlekkur til að hafa samband `}
              type="anchor"
              className="text-fontBlue rounded-8  text-white bg-buttonBlue hover:bg-buttonBlueHover text-navLinks  transition-all duration-300 ease-in-out"
            />
          </FadeIn>
        </FadeIn>
      ) : (
        ""
      )}
      {slide === 1 ? (
        <>
          <FadeIn className="flex flex-col gap-fluid-24">
            <FadeIn>
              <h2 className="tracking-[0px] font-bold font-headline text-headlineColor text-h6">
                {content.hero_title_2}
              </h2>
            </FadeIn>
            <FadeIn className="" delay={0.2}>
              <p className=" text-bodyGrey font-body text-[16px]">
                {content.hero_paragraph_2}
              </p>
            </FadeIn>
            <FadeIn delay={0.4} className="mt-fluid-24">
              <Button
                text={content.hero_link_text_2}
                href={content.hero_link_2}
                ariaLabel={`Hlekkur til að hafa samband`}
                type="anchor"
                className="text-fontBlue rounded-8  text-white bg-buttonBlue hover:bg-buttonBlueHover text-navLinks  transition-all duration-300 ease-in-out"
              />
            </FadeIn>
          </FadeIn>
        </>
      ) : (
        ""
      )}
      {slide === 2 ? (
        <>
          <FadeIn className=" flex flex-col gap-fluid-24">
            <FadeIn>
              <h2 className="tracking-[0px] font-bold font-headline text-headlineColor text-h6">
                {content.hero_title_3}
              </h2>
            </FadeIn>
            <FadeIn className="" delay={0.2}>
              <p className=" text-bodyGrey font-body text-[16px]">
                {content.hero_paragraph_3}
              </p>
            </FadeIn>
            <FadeIn delay={0.4} className="mt-fluid-24">
              <Button
                text={content.hero_link_text_3}
                href={content.hero_link_3}
                ariaLabel={`Hlekkur til að hafa samband`}
                type="anchor"
                className="text-fontBlue rounded-8  text-white bg-buttonBlue hover:bg-buttonBlueHover text-navLinks  transition-all duration-300 ease-in-out"
              />
            </FadeIn>
          </FadeIn>
        </>
      ) : (
        ""
      )} */}
      {/* <div>
        <HeroSlider setSlide={setSlide} slide={slide} />
      </div> */}
    </div>
  );
}
