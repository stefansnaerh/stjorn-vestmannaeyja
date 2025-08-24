"use client";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Container from "@/app/components/Container/container";
import Button from "@/app/components/Button/Button";
import { useState } from "react";
import cx from "classnames";
import { PrismicNextImage } from "@prismicio/next";
import { FadeIn } from "@/app/components/FadeIn/fadeIn";
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextLink } from "@prismicio/next";
import Arrow from "../../public/icons/ArrowRight.svg";
/**
 * Props for `SummerHouse`.
 */
export type SummerHouseProps = SliceComponentProps<Content.SummerHouseSlice>;

/**
 * Component for "SummerHouse" Slices.
 */
const SummerHouse = ({ slice }: SummerHouseProps): JSX.Element => {
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
            <PrismicNextLink
              field={section.link_to_house}
              aria-label={"hlekkur til þess að bóka hús á mínum síðum"}
              className="group text-[16px] hover:bg-buttonBlue hover:text-pureWhite text-buttonBlue flex pointer-events-auto rounded-32 border-[1.5px] border-buttonBlue border-opacity-60  gap-16 py-fluid-8 items-center pr-fluid-12 pl-fluid-24  h-fit w-fit  font-body font-medium transition-all duration-300 ease-in-out ${className} "
            >
              {`Sækja um ${section.title}`}
              <div className="p-12  group-hover:bg-pureWhite group-hover:ml-4   bg-buttonBlue w-fit rounded-full transition-all duration-300 ease-in-out">
                <Arrow className="text-pureWhite group-hover:text-buttonBlue -rotate-45 h-[14px]  transition-all duration-300 ease-in-out " />
              </div>
            </PrismicNextLink>
            <PrismicNextLink
              field={section.link_to_all_houses}
              aria-label={"hlekkur til að sjá öll hús"}
              className="group text-[16px] hover:bg-buttonBlue hover:text-pureWhite text-buttonBlue flex pointer-events-auto rounded-32 border-[1.5px] border-buttonBlue border-opacity-60  gap-16 py-fluid-8 items-center pr-fluid-12 pl-fluid-24  h-fit w-fit  font-body font-medium transition-all duration-300 ease-in-out ${className} "
            >
              {section.link_to_all_houses_text}
              <div className="p-12  group-hover:bg-pureWhite group-hover:ml-4   bg-buttonBlue w-fit rounded-full transition-all duration-300 ease-in-out">
                <Arrow className="text-pureWhite group-hover:text-buttonBlue -rotate-45 h-[14px]  transition-all duration-300 ease-in-out " />
              </div>
            </PrismicNextLink>
            {/* <Button
              text={`Úthlutunarreglur`}
              href={section.link_to_house}
              type="anchor"
              noShadow
              ariaLabel={`hlekkur til að lesa meira um okkur`}
              className=" text-[16px] bg-pureWhite  hover:bg-purple hover:text-pureWhite text-purple  font-semiBold flex justify-center border-[1.5px]   border-purple  rounded-8"
            ></Button> */}
          </FadeIn>
        </div>
      </Container>
    </section>
  );
};

export default SummerHouse;
