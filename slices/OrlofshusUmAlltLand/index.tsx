import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Container from "@/app/components/Container/container";
import { FadeIn } from "@/app/components/FadeIn/fadeIn";
import { PrismicNextImage } from "@prismicio/next";
import Button from "@/app/components/Button/Button";
/**
 * Props for `OrlofshusUmAlltLand`.
 */
export type OrlofshusUmAlltLandProps =
  SliceComponentProps<Content.OrlofshusUmAlltLandSlice>;

/**
 * Component for "OrlofshusUmAlltLand" Slices.
 */
const OrlofshusUmAlltLand = ({
  slice,
}: OrlofshusUmAlltLandProps): JSX.Element => {
  const section = slice.primary;
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="flex justify-center"
    >
      <Container className="bg-backgroundGrey">
        <section className="bg-purpleLight py-fluid-56 px-fluid-48 rounded-8 text-black flex flex-col md:flex-row justify-between">
          <div className="relative flex flex-col gap-fluid-40  md:w-[50%] justify-center">
            <FadeIn className="w-fill">
              <h2 className="text-h2 font-headline text-headlineColor font-semiBold w-fill">
                {section.title}
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className=" text-navLinks font-body font-regular text-bodyGrey">
                {section.paragraph}
              </p>
            </FadeIn>
            <FadeIn delay={0.4} className="  ">
              <Button
                text={section.link_text}
                href={section.link}
                type="anchor"
                noShadow
                arrow
                ariaLabel={`hlekkur til að lesa meira um okkur`}
                className=" text-[16px] bg-purple hover:bg-purpleHover text-pureWhite  font-semiBold flex justify-center   border-buttonBlue  rounded-12"
              ></Button>
            </FadeIn>
            <div className="flex w-fill justify-between">
              <FadeIn className="relative min-w-[80%]  sm:min-w-[48%]">
                <div className="hidden md:flex relative pb-[55%]">
                  <PrismicNextImage
                    field={section.image_1_small}
                    className="object-cover z-0 rounded-6 "
                    fill
                    alt={""}
                    sizes="(max-width: 768px) 100vw"
                  />
                </div>
              </FadeIn>
              <FadeIn className="relative min-w-[80%]  sm:min-w-[48%]">
                <div className="hidden md:flex relative pb-[55%]">
                  <PrismicNextImage
                    field={section.image_2_small}
                    className="object-cover z-0 rounded-6 "
                    fill
                    alt={""}
                    sizes="(max-width: 768px) 100vw"
                  />
                </div>
              </FadeIn>
            </div>
          </div>
          <FadeIn className="flex  gap-fluid-24 overflow-hidden  md:w-[40%]">
            <div className="relative  min-w-[100%] overflow-hidden  sm:col-start-1 sm:col-end-4 sm:row-start-1 sm:row-end-3">
              <div className="relative pb-[100%] md:pb-[110%] ">
                <PrismicNextImage
                  field={section.image_big}
                  className="object-cover z-0 rounded-6"
                  fill
                  alt={""}
                  sizes="(max-width: 768px) 100vw"
                />
              </div>
            </div>
          </FadeIn>
        </section>
      </Container>
    </section>
  );
};

export default OrlofshusUmAlltLand;
