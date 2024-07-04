import { Metadata } from "next";
import { createClient } from "../prismicio";
import { FrontPageDocument } from "@/prismicio-types";
import { SliceZone } from "@prismicio/react";
import { components } from "../slices";
import dynamic from "next/dynamic";
import Hero from "./components/Hero/hero";
import News from "./components/News/News";
const NewsDynamic = dynamic(() => import("./components/News/News"));
export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getSingle("front_page");

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}

export default async function Home() {
  const client = createClient();

  const page = await client.getSingle<FrontPageDocument>("front_page");

  const section = page.data;

  return (
    <>
      <Hero content={section} />
      <NewsDynamic type="scroll" />
      <SliceZone slices={page.data.slices} components={components} />
    </>
  );
}
