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
import { PrismicRichText } from "@prismicio/react";
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
    <section className="flex flex-col justify-center">
      <div className="lg:pb-fluid-122 pt-fluid-40 smmd:pt-fluid-64 max-w-[2000px]  pb-64 px-container-88 self-center flex flex-col gap-fluid-56 smmd:w-[95%] lg2:w-[90%]  ">
        <FadeIn className="flex  font-body text-sm ">
          <Link className="text-bodyGrey" href={"/"}>
            Heim
          </Link>
          <Image
            alt="STF logo"
            src={Chevron}
            className="h-fluid-16 rotate-90 self-center"
          />
          <p className="text-sm text-headlineColor font-semiBold">Um okkur</p>
        </FadeIn>
        <FadeIn className=" flex flex-col gap-fluid-72 xxs:gap-fluid-96 smmd:flex-row-reverse smmd:justify-between">
          <FadeIn className="self-center relative min-w-[90%]  md:min-w-[35%] lg2:min-w-[40%]">
            <div className=" relative pb-[100%]">
              <PrismicNextImage
                field={section.image}
                className="object-contain z-0 rounded-6 "
                fill
                alt={""}
                sizes="(max-width: 768px) 100vw"
              />
            </div>
          </FadeIn>
          <div className="flex flex-col gap-fluid-32 md:gap-fluid-48 smmd:w-[50%]">
            <FadeIn>
              <h1 className="font-headline  text-headlineColor text-h2 font-semiBold">
                {section.title}
              </h1>
            </FadeIn>
            <FadeIn
              className="[&_p]:text-navLinks [&_p]:text-bodyGrey [&_p]:font-body"
              delay={0.2}
            >
              <PrismicRichText field={section.paragraph} />
            </FadeIn>
          </div>
        </FadeIn>
      </div>
      <SliceZone slices={page.data.slices} components={components} />
    </section>
  );
}
