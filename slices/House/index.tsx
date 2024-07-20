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
import { PrismicRichText } from "@prismicio/react";
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
      <Container className="flex flex-col-reverse md:flex-row gap-fluid-72 lg2:gap-fluid-96 xxl:gap-fluid-122">
        <div className="self-start xs:grid grid-row-flow flex flex-col  grid-cols-4 w-fill md:w-[45%] gap-fluid-18">
          {section.images.map((item, index) => {
            return (
              <div
                className={cx("", {
                  ["col-span-4 row-start-1 row-end-1"]:
                    imageIndexToShow === index,
                  ["hidden"]: imageIndexToShow !== index,
                })}
                onClick={() => setImageIndexToShow(index)}
                key={`${index}${item.image}`}
              >
                <div className="relative overflow-hidden">
                  <div className=" pb-[60%]">
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
                </div>
              </div>
            );
          })}
          {section.images.map((item, index) => {
            return (
              <div
                className={cx("hover:cursor-pointer", {
                  [""]: imageIndexToShow !== index,
                })}
                onClick={() => setImageIndexToShow(index)}
                key={`${index}${item.image}`}
              >
                <div className="relative overflow-hidden">
                  <div className=" pb-[60%]">
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
                </div>
              </div>
            );
          })}
        </div>
        <div className="w-fill md:w-[50%] self-start flex flex-col gap-fluid-32 md:gap-fluid-40">
          <FadeIn>
            <h1 className="text-headlineColor font-headline font-semiBold text-h2">
              {section.title}
            </h1>
          </FadeIn>
          <FadeIn
            delay={0.2}
            className="w-fill [&_p]:text-[16px] [&_p]:font-regular [&_p]:font-body [&_p]:pt-fluid-12 [&_p]:text-bodyGrey
    [&_h2]:text-h3 [&_h2]:font-headline [&_h2]:font-semiBold  [&_h2]:pt-fluid-32 [&_h2]:pb-fluid-32 [&_h2]:text-headlineColor
    [&_ul]:list-disc [&_li]:marker:text-headlineColor [&_li]:text-navLinks [&_li]:text-bodyGrey [&_li]:py-4 [&_ul]:py-8 [&_ol]:list-inside [&_ul]:list-inside [&_ol]:list-decimal [&_li]:marker:text-navLinks"
          >
            <PrismicRichText field={section.paragraph} />
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
