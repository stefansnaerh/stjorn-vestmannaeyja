import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { FadeIn } from "@/app/components/FadeIn/fadeIn";
import Container from "@/app/components/Container/container";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import LightBulp from "../../app/icons/lightBulp.svg";
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
          <div className="relative flex w-fill gap-fluid-40 sm:gap-fluid-56 lg:gap-fluid-64 flex-col md:flex-row">
            <FadeIn className="flex gap-fluid-24 overflow-hidden w-fill md:w-[55%]">
              <div className="relative  min-w-[100%] overflow-hidden  ">
                <div className="relative  pb-[70%] md:pb-[120%] lg:pb-[100%] ">
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
            <div className="self-center relative h-fit  grid grid-col-1 grid-flow-row gap-fluid-40  w-fill md:w-[45%]">
              <FadeIn className="flex flex-col gap-fluid-40 w-fill">
                <FadeIn className="w-fill flex flex-col gap-8">
                  <h2 className="text-[20px] font-headline text-buttonBlue font-semiBold w-fill">
                    {section.sub_title}
                  </h2>
                  <h2 className="text-h2 font-headline text-headlineColor font-semiBold w-fill">
                    {section.title}
                  </h2>
                </FadeIn>
                <FadeIn>
                  <div className="[&_p]:pb-fluid-12 [&_p]:text-[16px] xl:[&_p]:text-md font-body font-regular text-bodyGrey">
                    <PrismicRichText field={section.paragraph} />
                  </div>
                </FadeIn>
                <FadeIn className="relative flex mt-fluid-40 flex-col gap-fluid-24 bg-softBlue pb-fluid-48 pt-fluid-64 px-fluid-40 rounded-6">
                  <LightBulp className="w-72 absolute -top-40" />
                  <h3 className="text-h5 font-body text-headlineColor font-semiBold">
                    {section.card_title}
                  </h3>
                  <p className="text-[16px] xl:text-md font-body text-bodyGrey">
                    {section.card_paragraph}
                  </p>
                </FadeIn>

                <FadeIn className="  ">
                  <PrismicNextLink
                    field={section.link}
                    aria-label={"hlekkur til að lesa meira um okkur"}
                    className="group text-[16px] hover:bg-buttonBlue hover:text-pureWhite text-buttonBlue flex pointer-events-auto rounded-32 border-[1.5px] border-buttonBlue border-opacity-60  gap-16 py-fluid-8 items-center pr-fluid-12 pl-fluid-24  h-fit w-fit  font-body font-medium transition-all duration-300 ease-in-out ${className} "
                  >
                    {section.link_text}
                    <div className="p-12  group-hover:bg-pureWhite group-hover:ml-4   bg-buttonBlue w-fit rounded-full transition-all duration-300 ease-in-out">
                      <Arrow className="text-pureWhite group-hover:text-black -rotate-45 h-[14px]  transition-all duration-300 ease-in-out " />
                    </div>
                  </PrismicNextLink>
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
