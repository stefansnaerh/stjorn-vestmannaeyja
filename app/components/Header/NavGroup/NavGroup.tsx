"use client";
import { useRef, useContext } from "react";
import { PrismicNextLink } from "@prismicio/next";
import { HeaderDocumentData } from "@/prismicio-types";
import { FadeIn } from "../../FadeIn/fadeIn";
import { KeyTextField, LinkField, ImageField } from "@prismicio/client";
import { Dispatch, SetStateAction } from "react";
import styles from "../header.module.css";
import { PrismicNextImage } from "@prismicio/next";
import cx from "classnames";
import useOnClickOutside from "../../../utils/useOnClickOutside";
import { BackGroundGreyContext } from "../../ContextProvider/Provider";
interface navGroups {
  title: KeyTextField;
  navElements: object;
  headline: KeyTextField;
  paragraph: KeyTextField;
  image1: ImageField;
  image2: ImageField;
}

export default function NavGroup({
  content,
  showNav,
  setShowNav,
}: {
  content: HeaderDocumentData;
  showNav: boolean;
  setShowNav: Dispatch<SetStateAction<boolean>>;
}) {
  // const [grayBackground, setGrayBackground] = useState(false);

  const card = useRef<HTMLDivElement>(null);
  const {
    greyBackground,
    setGreyBackground,
    setIsSearchOpen,
    currentIndex,
    setCurrentIndex,
    setShowLockLinks,

    setShowLanguages,
  } = useContext(BackGroundGreyContext);

  const showNavGroup = (i: number) => {
    if (currentIndex === i) {
      setCurrentIndex(-1);
      setGreyBackground("App");
    } else {
      setCurrentIndex(i);
      setGreyBackground("appDisabled");
    }
    setShowNav((prevShowNav) => (currentIndex === i ? !prevShowNav : true));
    setIsSearchOpen(false);
    setShowLanguages(false);
    setShowLockLinks(false);
  };
  useOnClickOutside(card, () => {
    setGreyBackground("App");
    setShowNav(false);
    setCurrentIndex(-1);
  });

  const linkClick = () => {
    setShowNav(false);
    setCurrentIndex(-1);
    setGreyBackground("App");
  };

  const headerNavGroups: navGroups[] = [
    {
      title: content.link_group_1_name,
      navElements: content.link_group_1,
      headline: content.link_group_1_title,
      paragraph: content.link_group_1_paragraph,
      image1: content.link_group_1_image_1,
      image2: content.link_group_1_image_2,
    },
    {
      title: content.link_group_2_name,
      navElements: content.link_group_2,
      headline: content.link_group_2_title,
      paragraph: content.link_group_2_paragraph,
      image1: content.link_group_2_image_1,
      image2: content.link_group_2_image_2,
    },
    {
      title: content.link_group_3_name,
      navElements: content.link_group_3,
      headline: content.link_group_3_title,
      paragraph: content.link_group_3_paragraph,
      image1: content.link_group_3_image_1,
      image2: content.link_group_3_image_2,
    },
    {
      title: content.link_group_4_name,
      navElements: content.link_group_4,
      headline: content.link_group_4_title,
      paragraph: content.link_group_4_paragraph,
      image1: content.link_group_4_image_1,
      image2: content.link_group_4_image_2,
    },
  ];

  return (
    <>
      <div
        className={cx(" ", {
          ["appDisabled"]: !greyBackground,
        })}
      ></div>
      {headerNavGroups?.map((group, i) => {
        return (
          <div key={i} className="flex  self-center ">
            <div className="group">
              <button
                aria-label={`Takki til að sjá hlekki fyrir ${group.title}`}
                className={cx(
                  "flex group gap-6 pb-2 text-[15px] xl:text-navLinks transition-all duration-300 ease-in-out ",
                  {
                    ["text-purple"]: currentIndex === i,
                    ["text-headlineColor"]: currentIndex !== i,
                  }
                )}
                onClick={() => showNavGroup(i)}
              >
                {group.title}
              </button>
              <div
                className={cx(
                  " h-[3px] w-0 rounded-24 opacity-50 group-hover:w-fill group-hover:bg-purple focus:bg-buttonBlue focus:w-fill transition-all duration-300 ease-in-out",
                  {
                    ["w-fill"]: currentIndex === i,
                    ["w-0"]: currentIndex !== i,
                  }
                )}
              ></div>
            </div>
            {currentIndex === i ? (
              <div
                ref={card}
                className={
                  currentIndex === i && showNav
                    ? styles.dropdownMenuShow
                    : styles.dropdownMenu
                }
              >
                <ul className="flex flex-col  w-[37%]">
                  {Object.values(group.navElements).map(
                    (
                      el: {
                        link_text: KeyTextField;
                        link: LinkField;
                      },
                      i: number
                    ) => {
                      return (
                        <div key={`${i}${el.link_text}`}>
                          <li
                            className="min-w-fit w-fill flex gap-12 group whitespace-nowrap  "
                            key={i}
                          >
                            <PrismicNextLink
                              aria-label={`Hlekkur á ${el.link_text}`}
                              field={el.link}
                              onClick={linkClick}
                              className=" transition-all  flex justify-between gap-12  text-[15px] xl:text-navLinks py-[10px] px-fluid-18 group-hover:text-purple duration-300 w-fill ease-in-out border-[1px] rounded-6 hover:shadow-sm border-pureWhite hover:border-opacity-20 hover:border-greyInput"
                            >
                              {el.link_text}
                              {/* <div className="w-[16px]"></div> */}
                              <svg
                                width="100%"
                                height="100%"
                                viewBox="0 0 18 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="group-hover:w-[16px] text-purple transition-all w-0 filter self-end  duration-150 ease-in-out "
                              >
                                <path
                                  d="M14.2917 10.0493L15.1585 9.19348H13.9404H1.145C0.944498 9.19348 0.801088 9.13175 0.68047 9.01267C0.560197 8.89393 0.5 8.75538 0.5 8.56304C0.5 8.3707 0.560196 8.23216 0.680471 8.11342C0.801089 7.99433 0.944499 7.93261 1.145 7.93261H13.9404H15.1585L14.2917 7.0768L8.68116 1.53767C8.5792 1.43701 8.52329 1.31189 8.52909 1.11706L8.02931 1.10217L8.52909 1.11706C8.53517 0.913143 8.59964 0.775418 8.70978 0.666679C8.81636 0.561458 8.9527 0.5 9.16 0.5C9.3673 0.5 9.50364 0.561458 9.61022 0.666678L17.1672 8.12755L17.1833 8.14346L17.2008 8.15786C17.2428 8.19235 17.2701 8.23158 17.2881 8.28494C17.3182 8.37416 17.3334 8.46612 17.3334 8.56304C17.3334 8.66012 17.3182 8.74347 17.2916 8.81687C17.2727 8.86915 17.2366 8.93008 17.1672 8.99854L9.61022 16.4594C9.50364 16.5646 9.3673 16.6261 9.16 16.6261C8.9527 16.6261 8.81636 16.5646 8.70978 16.4594C8.59964 16.3507 8.53517 16.2129 8.52909 16.009C8.52329 15.8142 8.5792 15.6891 8.68116 15.5884L14.2917 10.0493Z"
                                  fill="currentColor"
                                  stroke="currentColor"
                                />
                              </svg>
                            </PrismicNextLink>
                          </li>
                        </div>
                      );
                    }
                  )}
                </ul>
                <div className="flex flex-col  gap-fluid-32 relative w-[63%]">
                  <FadeIn>
                    <h3 className="text-h3 font-headline w-fill ">
                      {group.headline}
                    </h3>
                  </FadeIn>
                  <FadeIn delay={0.1}>
                    <p className="text-[15px] xl:text-navLinks text-bodyGrey">
                      {group.paragraph}
                    </p>
                  </FadeIn>
                  <FadeIn
                    delay={0.2}
                    className="relative grid mt-fluid-12 grid-cols-2 gap-24  overflow-hidden "
                  >
                    <div className="relative   sm:pb-[70%]">
                      <PrismicNextImage
                        field={group.image1}
                        className="object-cover z-0 rounded-8 "
                        fill
                        alt={""}
                        sizes=""
                      />
                    </div>
                    {group.image2 && (
                      <div className="relative  sm:pb-[100%]">
                        <PrismicNextImage
                          field={group.image2}
                          className="object-cover z-0 rounded-8 "
                          fill
                          alt={""}
                          sizes=""
                        />
                      </div>
                    )}
                  </FadeIn>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        );
      })}
    </>
  );
}
