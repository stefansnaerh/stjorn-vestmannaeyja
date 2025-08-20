import Container from "../Container/container";
import { FadeIn } from "../FadeIn/fadeIn";
import { PrismicNextLink } from "@prismicio/next";
import { FrontPageDocumentData } from "@/prismicio-types";
import HouseIcon from "../../icons/houseIcon.svg";
import HandIcon from "../../icons/dollarIcon.svg";
import HeartIcon from "../../icons/heartIcon.svg";
import GraduationCapIcon from "../../icons/GraduationCapIcon.svg";
import { KeyTextField } from "@prismicio/client";
import Arrow from "../../icons/arrow.svg";
import ThreePolygons from "../../icons/threePolygons.svg";

const ServiceOverview = ({
  content,
}: {
  content: FrontPageDocumentData;
}): JSX.Element => {
  return (
    <section className="flex relative justify-center bg-backgroundGrey">
      <Container className="flex flex-col gap-fluid-40 lg:gap-fluid-122 w-fill">
        <div className="flex flex-col gap-fluid-24 lg:w-[80%] self-start">
          <FadeIn className="w-fill">
            <h2 className=" text-h2 font-headline text-headlineColor font-semiBold w-fill">
              {content.members_benefits_title}
            </h2>
          </FadeIn>
          <FadeIn className="md:w-[70%] xl:w-[80%]  lg:w-fill">
            <p className=" text-[20px] font-body font-regular text-bodyGrey">
              {content.members_benefits_paragraph}
            </p>
          </FadeIn>
        </div>
        <div className="flex flex-col  sm:grid grid-cols-2 grid-rows-2 lg:grid-rows-1 lg:grid-cols-4 justify-center gap-fluid-24">
          {content.benefits.map((item, i) => {
            const iconToShow = (iconText: KeyTextField | void) => {
              if (iconText === "Orlofshús") {
                return <HouseIcon className="w-[36px]" />;
              } else if (iconText === "Styrkir") {
                return <HandIcon className="w-[36px]" />;
              } else if (iconText === "Sjúkrasjóður") {
                return <HeartIcon className="w-[36px]" />;
              } else return <GraduationCapIcon className="w-[36px]" />;
            };
            return (
              <FadeIn>
                <PrismicNextLink
                  className=""
                  key={`${i}${item.title}`}
                  field={item.link}
                >
                  <div className="sm:w-fill sm:h-fill  w-fill rounded-6 flex flex-col justify-between gap-fluid-32 p-fluid-32 border-[1px] border-greyInput border-opacity-40 hover:border-buttonBlue group hover:border-opacity-60 transition-all duration-300 ease-in-out">
                    <div className="flex flex-col gap-fluid-32">
                      <div className="flex justify-between">
                        <div className="h-72 w-72 rounded-[100%] flex justify-center bg-[#F5F8FF;]">
                          {iconToShow(item.title)}
                        </div>
                        <div className="p-12 group-hover:bg-buttonBlue  bg-pureWhite w-fit h-fit rounded-full transition-all duration-300 ease-in-out">
                          <Arrow className="text-buttonBlue group-hover:text-pureWhite -rotate-45 h-16 transition-all duration-300 ease-in-out " />
                        </div>
                      </div>
                      <div className="flex flex-col gap-fluid-8">
                        <h4 className="text-paragraph font-headline text-headlineColor font-medium ">
                          {item.title}
                        </h4>

                        <p className="font-body text-[16px] text-bodyGrey">
                          {item.paragraph}
                        </p>
                      </div>
                    </div>
                  </div>
                </PrismicNextLink>
              </FadeIn>
            );
          })}
        </div>
      </Container>
      <ThreePolygons className="lg:absolute lg:flex hidden lg:left-0 lg:-bottom-[14%] w-[25%] lg2:w-[20%] " />
    </section>
  );
};

export default ServiceOverview;
