import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Container from "@/app/components/Container/container";
import { FadeIn } from "@/app/components/FadeIn/fadeIn";
import { PrismicNextImage } from "@prismicio/next";
/**
 * Props for `Board`.
 */
export type BoardProps = SliceComponentProps<Content.BoardSlice>;

/**
 * Component for "Board" Slices.
 */

const Board = ({ slice }: BoardProps): JSX.Element => {
  const section = slice.primary;
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="flex justify-center"
    >
      <Container className="">
        <section className="flex flex-col w-fill  gap-fluid-56 md:gap-fluid-96">
          <FadeIn>
            <h2 className="font-headline font-semiBold text-h2 text-headlineColor w-fit">
              {section.title}
            </h2>
          </FadeIn>

          <FadeIn className="grid grid-flow-row xs:grid-cols-2 lg:grid-cols-4 gap-fluid-32  w-fill md:gap-fluid-24 lg:gap-fluid-32 lg2:gap-fluid-40  ">
            {section.board_members.map((item, index) => {
              return (
                <div
                  className="flex flex-col  gap-fluid-12 border-[1px] border-greyInput border-opacity-20 bg-pureWhite px-fluid-32 xs:px-fluid-40  pt-fluid-40  pb-fluid-32 rounded-6"
                  key={index}
                >
                  {/* <FadeIn className="relative w-fill xxs:w-[80%] sm:w-fill  self-center">
                    <div className="relative pb-[120%] ">
                      <PrismicNextImage
                        field={item.image}
                        className="object-cover z-0 rounded-12"
                        imgixParams={{ fit: "crop" }}
                        fill
                        sizes="(max-width: 768px) 100vw"
                      />
                    </div>
                  </FadeIn> */}
                  <FadeIn className="flex flex-col  gap-fluid-32 justify-start ">
                    <div className="flex flex-col gap-fluid-8">
                      <h3 className="mt-8 self-start text-h5 text-headlineColor font-headline font-semiBold w-fit ">
                        {item.member_name}
                      </h3>
                      <h4 className="text-md  text-bodyGrey font-regular w-fit ">
                        {item.member_job}
                      </h4>
                    </div>
                    <div className="flex flex-col gap-fluid-12">
                      {item.email && (
                        <a
                          className="text-sm self-start w-fit group bg-greyPurple text-purple py-fluid-8 px-fluid-16 rounded-32 flex gap-6 hover:text-buttonBlue transition-all duration-300 ease-in-out"
                          href={`mailto:${item.email}`}
                          aria-label={`Hlekkur til að senda tölvupóst á ${item.member_name}`}
                        >
                          <svg
                            width="100%"
                            height="100%"
                            viewBox="0 0 14 11"
                            fill="none"
                            className="h-[12px] w-[12px] self-center  text-purple group-hover:text-buttonBlue ease-in-out transition-all duration-300"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M13 0.416504H1C0.801088 0.416504 0.610322 0.495521 0.46967 0.636174C0.329018 0.776826 0.25 0.967592 0.25 1.1665V9.6665C0.25 9.99802 0.381696 10.316 0.616117 10.5504C0.850537 10.7848 1.16848 10.9165 1.5 10.9165H12.5C12.8315 10.9165 13.1495 10.7848 13.3839 10.5504C13.6183 10.316 13.75 9.99802 13.75 9.6665V1.1665C13.75 0.967592 13.671 0.776826 13.5303 0.636174C13.3897 0.495521 13.1989 0.416504 13 0.416504ZM11.0719 1.9165L7 5.649L2.92812 1.9165H11.0719ZM1.75 9.4165V2.8715L6.49312 7.21963C6.63146 7.34647 6.81232 7.41684 7 7.41684C7.18768 7.41684 7.36854 7.34647 7.50688 7.21963L12.25 2.8715V9.4165H1.75Z"
                              fill="currentColor"
                            />
                          </svg>
                          {item.email}
                        </a>
                      )}
                      {/* <a
                        className="text-sm bg-greyPurple group text-purple py-fluid-8 px-fluid-16 rounded-32 w-fit max-w-[111px] xxs:max-w-fit whitespace-nowrap  flex gap-6 hover:text-buttonBlue transition-all duration-300 ease-in-out"
                        href={`tel:${item.phone_number}`}
                        aria-label={`Hlekkur til að hringja í ${item.member_name}`}
                      >
                        <svg
                          width="100%"
                          height="100%"
                          viewBox="0 0 14 14"
                          fill="none"
                          className="self-center h-[14px] text-purple group-hover:text-buttonBlue ease-in-out transition-all duration-300"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13 9.34172L10.0569 8.02234L10.0456 8.01734C9.85433 7.93487 9.6454 7.90167 9.43795 7.92077C9.2305 7.93988 9.03115 8.01069 8.85813 8.12672C8.83388 8.14296 8.81051 8.16048 8.78813 8.17922L7.39376 9.36672C6.58125 8.92609 5.74188 8.09359 5.30063 7.29109L6.49188 5.87484C6.51103 5.85199 6.52877 5.82798 6.545 5.80297C6.65799 5.63057 6.72659 5.4329 6.74469 5.22756C6.7628 5.02223 6.72984 4.81561 6.64875 4.62609C6.64683 4.62246 6.64516 4.6187 6.64375 4.61484L5.325 1.66672C5.21676 1.42017 5.03201 1.21502 4.7981 1.08164C4.5642 0.948249 4.29357 0.893711 4.02625 0.926093C3.11899 1.04528 2.28612 1.49064 1.68322 2.179C1.08031 2.86737 0.748586 3.75166 0.750005 4.66672C0.750005 9.76734 4.89938 13.9167 10 13.9167C10.9151 13.9181 11.7994 13.5864 12.4877 12.9835C13.1761 12.3806 13.6214 11.5477 13.7406 10.6405C13.773 10.3732 13.7185 10.1025 13.5851 9.86862C13.4517 9.63471 13.2466 9.44997 13 9.34172ZM10 12.4167C7.94534 12.4142 5.97554 11.5969 4.52267 10.1441C3.0698 8.69119 2.25249 6.72138 2.25 4.66672C2.24857 4.1489 2.42437 3.64619 2.74818 3.2421C3.07199 2.83802 3.52432 2.55691 4.03001 2.44547L5.20625 5.07047L4.00875 6.49672C3.9894 6.51978 3.97145 6.54399 3.955 6.56922C3.83697 6.74956 3.76758 6.95737 3.75356 7.17245C3.73954 7.38753 3.78138 7.60258 3.87501 7.79672C4.46375 9.00172 5.67688 10.2067 6.89438 10.7967C7.08982 10.8894 7.30595 10.9297 7.52165 10.9138C7.73736 10.898 7.94525 10.8264 8.12501 10.7061C8.14917 10.6898 8.17234 10.6721 8.19438 10.653L9.59626 9.46109L12.2213 10.6367C12.1098 11.1424 11.8287 11.5947 11.4246 11.9185C11.0205 12.2424 10.5178 12.4182 10 12.4167Z"
                            fill="currentColor"
                          />
                        </svg>
                        {item.phone_number}
                      </a> */}
                    </div>
                  </FadeIn>
                </div>
              );
            })}
          </FadeIn>
        </section>
      </Container>
    </section>
  );
};

export default Board;
