import { useInstantSearch } from "react-instantsearch";
import { ReactNode } from "react";

export default function NoResultsBoundary({
  children,
  fallback,
}: {
  children: ReactNode;
  fallback: any;
}) {
  const { results } = useInstantSearch();
  const { indexUiState } = useInstantSearch();

  // The `__isArtificial` flag makes sure not to display the No Results message
  // when no hits have been returned.

  if (!results.__isArtificial && results.nbHits === 0 && indexUiState.query) {
    return (
      <>
        {fallback}
        <div hidden>{children}</div>
        <p className="font-body text-bodyGrey">
          Það fundust því miður engar niðurstöður fyrir{" "}
          <q>{indexUiState.query}</q>
        </p>
      </>
    );
  }

  return children;
}
