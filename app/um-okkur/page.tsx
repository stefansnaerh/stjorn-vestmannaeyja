import { Metadata } from "next";
import { SliceZone } from "@prismicio/react";
import { components } from "../../slices";
import Link from "next/link";
import { createClient } from "../../prismicio";
import { AboutUsDocument } from "@/prismicio-types";
import { PrismicNextImage } from "@prismicio/next";
import Image from "next/image";
import Chevron from "../icons/chevronUp.svg";
import { FadeIn } from "../components/FadeIn/fadeIn";
import RichText from "../components/RichText/RichText";
import Container from "../components/Container/container";
export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getSingle("about_us");

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}

export default async function AboutUs() {
  const client = createClient();

  const page = await client.getSingle<AboutUsDocument>("about_us");
  const section = page.data;

  return (
    <div className="flex flex-col">
      <section className=" text-black flex flex-col md:flex-row gap-fluid-64 md:gap-fluid-144 px-container-88 pt-fluid-122 py-64 max-w-screen-xxl  self-center">
        <div className="relative flex flex-col gap-fluid-40 md:gap-fluid-56 md:w-[40%]">
          <FadeIn className=" w-fit">
            <h2 className="text-h2 font-headline text-headlineColor font-medium w-fit">
              {section.title}
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <RichText text={section.paragraph} />
          </FadeIn>
        </div>
        <FadeIn className="flex  gap-fluid-24 overflow-scroll snap-x snap-mandatory snap-always snap-center sm:overflow-hidden sm:grid sm:grid-cols-5 sm:grid-rows-2 md:w-[60%]">
          <div className="relative snap-center  min-w-[80%] overflow-hidden sm:min-w-[60%] sm:col-start-1 sm:col-end-4 sm:row-start-1 sm:row-end-3">
            <div className="relative pb-[110%] sm:pb-[122%] ">
              <PrismicNextImage
                field={section.image_1}
                className="object-cover z-0 rounded-4"
                fill
                alt={""}
                sizes="(max-width: 768px) 100vw"
              />
            </div>
          </div>

          <div className="relative min-w-[80%]  snap-x snap-mandatory snap-always snap-center overflow-hidden sm:min-w-[40%] sm:col-start-4 sm:col-end-6 sm:row-start-1 sm:row-end-1">
            <div className="relative pb-[110%]  sm:pb-[90%]">
              <PrismicNextImage
                field={section.image_2}
                className="object-cover z-0 rounded-4 "
                fill
                alt={""}
                sizes="(max-width: 768px) 100vw"
              />
            </div>
          </div>

          <div className="relative w-fill min-w-[80%]  snap-x snap-mandatory snap-always snap-center overflow-hidden sm:min-w-[40%] sm:col-start-4 sm:col-end-6 sm:row-start-2 sm:row-end-4">
            <div className="relative pb-[110%] sm:pb-[90%]">
              <PrismicNextImage
                field={section.image_3}
                className="object-cover z-0 rounded-4 "
                fill
                alt={""}
                sizes="(max-width: 768px) 100vw"
              />
            </div>
          </div>
        </FadeIn>
      </section>
      <SliceZone slices={page.data.slices} components={components} />
    </div>
  );
}
