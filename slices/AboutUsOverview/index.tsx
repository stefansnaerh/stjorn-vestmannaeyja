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
        <section className="relative text-black  flex flex-col gap-fluid-32 md:gap-fluid-40  w-fill  ">
          <div className="relative flex w-fill gap-fluid-40 sm:gap-fluid-56 flex-col md:flex-row">
            <FadeIn className="flex gap-fluid-24 overflow-hidden w-fill">
              <div className="relative  min-w-[100%] overflow-hidden  sm:col-start-1 sm:col-end-4 sm:row-start-1 sm:row-end-3">
                <div className="relative  pb-[70%] md:pb-[100%] lg:pb-[80%] ">
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
            <div className="self-center relative h-fit sm:row-start-1 sm:col-start-2 sm:col-end-3  md:col-start-2 md:col-end-3 grid grid-col-1 grid-flow-row gap-fluid-40  w-fill">
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
