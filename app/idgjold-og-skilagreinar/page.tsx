import { Metadata } from "next";
import { createClient } from "../../prismicio";
import { IdgjoldOgSkilagreinarDocument } from "@/prismicio-types";
import { SliceZone } from "@prismicio/react";
import { components } from "../../slices";

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getSingle("idgjold_og_skilagreinar");

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}

export default async function IdgjoldOgSkilagreinar() {
  const client = createClient();

  const page = await client.getSingle<IdgjoldOgSkilagreinarDocument>(
    "idgjold_og_skilagreinar"
  );
  const section = page.data;

  return (
    <section className="flex flex-col justify-center bg-backgroundGrey   w-full items-center content-center  ">
      <div className="lg:pb-fluid-122 pt-fluid-40 smmd:pt-fluid-64  pb-64 px-container-56 xxs:px-container-88 self-center flex flex-col gap-fluid-56 smmd:w-[90%] lg2:w-[80%] max-w-[2000px] ">
        <div className="mt-fluid-56 py-fluid-24 sm:py-fluid-64 px-fluid-24 sm:px-fluid-72 border-[1px] border-greyInput border-opacity-10 rounded-6 bg-pureWhite flex flex-col gap-fluid-32">
          <h1 className="font-headline text-headlineColor text-h2 font-semiBold pb-fluid-24">
            {section.title}
          </h1>
          <SliceZone slices={page.data.slices} components={components} />
        </div>
      </div>
    </section>
  );
}
