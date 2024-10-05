import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Container from "@/app/components/Container/container";
import { PrismicNextImage } from "@prismicio/next";
import { FadeIn } from "@/app/components/FadeIn/fadeIn";
/**
 * Props for `ServicesOverview`.
 */
export type ServicesOverviewProps =
  SliceComponentProps<Content.ServicesOverviewSlice>;

/**
 * Component for "ServicesOverview" Slices.
 */
const ServicesOverview = ({ slice }: ServicesOverviewProps): JSX.Element => {
  const section = slice.primary;
  return (
    <div className="flex justify-center min-w-fill">
      <div className="w-fill lg:pb-fluid-122 pt-fluid-40 smmd:pt-fluid-64 max-w-[2000px]  pb-64 px-container-88 self-center   ">
        <section className="flex flex-col gap-fluid-40  overflow-hidden ">
          <FadeIn className="flex flex-col  gap-fluid-32   md:max-w-[60%] lg:max-w-[50%]">
            {section.title ? (
              <h2 className="font-headline text-headlineColor font-regular text-h4 h-fit w-fit">
                {section.title}
              </h2>
            ) : (
              ""
            )}
          </FadeIn>
          <div className="flex flex-col md:flex-row gap-fluid-72">
            <FadeIn className="grid grid-cols-1  grid-flow-row gap-fluid-32 xs:gap-fluid-40 md:gap-x-fluid-56 lg:gap-x-fluid-72 md:w-[50%]">
              {section.service.map((item, index) => {
                return (
                  <div
                    key={`${index}${item.title}`}
                    className=" flex w-fill group border-[1px] border-greyInput border-opacity-20 bg-pureWhite flex-col px-fluid-32  py-fluid-32 rounded-6"
                  >
                    <div className="flex gap-fluid-32">
                      <FadeIn className="self-center py-fluid-18 px-fluid-18 shadow-servicesOverview rounded-4">
                        <p className="text-buttonBlue font-body font-semiBold text-paragraph">
                          0{index + 1}
                        </p>
                      </FadeIn>
                      <div className="flex flex-col gap-fluid-12">
                        <FadeIn delay={0.1} className="flex justify-between">
                          <h3 className="text-paragraph text-headlineColor font-headline font-semiBold self-center">
                            {item.title}
                          </h3>
                        </FadeIn>
                        <FadeIn delay={0.2}>
                          <p className="text-[16px] text-bodyGrey  font-medium font-body line-clamp-3">
                            {item.paragraph}
                          </p>
                        </FadeIn>
                      </div>
                    </div>
                  </div>
                );
              })}
            </FadeIn>
            <div className="md:w-[50%] relative grid grid-flow-row grid-cols-1 ">
              <div className="relative aspect-video md:aspect-square w-fill md:w-[90%] place-self-center">
                <PrismicNextImage
                  field={section.image_bigger}
                  className={`rounded-4 md:rounded-[50%] object-cover`}
                  fill
                  alt={""}
                  sizes="(max-width: 768px) 100vw"
                />
              </div>
              <div className="md:absolute md:flex hidden md:bottom-[32px] lg:bottom-0 w-fill">
                <div className="relative aspect-square w-[40%] place-self-center">
                  <PrismicNextImage
                    field={section.image_smaller}
                    className={`rounded-[50%] border-[12px] border-pureWhite object-cover`}
                    fill
                    alt={""}
                    sizes="(max-width: 768px) 100vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ServicesOverview;
