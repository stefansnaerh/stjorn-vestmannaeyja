import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Container from "@/app/components/Container/container";
import { FadeIn } from "@/app/components/FadeIn/fadeIn";
import { PrismicNextImage } from "@prismicio/next";
import Button from "@/app/components/Button/Button";
import { PrismicNextLink } from "@prismicio/next";
import Arrow from "../../app/icons/arrow.svg";
import BackgroundShape from "../../public/images/backgroundShapeTest.svg";
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
        <section className="  flex flex-col md:flex-row justify-between gap-fluid-48 lg:gap-fluid-56 lg2:gap-fluid-80">
          <div className="relative flex flex-col  gap-fluid-32 lg:gap-fluid-40 justify-center md:w-[50%] xl:self-center xl:gap-fluid-56">
            <FadeIn className="w-fill flex flex-col gap-8">
              <h2 className="text-[20px] font-headline text-buttonBlue font-semiBold w-fill">
                {section.sub_title}
              </h2>
              <h2 className="text-h2 font-headline text-headlineColor font-semiBold w-fill">
                {section.title}
              </h2>
            </FadeIn>

            <FadeIn className="">
              <p className=" text-[16px] font-body font-regular text-bodyGrey">
                {section.paragraph}
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
                  <Arrow className="text-pureWhite group-hover:text-buttonBlue -rotate-45 h-[14px]  transition-all duration-300 ease-in-out " />
                </div>
              </PrismicNextLink>
            </FadeIn>
          </div>
          <FadeIn className="relative w-fill md:w-[80%] flex md:grid grid-cols-5 grid-rows-3 gap-y-fluid-32 gap-x-fluid-24">
            <BackgroundShape className="md:absolute md:block hidden h-[80%] right-[5%] my-auto top-0 bottom-0" />
            <div className="  relative pb-[70%] w-fill lg:pb-[140%] row-start-1 row-end-3 col-start-2 col-end-4">
              <PrismicNextImage
                field={section.image}
                className="object-cover z-0 rounded-24 "
                fill
                quality={70}
                alt={""}
                sizes="(max-width: 768px) 100vw"
              />
            </div>

            <div className="hidden md:block  relative pb-[60%] lg:pb-[60%] row-start-3 row-end-4 col-start-1 col-end-3">
              <PrismicNextImage
                field={section.image_2}
                className="object-cover z-0 rounded-24 "
                fill
                quality={70}
                alt={""}
                sizes="(max-width: 768px) 100vw"
              />
            </div>
            <div className="hidden md:block  relative pb-[60%] w-[90%] self-end lg:pb-[120%] row-start-2 row-end-4 col-start-4 col-end-6">
              <PrismicNextImage
                field={section.image_3}
                className="object-cover z-0 rounded-24 "
                fill
                quality={70}
                alt={""}
                sizes="(max-width: 768px) 100vw"
              />
            </div>
          </FadeIn>
        </section>
      </Container>
    </section>
  );
};

export default OrlofshusUmAlltLand;
