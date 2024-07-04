"use client";
import { MultipleQueriesQuery } from "@algolia/client-search";
import { InstantSearch } from "react-instantsearch";
import algoliasearch from "algoliasearch/lite";
import CustomSearchBox from "./searchBox";
import SearchHits from "./searchHits";
import EmptyQueryBoundary from "./emptyQueryBoundary";
import NoResultsBoundary from "./noResults";

export default function Search({
  isSearchOpen,
  setIsSearchOpen,
}: {
  isSearchOpen: boolean;
  setIsSearchOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const algoliaClient = algoliasearch(
    process.env.NEXT_PUBLIC_ALGOLIA_APPLICATION_ID || "default_app_id",
    process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_ONLY_API_KEY || "default_api_key"
  );
  type RequestType = {
    params: any;
    // Add other properties if necessary
  };

  const searchClient = {
    ...algoliaClient,
    search<TObject>(requests: readonly MultipleQueriesQuery[]) {
      if (requests.every(({ params }) => !params?.query)) {
        return Promise.resolve({
          results: requests.map(() => ({
            hits: [],
            nbHits: 0,
            nbPages: 0,
            page: 0,
            processingTimeMS: 0,
            hitsPerPage: 0,
            exhaustiveNbHits: false,
            query: "",
            params: "",
          })),
        });
      }

      return algoliaClient.search<TObject>(requests);
    },
  };

  return (
    <InstantSearch
      future={{ preserveSharedStateOnUnmount: true }}
      searchClient={searchClient}
      indexName="stf_website"
    >
      <div className="self-start flex flex-col gap-fluid-56 overflow-scroll w-fill">
        <CustomSearchBox />
        <NoResultsBoundary fallback={null}>
          <EmptyQueryBoundary fallback={null}>
            <SearchHits setIsSearchOpen={setIsSearchOpen} />
          </EmptyQueryBoundary>
        </NoResultsBoundary>
      </div>
    </InstantSearch>
  );
}
