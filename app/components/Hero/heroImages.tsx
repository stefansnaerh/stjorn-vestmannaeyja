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
      <div className="grid grid-cols-2">
        <div className=" flex flex-col  gap-fluid-72 md:gap-fluid-56 py-fluid-48 px-fluid-72 xxxl:max-w-[2000px]">
          <FadeIn delay={0.2}>
            <h1 className="font-headline text-h1 font-semiBold text-headlineColor">
              Stjórnendafélag Vestfjarða
            </h1>
          </FadeIn>

          <div className="flex flex-col gap-fluid-40  max-w-[90%]">
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
                    ariaLabel={`Hlekkur til að hafa samband`}
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
            <HeroSlider setSlide={setSlide} slide={slide} />
          </div>
        </div>
        <div className="relative overflow-hidden ">
          <div className="relative pb-[170%] xxs:pb-[140%] xs:pb-[95%] sm:pb-[77%] md:pb-[63%] lg:pb-[80%]">
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
