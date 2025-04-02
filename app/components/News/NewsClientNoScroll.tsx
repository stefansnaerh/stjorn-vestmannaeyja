import Link from "next/link";
import { PrismicNextImage } from "@prismicio/next";
import Button from "../Button/Button";
import { FadeIn } from "../FadeIn/fadeIn";
import { SubFadeIn } from "../FadeIn/subFadeIn";
export default function NewsClientNoScroll({ news }: { news: any }) {
  return (
    <div className=" pt-fluid-48 flex-col gap-fluid-48 sm:gap-fluid-72  overflow-hidden ">
      <div className="max-w-fill">
        <div className="grid grid-flow-row sm:grid-cols-2 md:grid-cols-3 gap-fluid-32 md:gap-fluid-40">
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
              <div className=" " key={`${i}${section.title}`}>
                <Link className="group flex flex-col " href={`${item.url}`}>
                  <div className="relative snap-center snap-mandatory overflow-hidden rounded-6 ">
                    <div className="relative pb-[60%] ">
                      <PrismicNextImage
                        field={section.image}
                        className="object-cover z-0 rounded-6 group-hover:scale-105 transition-all duration-300 ease-in-out"
                        fill
                        alt={""}
                        sizes="(max-width: 768px) 80vw, 25vw"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-12  py-fluid-24 ">
                    <div className=" w-fit rounded-6 ">
                      <p
                        suppressHydrationWarning
                        className="font-body text-sm font-semiBold text-bodyGrey"
                      >
                        {formattedDate}
                      </p>
                    </div>
                    <h2 className="font-body font-semiBold text-headlineColor text-paragraph group-hover:text-buttonBlue transition-all duration-300 ease-in-out">
                      {section.title}
                    </h2>
                    <Button
                      className="text-[16px] mt-fluid-12 group-hover:text-buttonBlue"
                      text={"Lesa meira"}
                      noShadow
                      arrow
                      noPadding
                      type="none"
                    />
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
