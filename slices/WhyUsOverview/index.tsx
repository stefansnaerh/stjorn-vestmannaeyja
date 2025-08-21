import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Container from "@/app/components/Container/container";
import { FadeIn } from "@/app/components/FadeIn/fadeIn";
import Image from "next/image";
import { PrismicRichText } from "@prismicio/react";
import { KeyTextField } from "@prismicio/client";
import Menntastyrkur from "../../app/icons/menntastyrkir.svg";
import Launavernd from "../../app/icons/launavernd.svg";
import Sjukrasjodur from "../../app/icons/sjukrasjodur.svg";
import Heilsustyrkir from "../../app/icons/heilsustyrkir.svg";

/**
 * Props for `WhyUsOverview`.
 */
export type WhyUsOverviewProps =
  SliceComponentProps<Content.WhyUsOverviewSlice>;

/**
 * Component for "WhyUsOverview" Slices.
 */
const WhyUsOverview = ({ slice }: WhyUsOverviewProps): JSX.Element => {
  const section = slice.primary;

  const startYear = 1938;
  const currentYear = new Date().getFullYear();
  const yearsActive = currentYear - startYear;

  return (
    <section
      className="flex justify-center  self-center"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className=" flex flex-col gap-fluid-64 md:gap-fluid-96 w-fill max-w-[2000px]  ">
        <div className="flex flex-col md:flex-row md:justify-between gap-fluid-24  px-container-88 pt-64 lg-pt-fluid-122 pb-fluid-64  self-center">
          <FadeIn className="w-fill flex md:w-[40%] flex-col gap-8">
            <h2 className="text-h2 font-headline text-headlineColor font-semiBold w-fill">
              {section.title}
            </h2>
          </FadeIn>
          <FadeIn className=" md:w-[60%]">
            <p className=" text-[20px] font-body font-regular text-bodyGrey">
              {section.paragraph}
            </p>
          </FadeIn>
        </div>
        <div className="flex flex-col lg:w-fill  lg:self-center md:grid grid-cols-2 grid-rows-2 justify-center gap-fluid-40 md:gap-fluid-64 bg-backgroundGrey px-container-88 pb-fluid-64  ">
          {section.title_and_text_items.map((item, i) => {
            const iconToShow = (iconText: KeyTextField | void) => {
              if (iconText === "Launavernd") {
                return (
                  <Launavernd className="hidden sm:flex sm:w-[10%] md:w-[12%] md:self-start " />
                );
              } else if (iconText === "Menntastyrkir") {
                return (
                  <Menntastyrkur className="hidden sm:flex sm:w-[10%] md:w-[12%]   md:self-start " />
                );
              } else if (iconText === "Heilsutengdir styrkir") {
                return (
                  <Heilsustyrkir className="hidden sm:flex sm:w-[10%] md:w-[12%] md:self-start" />
                );
              } else
                return (
                  <Sjukrasjodur className="hidden sm:flex sm:w-[10%] md:w-[12%]  md:self-start" />
                );
            };
            return (
              <FadeIn
                className="sm:w-fill sm:h-fill self-center w-fill rounded-6 flex sm:flex-row flex-col gap-fluid-40   border-[1px] border-greyInput border-opacity-20 sm:pb-fluid-40 sm:pt-fluid-48 px-fluid-32 xs:px-fluid-40 sm:px-fluid-56  bg-white  py-fluid-32"
                key={`${i}${item.title}`}
              >
                {iconToShow(item.title)}
                <div className="flex flex-col gap-fluid-24 sm:w-[85%]">
                  <h4 className="text-h5  font-headline text-headlineColor font-medium ">
                    {item.title}
                  </h4>

                  <div className="w-fill  [&_a]:text-purple [&_a]:font-semiBold   [&_p]:text-[16px] [&_p]:font-regular [&_p]:font-body [&_p]:text-bodyGrey">
                    <PrismicRichText field={item.paragraph} />
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyUsOverview;
