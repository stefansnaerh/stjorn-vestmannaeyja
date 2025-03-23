import { PrismicNextImage } from "@prismicio/next";
import { FadeIn } from "../FadeIn/fadeIn";
import { FrontPageDocumentData } from "@/prismicio-types";

import HeroSlideElements from "./heroSlideElements";
import styles from "./hero.module.css";
export default function HeroImages({
  content,
  slide,
  setSlide,
}: {
  content: FrontPageDocumentData;
  slide: number;
  setSlide: React.Dispatch<React.SetStateAction<number>>;
}) {
  const url = content.hero_image.url;
  return (
    <>
      <div className="container1 px-container-88 pt-[15%] lg:pt-[13%]">
        <style jsx>{`
          .container1 {
            position: relative;
            margin: 0px;
            align-self: center;
            width: 100vw;
            max-width: 2000px;
            right: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            max-width: 2000px;
            background: linear-gradient(
                0deg,
                rgba(0, 0, 0, 0),
                rgba(0, 0, 0, 0)
              ),
              url(${url});

            background-size: 55%;
            background-repeat: no-repeat;
            background-position: right 20% top -60px;
          }
          @media (max-width: 1059px) {
            .container1 {
              background: none;
            }
          }
        `}</style>
        {/* <div className="relative h-[70%] w-[70%] self-end -mt-48">
        
          <PrismicNextImage
            field={content.hero_image}
            className="object-contain z-0  "
            priority
            fill
            sizes="(min-width: 768px) 100vw, 100vw"
          />
        </div> */}
        <div className=" z-30 bg-transparent max-h-[100vh]   w-[100vw] max-w-[2000px] self-center   ">
          <div className="relative flex max-w-[2000px] ">
            <div className=" flex  gap-fluid-40    pb-fluid-48">
              <div className="w-[60%]">
                <FadeIn className=" w-[50%]" delay={0.2}>
                  <h1 className="font-headline text-headlineColor text-h1 font-semiBold ">
                    Stjórnendafélag Norðurlands{" "}
                    <span className="text-buttonBlue">vestra</span>
                  </h1>
                </FadeIn>
                <div className="flex gap-fluid-40">
                  <div className="relative self-end h-[50%] w-[34%] pb-[70%] md:pb-[20%] ">
                    <PrismicNextImage
                      field={content.image_1}
                      className="object-cover z-0 rounded-6"
                      fill
                      alt={""}
                      sizes="(max-width: 768px) 100vw"
                    />
                  </div>
                  <div className="relative w-[66%] pb-[70%] md:pb-[40%] ">
                    <PrismicNextImage
                      field={content.image_2}
                      className="object-cover z-0 rounded-6"
                      fill
                      alt={""}
                      sizes="(max-width: 768px) 100vw"
                    />
                  </div>
                </div>
              </div>
              <HeroSlideElements
                setSlide={setSlide}
                slide={slide}
                content={content}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
