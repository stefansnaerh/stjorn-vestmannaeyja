"use client";

import { MouseEventHandler, ReactNode } from "react";
import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link";
import ArrowRight from "../../../public/icons/ArrowRight.svg";
import { KeyTextField, LinkField } from "@prismicio/client";
import Image from "next/image";
import cx from "classnames";

export default function Button({
  text,
  ariaLabel,
  className,
  noShadow,
  icon,
  arrow,
  type,
  href,
  aHref,
  onClick,
}: {
  text?: string | KeyTextField;
  ariaLabel?: string | undefined;
  className?: string;
  noShadow?: boolean;
  icon?: ReactNode;
  arrow?: boolean;
  type: "button" | "anchor" | "none" | "nextLink" | "htmla";
  href?: LinkField | null | undefined;
  aHref?: string;
  onClick?: MouseEventHandler<
    HTMLButtonElement | HTMLAnchorElement | undefined
  >;
}) {
  if (type === "button") {
    return (
      <button
        type="button"
        aria-label={ariaLabel}
        className={cx(
          `group flex pointer-events-auto  gap-8 py-fluid-16 px-fluid-24  h-fit w-fit text-navLinks font-body font-semiBold transition-all duration-300 ease-in-out ${className} `,
          {
            ["shadow-none"]: noShadow,
            ["shadow-button"]: !noShadow,
          }
        )}
        onClick={onClick}
      >
        {text}
        {icon ? <>{icon}</> : ""}
        {arrow ? (
          <Image
            alt="ör til hægri"
            className="w-[30px] filterWhite  rotate-90 transition-all filter  duration-300 ease-in-out self-center h-16  "
            src={ArrowRight}
          />
        ) : (
          ""
        )}
      </button>
    );
  } else if (type === "anchor") {
    return (
      <PrismicNextLink
        field={href}
        aria-label={ariaLabel}
        className={cx(
          `group flex pointer-events-auto  gap-8 py-fluid-16 px-fluid-24  h-fit w-fit text-navLinks font-body font-semiBold transition-all duration-300 ease-in-out ${className} `,
          {
            ["shadow-none"]: noShadow,
            ["shadow-button"]: !noShadow,
          }
        )}
        onClick={onClick}
      >
        {icon ? <>{icon}</> : ""}
        {text}
        {arrow ? (
          <Image
            alt="ör til hægri"
            className="w-[30px] filterWhite  transition-all filter  duration-300 ease-in-out self-center h-16  group-hover:pl-[14px]"
            src={ArrowRight}
          />
        ) : (
          ""
        )}
      </PrismicNextLink>
    );
  } else if (type === "none") {
    return (
      <div
        className={cx(
          `group flex pointer-events-auto  gap-8 py-fluid-16 px-fluid-24  h-fit w-fit text-navLinks font-body font-semiBold transition-all duration-300 ease-in-out ${className} `,
          {
            ["shadow-none"]: noShadow,
            ["shadow-button"]: !noShadow,
          }
        )}
      >
        {icon ? <>{icon}</> : ""}
        {text}
        {arrow ? (
          <ArrowRight className="self-center h-16 w-32 transition-all duration-300 group-hover:ml-16  " />
        ) : (
          ""
        )}
      </div>
    );
  } else if (type === "nextLink") {
    return (
      <Link
        href={`${aHref}`}
        aria-label={ariaLabel}
        className={cx(
          `group flex pointer-events-auto  gap-8 py-fluid-16 px-fluid-24  h-fit w-fit text-navLinks font-body font-semiBold transition-all duration-300 ease-in-out ${className} `,
          {
            ["shadow-none"]: noShadow,
            ["shadow-button"]: !noShadow,
          }
        )}
        onClick={onClick}
      >
        {icon ? <>{icon}</> : ""}
        {text}
        {arrow ? (
          <Image
            alt="ör til hægri"
            className="w-[30px] filterWhite  transition-all filter  duration-300 ease-in-out self-center h-16  group-hover:pl-[14px]"
            src={ArrowRight}
          />
        ) : (
          ""
        )}
      </Link>
    );
  } else if (type === "htmla") {
    return (
      <a
        href={`${aHref}`}
        target="_blank"
        className={cx(
          `group flex pointer-events-auto  gap-8 py-fluid-16 px-fluid-24  h-fit w-fit text-navLinks font-body font-semiBold transition-all duration-300 ease-in-out ${className} `,
          {
            ["shadow-none"]: noShadow,
            ["shadow-button"]: !noShadow,
          }
        )}
      >
        {icon ? <>{icon}</> : ""}
        {text}
        {arrow ? (
          <Image
            alt="ör til hægri"
            className="w-[30px] filterWhite  transition-all filter  duration-300 ease-in-out self-center h-16  group-hover:pl-[14px]"
            src={ArrowRight}
          />
        ) : (
          ""
        )}
      </a>
    );
  } else return;
}
