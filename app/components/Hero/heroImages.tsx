import { PrismicNextImage } from "@prismicio/next";
import { FadeIn } from "../FadeIn/fadeIn";
import { FrontPageDocumentData } from "@/prismicio-types";
import Button from "../Button/Button";
import HeroSlideElements from "./heroSlideElements";
import styles from "./hero.module.css";
import Austurland from "../../../public/images/austurland.svg";
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
      <div className="relative flex flex-col gap-fluid-40 sm:gap-fluid-56 px-container-88 py-64">
        <div className="w-fill flex justify-between">
          <FadeIn className="sm:py-fluid-40 ">
            <h1 className="font-body text-headlineColor text-h3 font-semiBold ">
              Við styðjum við <span>stjórnendur</span> á<br />
              <span className="text-buttonBlue text-h1">Austurlandi</span>
            </h1>
          </FadeIn>
          <FadeIn className="hidden sm:flex sm:w-[30%]">
            <Austurland className=" w-fill" />
          </FadeIn>
        </div>
        <div className="max-h-[100vh] max-w-[2000px] self-center">
          <div className="relative flex max-w-[2000px] ">
            <div className="flex flex-col smmd:flex-row  gap-fluid-56  pb-fluid-48">
              <HeroSlideElements
                setSlide={setSlide}
                slide={slide}
                content={content}
              />
              <div className="smmd:w-[60%] md:w-[80%] flex flex-col gap-fluid-32">
                <div className="flex gap-fluid-40">
                  <FadeIn
                    delay={0.2}
                    className="relative flex self-end h-[50%] w-fill md:w-[50%] pb-[70%] md:pb-[35%] "
                  >
                    <PrismicNextImage
                      field={content.image_1}
                      className="object-cover z-0 rounded-6"
                      fill
                      alt={""}
                      sizes="(max-width: 768px) 100vw"
                    />
                  </FadeIn>
                  <FadeIn
                    delay={0.2}
                    className="relative hidden md:flex w-[50%] pb-[50%] md:pb-[35%] "
                  >
                    <PrismicNextImage
                      field={content.image_2}
                      className="object-cover z-0 rounded-6"
                      fill
                      alt={""}
                      sizes="(max-width: 768px) 100vw"
                    />
                  </FadeIn>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
