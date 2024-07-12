import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { FadeIn } from "@/app/components/FadeIn/fadeIn";
import Container from "@/app/components/Container/container";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import Button from "@/app/components/Button/Button";
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
        <section className="relative text-black  flex flex-col gap-fluid-40  w-fill  ">
          <FadeIn className="w-fill">
            <h2 className="text-h2 font-headline text-headlineColor font-semiBold w-fill">
              {section.title}
            </h2>
          </FadeIn>
          <div className="relative sm:grid-rows-1 sm:grid sm:grid-cols-7 w-fill">
            <FadeIn className="flex row-span-1 col-end-8 col-start-1 md:col-end-7 gap-fluid-24 overflow-hidden  md:w-[65%]">
              <div className="sm:block relative hidden min-w-[100%] overflow-hidden  sm:col-start-1 sm:col-end-4 sm:row-start-1 sm:row-end-3">
                <div className="relative  pb-[80%] md:pb-[100%] lg:pb-[80%] ">
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
            <div className=" relative h-fit sm:row-start-1 sm:col-start-2 sm:col-end-7  md:col-start-4 md:col-end-8 grid grid-col-1 grid-flow-row gap-fluid-40  w-fill">
              <div className="flex flex-col gap-fluid-40 sm:absolute w-fill sm:mt-[20%] md:mt-[10%] lg:mt-[8%] lg2:mt-[12%] sm:bg-pureWhite rounded-8 sm:py-fluid-48 sm:px-fluid-40 sm:border-[1px] border-greyInput border-opacity-15">
                <FadeIn delay={0.2}>
                  <div className=" [&_p]:text-[16px] xl:[&_p]:text-md font-body font-regular text-bodyGrey">
                    <PrismicRichText field={section.paragraph} />
                  </div>
                </FadeIn>
                <FadeIn delay={0.4} className="  ">
                  <Button
                    text="Lesa meira"
                    href={section.link}
                    type="anchor"
                    noShadow
                    arrow
                    ariaLabel={`hlekkur til að lesa meira um okkur`}
                    className=" text-[16px] bg-purple hover:bg-purpleHover text-pureWhite  font-semiBold flex justify-center   border-buttonBlue  rounded-12"
                  ></Button>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </section>
  );
};

export default AboutUsOverview;
