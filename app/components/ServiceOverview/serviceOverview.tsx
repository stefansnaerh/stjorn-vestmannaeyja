import Container from "../Container/container";
import { FadeIn } from "../FadeIn/fadeIn";
import { PrismicNextLink } from "@prismicio/next";
import { FrontPageDocumentData } from "@/prismicio-types";
import HouseIcon from "../../icons/houseIcon.svg";
import HandIcon from "../../icons/handIcon.svg";
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
    <section className="flex relative justify-center bg-black">
      <Container className="flex flex-col lg:flex-row gap-fluid-40 lg:gap-fluid-122 w-fill">
        <div className="flex flex-col gap-fluid-24 lg:w-[40%]">
          <FadeIn className="w-fill">
            <p className=" text-md font-headline text-lightBlue font-semiBold w-fill">
              {content.members_benefits_sub_title}
            </p>
          </FadeIn>
          <FadeIn className="w-fill">
            <h2 className=" text-h2 font-headline text-pureWhite font-semiBold w-fill">
              {content.members_benefits_title}
            </h2>
          </FadeIn>
          <FadeIn className="md:w-[70%] xl:w-[80%]  lg:w-fill">
            <p className=" text-[16px] font-body font-regular text-bodyGreyOnDark">
              {content.members_benefits_paragraph}
            </p>
          </FadeIn>
        </div>
        <div className="flex flex-col lg:w-[60%] sm:grid grid-cols-2 grid-rows-2 justify-center gap-fluid-32">
          {content.benefits.map((item, i) => {
            const iconToShow = (iconText: KeyTextField | void) => {
              if (iconText === "Orlofshús") {
                return <HouseIcon className="w-48" />;
              } else if (iconText === "Styrkir") {
                return <HandIcon className="w-48" />;
              } else if (iconText === "Sjúkrasjóður") {
                return <HeartIcon className="w-48" />;
              } else return <GraduationCapIcon className="w-48" />;
            };
            return (
              <FadeIn>
                <PrismicNextLink
                  className=""
                  key={`${i}${item.title}`}
                  field={item.link}
                >
                  <div className="sm:w-fill sm:h-fill  w-fill rounded-6 flex flex-col justify-between gap-fluid-32 bg-greyDarker p-fluid-32 border-[1px] border-greyInput border-opacity-20 hover:border-cyanideBlue group hover:border-opacity-60 transition-all duration-300 ease-in-out">
                    <div className="flex flex-col gap-fluid-32">
                      {iconToShow(item.title)}
                      <div className="flex flex-col gap-fluid-8">
                        <h4 className="text-[20px]  font-headline text-pureWhite font-semiBold ">
                          {item.title}
                        </h4>

                        <p className="font-body text-[16px] text-bodyGreyOnDark">
                          {item.paragraph}
                        </p>
                      </div>
                    </div>
                    <div className="p-16 group-hover:bg-pureBlack  bg-greyMedium w-fit rounded-full transition-all duration-300 ease-in-out">
                      <Arrow className="text-pureWhite group-hover:text-cyanideBlue -rotate-45 h-16 transition-all duration-300 ease-in-out " />
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
