import { Metadata } from "next";
import { SliceZone } from "@prismicio/react";
import { components } from "../../../slices";
import Link from "next/link";
import { createClient } from "../../../prismicio";
import { OrlofshusDocument } from "@/prismicio-types";
import Image from "next/image";
import Chevron from "../../../public/icons/chevronUp.svg";
import { FadeIn } from "../../components/FadeIn/fadeIn";
import { PrismicNextImage } from "@prismicio/next";
export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getSingle("orlofshus");

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}

export default async function AboutUs() {
  const client = createClient();

  const page = await client.getSingle<OrlofshusDocument>("orlofshus");
  const section = page.data;

  return (
    <section className="relative flex flex-col justify-center">
      <div className="relative self-center w-[100%]  overflow-hidden  sm:col-start-1 sm:col-end-4 sm:row-start-1 sm:row-end-3">
        <div className=" relative z-0 lg:pb-[30%] xxs:pb-[60%] md:pb-[40%]  sm:pb-[50%] pb-[80%]">
          <PrismicNextImage
            field={section.hero_image}
            className="object-cover z-0 animate-imageFade  brightness-[25%]"
            fill
            alt={""}
            sizes="(max-width: 768px) 100vw"
          />
        </div>
        <div className="absolute z-10 top-0 p-container-88 w-fill m-auto left-0 right-0 max-w-[2000px]">
          <div className="flex flex-col gap-fluid-40  ">
            <FadeIn className=" flex font-body text-sm h-fit">
              <Link
                className="text-pureWhite hover:text-buttonBlue transition-all duration-300 ease-in-out"
                href={"/"}
              >
                Heim
              </Link>
              <Image
                alt="ör til hægri"
                src={Chevron}
                className="h-fluid-16 rotate-90 self-center filterWhite "
              />
              <Link
                className="text-pureWhite hover:text-buttonBlue transition-all duration-300 ease-in-out"
                href={"/um-okkur"}
              >
                Um okkur
              </Link>
              <Image
                alt="ör til hægri"
                src={Chevron}
                className="h-fluid-16 rotate-90 self-center filterWhite "
              />

              <p className="text-sm text-pureWhite font-semiBold">
                {section.hero_title}
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <h1 className="font-headline  text-pureWhite text-h1 font-semiBold">
                {section.hero_title}
              </h1>
            </FadeIn>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-fluid-32 smmd:w-[50%]"></div>

      <SliceZone slices={page.data.slices} components={components} />
    </section>
  );
}
