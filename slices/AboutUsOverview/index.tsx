import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { FadeIn } from "@/app/components/FadeIn/fadeIn";
import Container from "@/app/components/Container/container";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import Image from "next/image";
import Button from "@/app/components/Button/Button";
import Checkmark from "../../public/icons/checkMark2.svg";
/**
 * Props for `AboutUsOverview`.
 */
export type AboutUsOverviewProps =
  SliceComponentProps<Content.AboutUsOverviewSlice>;

/**
 * Component for "AboutUsOverview" Slices.
 */
const AboutUsOverview = ({ slice }: AboutUsOverviewProps): JSX.Element => {
  const section = slice.primary;
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="flex justify-center"
    >
      <Container className="bg-backgroundGrey">
        <section className="relative text-black  flex flex-col gap-fluid-32 md:gap-fluid-40  w-fill  ">
          <div className="relative flex w-fill gap-fluid-40 sm:gap-fluid-56 flex-col md:flex-row">
            <FadeIn className="flex gap-fluid-24 overflow-hidden w-fill md:w-[40%]">
              <div className="relative  min-w-[100%] overflow-hidden  ">
                <div className="relative  pb-[70%] md:pb-[120%] lg:pb-[140%] ">
                  <PrismicNextImage
                    field={section.image}
                    className="object-cover z-0 rounded-6"
                    fill
                    alt={""}
                    sizes="(max-width: 768px) 100vw"
                  />
                </div>
              </div>
            </FadeIn>
            <div className="self-center relative h-fit  grid grid-col-1 grid-flow-row gap-fluid-40  w-fill md:w-[60%]">
              <FadeIn className="flex flex-col gap-fluid-40 w-fill">
                <FadeIn className="w-fill">
                  <h2 className="text-h2 font-headline text-headlineColor font-semiBold w-fill">
                    {section.title}
                  </h2>
                </FadeIn>
                <FadeIn delay={0.2}>
                  <div className="[&_p]:pb-fluid-12 [&_p]:text-[16px] xl:[&_p]:text-md font-body font-regular text-bodyGrey">
                    <PrismicRichText field={section.paragraph} />
                  </div>
                </FadeIn>
                <ul className="flex flex-col gap-fluid-18 text-[16px] font-regular text-bodyGrey font-body">
                  {section.list.map((item, i) => {
                    return (
                      <li
                        key={`${i}${item.list_item}`}
                        className="flex gap-fluid-12"
                      >
                        <Image
                          width={20}
                          height={20}
                          className="h-20"
                          alt="checkmark"
                          src={Checkmark}
                        />
                        {item.list_item}
                      </li>
                    );
                  })}
                </ul>
                <FadeIn delay={0.4} className="  ">
                  <Button
                    text="Lesa meira"
                    href={section.link}
                    type="anchor"
                    noShadow
                    arrow
                    ariaLabel={`hlekkur til að lesa meira um okkur`}
                    className=" text-[16px] bg-buttonBlue hover:bg-buttonBlueHover text-pureWhite  font-semiBold flex justify-center   border-buttonBlue  rounded-12"
                  ></Button>
                </FadeIn>
              </FadeIn>
            </div>
          </div>
        </section>
      </Container>
    </section>
  );
};

export default AboutUsOverview;
