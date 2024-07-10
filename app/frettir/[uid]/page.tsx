import { Metadata } from "next";
import { createClient } from "../../../prismicio";
import { NewsDocument } from "../../../prismicio-types";
import { SliceZone } from "@prismicio/react";
import { components } from "../../../slices";
import { FadeIn } from "@/app/components/FadeIn/fadeIn";
import Chevron from "../../../public/icons/chevronUp.svg";
import Image from "next/image";
import Link from "next/link";
import { PrismicNextImage } from "@prismicio/next";
import RichText from "../../components/RichText/RichText";
type Params = { uid: string };

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const client = createClient();
  const page = await client.getByUID("news", params.uid);

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}

export default async function Service({ params }: { params: Params }) {
  const client = createClient();

  const page = await client.getByUID<NewsDocument>("news", params.uid);
  const section = page.data;
  function formatDate(dateString: any): string {
    const options: Intl.DateTimeFormatOptions = {
      day: "numeric",
      month: "long",
      year: "numeric",
    };
    const date = new Date(dateString);
    return date.toLocaleDateString("is-IS", options); // 'is-IS' for Icelandic locale
  }

  return (
    <section className="flex flex-col justify-center">
      <div className="lg:pb-fluid-122 pt-fluid-40 smmd:pt-fluid-64  pb-64 px-container-88 self-center flex flex-col gap-fluid-56 smmd:w-[90%] lg2:w-[85%] ">
        <FadeIn className="flex  font-body text-sm ">
          <Link className="text-bodyGrey" href={"/"}>
            Heim
          </Link>
          <Image
            alt="ör til hægri"
            src={Chevron}
            className="h-fluid-16 rotate-90 self-center"
          />
          <Link className="text-bodyGrey" href={"/frettir"}>
            Fréttir
          </Link>
          <Image
            alt="ör til hægri"
            src={Chevron}
            className="h-fluid-16 rotate-90 self-center"
          />
          <p className="text-sm text-headlineColor font-semiBold">
            {section.title}
          </p>
        </FadeIn>
        <FadeIn className=" flex flex-col md:flex-row gap-fluid-72 xxs:gap-fluid-96  smmd:justify-between">
          <div className="flex flex-col gap-fluid-32 ">
            <p className="text-bodyGrey font-body text-sm">
              {formatDate(section.date)}
            </p>
            <FadeIn>
              <h1 className="font-headline  text-headlineBlue text-h2 font-semiBold">
                {section.title}
              </h1>
            </FadeIn>
            <FadeIn delay={0.2} className="">
              <RichText text={section.paragraph} />
            </FadeIn>
          </div>
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
        </FadeIn>
        <SliceZone slices={page.data.slices} components={components} />
      </div>
    </section>
  );
}
