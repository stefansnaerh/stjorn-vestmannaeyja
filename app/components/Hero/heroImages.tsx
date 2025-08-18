import { PrismicNextImage } from "@prismicio/next";
import { FadeIn } from "../FadeIn/fadeIn";
import { FrontPageDocumentData } from "@/prismicio-types";
import Button from "../Button/Button";
import HeroSlider from "./heroSlider";
import { PrismicNextLink } from "@prismicio/next";
import Arrow from "../../../public/icons/ArrowRight.svg";
export default function HeroImages({
  content,
  slide,
  setSlide,
}: {
  content: FrontPageDocumentData;
  slide: number;
  setSlide: React.Dispatch<React.SetStateAction<number>>;
}) {
  return (
    <>
      <div className=" relative overflow-hidden ">
        <div className="hidden smmd:flex absolute w-fill z-10 h-fill opacity-[77%]   bg-gradient-to-r from-[30%] from-[#052356]  to-transparent"></div>
        {slide === 0 ? (
          <div className="relative h-[100vh]">
            <PrismicNextImage
              field={content.hero_image}
              className="object-cover z-0 brightness-[35%] animate-imageFade  smmd:brightness-100"
              fill
              priority
              quality={100}
              sizes="100vw"
            />
          </div>
        ) : (
          ""
        )}
        {slide === 1 ? (
          <div className="relative h-[100vh]">
            <PrismicNextImage
              field={content.hero_image_2}
              className="object-cover z-0 brightness-[35%] animate-imageFade smmd:brightness-100 "
              fill
              quality={100}
              priority
              sizes="100vw"
            />
          </div>
        ) : (
          ""
        )}
        {slide === 2 ? (
          <div className="relative h-[100vh]">
            <PrismicNextImage
              field={content.hero_image_3}
              className="object-cover z-0  brightness-[35%] animate-imageFade smmd:brightness-100 "
              fill
              quality={100}
              priority
              sizes="100vw"
            />
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="absolute z-30 bg-transparent max-h-[100vh]  top-[50%] translate-y-[-50%] w-[100vw] max-w-[2000px] self-center  left-[50%] translate-x-[-50%] ">
        <div className="absolute  flex flex-col px-container-56 smmd:px-0  smmd:w-[90%] smmd:left-container-56  w-fill  top-[50%] translate-y-[-50%] max-w-[2000px] ">
          <div className=" flex flex-col gap-fluid-56  smmd:max-w-[60%]  pb-fluid-48">
            <div className="flex flex-col gap-fluid-12">
              <FadeIn delay={0.2}>
                <h1 className="font-headline  text-h1 font-semiBold  text-white">
                  {content.main_title_1}
                </h1>
              </FadeIn>
              <FadeIn delay={0.3}>
                <h2 className="font-headline  text-h6 font-semiBold  text-white">
                  {content.main_title_2}
                </h2>
              </FadeIn>
            </div>
            {slide === 0 ? (
              <FadeIn className="flex flex-col gap-fluid-24">
                {/* <FadeIn>
                  <h2 className="tracking-[0px] font-bold font-headline text-pureWhite text-h6">
                    {content.hero_title_1}
                  </h2>
                </FadeIn> */}
                <FadeIn className="" delay={0.2}>
                  <p className=" text-pureWhite font-body text-navLinks">
                    {content.hero_paragraph_1}
                  </p>
                </FadeIn>
                <FadeIn delay={0.4} className="mt-fluid-24">
                  <PrismicNextLink
                    field={content.hero_link_1}
                    aria-label={
                      "hlekkur til að fara á stf.is og sækja um aðild að félaginu"
                    }
                    className="group text-[16px] hover:bg-buttonBlue bg-pureWhite hover:text-pureWhite text-buttonBlue flex pointer-events-auto rounded-32   gap-16 py-fluid-8 items-center pr-fluid-12 pl-fluid-24  h-fit w-fit  font-body font-medium transition-all duration-300 ease-in-out"
                  >
                    {content.hero_link_text_1}
                    <div className="p-12  group-hover:bg-pureWhite group-hover:ml-4   bg-buttonBlue w-fit rounded-full transition-all duration-300 ease-in-out">
                      <Arrow className="text-pureWhite group-hover:text-buttonBlue -rotate-45 h-[14px]  transition-all duration-300 ease-in-out " />
                    </div>
                  </PrismicNextLink>
                </FadeIn>
              </FadeIn>
            ) : (
              ""
            )}
            {slide === 1 ? (
              <>
                <FadeIn className="flex flex-col gap-fluid-24">
                  {/* <FadeIn>
                    <h2 className="tracking-[0px] font-bold font-headline text-white text-h6">
                      {content.hero_title_2}
                    </h2>
                  </FadeIn> */}
                  <FadeIn className="" delay={0.2}>
                    <p className=" text-pureWhite font-body text-navLinks">
                      {content.hero_paragraph_2}
                    </p>
                  </FadeIn>
                  <FadeIn delay={0.4} className="mt-fluid-24">
                    <PrismicNextLink
                      field={content.hero_link_2}
                      aria-label={
                        "hlekkur til að fara á stf.is og sækja um aðild að félaginu"
                      }
                      className="group text-[16px] hover:bg-buttonBlue bg-pureWhite hover:text-pureWhite text-buttonBlue flex pointer-events-auto rounded-32   gap-16 py-fluid-8 items-center pr-fluid-12 pl-fluid-24  h-fit w-fit  font-body font-medium transition-all duration-300 ease-in-out"
                    >
                      {content.hero_link_text_2}
                      <div className="p-12  group-hover:bg-pureWhite group-hover:ml-4   bg-buttonBlue w-fit rounded-full transition-all duration-300 ease-in-out">
                        <Arrow className="text-pureWhite group-hover:text-buttonBlue -rotate-45 h-[14px]  transition-all duration-300 ease-in-out " />
                      </div>
                    </PrismicNextLink>
                  </FadeIn>
                </FadeIn>
              </>
            ) : (
              ""
            )}
            {slide === 2 ? (
              <>
                <FadeIn className=" flex flex-col gap-fluid-24">
                  {/* <FadeIn>
                    <h2 className="tracking-[0px] font-bold font-headline text-white text-h6">
                      {content.hero_title_3}
                    </h2>
                  </FadeIn> */}
                  <FadeIn className="" delay={0.2}>
                    <p className=" text-pureWhite font-body text-navLinks">
                      {content.hero_paragraph_3}
                    </p>
                  </FadeIn>
                  <FadeIn delay={0.4} className="mt-fluid-24">
                    <PrismicNextLink
                      field={content.hero_link_3}
                      aria-label={
                        "hlekkur til að fara á stf.is og sækja um aðild að félaginu"
                      }
                      className="group text-[16px] hover:bg-buttonBlue bg-pureWhite hover:text-pureWhite text-buttonBlue flex pointer-events-auto rounded-32   gap-16 py-fluid-8 items-center pr-fluid-12 pl-fluid-24  h-fit w-fit  font-body font-medium transition-all duration-300 ease-in-out"
                    >
                      {content.hero_link_text_3}
                      <div className="p-12  group-hover:bg-pureWhite group-hover:ml-4   bg-buttonBlue w-fit rounded-full transition-all duration-300 ease-in-out">
                        <Arrow className="text-pureWhite group-hover:text-buttonBlue -rotate-45 h-[14px]  transition-all duration-300 ease-in-out " />
                      </div>
                    </PrismicNextLink>
                  </FadeIn>
                </FadeIn>
              </>
            ) : (
              ""
            )}
          </div>

          <HeroSlider setSlide={setSlide} slide={slide} />
        </div>
      </div>
    </>
  );
}
