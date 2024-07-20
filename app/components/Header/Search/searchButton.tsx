"use client";
import { useContext } from "react";
import Search from "./search";
import Container from "../../Container/container";
import { BackGroundGreyContext } from "../../ContextProvider/Provider";
import cx from "classnames";
export default function SearchButton() {
  const {
    isSearchOpen,
    setIsSearchOpen,
    setCurrentIndex,
    setGreyBackground,
    setShowLanguages,
    setShowLockLinks,
    setShowMobileNav,
  } = useContext(BackGroundGreyContext);
  const handleOpenSearch = () => {
    setIsSearchOpen((prev) => !prev);
    setCurrentIndex(-1);
    setGreyBackground("App");
    setShowMobileNav(false);
    setShowLanguages(false);
    setShowLockLinks(false);
  };

  return (
    <>
      <button
        aria-label="hnappur sem til að opna leitarglugga"
        onClick={handleOpenSearch}
        className={cx(
          "rounded-24 group p-fluid-12 self-center h-fit w-fit border-[1px] border-grey hover:bg-backgroundBlue transition-all duration-300 ease-in-out ",
          {
            ["bg-pureWhite"]: !isSearchOpen,
            ["bg-backgroundBlue"]: isSearchOpen,
          }
        )}
      >
        <svg
          className={cx("group-hover:text-pureWhite text-backgroundBlue", {
            ["text-pureWhite"]: isSearchOpen,
          })}
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.6266 11.5128L16 14.8855L14.8855 16L11.5128 12.6266C10.2579 13.6325 8.69706 14.1797 7.08871 14.1774C3.17574 14.1774 0 11.0017 0 7.08871C0 3.17574 3.17574 0 7.08871 0C11.0017 0 14.1774 3.17574 14.1774 7.08871C14.1797 8.69706 13.6325 10.2579 12.6266 11.5128ZM11.0466 10.9284C12.0462 9.90047 12.6044 8.52254 12.6021 7.08871C12.6021 4.04293 10.1345 1.57527 7.08871 1.57527C4.04293 1.57527 1.57527 4.04293 1.57527 7.08871C1.57527 10.1345 4.04293 12.6021 7.08871 12.6021C8.52254 12.6044 9.90047 12.0462 10.9284 11.0466L11.0466 10.9284Z"
            fill="currentColor"
          />
        </svg>
      </button>
      {isSearchOpen ? (
        <Container className="fixed top-[80px] xs:top-[90px] xxxl:min-w-[2000px]  xxxl:m-auto xxxl:left-0 xxxl:right-0 bg-backgroundGrey left-0 max-h-[100vh] overflow-scroll min-h-[100vh] min-w-[100vw]">
          <button
            onClick={handleOpenSearch}
            className="bg-pureWhite hidden rounded-6 py-fluid-16 px-fluid-24 group hover:text-orange absolute top-32 right-container-88 text-bodyGrey font-body md:flex gap-6 transition-all duration-150 ease-in-out"
          >
            Loka leitarglugga
            <svg
              width="24"
              height="24"
              viewBox="0 0 23 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-bodyGrey group-hover:text-orange rotate-45 self-center transition-all duration-150 ease-in-out"
            >
              <path
                d="M20.4314 12.0003C20.4314 12.2845 20.3185 12.557 20.1175 12.758C19.9166 12.9589 19.6441 13.0718 19.3599 13.0718H12.5742V19.8575C12.5742 20.1417 12.4613 20.4142 12.2604 20.6151C12.0595 20.816 11.787 20.9289 11.5028 20.9289C11.2186 20.9289 10.9461 20.816 10.7452 20.6151C10.5442 20.4142 10.4314 20.1417 10.4314 19.8575V13.0718H3.64565C3.36149 13.0718 3.08896 12.9589 2.88803 12.758C2.6871 12.557 2.57422 12.2845 2.57422 12.0003C2.57422 11.7162 2.6871 11.4437 2.88803 11.2427C3.08896 11.0418 3.36149 10.9289 3.64565 10.9289H10.4314V4.14321C10.4314 3.85905 10.5442 3.58652 10.7452 3.38559C10.9461 3.18466 11.2186 3.07178 11.5028 3.07178C11.787 3.07178 12.0595 3.18466 12.2604 3.38559C12.4613 3.58652 12.5742 3.85905 12.5742 4.14321V10.9289H19.3599C19.6441 10.9289 19.9166 11.0418 20.1175 11.2427C20.3185 11.4437 20.4314 11.7162 20.4314 12.0003Z"
                fill="currentColor"
              />
            </svg>
          </button>
          <Search
            isSearchOpen={isSearchOpen}
            setIsSearchOpen={setIsSearchOpen}
          />
        </Container>
      ) : (
        ""
      )}
    </>
  );
}
