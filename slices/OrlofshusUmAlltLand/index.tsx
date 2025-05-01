import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Container from "@/app/components/Container/container";
import { FadeIn } from "@/app/components/FadeIn/fadeIn";
import { PrismicNextImage } from "@prismicio/next";
import Button from "@/app/components/Button/Button";
import { PrismicNextLink } from "@prismicio/next";
import Arrow from "../../app/icons/arrow.svg";
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
        <section className="rounded-8 bg-cyanideBlue bg-opacity-10 py-fluid-40 px-fluid-24 md:p-fluid-56 flex flex-col md:flex-row justify-between gap-fluid-48 lg:gap-fluid-56 lg2:gap-fluid-80">
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
                className="group text-[16px] hover:bg-buttonBlue hover:text-pureWhite text-buttonBlue bg-pureWhite flex pointer-events-auto rounded-32 e border-opacity-60  gap-16 py-fluid-8 items-center pr-fluid-12 pl-fluid-24  h-fit w-fit  font-body font-medium transition-all duration-300 ease-in-out ${className} "
              >
                {section.link_text}
                <div className="p-12  group-hover:bg-pureWhite group-hover:ml-4   bg-buttonBlue w-fit rounded-full transition-all duration-300 ease-in-out">
                  <Arrow className="text-pureWhite group-hover:text-buttonBlue -rotate-45 h-[14px]  transition-all duration-300 ease-in-out " />
                </div>
              </PrismicNextLink>
            </FadeIn>
          </div>
          <FadeIn className="relative w-fill md:w-[50%] flex">
            <div className="  relative pb-[70%] w-fill lg:pb-[80%] ">
              <PrismicNextImage
                field={section.image}
                className="object-cover z-0 rounded-6  "
                fill
                quality={100}
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
