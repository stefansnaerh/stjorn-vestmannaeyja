import Container from "../Container/container";
import { FadeIn } from "../FadeIn/fadeIn";
import { PrismicNextLink } from "@prismicio/next";
import Image from "next/image";
import { FrontPageDocumentData } from "@/prismicio-types";
import Arrow from "../../../public/icons/ArrowRight.svg";
const ServiceOverview = ({
  content,
}: {
  content: FrontPageDocumentData;
}): JSX.Element => {
  return (
    <div className="bg-backgroundBlue flex justify-center">
      <Container className="bg-backgroundBlue text-white " lessPadding>
        <section className="flex flex-col gap-fluid-40 md:gap-fluid-72 overflow-hidden ">
          <FadeIn className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 grid-flow-row gap-fluid-24">
            {content.serviceoverview?.map((item, index) => {
              return (
                <PrismicNextLink
                  key={`${index}${item.title}`}
                  field={item.link}
                  className=" flex w-fill group border-2 border-buttonBlue border-opacity-35 flex-col gap-fluid-32  justify-between hover:bg-white hover:border-white px-fluid-32 xs:px-fluid-40  pt-fluid-40  pb-fluid-32  rounded-6 transition-all duration-300 ease-in-out snap-x snap-mandatory snap-always snap-center  "
                >
                  <div className="flex flex-col gap-fluid-16">
                    <FadeIn className="flex justify-between">
                      <h3 className="text-paragraph group-hover:text-headlineColor font-headline font-semiBold self-center">
                        {item.title}
                      </h3>
                    </FadeIn>
                    <FadeIn>
                      <p className="text-[16px] group-hover:text-bodyGrey font-regular font-body line-clamp-3">
                        {item.paragraph}
                      </p>
                    </FadeIn>
                  </div>
                  <FadeIn className="flex self-end  gap-6 ">
                    <p className="text-[16px] group-hover:text-bodyGrey font-body font-semiBold transition-all duration-75 ease-in-out">
                      Lesa nánar
                    </p>

                    <svg
                      width="100%"
                      height="100%"
                      viewBox="0 0 18 18"
                      fill="none"
                      className="w-[30px] text-pureWhite group-hover:text-bodyGrey transition-all filter  duration-300 ease-in-out self-center h-16  group-hover:pl-[14px]"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.2917 10.0493L15.1585 9.19348H13.9404H1.145C0.944498 9.19348 0.801088 9.13175 0.68047 9.01267C0.560197 8.89393 0.5 8.75538 0.5 8.56304C0.5 8.3707 0.560196 8.23216 0.680471 8.11342C0.801089 7.99433 0.944499 7.93261 1.145 7.93261H13.9404H15.1585L14.2917 7.0768L8.68116 1.53767C8.5792 1.43701 8.52329 1.31189 8.52909 1.11706L8.02931 1.10217L8.52909 1.11706C8.53517 0.913143 8.59964 0.775418 8.70978 0.666679C8.81636 0.561458 8.9527 0.5 9.16 0.5C9.3673 0.5 9.50364 0.561458 9.61022 0.666678L17.1672 8.12755L17.1833 8.14346L17.2008 8.15786C17.2428 8.19235 17.2701 8.23158 17.2881 8.28494C17.3182 8.37416 17.3334 8.46612 17.3334 8.56304C17.3334 8.66012 17.3182 8.74347 17.2916 8.81687C17.2727 8.86915 17.2366 8.93008 17.1672 8.99854L9.61022 16.4594C9.50364 16.5646 9.3673 16.6261 9.16 16.6261C8.9527 16.6261 8.81636 16.5646 8.70978 16.4594C8.59964 16.3507 8.53517 16.2129 8.52909 16.009C8.52329 15.8142 8.5792 15.6891 8.68116 15.5884L14.2917 10.0493Z"
                        fill="currentColor"
                        stroke="currentColor"
                      />
                    </svg>
                  </FadeIn>
                </PrismicNextLink>
              );
            })}
          </FadeIn>
        </section>
      </Container>
    </div>
  );
};

export default ServiceOverview;
