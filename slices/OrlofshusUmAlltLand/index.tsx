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
        <section className="rounded-8 flex flex-col md:flex-row justify-between gap-fluid-48 lg:gap-fluid-56 lg2:gap-fluid-80">
          <div className="relative flex flex-col  gap-fluid-48 lg:gap-fluid-96  justify-end md:w-[33%] xl:self-center xl:gap-fluid-56">
            <FadeIn className="w-fill">
              <h2 className=" text-h2 font-headline text-headlineColor font-semiBold w-fill">
                {section.title}
              </h2>
            </FadeIn>
            <FadeIn className="hidden md:flex relative place-self-end w-fill col-start-0 col-end-2 row-start-0 row-end-3 row-span-3">
              <div className="  relative pb-[70%] w-fill lg:pb-[80%] ">
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
            <FadeIn className="md:hidden">
              <p className=" text-navLinks font-body font-regular text-bodyGrey">
                {section.paragraph}
              </p>
            </FadeIn>
            <FadeIn className="md:hidden">
              <Button
                text={section.link_text}
                href={section.link}
                type="anchor"
                noShadow
                arrow
                ariaLabel={`hlekkur til að lesa meira um okkur`}
                className=" text-[16px] bg-buttonBlue hover:bg-buttonBlueHover text-pureWhite  font-semiBold flex justify-center   border-buttonBlue  rounded-6"
              ></Button>
            </FadeIn>
          </div>

          <FadeIn className="relative col-start-0 col-end-2 row-start-3 row-end-6 md:w-[33%]  ">
            <div className="relative pb-[70%] md:pb-[155%]">
              <PrismicNextImage
                field={section.image_2_small}
                className="object-cover z-0 rounded-6 "
                fill
                alt={""}
                sizes="(max-width: 768px) 100vw"
              />
            </div>
          </FadeIn>

          <div className="hidden md:flex relative xl:self-center xl:gap-fluid-56  flex-col justify-between md:w-[33%]">
            <FadeIn className=" relative pb-[70%] lg:pb-[80%]">
              <PrismicNextImage
                field={section.image_big}
                className="object-cover z-0 rounded-6"
                fill
                alt={""}
                sizes="(max-width: 768px) 100vw"
              />
            </FadeIn>
            <div className="flex flex-col gap-fluid-24">
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
                  className=" text-[16px] bg-buttonBlue hover:bg-buttonBlueHover text-pureWhite  font-semiBold flex justify-center   border-buttonBlue  rounded-6"
                ></Button>
              </FadeIn>
            </div>
          </div>
        </section>
      </Container>
    </section>
  );
};

export default OrlofshusUmAlltLand;
