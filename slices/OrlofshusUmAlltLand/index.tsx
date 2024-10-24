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
      <Container className="">
        <section className="rounded-8 flex flex-col md:flex-row justify-between gap-fluid-96">
          <div className="relative flex flex-col gap-fluid-32 md:gap-fluid-40  md:w-[50%] justify-center">
            <FadeIn className="w-fill">
              <h2 className=" text-h2 font-headline text-headlineColor font-semiBold w-fill">
                {section.title}
              </h2>
            </FadeIn>
            <FadeIn>
              <p className=" text-navLinks font-body font-regular text-bodyGrey">
                {section.paragraph}
              </p>
            </FadeIn>
            <FadeIn>
              <Button
                text={section.link_text}
                href={section.link}
                type="anchor"
                noShadow
                arrow
                ariaLabel={`hlekkur til að lesa meira um okkur`}
                className=" text-[16px] bg-buttonBlue hover:bg-buttonBlueHover text-pureWhite  font-semiBold flex justify-center   border-buttonBlue  rounded-12"
              ></Button>
            </FadeIn>
          </div>
          <div className="md:w-[60%] gap-fluid-48 md:grid md:grid-cols-2 md:grid-rows-3">
            <FadeIn className="relative place-self-end w-[90%] col-start-0 col-end-2 row-start-0 row-end-3 row-span-3">
              <div className="hidden md:flex relative pb-[120%] ">
                <PrismicNextImage
                  field={section.image_1_small}
                  className="object-cover z-0 rounded-6  "
                  fill
                  quality={100}
                  alt={""}
                  sizes="(max-width: 768px) 100vw"
                />
              </div>
            </FadeIn>
            <FadeIn className="relative col-start-0 col-end-2 row-start-3 row-end-6  ">
              <div className="hidden md:flex relative pb-[65%]">
                <PrismicNextImage
                  field={section.image_2_small}
                  className="object-cover z-0 rounded-6 "
                  fill
                  alt={""}
                  sizes="(max-width: 768px) 100vw"
                />
              </div>
            </FadeIn>

            <div className="relative   col-start-2 col-end-3 row-start-1 row-end-5 row-span-5">
              <FadeIn className="relative pb-[60%] md:pb-[155%] ">
                <PrismicNextImage
                  field={section.image_big}
                  className="object-cover z-0 rounded-6"
                  fill
                  alt={""}
                  sizes="(max-width: 768px) 100vw"
                />
              </FadeIn>
            </div>
          </div>
        </section>
      </Container>
    </section>
  );
};

export default OrlofshusUmAlltLand;
