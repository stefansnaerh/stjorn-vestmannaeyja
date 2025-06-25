import Link from "next/link";
import Image from "next/image";
import Logo from "../../../public/icons/staLogo.png";
import { createClient } from "../../../prismicio";
import { PrismicNextLink } from "@prismicio/next";
export default async function Footer() {
  const client = createClient();

  const data = await client.getSingle("footer");
  const content = data.data;
  return (
    <footer className="  px-fluid-24 sm:px-fluid-40 mt-fluid-96 ">
      <div className=" flex  rounded-6  pt-fluid-48 pb-fluid-56 bg-pureWhite lg:py-fluid-72   w-fill smmd:flex-nowrap smmd:flex-row flex-wrap px-24 xs:px-fluid-40 sm:px-fluid-56 flex-col  gap-y-fluid-48   gap-64 lg2:gap-fluid-96 lg2:px-[7%] xl:px-[9%] xxl:px-[12%] ">
        <div className="flex flex-col gap-fluid-40">
          <Link
            aria-label="hlekkur til að fara heim á forsíðu"
            href="/"
            className="self-start h-fit  lg:pr-fluid-18"
          >
            <Image
              alt="Félag stjórnenda logo"
              src={Logo}
              height={60}
              className="w-[180px] md:w-[240px] "
            />
          </Link>
          <div className="flex flex-col gap-fluid-12">
            {/* <h3 className="text-h3 font-semiBold font-headline text-headlineColor">
              Félag stjórnenda
            </h3> */}
            <ul className="flex flex-col gap-fluid-8 font-body text-bodyGrey text-navLinks">
              {content.address ? <li>{content.address}</li> : ""}
              <li>Kennitala: 451275-3059</li>
            </ul>
          </div>
        </div>
        <div className="flex w-fill lg:max-w-[70%] md:justify-end flex-row flex-wrap lg:flex-nowrap gap-fluid-64 gap-y-fluid-48 md:gap-fluid-96 xs:gap-fluid-96  ">
          <nav className="flex  font-body text-bodyGrey flex-wrap   sm:p-0 ">
            <ul
              aria-label={`${content.link_group_1_title}`}
              className="flex gap-8 text-navLinks text-nowrap   md:min-h-[160px] w-fit  md:w-[160px] lg2:w-fit flex-col font-medium before:content-[attr(aria-label)] before:font-semiBold before:font-headline before:text-md before:text-headlineColor "
            >
              {content.link_group_1.map((item, i) => {
                return (
                  <li
                    key={`${i}${item.link_name}`}
                    className="hover:text-buttonBlue text-greyMedium   transition-all duration-300 ease-in-out"
                  >
                    <PrismicNextLink
                      field={item.link}
                      target="_blank"
                      aria-label={`Hlekkur til þess að sjá algengar spurningar og svör`}
                    >
                      {item.link_name}
                    </PrismicNextLink>
                  </li>
                );
              })}
            </ul>
          </nav>
          <ul
            aria-label={`Hafðu samband`}
            className="flex gap-8 text-navLinks font-medium font-body text-greyMedium md:min-h-[160px] w-fit  md:w-[160px] lg2:w-fit flex-col  before:content-[attr(aria-label)] before:font-semiBold before:font-headline before:text-md before:text-headlineColor"
          >
            <li className="hover:text-buttonBlue  transition-all duration-300 ease-in-out">
              <a
                href={`mailto:${content.email}`}
                aria-label={`Opnar tölvupóst til fylla inn í nýjum glugga`}
                target="_blank"
              >
                {content.email}
              </a>
            </li>
            {/* <li className="hover:text-pureWhite text-greyMedium transition-all duration-300 ease-in-out">
              <a
                href={`tel:${content.phone_number}`}
                aria-label={`Hringja í síma fylla inn`}
              >
                Sími : {content.phone_number}
              </a>
            </li> */}
          </ul>
          <ul
            aria-label={`Samfélagsmiðlar`}
            className=" flex  gap-8 text-navLinks font-body text-greyMedium font-medium   md:min-h-[160px] w-fit md:w-[160px] lg2:w-fit flex-col  before:content-[attr(aria-label)] before:font-semiBold before:font-headline before:text-md before:text-headlineColor "
          >
            <li className=" transition-all hover:text-buttonBlue duration-300 ease-in-out">
              <a
                href={`https://www.facebook.com/profile.php?id=100064358182681`}
                aria-label={`Opnar facebook síðu félagsins`}
                target="_blank"
              >
                Facebook
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className=" flex w-fill justify-center bg-backgroundGrey py-fluid-24">
        <p className="font-body text-sm text-bodyGrey text-center">
          Ⓒ 2025 Allur réttur áskilinn | Stjórnendafélag Austurlands{" "}
        </p>
      </div>
    </footer>
  );
}
