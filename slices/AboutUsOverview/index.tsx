import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { FadeIn } from "@/app/components/FadeIn/fadeIn";
import Container from "@/app/components/Container/container";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";

import { PrismicNextLink } from "@prismicio/next";
import Arrow from "../../app/icons/arrow.svg";
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
      <Container className="bg-white">
        <section className="relative text-black  flex flex-col gap-fluid-32 md:gap-fluid-40  w-fill  ">
          <div className="relative flex  w-fill gap-fluid-40 sm:gap-fluid-56 lg:gap-fluid-64 flex-col ">
            <div className="flex gap-fluid-32 flex-col md:flex-row">
              <FadeIn className=" flex flex-col gap-8 md:w-[40%]">
                <h2 className="text-h2 font-headline text-headlineColor font-semiBold w-fill">
                  {section.title}
                </h2>
              </FadeIn>
              <div className="flex flex-col gap-fluid-16 md:w-[60%]">
                <h2 className="text-[24px] font-headline text-headlineColor font-semiBold w-fill">
                  {section.sub_title}
                </h2>
                <FadeIn>
                  <div className="[&_p]:pb-fluid-12 [&_p]:text-[20px] [&_strong]:text-headlineColor xl:[&_p]:text-md font-body font-regular text-bodyGrey">
                    <PrismicRichText field={section.paragraph_1} />
                  </div>
                </FadeIn>
              </div>
            </div>
            <FadeIn className="flex flex-col md:flex-row relative gap-fluid-72 overflow-hidden w-fill ">
              <FadeIn className="self-center flex flex-col gap-fluid-32">
                <div className=" [&_p]:pb-fluid-12 [&_p]:text-[20px] [&_strong]:text-headlineColor xl:[&_p]:text-md font-body font-regular text-bodyGrey">
                  <PrismicRichText field={section.paragraph_2} />
                </div>
                {section.link_text ? (
                  <FadeIn className="  ">
                    <PrismicNextLink
                      field={section.link}
                      aria-label={"hlekkur til að lesa meira um okkur"}
                      className="group text-[16px] hover:bg-buttonBlue hover:text-pureWhite text-buttonBlue flex pointer-events-auto rounded-32 border-[1.5px] border-buttonBlue border-opacity-60  gap-16 py-fluid-8 items-center pr-fluid-12 pl-fluid-24  h-fit w-fit  font-body font-medium transition-all duration-300 ease-in-out ${className} "
                    >
                      {section.link_text}
                      <div className="p-12  group-hover:bg-pureWhite group-hover:ml-4   bg-buttonBlue w-fit rounded-full transition-all duration-300 ease-in-out">
                        <Arrow className="text-pureWhite group-hover:text-buttonBlue -rotate-45 h-[14px]  transition-all duration-300 ease-in-out " />
                      </div>
                    </PrismicNextLink>
                  </FadeIn>
                ) : (
                  ""
                )}
              </FadeIn>
              <div className="relative  min-w-[60%] overflow-hidden  ">
                <div className="relative  pb-[70%] md:pb-[120%] lg:pb-[80%] ">
                  <PrismicNextImage
                    field={section.image_1}
                    className="object-cover z-0 rounded-16"
                    fill
                    alt={""}
                    sizes="(max-width: 768px) 100vw"
                  />
                </div>
              </div>
            </FadeIn>
            <FadeIn className="flex flex-col md:flex-row relative gap-fluid-72 overflow-hidden w-fill ">
              <div className="relative hidden md:block min-w-[60%] overflow-hidden  ">
                <div className="relative  pb-[70%] md:pb-[120%] lg:pb-[60%] ">
                  <PrismicNextImage
                    field={section.image_2}
                    className="object-cover z-0 rounded-16"
                    fill
                    alt={""}
                    sizes="(max-width: 768px) 100vw"
                  />
                </div>
              </div>
              <FadeIn className="self-center flex flex-col gap-fluid-32">
                <div className=" [&_p]:pb-fluid-12 [&_p]:text-[20px] [&_strong]:text-headlineColor xl:[&_p]:text-md font-body font-regular text-bodyGrey">
                  <PrismicRichText field={section.paragraph_3} />
                </div>

                {section.link_text ? (
                  <FadeIn className="  ">
                    <PrismicNextLink
                      field={section.link}
                      aria-label={"hlekkur til að lesa meira um okkur"}
                      className="group text-[16px] hover:bg-buttonBlue hover:text-pureWhite text-buttonBlue flex pointer-events-auto rounded-32 border-[1.5px] border-buttonBlue border-opacity-60  gap-16 py-fluid-8 items-center pr-fluid-12 pl-fluid-24  h-fit w-fit  font-body font-medium transition-all duration-300 ease-in-out ${className} "
                    >
                      {section.link_text}
                      <div className="p-12  group-hover:bg-pureWhite group-hover:ml-4   bg-buttonBlue w-fit rounded-full transition-all duration-300 ease-in-out">
                        <Arrow className="text-pureWhite group-hover:text-buttonBlue -rotate-45 h-[14px]  transition-all duration-300 ease-in-out " />
                      </div>
                    </PrismicNextLink>
                  </FadeIn>
                ) : (
                  ""
                )}
              </FadeIn>
            </FadeIn>
          </div>
        </section>
      </Container>
    </section>
  );
};

export default AboutUsOverview;
