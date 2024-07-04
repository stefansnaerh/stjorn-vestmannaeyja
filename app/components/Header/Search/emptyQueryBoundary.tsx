import { ReactNode } from "react";
import { useInstantSearch } from "react-instantsearch";

export default function EmptyQueryBoundary({
  children,
  fallback,
}: {
  children: ReactNode;
  fallback: any;
}) {
  const { indexUiState } = useInstantSearch();

  if (!indexUiState.query || indexUiState.query.length < 2) {
    return (
      <>
        {fallback}
        <div hidden>{children}</div>
      </>
    );
  }

  return children;
}
