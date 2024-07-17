"use client";
import { HeaderDocumentData } from "@/prismicio-types";
import { useState, useContext } from "react";
import cx from "classnames";
import NavGroupMobile from "./NavGroupMobile";
import Button from "../../Button/Button";
import { PrismicNextLink } from "@prismicio/next";
import { FadeInSide } from "../../FadeIn/fadeInSide";
import { BackGroundGreyContext } from "../../ContextProvider/Provider";
export default function MobileNav({
  setIsMobileNavOpen,
  content,
}: {
  setIsMobileNavOpen: React.Dispatch<React.SetStateAction<boolean | undefined>>;
  content: HeaderDocumentData;
}) {
  const [navGroupCurrentIndex, setNavGroupCurrentIndex] = useState<number>(-1);
  const {
    setGreyBackground,
    setIsSearchOpen,
    setShowLockLinks,
    setShowLanguages,
    showMobileNav,
    setShowMobileNav,
  } = useContext(BackGroundGreyContext);
  const toggleShowNav = () => {
    setShowMobileNav((prevShowMobileNav) => !prevShowMobileNav);
    setIsMobileNavOpen((prevShowMobileNav) => !prevShowMobileNav);
    setNavGroupCurrentIndex(-1);
    setIsSearchOpen(false);
    setGreyBackground("App");
    setShowLanguages(false);
    setShowLockLinks(false);
  };

  const handleNavClick = () => {
    setShowMobileNav(false);
    setIsMobileNavOpen(false);
  };

  return (
    <>
      <button
        onClick={toggleShowNav}
        aria-label="Takki til að sýna farsíma valmynd"
        className="md:hidden flex justify-between flex-col h-[30px] w-40 self-center "
      >
        <div
          className={cx(
            "bg-headlineColor h-[3px] w-fill rounded-12  transform transition duration-500 ease-in-out ",
            {
              ["rotate-45 translate-y-[13.6px]"]: showMobileNav,
              [""]: !showMobileNav,
            }
          )}
        ></div>
        <div
          className={cx(
            "bg-headlineColor h-[3px] w-fill rounded-12  transform transition duration-500 ease-in-out ",
            {
              ["opacity-0"]: showMobileNav,
            }
          )}
        ></div>
        <div
          className={cx(
            "bg-headlineColor h-[3px] w-fill rounded-12  transform transition duration-500 ease-in-out ",
            {
              ["-rotate-45 -translate-y-[13.6px]"]: showMobileNav,
              [""]: !showMobileNav,
            }
          )}
        ></div>
      </button>

      <nav
        className={cx(
          " md:hidden absolute overflow-x-hidden z-10 flex flex-col gap-fluid-48 bg-backgroundGrey top-[80px] xs:top-[90px] overflow-y-auto h-fill min-h-[100vh] min-w-fill px-fluid-40 py-fluid-56 xs:py-fluid-72 xs:px-fluid-56 transform duration-500 ease-in-out",
          { ["ml-[110%]"]: !showMobileNav, ["-ml-[18px]"]: showMobileNav }
        )}
      >
        <NavGroupMobile
          toggleShowNav={toggleShowNav}
          content={content}
          navGroupCurrentIndex={navGroupCurrentIndex}
          setNavGroupCurrentIndex={setNavGroupCurrentIndex}
        />

        <PrismicNextLink
          className="flex group gap-6 pb-2 text-navLinksMobile transition-all duration-300 ease-in-out"
          field={content.link_5}
          onClick={handleNavClick}
        >
          {content.link_5_name}
        </PrismicNextLink>

        <PrismicNextLink
          className="flex group gap-6 pb-2 text-navLinksMobile transition-all duration-300 ease-in-out"
          field={content.link_6}
          onClick={handleNavClick}
        >
          {content.link_6_name}
        </PrismicNextLink>

        <Button
          onClick={handleNavClick}
          text={"Sækja um aðild"}
          aHref={"https://stf.is/saekja-um-adild"}
          ariaLabel={`Hlekkur til þess að sækja um aðild að STF`}
          type="htmla"
          className="text-white rounded-8  bg-backgroundBlue hover:bg-buttonBlue  text-navLinksMobile  transition-all duration-300 ease-in-out"
        />
      </nav>
    </>
  );
}
