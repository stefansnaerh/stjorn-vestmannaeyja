import { Metadata } from "next";
import { createClient } from "../../../prismicio";
import { StyrkirOgSjodirUndirsidaDocument } from "@/prismicio-types";
import { SliceZone } from "@prismicio/react";
import { components } from "../../../slices";
import Image from "next/image";
import Link from "next/link";
import Chevron from "../../icons/chevronUp.svg";
import RichText from "@/app/components/RichText/RichText";
type Params = { uid: string };
export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const client = createClient();
  const page = await client.getByUID("styrkir_og_sjodir_undirsida", params.uid);

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}

export default async function Service({ params }: { params: Params }) {
  const client = createClient();

  const page = await client.getByUID<StyrkirOgSjodirUndirsidaDocument>(
    "styrkir_og_sjodir_undirsida",
    params.uid
  );
  const section = page.data;

  return (
    <section className="flex flex-col justify-center bg-backgroundGrey   w-full items-center content-center  ">
      <div className="lg:pb-fluid-122 pt-fluid-40 smmd:pt-fluid-64  pb-64 px-container-56 xxs:px-container-88 self-center flex flex-col gap-fluid-56 smmd:w-[90%] lg2:w-[80%] max-w-[1200px] ">
        <div className="mt-fluid-56 py-fluid-24 sm:py-fluid-64 px-fluid-24 sm:px-fluid-72 border-[1px] border-greyInput rounded-24 border-opacity-10  bg-pureWhite flex flex-col gap-fluid-32">
          <h1 className="font-headline text-headlineColor text-h2 font-semiBold pb-fluid-24">
            {section.title}
          </h1>
          <SliceZone slices={page.data.slices} components={components} />
        </div>
      </div>
    </section>
  );
}
