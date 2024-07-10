import Link from "next/link";
import Image from "next/image";
import Logo from "../../../public/icons/LogoLiggjandiStafir.svg";
export default function Footer() {
  return (
    <footer className=" bg-backgroundGrey px-fluid-24 sm:px-fluid-40 mt-fluid-96 ">
      <div className=" flex bg-white rounded-6  pt-fluid-48 pb-fluid-56  lg:py-fluid-72   w-fill smmd:flex-nowrap smmd:flex-row flex-wrap px-24 xs:px-fluid-40 sm:px-fluid-56 flex-col  gap-y-fluid-48   gap-64 lg2:gap-fluid-96 lg2:px-[7%] xl:px-[9%] xxl:px-[12%] ">
        <div className="flex flex-col gap-fluid-40">
          <Link
            aria-label="hlekkur til að fara heim á forsíðu"
            href="/"
            className="self-start h-fit  lg:pr-fluid-18"
          >
            <Image
              alt="STF logo"
              src={Logo}
              height={60}
              className="lg2:w-[400px] "
            />
          </Link>
          <div className="flex flex-col gap-fluid-12">
            <h3 className="text-h3 font-semiBold font-headline text-headlineBlue">
              Félag stjórnenda
            </h3>
            <ul className="flex flex-col gap-fluid-8 font-body text-bodyGrey text-navLinks">
              <li>
                <a
                  className="hover:text-orange transition-all duration-300 ease-in-out"
                  href={`https://maps.app.goo.gl/Lm9PoT2mMTUbCfy78`}
                  aria-label={`Opnar tölvupóst til fylla inn í nýjum glugga`}
                  target="_blank"
                >
                  Austurvegur 56, 800 Selfoss
                </a>
              </li>
              <li>Kennitala: 680269-7699</li>
            </ul>
          </div>
        </div>
        <div className="flex w-fill lg:max-w-[70%] md:justify-end flex-row flex-wrap lg:flex-nowrap gap-fluid-64 gap-y-fluid-48 md:gap-fluid-144 xs:gap-fluid-96  ">
          <nav className="flex overflow-hidden font-body text-bodyGrey flex-wrap   sm:p-0 ">
            <ul
              aria-label={`Hagnýtt`}
              className="flex gap-8 text-navLinks   md:min-h-[160px] w-fit  md:w-[160px] lg2:w-fit flex-col font-medium before:content-[attr(aria-label)] before:font-semiBold before:font-headline before:text-md before:text-headlineBlue "
            >
              <li className="hover:text-orange transition-all duration-300 ease-in-out">
                <Link
                  href={"/algengar-spurningar"}
                  aria-label={`Hlekkur til þess að sjá algengar spurningar og svör`}
                >
                  Algengar spurningar
                </Link>
              </li>
              <li className="hover:text-orange transition-all duration-300 ease-in-out">
                <Link
                  href={`/saekja-um-adild`}
                  aria-label={`Hlekkur til þess að sækja um aðild`}
                >
                  Sækja um aðild
                </Link>
              </li>
              <li className="hover:text-orange transition-all duration-300 ease-in-out">
                <a
                  href={`https://attin.is/`}
                  target="_blank"
                  aria-label={`Hlekkur á Áttin - fyrirtækjastyrkir`}
                >
                  Áttin fyrirtækjastyrkir
                </a>
              </li>
              <li className="hover:text-orange transition-all duration-300 ease-in-out">
                <Link
                  href={`/um-okkur/personuverndarstefna`}
                  aria-label={`Hlekkur til þess að lesa persónuverndarstefnu`}
                >
                  Persónuverndarstefna
                </Link>
              </li>
              <li className="hover:text-orange transition-all duration-300 ease-in-out">
                <Link
                  href={`/um-okkur/umhverfisstefna`}
                  aria-label={`Hlekkur þess að lesa umhverfisstefnu`}
                >
                  Umhverfisstefna
                </Link>
              </li>
              {/* <li className="hover:text-orange transition-all duration-300 ease-in-out">
                <a
                  href={`https://www.facebook.com/SambandStjornendafelagaSTF/`}
                  target="_blank"
                  aria-label={`Hlekkur á facebook síðu STF`}
                >
                  Facebook
                </a>
              </li> */}
            </ul>
          </nav>
          <ul
            aria-label={`Hafðu samband`}
            className="flex gap-8 text-navLinks font-body text-bodyGrey md:min-h-[160px] w-fit  md:w-[160px] lg2:w-fit flex-col  before:content-[attr(aria-label)] before:font-semiBold before:font-headline before:text-md before:text-headlineBlue "
          >
            <li className="hover:text-orange transition-all duration-300 ease-in-out">
              <a
                href={`mailto:stjornandi@stjornandi.is`}
                aria-label={`Opnar tölvupóst til fylla inn í nýjum glugga`}
                target="_blank"
              >
                Netfang: stjornadi@stjornandi.is
              </a>
            </li>
            <li className="hover:text-orange transition-all duration-300 ease-in-out">
              <a href={`tel:4805000`} aria-label={`Hringja í síma fylla inn`}>
                Sími : 480-5000
              </a>
            </li>
            {/* <li className="leading-[30px]  transition-all duration-300 ease-in-out">
              Símatími : <br />
              <span className="text-bodyGrey text-sm pr-6">{"●"} </span>Mán -
              fim: 08:00 - 16:00
              <br />
              <span className="text-bodyGrey text-sm pr-6">{"●"} </span> Fös:
              08:00 - 15:00
            </li> */}
          </ul>
          <ul
            aria-label={`Opnunartími skrifstofu`}
            className=" flex  gap-8 text-navLinks font-body text-bodyGrey   md:min-h-[160px] w-fit md:w-[160px] lg2:w-fit flex-col  before:content-[attr(aria-label)] before:font-semiBold before:font-headline before:text-md before:text-headlineBlue "
          >
            <li className=" transition-all duration-300 ease-in-out">
              <span className="text-bodyGrey text-sm pr-6">{"●"} </span> Mán -
              fim : 08:00 - 16:00
            </li>
            <li className="transition-all duration-300 ease-in-out">
              <span className="text-bodyGrey text-sm pr-6">{"●"} </span> Fös :
              08:00 - 15:00
            </li>
          </ul>
        </div>
      </div>
      <div className=" flex w-fill justify-center bg-backgroundGrey py-fluid-24">
        <p className="font-body text-sm text-bodyGrey text-center">
          Ⓒ 2024 Allur réttur áskilinn | Félag stjórnenda{" "}
        </p>
      </div>
    </footer>
  );
}
