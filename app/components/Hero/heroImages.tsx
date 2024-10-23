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
      <div className=" relative overflow-hidden ">
        <div className="hidden smmd:flex absolute w-fill z-10 h-fill opacity-[77%]   bg-gradient-to-r from-[30%] from-pureBlack  to-transparent"></div>
        {slide === 0 ? (
          <div className="relative h-[100vh]">
            <PrismicNextImage
              field={content.hero_image}
              className="object-cover z-0 brightness-[35%] smmd:brightness-100 "
              fill
              priority
              sizes="(min-width: 768px) 100vw, 100vw"
            />
          </div>
        ) : (
          ""
        )}
        {slide === 1 ? (
          <div className="relative h-[100vh]">
            <PrismicNextImage
              field={content.hero_image_2}
              className="object-cover z-0 animate-imageFade brightness-[35%] smmd:brightness-100  "
              fill
              quality={100}
              priority
              sizes="(min-width: 768px) 100vw, 100vw"
            />
          </div>
        ) : (
          ""
        )}
        {slide === 2 ? (
          <div className="relative h-[100vh]">
            <PrismicNextImage
              field={content.hero_image_3}
              className="object-cover z-0 animate-imageFade brightness-[35%] smmd:brightness-100  "
              fill
              quality={100}
              priority
              sizes="(min-width: 768px) 100vw, 100vw"
            />
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="absolute z-30 bg-transparent max-h-[100vh]  top-[50%] translate-y-[-50%] w-[100vw] max-w-[2000px] self-center  left-[50%] translate-x-[-50%] ">
        <div className="absolute  flex px-container-56 smmd:px-0  smmd:left-container-56  top-[50%] translate-y-[-50%] smmd:w-[40%] max-w-[2000px] ">
          <div className=" flex flex-col gap-fluid-40  md:max-w-[90%]  pb-fluid-48">
            <FadeIn delay={0.2}>
              <h1 className="font-headline  text-h1 font-semiBold  text-white">
                Stjórnendafélag Vestfjarða
              </h1>
            </FadeIn>
            {slide === 0 ? (
              <FadeIn className="flex flex-col gap-fluid-24">
                <FadeIn>
                  <h2 className="tracking-[0px] font-bold font-headline text-pureWhite text-h6">
                    {content.hero_title_1}
                  </h2>
                </FadeIn>
                <FadeIn className="" delay={0.2}>
                  <p className=" text-pureWhite font-medium font-body text-md">
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
                    <h2 className="tracking-[0px] font-bold font-headline text-white text-h6">
                      {content.hero_title_2}
                    </h2>
                  </FadeIn>
                  <FadeIn className="" delay={0.2}>
                    <p className=" text-pureWhite font-body text-md">
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
                    <h2 className="tracking-[0px] font-bold font-headline text-white text-h6">
                      {content.hero_title_3}
                    </h2>
                  </FadeIn>
                  <FadeIn className="" delay={0.2}>
                    <p className=" text-pureWhite font-body text-md">
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
            <div>
              <HeroSlider setSlide={setSlide} slide={slide} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
