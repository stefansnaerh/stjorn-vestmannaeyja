import { PrismicNextImage } from "@prismicio/next";
import { FadeIn } from "../FadeIn/fadeIn";
import { FrontPageDocumentData } from "@/prismicio-types";
import Button from "../Button/Button";
import HeroSlider from "./heroSlider";
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
      <div className="grid grid-cols-1 md:grid-cols-2 min-w-fill md:min-w-0 xxxl:max-w-[2000px] xxxl:w-[2000px]">
        <div className="relative  flex flex-col min-w-fill  gap-fluid-56 md:gap-fluid-56 md:py-fluid-48  md:px-fluid-72 xxxl:max-w-[2000px]">
          <div className="relative flex flex-col md:gap-0 gap-fluid-40 md:pt-0 pt-fluid-40">
            <FadeIn delay={0.2}>
              <h1 className="font-headline px-fluid-32 md:px-0 text-h1 font-semiBold text-headlineColor">
                Stjórnendafélag Vestfjarða
              </h1>
            </FadeIn>
            <div className="relative overflow-hidden w-fill ">
              <div className="relative md:hidden pb-[80%] xs:pb-[60%]">
                <PrismicNextImage
                  field={content.hero_image}
                  className="brightness-50 md:brightness-100 object-cover z-0 animate-imageFade  "
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
            <div className="md:hidden">
              <HeroSlider setSlide={setSlide} slide={slide} />
            </div>
          </div>
          <div className="flex flex-col gap-fluid-40  md:max-w-[90%] px-fluid-32 md:px-0  pb-fluid-48">
            {slide === 0 ? (
              <FadeIn className="flex flex-col gap-fluid-24">
                <FadeIn>
                  <h2 className="tracking-[0px] font-bold font-headline text-headlineColor text-h6">
                    {content.hero_title_1}
                  </h2>
                </FadeIn>
                <FadeIn className="" delay={0.2}>
                  <p className=" text-bodyGrey font-body text-md">
                    {content.hero_paragraph_1}
                  </p>
                </FadeIn>
                <FadeIn delay={0.4} className="mt-fluid-24">
                  <Button
                    text={"Sækja um aðild"}
                    href={content.hero_link_1}
                    ariaLabel={`Hlekkur til að hafa samband `}
                    type="anchor"
                    className="text-fontBlue rounded-8  text-white bg-buttonBlue hover:bg-buttonBlueHover text-navLinks  transition-all duration-300 ease-in-out"
                  />
                </FadeIn>
              </FadeIn>
            ) : (
              ""
            )}
            {slide === 1 ? (
              <>
                <FadeIn className="flex flex-col gap-fluid-24">
                  <FadeIn>
                    <h2 className="tracking-[0px] font-bold font-headline text-headlineColor text-h6">
                      {content.hero_title_2}
                    </h2>
                  </FadeIn>
                  <FadeIn className="" delay={0.2}>
                    <p className=" text-bodyGrey font-body text-md">
                      {content.hero_paragraph_2}
                    </p>
                  </FadeIn>
                  <FadeIn delay={0.4} className="mt-fluid-24">
                    <Button
                      text={content.hero_link_text_2}
                      href={content.hero_link_2}
                      ariaLabel={`Hlekkur til að hafa samband`}
                      type="anchor"
                      className="text-fontBlue rounded-8  text-white bg-buttonBlue hover:bg-buttonBlueHover text-navLinks  transition-all duration-300 ease-in-out"
                    />
                  </FadeIn>
                </FadeIn>
              </>
            ) : (
              ""
            )}
            {slide === 2 ? (
              <>
                <FadeIn className=" flex flex-col gap-fluid-24">
                  <FadeIn>
                    <h2 className="tracking-[0px] font-bold font-headline text-headlineColor text-h6">
                      {content.hero_title_3}
                    </h2>
                  </FadeIn>
                  <FadeIn className="" delay={0.2}>
                    <p className=" text-bodyGrey font-body text-md">
                      {content.hero_paragraph_3}
                    </p>
                  </FadeIn>
                  <FadeIn delay={0.4} className="mt-fluid-24">
                    <Button
                      text={content.hero_link_text_3}
                      href={content.hero_link_3}
                      ariaLabel={`Hlekkur til að hafa samband`}
                      type="anchor"
                      className="text-fontBlue rounded-8  text-white bg-buttonBlue hover:bg-buttonBlueHover text-navLinks  transition-all duration-300 ease-in-out"
                    />
                  </FadeIn>
                </FadeIn>
              </>
            ) : (
              ""
            )}
            <div className="hidden md:flex">
              <HeroSlider setSlide={setSlide} slide={slide} />
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden   md:w-fill ">
          <div className="relative hidden md:flex md:pb-[110%] lg:pb-[95%] lg2:pb-[90%] ">
            <PrismicNextImage
              field={content.hero_image}
              className="object-cover z-0 animate-imageFade  "
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </>
  );
}
