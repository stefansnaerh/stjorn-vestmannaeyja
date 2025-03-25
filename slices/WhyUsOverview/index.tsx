import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Container from "@/app/components/Container/container";
import { FadeIn } from "@/app/components/FadeIn/fadeIn";
import Image from "next/image";
import { PrismicRichText } from "@prismicio/react";
import { KeyTextField } from "@prismicio/client";
import book from "../../public/icons/bookIcon.svg";
import launavernd from "../../public/icons/launavernd-nytt.svg";
import sjukrasjodur from "../../public/icons/sjukrasjodur-nytt.svg";
import heilsustyrkir from "../../public/icons/heilsustyrkir-nytt.svg";
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
      className="flex justify-center bg-backgroundLightBlue"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Container className=" flex flex-col gap-fluid-56 w-fill">
        <div className="flex flex-col gap-fluid-24">
          <FadeIn className="w-fill">
            <h2 className=" text-h2 font-headline text-headlineColor font-semiBold w-fill">
              {section.title}
            </h2>
          </FadeIn>
          <FadeIn className="w-[60%]">
            <p className=" text-navLinks font-body font-regular text-bodyGrey">
              {section.sub_title}
            </p>
          </FadeIn>
        </div>
        <div className="flex flex-col lg:w-fill  lg:self-center sm:grid grid-cols-2 grid-rows-2 justify-center gap-fluid-32">
          {section.title_and_text_items.map((item, i) => {
            const iconToShow = (iconText: KeyTextField | void) => {
              if (iconText === "Launavernd") {
                return (
                  <Image
                    className="h-fluid-40   self-start"
                    alt="Manns icon"
                    src={launavernd}
                  />
                );
              } else if (iconText === "Menntastyrkir") {
                return (
                  <Image
                    className="h-fluid-40  self-start"
                    alt="Manns icon"
                    src={book}
                  />
                );
              } else if (iconText === "Heilsutengdir styrkir") {
                return (
                  <Image
                    className="h-fluid-40 self-start"
                    alt="Manns icon"
                    src={heilsustyrkir}
                  />
                );
              } else
                return (
                  <Image
                    className="h-fluid-40  self-start"
                    alt="Manns icon"
                    src={sjukrasjodur}
                  />
                );
            };
            return (
              <FadeIn
                className="sm:w-fill sm:h-fill   self-center w-fill rounded-6 flex flex-col gap-fluid-24 bg-pureWhite  py-fluid-32 sm:py-fluid-40 px-fluid-32 xs:px-fluid-40 sm:px-fluid-56 border-[1px] border-greyInput border-opacity-30"
                key={`${i}${item.title}`}
              >
                {iconToShow(item.title)}
                <h4 className="text-h5  font-headline text-headlineColor font-medium ">
                  {item.title}
                </h4>

                <div className="w-fill  [&_a]:text-purple [&_a]:font-semiBold   [&_p]:text-[16px] [&_p]:font-regular [&_p]:font-body [&_p]:text-bodyGrey">
                  <PrismicRichText field={item.paragraph} />
                </div>
              </FadeIn>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default WhyUsOverview;
