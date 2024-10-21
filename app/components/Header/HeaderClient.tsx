"use client";

import { useState, useContext, useRef, useEffect } from "react";
import Link from "next/link";
import cx from "classnames";
import Image from "next/image";
import { PrismicNextLink } from "@prismicio/next";
import MobileNav from "./MobileNav/mobileNav";
import Button from "../Button/Button";
import { HeaderDocumentData } from "@/prismicio-types";
import NavGroup from "./NavGroup/NavGroup";
import Logo from "../../../public/icons/stjornVestLogo.svg";
import UserLinks from "./UserLinks/UserLinks";
import { BackGroundGreyContext } from "../ContextProvider/Provider";
export default function HeaderClient({
  content,
}: {
  content: HeaderDocumentData;
}) {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState<boolean | undefined>();

  const [lastScrollY, setLastScrollY] = useState(0);
  const [show, setShow] = useState<boolean>(false);
  const headerElement = useRef<HTMLHeadElement>(null);

  const {
    setGreyBackground,
    setIsSearchOpen,
    setCurrentIndex,
    isSearchOpen,
    showLanguages,
    showLockLinks,
    showNav,
    setShowNav,
    setShowLanguages,
    setShowLockLinks,
  } = useContext(BackGroundGreyContext);

  const controlNavbar = () => {
    if (
      isMobileNavOpen ||
      showNav ||
      isSearchOpen ||
      showLanguages ||
      showLockLinks
    )
      return;
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY && window.scrollY > 10) {
        // if scroll down hide the navbar
        setShow(true);
      } else {
        // if scroll up show the navbar
        setShow(false);
      }
      // remember current page location to use in the next move
      setLastScrollY(window.scrollY);
    }
  };
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [
    lastScrollY,
    isMobileNavOpen,
    showNav,
    isSearchOpen,
    showLanguages,
    showLockLinks,
  ]);

  const handleNavClick = () => {
    setGreyBackground("App");
    setShowNav(false);
    setCurrentIndex(-1);
    setIsSearchOpen(false);
    setShowLanguages(false);
    setShowLockLinks(false);
  };

  return (
    <header
      ref={headerElement}
      className={cx(
        "fixed z-50 bg-white max-w-[100vw] lg2:max-w-[2000px] lg2:self-center px-fluid-24 md:px-0 justify-between gap-fluid-24 flex  h-[80px] xs:h-[90px]   text-md font-semiBold text-softBlack transition-all duration-500 ",
        {
          ["-top-[120px] w-fill"]: show,
          ["top-0 w-fill "]: !show,
        }
      )}
    >
      <div className="md:hidden w-fill justify-between flex xxs:gap-fluid-32   ">
        <Link
          aria-label="hlekkur til að fara heim á forsíðu"
          href="/"
          onClick={handleNavClick}
          className=" h-fit self-center"
        >
          <Image
            alt="STF logo"
            src={Logo}
            height={60}
            className=" md:hidden h-[60px]  w-[100px] xs:w-[120px]  "
          />
        </Link>
        <UserLinks />
      </div>
      <MobileNav content={content} setIsMobileNavOpen={setIsMobileNavOpen} />

      <nav className="hidden md:flex justify-between w-fill px-fluid-16 lg:px-fluid-32 text-white  ">
        <div className="flex text-headlineColor font-body font-semiBold  self-center gap-fluid-24 xl:gap-fluid-32 ">
          <Link
            aria-label="hlekkur til að fara heim á forsíðu"
            href="/"
            onClick={handleNavClick}
            className=" h-fit self-center "
          >
            <Image
              alt="Félag stjórnenda logo"
              src={Logo}
              height={80}
              className=" h-[100px] xs:h-[70px] w-[100px] lg:w-[100px] lg2:w-[120px] "
            />
          </Link>
          <NavGroup
            showNav={showNav}
            setShowNav={setShowNav}
            content={content}
          />
          <div className="group h-fit self-center">
            <PrismicNextLink
              className="flex group gap-6 pb-2 text-[15px] xl:text-navLinks transition-all duration-300 ease-in-out"
              field={content.link_5}
              onClick={handleNavClick}
            >
              {content.link_5_name}
            </PrismicNextLink>
            <div className=" h-[3px] w-0 rounded-24 group-hover:w-fill opacity-80 group-hover:bg-buttonBlue transition-all duration-300 ease-in-out"></div>
          </div>
          <div className="group h-fit self-center">
            <PrismicNextLink
              className="flex group gap-6 pb-2 text-[15px] xl:text-navLinks transition-all duration-300 ease-in-out"
              field={content.link_6}
              onClick={handleNavClick}
            >
              {content.link_6_name}
            </PrismicNextLink>
            <div className=" h-[3px] w-0 rounded-24 group-hover:w-fill opacity-80 group-hover:bg-buttonBlue transition-all duration-300 ease-in-out"></div>
          </div>
          <div className="group h-fit self-center">
            <PrismicNextLink
              className="flex group gap-6 pb-2 text-[15px] xl:text-navLinks transition-all duration-300 ease-in-out"
              field={content.link_7}
              onClick={handleNavClick}
            >
              {content.link_7_name}
            </PrismicNextLink>
            <div className=" h-[3px] w-0 rounded-24 group-hover:w-fill opacity-80 group-hover:bg-buttonBlue transition-all duration-300 ease-in-out"></div>
          </div>
        </div>

        <div className="flex gap-fluid-24 xl:gap-fluid-32 self-center">
          <UserLinks />
          <Button
            text={"Sækja um aðild"}
            aHref={"https://stf.is/saekja-um-adild"}
            ariaLabel={`Hlekkur til að hafa samband`}
            onClick={handleNavClick}
            type="htmla"
            className="text-fontBlue rounded-8 font-body bg-buttonBlue hover:bg-buttonBlueHover text-[15px] xl:text-navLinks transition-all duration-300 ease-in-out"
          />
        </div>
      </nav>
    </header>
  );
}
