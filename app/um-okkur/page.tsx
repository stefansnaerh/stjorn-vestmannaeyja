import { Metadata } from "next";
import { SliceZone } from "@prismicio/react";
import { components } from "../../slices";
import Link from "next/link";
import { createClient } from "../../prismicio";
import { AboutUsDocument } from "@/prismicio-types";
import { PrismicNextImage } from "@prismicio/next";
import Image from "next/image";
import Chevron from "../../public/icons/chevronUp.svg";
import { FadeIn } from "../components/FadeIn/fadeIn";
import RichText from "../components/RichText/RichText";
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
    <section className="flex flex-col justify-center">
      <div className="lg:pb-fluid-40 pt-fluid-40 smmd:pt-fluid-64 max-w-[2000px]  pb-64 px-container-88 self-center flex flex-col gap-fluid-56 smmd:w-[95%] lg2:w-[90%]  ">
        <FadeIn className="flex  font-body text-sm ">
          <Link
            className="text-bodyGrey hover:text-buttonBlue transition-all duration-300"
            href={"/"}
          >
            Heim
          </Link>
          <Image
            alt="STF logo"
            src={Chevron}
            className="h-fluid-16 rotate-90 self-center"
          />
          <p className="text-sm text-headlineColor font-semiBold">Um okkur</p>
        </FadeIn>
        <FadeIn className=" flex flex-col-reverse gap-fluid-72 xxs:gap-fluid-96  ">
          <FadeIn className="self-center grid grid-rows-1 xs:grid-cols-2 gap-fluid-32 relative w-fill">
            <FadeIn>
              <div className=" relative pb-[60%]">
                <PrismicNextImage
                  field={section.image}
                  className="object-cover z-0 rounded-6 "
                  fill
                  alt={""}
                  sizes="(max-width: 768px) 100vw"
                />
              </div>
            </FadeIn>
            <FadeIn className="">
              <div className="hidden xs:flex relative pb-[60%]">
                <PrismicNextImage
                  field={section.image_2}
                  className="object-cover z-0 rounded-6 "
                  fill
                  alt={""}
                  sizes="(max-width: 768px) 100vw"
                />
              </div>
            </FadeIn>
          </FadeIn>
          <div className="flex flex-col gap-fluid-32 lg:gap-fluid-40  ">
            <FadeIn className="md:self-center">
              <h1 className="font-headline  text-headlineColor text-h2 font-semiBold">
                {section.title}
              </h1>
            </FadeIn>
            <FadeIn className="w-fill flex flex-col" delay={0.2}>
              <p className="md:self-center text-[16px] md:w-[80%] md:text-center text-bodyGrey font-body">
                {section.paragraph}
              </p>
            </FadeIn>
          </div>
        </FadeIn>
      </div>
      <SliceZone slices={page.data.slices} components={components} />
    </section>
  );
}
