"use client";
import { useState } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { FadeIn } from "@/app/components/FadeIn/fadeIn";
import Container from "@/app/components/Container/container";
import { PrismicNextImage } from "@prismicio/next";
import RichText from "@/app/components/RichText/RichText";
import cx from "classnames";
import Button from "@/app/components/Button/Button";
/**
 * Props for `House`.
 */
export type HouseProps = SliceComponentProps<Content.HouseSlice>;

/**
 * Component for "House" Slices.
 */
const House = ({ slice }: HouseProps): JSX.Element => {
  const [imageIndexToShow, setImageIndexToShow] = useState<number>(0);
  const section = slice.primary;
  return (
    <section
      className="flex justify-center"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Container className="flex flex-col-reverse md:flex-row gap-fluid-64">
        <div className="xs:grid grid-rows-2 flex flex-col  grid-cols-4 w-fill md:w-[50%]  gap-fluid-18">
          {section.images.map((item, index) => {
            return (
              <div
                className={cx("", {
                  ["col-span-4 row-start-1 row-end-1"]:
                    imageIndexToShow === index,
                  ["hover:cursor-pointer"]: imageIndexToShow !== index,
                })}
                onClick={() => setImageIndexToShow(index)}
                key={`${index}${item.image}`}
              >
                <FadeIn className="relative overflow-hidden">
                  <div className=" pb-[70%]">
                    <PrismicNextImage
                      field={item.image}
                      className={cx(
                        "object-cover animate-imageFade z-0 rounded-6",
                        {
                          ["xs:opacity-60"]: imageIndexToShow !== index,
                        }
                      )}
                      fill
                      alt={""}
                      sizes="(max-width: 768px) 100vw"
                    />
                  </div>
                </FadeIn>
              </div>
            );
          })}
        </div>
        <div className="w-fill md:w-[50%] self-start flex flex-col gap-fluid-40">
          <FadeIn>
            <h1 className="text-headlineColor font-headline font-semiBold text-h2">
              {section.title}
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <RichText text={section.paragraph} />
          </FadeIn>
          <FadeIn
            delay={0.4}
            className="flex flex-col xs:flex-row gap-fluid-32 xs:gap-fluid-40 sm:gap-fluid-64 "
          >
            <Button
              text={`Sækja um ${section.title}`}
              href={section.link_to_house}
              type="anchor"
              noShadow
              ariaLabel={`hlekkur til að lesa meira um okkur`}
              className=" text-[16px] bg-purple hover:bg-purpleHover text-pureWhite  font-semiBold flex justify-center   border-buttonBlue  rounded-8"
            ></Button>
            <Button
              text={`Úthlutunarreglur`}
              href={section.link_to_house}
              type="anchor"
              noShadow
              ariaLabel={`hlekkur til að lesa meira um okkur`}
              className=" text-[16px] bg-pureWhite  hover:bg-purple hover:text-pureWhite text-purple  font-semiBold flex justify-center border-[1.5px]   border-purple  rounded-8"
            ></Button>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
};

export default House;
