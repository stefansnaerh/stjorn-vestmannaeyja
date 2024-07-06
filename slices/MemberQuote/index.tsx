import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Container from "@/app/components/Container/container";
import { FadeIn } from "@/app/components/FadeIn/fadeIn";
import Image from "next/image";
import Kommur from "../../public/icons/quotationmark-felag-stjornenda.svg";
import { PrismicNextImage } from "@prismicio/next";
/**
 * Props for `MemberQuote`.
 */
export type MemberQuoteProps = SliceComponentProps<Content.MemberQuoteSlice>;

/**
 * Component for "MemberQuote" Slices.
 */
const MemberQuote = ({ slice }: MemberQuoteProps): JSX.Element => {
  const section = slice?.primary;
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Container lessPadding className="flex justify-center">
        <FadeIn className="flex bg-pureWhite sm:bg-transparent flex-col gap-fluid-32 pb-fluid-40 sm:pb-0 lg:gap-fluid-48 max-w-[1200px]">
          <FadeIn className="flex sm:bg-pureWhite shadow-quote gap-fluid-32 md:gap-fluid-40 flex-col px-fluid-24 pt-fluid-32 sm:pb-[100px]  smmd:px-fluid-56 smmd:pt-fluid-80  smmd:pb-[160px]  smmd:justify-around lg:justify-center ">
            <Image
              alt="kommur"
              src={Kommur}
              className=" h-[40px] md:w-fluid-96 self-center"
            />

            <FadeIn className="flex w-fit justify-center">
              <p className="font-body  self-center text-center w-[80%] text-md font-regular text-headlineBlue">
                <span className="font-bold">„</span>
                {section.paragraph} “
              </p>
            </FadeIn>
          </FadeIn>
          <div className="sm:grid grid-rows-4 flex flex-col gap-fluid-24 ">
            <div className="relative flex">
              <div className=" sm:absolute w-[80%]  sm:w-[20%] m-auto left-0 right-0 bottom-[-20px] smmd:bottom-[-40px] ">
                <FadeIn className="relative   overflow-hidden">
                  <div className="relative pb-[100%]">
                    <PrismicNextImage
                      field={section.image}
                      className="object-cover z-0 rounded-6 "
                      fill
                      alt={""}
                      sizes="(max-width: 768px) 100vw"
                    />
                  </div>
                </FadeIn>
              </div>
            </div>
            <div className="flex flex-col gap-4 row-start-3 w-fill ">
              <FadeIn className="w-fit self-center">
                <p className="font-headline text-headlineBlue font-semiBold text-navLinksMobile">
                  {section.name}
                </p>
              </FadeIn>
              <FadeIn className="self-center">
                <p className="font-body text-buttonBlue text-md">
                  {section.job_title}
                </p>
              </FadeIn>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
};

export default MemberQuote;
