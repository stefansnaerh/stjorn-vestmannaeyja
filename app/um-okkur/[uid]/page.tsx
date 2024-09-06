import { Metadata } from "next";
import { createClient } from "../../../prismicio";
import { UmOkkurTextasidaDocument } from "@/prismicio-types";
import { SliceZone } from "@prismicio/react";
import { components } from "../../../slices";
import { FadeIn } from "@/app/components/FadeIn/fadeIn";
import Image from "next/image";
import Link from "next/link";
import Chevron from "../../../public/icons/chevronUp.svg";
import LogoStandandi from "../../../public/icons/LogoStandandiStafir.svg";
import Logo from "../../../public/icons/LogoLiggjandiStafir.svg";
import RichText from "@/app/components/RichText/RichText";
type Params = { uid: string };
export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const client = createClient();
  const page = await client.getByUID("um_okkur_textasida", params.uid);

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}

export default async function Service({ params }: { params: Params }) {
  const client = createClient();

  const page = await client.getByUID<UmOkkurTextasidaDocument>(
    "um_okkur_textasida",
    params.uid
  );
  const section = page.data;

  return (
    <section className="flex flex-col justify-center bg-backgroundGreyDarker">
      <div className="lg:pb-fluid-122 pt-fluid-40 smmd:pt-fluid-64  pb-64 px-container-56 xxs:px-container-88 self-center flex flex-col gap-fluid-56 smmd:w-[90%] lg2:w-[80%] max-w-[2000px] ">
        <div className="flex  font-body text-sm  w-fit">
          <Link
            className="text-bodyGrey  hover:text-buttonBlue transition-all duration-300"
            href={"/"}
          >
            Heim
          </Link>
          <Image
            alt="ör til hægri"
            src={Chevron}
            className="h-fluid-16 rotate-90 self-center"
          />
          <Link
            className="text-sm text-bodyGrey hover:text-buttonBlue transition-all duration-300"
            href={"/um-okkur"}
          >
            Um okkur
          </Link>
          <Image
            alt="ör til hægri"
            src={Chevron}
            className="h-fluid-16 rotate-90 self-center"
          />
          <p className="text-sm text-headlineColor font-semiBold">
            {section.title}
          </p>
        </div>
        <div className="mt-fluid-56 py-fluid-24 sm:py-fluid-48 px-fluid-24 sm:px-fluid-72  rounded-6 bg-pureWhite flex flex-col gap-fluid-48">
          <div>
            <h1 className="font-headline  text-headlineColor text-h2 font-semiBold">
              {section.title}
            </h1>
          </div>
          <RichText text={section.paragraph} />
        </div>
      </div>
      <SliceZone slices={page.data.slices} components={components} />
    </section>
  );
}
