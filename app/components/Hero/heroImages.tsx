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
      <>
        {" "}
        <div className=" relative overflow-hidden ">
          <div className="relative pb-[170%] xxs:pb-[140%] xs:pb-[95%] sm:pb-[77%] md:pb-[63%] lg:pb-[50%]">
            <PrismicNextImage
              field={content.hero_image}
              className="object-cover z-0 animate-imageFade brightness-[30%] "
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
        <div className="absolute sm:left-[5%] md:left-auto top-[5%] md:top-[20%] w-fill flex flex-col md:flex-row gap-fluid-72 md:gap-fluid-56 justify-around px-fluid-48 xxxl:max-w-[2000px] xxxl:ml-auto xxxl:mr-auto xxxl:left-0 xxxl:right-0">
          <div className="mt-[5%]  flex flex-col gap-fluid-16">
            <FadeIn>
              <p className="font-body font-bold text-pureWhite text-md xs:text-h3">
                Við erum hér,{" "}
                <span className="text-buttonBlue">fyrir þig.</span>
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <h1 className="font-headline text-h1 font-semiBold text-pureWhite">
                Félag stjórnenda
              </h1>
            </FadeIn>
          </div>
          <div className="flex flex-col gap-fluid-40  xs:max-w-[90%] sm:max-w-[70%] md:max-w-[46%] lg:max-w-[44%] xl:max-w-[44%]">
            {slide === 0 ? (
              <FadeIn className=" bg-white shadow-button rounded-8 px-fluid-32 smmd:px-fluid-40 py-fluid-40 sm:py-fluid-56   flex flex-col gap-fluid-24">
                <FadeIn>
                  <h2 className="tracking-[0px] font-bold font-headline text-headlineColor text-h2">
                    {content.hero_title_1}
                  </h2>
                </FadeIn>
                <FadeIn className="" delay={0.2}>
                  <p className=" text-bodyGrey font-body text-lg">
                    {content.hero_paragraph_1}
                  </p>
                </FadeIn>
                <FadeIn delay={0.4} className="mt-fluid-24">
                  <Button
                    text={"Sækja um aðild"}
                    aHref={"/saekja-um-adild"}
                    ariaLabel={`Hlekkur til að hafa samband`}
                    type="nextLink"
                    className="text-fontBlue rounded-8  text-white bg-purple hover:bg-purpleHover text-navLinks  transition-all duration-300 ease-in-out"
                  />
                </FadeIn>
              </FadeIn>
            ) : (
              ""
            )}
            {slide === 1 ? (
              <>
                <FadeIn className=" bg-white shadow-button  rounded-8 px-fluid-32 smmd:px-fluid-40 py-fluid-40 sm:py-fluid-56  flex flex-col gap-fluid-24">
                  <FadeIn>
                    <h2 className="tracking-[0px] font-bold font-headline text-headlineColor text-h2">
                      {content.hero_title_2}
                    </h2>
                  </FadeIn>
                  <FadeIn className="" delay={0.2}>
                    <p className=" text-bodyGrey font-body text-lg">
                      {content.hero_paragraph_2}
                    </p>
                  </FadeIn>
                  <FadeIn delay={0.4} className="mt-fluid-24">
                    <Button
                      text={content.hero_link_text_2}
                      href={content.hero_link_2}
                      ariaLabel={`Hlekkur til að hafa samband`}
                      type="anchor"
                      className="text-fontBlue rounded-8  text-white bg-purple hover:bg-purpleHover text-navLinks  transition-all duration-300 ease-in-out"
                    />
                  </FadeIn>
                </FadeIn>
              </>
            ) : (
              ""
            )}
            {slide === 2 ? (
              <>
                <FadeIn className=" bg-white shadow-button rounded-8 px-fluid-32 smmd:px-fluid-40 py-fluid-40 sm:py-fluid-56 flex flex-col gap-fluid-24">
                  <FadeIn>
                    <h2 className="tracking-[0px] font-bold font-headline text-headlineColor text-h2">
                      {content.hero_title_3}
                    </h2>
                  </FadeIn>
                  <FadeIn className="" delay={0.2}>
                    <p className=" text-bodyGrey font-body text-lg">
                      {content.hero_paragraph_3}
                    </p>
                  </FadeIn>
                  <FadeIn delay={0.4} className="mt-fluid-24">
                    <Button
                      text={content.hero_link_text_3}
                      href={content.hero_link_3}
                      ariaLabel={`Hlekkur til að hafa samband`}
                      type="anchor"
                      className="text-fontBlue rounded-8  text-white bg-purple hover:bg-purpleHover text-navLinks  transition-all duration-300 ease-in-out"
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
      </>
    </>
  );
}
