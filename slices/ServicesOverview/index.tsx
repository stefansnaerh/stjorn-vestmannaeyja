import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Container from "@/app/components/Container/container";
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
    <div className="flex justify-center">
      <div className="lg:pb-fluid-122 pt-fluid-40 smmd:pt-fluid-64 max-w-[2000px]  pb-64 px-container-88 self-center smmd:w-[95%] lg2:w-[90%]   ">
        <section className="flex flex-col gap-fluid-40  overflow-hidden ">
          <FadeIn className="flex flex-col  gap-fluid-32  sm:max-w-[50%]">
            {section.title ? (
              <h2 className="font-headline text-headlineColor font-regular text-paragraph h-fit w-fit">
                {section.title}
              </h2>
            ) : (
              ""
            )}
          </FadeIn>
          <FadeIn className="grid grid-cols-1 xs:grid-cols-2 grid-flow-row gap-fluid-32 xs:gap-fluid-40 md:gap-x-fluid-56 lg:gap-x-fluid-72 ">
            {section.service.map((item, index) => {
              return (
                <div
                  key={`${index}${item.title}`}
                  className=" flex w-fill group border-[1px] border-greyInput border-opacity-20 bg-pureWhite flex-col px-fluid-32 xs:px-fluid-40 py-fluid-32 rounded-6"
                >
                  <div className="flex flex-col gap-fluid-16">
                    <FadeIn>
                      <p className="text-purple font-body font-semiBold text-paragraph">
                        {index + 1}
                      </p>
                    </FadeIn>
                    <FadeIn delay={0.1} className="flex justify-between">
                      <h3 className="text-paragraph text-headlineColor font-headline font-semiBold self-center">
                        {item.title}
                      </h3>
                    </FadeIn>
                    <FadeIn delay={0.2}>
                      <p className="text-[16px] text-bodyGrey  font-regular font-body line-clamp-3">
                        {item.paragraph}
                      </p>
                    </FadeIn>
                  </div>
                </div>
              );
            })}
          </FadeIn>
        </section>
      </div>
    </div>
  );
};

export default ServicesOverview;
