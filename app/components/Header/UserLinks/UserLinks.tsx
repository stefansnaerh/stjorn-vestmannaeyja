"use client";
import { useRef, useContext, useState } from "react";
import cx from "classnames";
import useOnClickOutside from "../../../utils/useOnClickOutside";
import styles from "../header.module.css";
import SearchButton from "../Search/searchButton";
import { LanguageSwitcher } from "../../googleTranslate/langSwitcher";
import { BackGroundGreyContext } from "../../ContextProvider/Provider";
export default function UserLinks() {
  // current element represents the dropdown for user links and languages. 1 is for userlinks and 2 is for languages
  const [currentElement, setCurrentElement] = useState<number>(0);
  const cardElement = useRef<HTMLDivElement>(null);
  const {
    setGreyBackground,
    setIsSearchOpen,
    setCurrentIndex,
    setShowNav,
    showLockLinks,
    setShowLockLinks,
    greyBackground,
    showLanguages,
    setShowLanguages,
    setShowMobileNav,
  } = useContext(BackGroundGreyContext);

  const toggleShowLockLinks = (i: number) => {
    setShowLockLinks((prev) => !prev);
    setShowLanguages(false);
    setShowNav(false);
    setIsSearchOpen(false);
    setCurrentIndex(-1);
    setShowMobileNav(false);
    if (currentElement !== i) {
      setCurrentElement(i);
      setGreyBackground("appDisabled");
    } else {
      setGreyBackground("App");
      setCurrentElement(0);
    }
  };
  const toggleShowLanguages = (i: number) => {
    setShowLanguages((prev) => !prev);
    setIsSearchOpen(false);
    setShowNav(false);
    setShowLockLinks(false);
    setCurrentIndex(-1);
    setShowMobileNav(false);
    if (currentElement !== i) {
      setCurrentElement(i);
      setGreyBackground("appDisabled");
    } else {
      setGreyBackground("App");
      setCurrentElement(0);
    }
  };
  useOnClickOutside(cardElement, () => {
    if (!cardElement) return;
    setGreyBackground("App");
    setShowLockLinks(false);
    setShowLanguages(false);
    setCurrentElement(0);
  });
  return (
    <div className=" flex self-center gap-fluid-12 xs:gap-fluid-24 ">
      <button
        aria-label="Hnappur sem sýnir valmynd fyrir mínar síður og orlofsvef"
        onClick={() => toggleShowLockLinks(1)}
        className={cx(
          "rounded-24 group hover:bg-backgroundBlue  p-fluid-12 self-center h-fit w-fit border-[1px] border-grey transition-all duration-300 ease-in-out",
          {
            ["bg-backgroundBlue"]: showLockLinks,
            ["bg-pureWhite"]: !showLockLinks,
          }
        )}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          className={cx("group-hover:text-pureWhite ", {
            ["text-pureWhite"]: showLockLinks,
            ["text-backgroundBlue"]: !showLockLinks,
          })}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.6667 7.33337H3.33333C2.59695 7.33337 2 7.93033 2 8.66671V13.3334C2 14.0698 2.59695 14.6667 3.33333 14.6667H12.6667C13.403 14.6667 14 14.0698 14 13.3334V8.66671C14 7.93033 13.403 7.33337 12.6667 7.33337Z"
            stroke="currentColor"
            strokeWidth="1.33333"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4.66602 7.33331V4.66665C4.66519 3.84001 4.97154 3.04256 5.5256 2.42909C6.07966 1.81563 6.8419 1.42992 7.66435 1.34684C8.4868 1.26376 9.31078 1.48925 9.97633 1.97952C10.6419 2.4698 11.1015 3.18988 11.266 3.99998"
            stroke="currentColor"
            strokeWidth="1.33333"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <button
        aria-label="Hnappur sem sýnir tungumálavalmynd"
        onClick={() => toggleShowLanguages(2)}
        className={cx(
          "rounded-24 group hover:bg-backgroundBlue  p-fluid-12 self-center h-fit w-fit border-[1px] border-grey transition-all duration-300 ease-in-out",
          {
            ["bg-backgroundBlue"]: showLanguages,
            ["bg-pureWhite"]: !showLanguages,
          }
        )}
      >
        <svg
          width="16"
          height="16"
          className={cx("group-hover:text-pureWhite ", {
            ["text-pureWhite"]: showLanguages,
            ["text-backgroundBlue"]: !showLanguages,
          })}
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.6673 8.00004C14.6673 11.6819 11.6825 14.6667 8.00065 14.6667M14.6673 8.00004C14.6673 4.31814 11.6825 1.33337 8.00065 1.33337M14.6673 8.00004H1.33398M8.00065 14.6667C4.31875 14.6667 1.33398 11.6819 1.33398 8.00004M8.00065 14.6667C9.66817 12.8411 10.6158 10.472 10.6673 8.00004C10.6158 5.52806 9.66817 3.15894 8.00065 1.33337M8.00065 14.6667C6.33313 12.8411 5.38548 10.472 5.33398 8.00004C5.38548 5.52806 6.33313 3.15894 8.00065 1.33337M1.33398 8.00004C1.33398 4.31814 4.31875 1.33337 8.00065 1.33337"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <SearchButton />

      {currentElement === 1 ? (
        <div
          ref={cardElement}
          className={
            showLockLinks ? styles.lockDropdownShow : styles.lockDropdown
          }
        >
          <a
            className="flex gap-fluid-16 text-backgroundBlue group hover:text-orange transition-all duration-300 ease-in-out"
            aria-label="hlekkur á mínar síður"
            href="https://innskraning.island.is/?id=thjonusta.stf.is"
            target="_blank"
          >
            <svg
              className="text-backgroundBlue self-center group-hover:text-orange transition-all duration-300 ease-in-out"
              width="20"
              height="20"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.1663 14.875V13.4583C14.1663 12.7069 13.8678 11.9862 13.3365 11.4549C12.8051 10.9235 12.0845 10.625 11.333 10.625H5.66634C4.91489 10.625 4.19422 10.9235 3.66287 11.4549C3.13152 11.9862 2.83301 12.7069 2.83301 13.4583V14.875"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.50033 7.79167C10.0651 7.79167 11.3337 6.52314 11.3337 4.95833C11.3337 3.39353 10.0651 2.125 8.50033 2.125C6.93552 2.125 5.66699 3.39353 5.66699 4.95833C5.66699 6.52314 6.93552 7.79167 8.50033 7.79167Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Mínar síður
          </a>
          <a
            className="flex gap-fluid-16 text-backgroundBlue group hover:text-orange transition-all duration-300 ease-in-out"
            aria-label="hlekkur á orlofsvef"
            href="https://orlof.is/vssi/"
            target="_blank"
          >
            <svg
              className="text-backgroundBlue self-center group-hover:text-orange transition-all duration-300 ease-in-out"
              width="20"
              height="20"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_230_296)">
                <path
                  d="M2.29688 6.1873L8.29688 1.52063L14.2969 6.1873V13.5206C14.2969 13.8743 14.1564 14.2134 13.9064 14.4634C13.6563 14.7135 13.3172 14.854 12.9635 14.854H3.63021C3.27659 14.854 2.93745 14.7135 2.6874 14.4634C2.43735 14.2134 2.29688 13.8743 2.29688 13.5206V6.1873Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6.29688 14.8539V8.18726H10.2969V14.8539"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_230_296">
                  <rect
                    width="16"
                    height="16"
                    fill="white"
                    transform="translate(0.296875 0.187256)"
                  />
                </clipPath>
              </defs>
            </svg>
            Orlofsvefur
          </a>
        </div>
      ) : (
        ""
      )}

      {currentElement === 2 ? (
        <div
          ref={cardElement}
          className={
            showLanguages ? styles.lockDropdownShow : styles.lockDropdown
          }
        >
          <LanguageSwitcher />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
