import Link from "next/link";
import { PrismicNextImage } from "@prismicio/next";

import { FadeIn } from "../FadeIn/fadeIn";
import { SubFadeIn } from "../FadeIn/subFadeIn";
export default function NewsClientNoScroll({ news }: { news: any }) {
  return (
    <div className=" pt-fluid-48 flex-col gap-fluid-48 sm:gap-fluid-72  overflow-hidden ">
      <div className="max-w-fill">
        <div className="flex flex-wrap gap-fluid-56 w-fill ">
          {news.map((item: any, i: number) => {
            function formatDate(dateString: string): string {
              const options: Intl.DateTimeFormatOptions = {
                day: "numeric",
                month: "long",
                year: "numeric",
              };
              const date = new Date(dateString);
              return date.toLocaleDateString("is-IS", options); // 'is-IS' for Icelandic locale
            }

            const section = item.data;
            const formattedDate = formatDate(`${section.date}`);

            return (
              <FadeIn
                className="w-fill  xs:max-w-[45%] xs:min-w-[45%] md:min-w-[21%] md:max-w-[21%] xl:max-w-[22%] xl:min-w-[22%] snap-x snap-mandatory snap-always snap-center "
                key={`${i}${section.title}`}
              >
                <Link
                  className="group flex flex-col gap-fluid-16"
                  href={`${item.url}`}
                >
                  <div className="relative snap-center snap-mandatory overflow-hidden rounded-6 ">
                    <div className="relative pb-[120%] ">
                      <PrismicNextImage
                        field={section.image}
                        className="object-cover z-0 rounded-6 group-hover:scale-105 transition-all duration-300 ease-in-out"
                        fill
                        alt={""}
                        sizes="(max-width: 768px) 80vw, 25vw"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-6 ">
                    <p
                      suppressHydrationWarning
                      className="font-body text-sm text-bodyGrey"
                    >
                      {formattedDate}
                    </p>

                    <h2 className="font-body font-semiBold text-headlineBlue text-navLinksMobile group-hover:text-buttonBlue transition-all duration-300 ease-in-out">
                      {section.title}
                    </h2>
                  </div>
                </Link>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </div>
  );
}
