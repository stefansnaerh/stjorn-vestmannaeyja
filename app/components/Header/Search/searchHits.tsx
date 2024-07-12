import React from "react";
import {
  useHits,
  UseHitsProps,
  Highlight,
  useInstantSearch,
} from "react-instantsearch";
import Link from "next/link";

export default function SearchHits({
  hitsProps,
  setIsSearchOpen,
}: {
  hitsProps?: UseHitsProps;
  setIsSearchOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { hits, sendEvent } = useHits(hitsProps);
  const handleClick = (hit: any) => {
    setIsSearchOpen(false);
    sendEvent("click", hit, "Hit Clicked");
  };

  const { indexUiState } = useInstantSearch();
  return (
    <div className="text-black overflow-scroll  flex flex-col gap-fluid-40 h-fit pb-fluid-96 ">
      <p className="font-body text-bodyGrey">
        {hits.length} niðurstöður fyrir {` "${indexUiState.query}" `}
      </p>
      {hits.map((hit: any) => {
        return (
          <Link
            href={`${hit.url}`}
            className="md:max-w-[50%] group overflow-hidden bg-pureWhite  rounded-8 px-fluid-24 py-fluid-32 flex flex-col gap-fluid-32 transition-all duration-300 ease-in-out"
            key={hit.objectID}
            onClick={() => handleClick(hit)}
            onAuxClick={() => sendEvent("click", hit, "Hit Clicked")}
          >
            <div className="flex flex-col gap-fluid-12">
              <h3 className="font-headline group-hover:text-buttonBlue w-fit text-headlineColor text-h3 transition-all duration-300 ease-in-out">
                {hit.title}
              </h3>
              <p className="font-body text-bodyGrey text-navLinks line-clamp-3">
                {hit.paragraph}
                {/* <Highlight
                  className="font-body text-bodyGrey text-navLinks line-clamp-3"
                  attribute="paragraph"
                  hit={hit}
                /> */}
              </p>
            </div>
            <div className=" flex gap-8 group-hover:gap-16 transition-all duration-300 ease-in-out">
              <p className="self-center font-body text-bodyGrey group-hover:text-orange font-semiBold text-navLinks transition-all duration-300 ease-in-out">
                Sjá meira
              </p>
              <svg
                width="14"
                height="14"
                viewBox="0 0 18 18"
                className="self-center text-bodyGrey group-hover:text-orange transition-all duration-300 ease-in-out"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.2917 10.0493L15.1585 9.19348H13.9404H1.145C0.944498 9.19348 0.801088 9.13175 0.68047 9.01267C0.560197 8.89393 0.5 8.75538 0.5 8.56304C0.5 8.3707 0.560196 8.23216 0.680471 8.11342C0.801089 7.99433 0.944499 7.93261 1.145 7.93261H13.9404H15.1585L14.2917 7.0768L8.68116 1.53767C8.5792 1.43701 8.52329 1.31189 8.52909 1.11706L8.02931 1.10217L8.52909 1.11706C8.53517 0.913143 8.59964 0.775418 8.70978 0.666679C8.81636 0.561458 8.9527 0.5 9.16 0.5C9.3673 0.5 9.50364 0.561458 9.61022 0.666678L17.1672 8.12755L17.1833 8.14346L17.2008 8.15786C17.2428 8.19235 17.2701 8.23158 17.2881 8.28494C17.3182 8.37416 17.3334 8.46612 17.3334 8.56304C17.3334 8.66012 17.3182 8.74347 17.2916 8.81687C17.2727 8.86915 17.2366 8.93008 17.1672 8.99854L9.61022 16.4594C9.50364 16.5646 9.3673 16.6261 9.16 16.6261C8.9527 16.6261 8.81636 16.5646 8.70978 16.4594C8.59964 16.3507 8.53517 16.2129 8.52909 16.009C8.52329 15.8142 8.5792 15.6891 8.68116 15.5884L14.2917 10.0493Z"
                  fill="currentColor"
                  stroke="currentColor"
                />
              </svg>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
