import { Metadata } from "next";
import Link from "next/link";
import { createClient } from "../../prismicio";
import { AllNewsDocument } from "@/prismicio-types";
import Image from "next/image";
import Chevron from "../../public/icons/chevronUp.svg";
import { FadeIn } from "../components/FadeIn/fadeIn";
import News from "../components/News/News";
export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getSingle("all_news");
  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}
export default async function AboutUs() {
  const client = createClient();
  const page = await client.getSingle<AllNewsDocument>("all_news");

  const section = page.data;
  return (
    <section className="flex flex-col justify-center">
      <div className=" pt-fluid-40 smmd:pt-fluid-64  pb-64 px-container-88 self-center flex flex-col gap-fluid-56 smmd:w-[95%] lg2:w-[90%] max-w-[2000px]">
        <FadeIn className="flex  font-body text-sm ">
          <Link className="text-bodyGrey" href={"/"}>
            Heim
          </Link>
          <Image
            alt="STF logo"
            src={Chevron}
            className="h-fluid-16 rotate-90 self-center"
          />
          <p className="text-sm text-headlineColor font-semiBold">Fréttir</p>
        </FadeIn>
        <FadeIn>
          <div className="self-start flex flex-col gap-fluid-32 ">
            <FadeIn>
              <h1 className="font-headline  text-headlineColor text-h1 font-semiBold">
                {section.title}
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="font-body text-bodyGrey text-paragraph">
                {section.sub_title}
              </p>
            </FadeIn>
          </div>
        </FadeIn>
        <News type="noScroll" />
      </div>
    </section>
  );
}
