"use client";
import { useState } from "react";
import { PrismicNextLink } from "@prismicio/next";
import { HeaderDocumentData } from "@/prismicio-types";
import { KeyTextField, LinkField, ImageField } from "@prismicio/client";
import { FadeInSide } from "../../FadeIn/fadeInSide";
import ArrowRight from "../../../../public/icons/ArrowRight.svg";
import Chevron from "../../../icons/chevronUp.svg";
import Image from "next/image";
import cx from "classnames";
interface navGroups {
  title: KeyTextField;
  navElements: object;
  headline: KeyTextField;
  paragraph: KeyTextField;
}

export default function NavGroupMobile({
  content,
  navGroupCurrentIndex,
  setNavGroupCurrentIndex,
  toggleShowNav,
}: {
  toggleShowNav: () => void;
  content: HeaderDocumentData;
  navGroupCurrentIndex: number;
  setNavGroupCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
}) {
  const [showExtraNav, setShowExtraNav] = useState<boolean>(true);

  const showNavGroup = (i: number) => {
    setShowExtraNav((prevShowExtraNav) =>
      navGroupCurrentIndex === i ? !prevShowExtraNav : true
    );
    setNavGroupCurrentIndex(i);
  };

  const headerNavGroups: navGroups[] = [
    {
      title: content.link_group_1_name,
      navElements: content.link_group_1,
      headline: content.link_group_1_title,
      paragraph: content.link_group_1_paragraph,
    },
    {
      title: content.link_group_2_name,
      navElements: content.link_group_2,
      headline: content.link_group_2_title,
      paragraph: content.link_group_2_paragraph,
    },
    {
      title: content.link_group_3_name,
      navElements: content.link_group_3,
      headline: content.link_group_3_title,
      paragraph: content.link_group_3_paragraph,
    },
    {
      title: content.link_group_4_name,
      navElements: content.link_group_4,
      headline: content.link_group_4_title,
      paragraph: content.link_group_4_paragraph,
    },
  ];

  return (
    <>
      {headerNavGroups?.map((group, i) => {
        const navGroupTitleDelay = i / 10;
        return (
          <div key={i} className="flex w-fill  text-headlineColor self-start ">
            <button
              aria-label={`Takki til að sjá hlekki fyrir ${group.title}`}
              className="flex min-w-fill justify-between  group  pb-2 text-navLinksMobile transition-all duration-300 ease-in-out "
              onClick={() => showNavGroup(i)}
            >
              <span> {group.title}</span>
              <Image
                alt="ör til hægri"
                className="self-center filterHeadlineColor transition-all  filter  duration-150 ease-in-out"
                src={ArrowRight}
              />
            </button>

            <div
              className={cx(
                " md:hidden absolute top-20 px-fluid-40 py-fluid-56 xs:py-fluid-72 xs:px-fluid-56  overflow-hidden z-20 flex flex-col  bg-backgroundGrey overflow-y-auto h-fill min-h-[100vh] w-fill transform duration-500 ease-in-out",
                {
                  ["ml-[110%]"]: navGroupCurrentIndex != i,
                  ["-ml-fluid-40"]: navGroupCurrentIndex === i,
                }
              )}
            >
              <button
                className="flex self-start text-bodyGrey text-sm absolute top-0"
                onClick={() => setNavGroupCurrentIndex(-1)}
              >
                Valmynd
                <Chevron className="self-center h-16 rotate-[-90deg] filterHeadlineBlue transition-all  filter  duration-150 ease-in-out" />
                {group.title}
              </button>
              <ul className="flex flex-col gap-fluid-32 ">
                {Object.values(group.navElements).map(
                  (
                    el: {
                      link_text: KeyTextField;
                      link: LinkField;
                    },
                    i: number
                  ) => {
                    const navGroupItemDelay = i / 10;
                    return (
                      <li
                        className="min-w-fit group whitespace-nowrap flex gap-12"
                        key={i}
                      >
                        <PrismicNextLink
                          aria-label={`Hlekkur á ${el.link_text}`}
                          field={el.link}
                          onClick={toggleShowNav}
                          className=" transition-all  text-navLinksMobile group-hover:text-orange duration-300 w-fit ease-in-out "
                        >
                          {el.link_text}
                        </PrismicNextLink>
                      </li>
                    );
                  }
                )}
              </ul>
            </div>
          </div>
        );
      })}
    </>
  );
}
